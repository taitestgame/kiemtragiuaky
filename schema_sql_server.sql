-- ============================================================================
-- HỆ THỐNG THI TOEIC READING - CƠ SỞ DỮ LIỆU MICROSOFT SQL SERVER
-- Tương thích với ASP.NET Boilerplate (ABP Framework) & Entity Framework Core
-- ============================================================================

USE [master];
GO

IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'ToeicExamDb')
BEGIN
    CREATE DATABASE [ToeicExamDb]
    COLLATE Vietnamese_CI_AS;
END
GO

USE [ToeicExamDb];
GO

-- 1. Bảng Đề thi (Exams)
IF OBJECT_ID('dbo.Exams', 'U') IS NOT NULL DROP TABLE dbo.Exams;
CREATE TABLE dbo.Exams (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Code NVARCHAR(50) NOT NULL UNIQUE,          -- Ví dụ: 'Reading v02'
    Title NVARCHAR(255) NOT NULL,               -- 'TOEIC Reading Test - Reading v02'
    Description NVARCHAR(MAX) NULL,
    DurationMinutes INT NOT NULL DEFAULT 75,    -- Thời gian làm bài chuẩn TOEIC (75 phút)
    TotalQuestions INT NOT NULL DEFAULT 100,    -- 100 câu hỏi (101 - 200)
    IsPublished BIT NOT NULL DEFAULT 0,         -- 0: Bản nháp, 1: Đã kích hoạt cho phép thi
    PublishedTime DATETIME2 NULL,               -- Thời điểm xuất bản
    CreationTime DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CreatorUserId BIGINT NULL,                  -- Id giảng viên tạo đề
    IsDeleted BIT NOT NULL DEFAULT 0            -- Soft delete (chuẩn ABP)
);
GO

-- 2. Bảng Nhóm câu hỏi / Đoạn văn (QuestionGroups) cho Part 6 & Part 7
IF OBJECT_ID('dbo.QuestionGroups', 'U') IS NOT NULL DROP TABLE dbo.QuestionGroups;
CREATE TABLE dbo.QuestionGroups (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    ExamId INT NOT NULL,
    PartNumber INT NOT NULL,                    -- 5: Incomplete Sentences, 6: Text Completion, 7: Reading Comprehension
    GroupCode NVARCHAR(50) NOT NULL,            -- Ví dụ: '131-134', '147-148', 'P5-SINGLE'
    PassageTitle NVARCHAR(500) NULL,            -- 'Questions 131-134 refer to the following advertisement.'
    PassageText NVARCHAR(MAX) NULL,             -- Nội dung bài đọc (Text)
    PassageImageUrl NVARCHAR(500) NULL,         -- Đường dẫn hình ảnh bài đọc (nếu có)
    OrderIndex INT NOT NULL DEFAULT 0,
    CanShuffleQuestions BIT NOT NULL DEFAULT 0, -- 1: Cho phép đảo thứ tự câu hỏi (Part 5), 0: Không đảo (Part 6, 7)
    CONSTRAINT FK_QuestionGroups_Exams FOREIGN KEY (ExamId) REFERENCES dbo.Exams(Id) ON DELETE CASCADE
);
GO

-- 3. Bảng Câu hỏi (Questions)
IF OBJECT_ID('dbo.Questions', 'U') IS NOT NULL DROP TABLE dbo.Questions;
CREATE TABLE dbo.Questions (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    ExamId INT NOT NULL,
    GroupId INT NOT NULL,
    QuestionNumber INT NOT NULL,                -- Thứ tự chuẩn TOEIC: 101 đến 200
    QuestionText NVARCHAR(MAX) NOT NULL,        -- Nội dung câu hỏi
    Explanation NVARCHAR(MAX) NULL,             -- Lời giải thích / Gợi ý đáp án (HINT)
    CanShuffleAnswers BIT NOT NULL DEFAULT 1,   -- 1: Cho phép đảo đáp án A, B, C, D
    OrderIndex INT NOT NULL DEFAULT 0,
    CONSTRAINT FK_Questions_Exams FOREIGN KEY (ExamId) REFERENCES dbo.Exams(Id),
    CONSTRAINT FK_Questions_Groups FOREIGN KEY (GroupId) REFERENCES dbo.QuestionGroups(Id) ON DELETE CASCADE
);
GO

-- 4. Bảng Các lựa chọn / Đáp án (Answers)
IF OBJECT_ID('dbo.Answers', 'U') IS NOT NULL DROP TABLE dbo.Answers;
CREATE TABLE dbo.Answers (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    QuestionId INT NOT NULL,
    OptionLabel CHAR(1) NOT NULL,               -- 'A', 'B', 'C', 'D'
    OptionText NVARCHAR(MAX) NOT NULL,          -- Nội dung lựa chọn
    IsCorrect BIT NOT NULL DEFAULT 0,           -- 1: Đáp án đúng, 0: Đáp án sai
    OrderIndex INT NOT NULL DEFAULT 0,
    CONSTRAINT FK_Answers_Questions FOREIGN KEY (QuestionId) REFERENCES dbo.Questions(Id) ON DELETE CASCADE
);
GO

-- 5. Bảng Phiên làm bài của thí sinh (ExamAttempts)
IF OBJECT_ID('dbo.ExamAttempts', 'U') IS NOT NULL DROP TABLE dbo.ExamAttempts;
CREATE TABLE dbo.ExamAttempts (
    Id BIGINT IDENTITY(1,1) PRIMARY KEY,
    ExamId INT NOT NULL,
    UserId BIGINT NOT NULL,                     -- Mã người học (liên kết với AbpUsers)
    StudentName NVARCHAR(150) NULL,             -- Lưu cache tên sinh viên
    StartTime DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    EndTime DATETIME2 NULL,                     -- Thời điểm nộp bài
    TimeSpentSeconds INT NULL,                  -- Thời gian thực tế làm bài (giây)
    CorrectCount INT NOT NULL DEFAULT 0,        -- Số câu đúng
    WrongCount INT NOT NULL DEFAULT 0,          -- Số câu sai
    SkippedCount INT NOT NULL DEFAULT 0,        -- Số câu chưa làm
    Score INT NOT NULL DEFAULT 0,               -- Điểm TOEIC quy đổi (5 - 495)
    IsSubmitted BIT NOT NULL DEFAULT 0,         -- 0: Đang làm dở, 1: Đã nộp
    CONSTRAINT FK_ExamAttempts_Exams FOREIGN KEY (ExamId) REFERENCES dbo.Exams(Id)
);
GO

-- 6. Bảng Chi tiết câu trả lời của thí sinh (AttemptAnswers)
IF OBJECT_ID('dbo.AttemptAnswers', 'U') IS NOT NULL DROP TABLE dbo.AttemptAnswers;
CREATE TABLE dbo.AttemptAnswers (
    Id BIGINT IDENTITY(1,1) PRIMARY KEY,
    AttemptId BIGINT NOT NULL,
    QuestionId INT NOT NULL,
    SelectedAnswerId INT NULL,                  -- Đáp án người dùng chọn (NULL nếu bỏ qua)
    IsCorrect BIT NOT NULL DEFAULT 0,           -- Kết quả chấm điểm tự động
    AnsweredTime DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    CONSTRAINT FK_AttemptAnswers_Attempts FOREIGN KEY (AttemptId) REFERENCES dbo.ExamAttempts(Id) ON DELETE CASCADE,
    CONSTRAINT FK_AttemptAnswers_Questions FOREIGN KEY (QuestionId) REFERENCES dbo.Questions(Id),
    CONSTRAINT FK_AttemptAnswers_SelectedAnswer FOREIGN KEY (SelectedAnswerId) REFERENCES dbo.Answers(Id)
);
GO

-- ============================================================================
-- TẠO CHỈ MỤC (INDEXES) TỐI ƯU HIỆU NĂNG TRUY VẤN
-- ============================================================================
CREATE INDEX IX_QuestionGroups_ExamId ON dbo.QuestionGroups(ExamId);
CREATE INDEX IX_Questions_ExamId ON dbo.Questions(ExamId);
CREATE INDEX IX_Questions_GroupId ON dbo.Questions(GroupId);
CREATE INDEX IX_Answers_QuestionId ON dbo.Answers(QuestionId);
CREATE INDEX IX_ExamAttempts_UserId ON dbo.ExamAttempts(UserId);
CREATE INDEX IX_ExamAttempts_ExamId ON dbo.ExamAttempts(ExamId);
CREATE INDEX IX_AttemptAnswers_AttemptId ON dbo.AttemptAnswers(AttemptId);
GO

-- ============================================================================
-- STORED PROCEDURE: TỰ ĐỘNG CHẤM ĐIỂM BÀI THI (CalculateExamScore)
-- ============================================================================
IF OBJECT_ID('dbo.sp_CalculateExamScore', 'P') IS NOT NULL DROP PROCEDURE dbo.sp_CalculateExamScore;
GO
CREATE PROCEDURE dbo.sp_CalculateExamScore
    @AttemptId BIGINT
AS
BEGIN
    SET NOCOUNT ON;

    -- 1. Cập nhật tính đúng sai cho từng câu hỏi trong Attempt
    UPDATE aa
    SET aa.IsCorrect = CASE WHEN a.IsCorrect = 1 THEN 1 ELSE 0 END
    FROM dbo.AttemptAnswers aa
    LEFT JOIN dbo.Answers a ON aa.SelectedAnswerId = a.Id
    WHERE aa.AttemptId = @AttemptId;

    -- 2. Đếm số câu đúng, sai, bỏ qua
    DECLARE @CorrectCount INT = 0;
    DECLARE @WrongCount INT = 0;
    DECLARE @SkippedCount INT = 0;
    DECLARE @TotalQuestions INT = 100;

    SELECT 
        @CorrectCount = SUM(CASE WHEN aa.IsCorrect = 1 THEN 1 ELSE 0 END),
        @WrongCount = SUM(CASE WHEN aa.SelectedAnswerId IS NOT NULL AND aa.IsCorrect = 0 THEN 1 ELSE 0 END),
        @SkippedCount = SUM(CASE WHEN aa.SelectedAnswerId IS NULL THEN 1 ELSE 0 END)
    FROM dbo.AttemptAnswers aa
    WHERE aa.AttemptId = @AttemptId;

    -- 3. Quy đổi sang thang điểm TOEIC Reading chuẩn (5 - 495)
    DECLARE @ToeicScore INT = 5;
    IF @CorrectCount >= 95 SET @ToeicScore = 495
    ELSE IF @CorrectCount >= 90 SET @ToeicScore = 470
    ELSE IF @CorrectCount >= 85 SET @ToeicScore = 445
    ELSE IF @CorrectCount >= 80 SET @ToeicScore = 415
    ELSE IF @CorrectCount >= 75 SET @ToeicScore = 385
    ELSE IF @CorrectCount >= 70 SET @ToeicScore = 355
    ELSE IF @CorrectCount >= 60 SET @ToeicScore = 300
    ELSE IF @CorrectCount >= 50 SET @ToeicScore = 245
    ELSE IF @CorrectCount >= 40 SET @ToeicScore = 190
    ELSE IF @CorrectCount >= 30 SET @ToeicScore = 135
    ELSE IF @CorrectCount >= 20 SET @ToeicScore = 80
    ELSE SET @ToeicScore = @CorrectCount * 5;

    -- 4. Cập nhật vào bản ghi ExamAttempts
    UPDATE dbo.ExamAttempts
    SET CorrectCount = @CorrectCount,
        WrongCount = @WrongCount,
        SkippedCount = @SkippedCount,
        Score = @ToeicScore,
        EndTime = GETUTCDATE(),
        TimeSpentSeconds = DATEDIFF(SECOND, StartTime, GETUTCDATE()),
        IsSubmitted = 1
    WHERE Id = @AttemptId;

    -- 5. Trả về kết quả tóm tắt
    SELECT 
        Id AS AttemptId,
        ExamId,
        CorrectCount,
        WrongCount,
        SkippedCount,
        Score AS ToeicScore,
        TimeSpentSeconds,
        IsSubmitted
    FROM dbo.ExamAttempts
    WHERE Id = @AttemptId;
END
GO

-- ============================================================================
-- STORED PROCEDURE: THỐNG KÊ TOP 10 CÂU HỎI NHIỀU SINH VIÊN LÀM SAI NHẤT
-- ============================================================================
IF OBJECT_ID('dbo.sp_GetTop10DifficultQuestions', 'P') IS NOT NULL DROP PROCEDURE dbo.sp_GetTop10DifficultQuestions;
GO
CREATE PROCEDURE dbo.sp_GetTop10DifficultQuestions
    @ExamId INT
AS
BEGIN
    SET NOCOUNT ON;

    SELECT TOP 10
        q.Id AS QuestionId,
        q.QuestionNumber,
        q.QuestionText,
        q.Explanation,
        COUNT(aa.Id) AS TotalAttempts,
        SUM(CASE WHEN aa.IsCorrect = 0 OR aa.SelectedAnswerId IS NULL THEN 1 ELSE 0 END) AS IncorrectCount,
        CAST(ROUND(SUM(CASE WHEN aa.IsCorrect = 0 OR aa.SelectedAnswerId IS NULL THEN 1.0 ELSE 0.0 END) * 100.0 / COUNT(aa.Id), 2) AS DECIMAL(5,2)) AS ErrorRatePercentage
    FROM dbo.Questions q
    JOIN dbo.AttemptAnswers aa ON q.Id = aa.QuestionId
    JOIN dbo.ExamAttempts ea ON aa.AttemptId = ea.Id
    WHERE ea.ExamId = @ExamId AND ea.IsSubmitted = 1
    GROUP BY q.Id, q.QuestionNumber, q.QuestionText, q.Explanation
    ORDER BY IncorrectCount DESC, ErrorRatePercentage DESC;
END
GO
