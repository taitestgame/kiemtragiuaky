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

-- ============================================================================
-- SEED DATA: NẠP DỮ LIỆU MẪU ĐỀ THI READING V02 & 120 LƯỢT THI THỰC TẾ
-- ============================================================================
SET NOCOUNT ON;
GO

-- 1. Nạp Đề thi Reading v02
IF NOT EXISTS (SELECT 1 FROM dbo.Exams WHERE ExamCode = 'Reading v02')
BEGIN
    SET IDENTITY_INSERT dbo.Exams ON;
    INSERT INTO dbo.Exams (Id, ExamCode, Title, Description, DurationMinutes, TotalQuestions, IsPublished, IsDeleted)
    VALUES (1, 'Reading v02', N'TOEIC Reading Test - Reading v02', N'Đề thi giữa kỳ môn học (Mã đề v02). Bao gồm 100 câu hỏi: Part 5 (101-130), Part 6 (131-146), Part 7 (147-200).', 75, 100, 1, 0);
    SET IDENTITY_INSERT dbo.Exams OFF;
END
GO

-- 2. Nạp Nhóm câu hỏi (Part 5, 6, 7)
IF NOT EXISTS (SELECT 1 FROM dbo.QuestionGroups WHERE ExamId = 1)
BEGIN
    SET IDENTITY_INSERT dbo.QuestionGroups ON;
    INSERT INTO dbo.QuestionGroups (Id, ExamId, PartNumber, GroupType, PassageText, OrderIndex)
    VALUES 
      (1, 1, 5, 'IncompleteSentences', N'Part 5: Incomplete Sentences (Câu 101 - 130)', 1),
      (2, 1, 6, 'TextCompletion', N'Part 6: Text Completion (Câu 131 - 146)', 2),
      (3, 1, 7, 'ReadingComprehension', N'Part 7: Reading Comprehension (Câu 147 - 200)', 3);
    SET IDENTITY_INSERT dbo.QuestionGroups OFF;
END
GO

-- 3. Nạp 100 câu hỏi chuẩn từ Reading v02.docx
IF NOT EXISTS (SELECT 1 FROM dbo.Questions WHERE ExamId = 1)
BEGIN
    SET IDENTITY_INSERT dbo.Questions ON;
    INSERT INTO dbo.Questions (Id, ExamId, GroupId, QuestionNumber, QuestionText, Explanation, CanShuffleAnswers, OrderIndex)
    VALUES
      (1, 1, 1, 101, N'Ms. Carpenter will be attending the conference with ------- marketing team.', N'Cần một tính từ sở hữu đứng trước cụm danh từ ''marketing team''. Đại từ sở hữu ''her'' là đáp án đúng.', 1, 1),
      (2, 1, 1, 102, N'------- the last ten years, Bay City''s population has grown by about 27 percent.', N'Cụm ''During the last ten years'' (Trong suốt 10 năm qua) chỉ khoảng thời gian xảy ra hành động chia thì hiện tại hoàn thành.', 1, 2),
      (3, 1, 1, 103, N'Please congratulate Alan Schmit, ------- of the Leadership Award in Nursing at Knoll Hospital.', N'Cần một danh từ chỉ người làm đồng vị ngữ giải thích cho Alan Schmit. ''Winner'' (người chiến thắng) là đáp án đúng.', 1, 3),
      (4, 1, 1, 104, N'Ireland''s largest software producer will ------- be opening a large facility in Cork.', N'Trạng từ ''soon'' (sớm) đứng giữa trợ động từ ''will'' và động từ ''be opening'' để diễn tả một sự việc sắp xảy ra trong tương lai.', 1, 4),
      (5, 1, 1, 105, N'Ashburn Bank''s online service has been in high demand -------.', N'Trạng từ ''lately'' (gần đây) là dấu hiệu nhận biết của thì hiện tại hoàn thành (has been).', 1, 5),
      (6, 1, 1, 106, N'The ------- of videos to electronic press releases can help companies showcase their products.', N'Cụm từ ''The addition of ... to ...'' (việc bổ sung/thêm vào). ''Addition'' phù hợp nhất về nghĩa ngữ cảnh.', 1, 6),
      (7, 1, 1, 107, N'Ms. Hyun is reviewing the training manual to see if updates -------.', N'Chủ ngữ ''updates'' (các bản cập nhật) là danh từ số nhiều và chịu tác động nên cần động từ ở thể bị động hiện tại đơn: ''are needed''.', 1, 7),
      (8, 1, 1, 108, N'When leaving the auditorium, please exit ------- the doors on the lower level.', N'Giới từ ''through'' (qua/xuyên qua): ''exit through the doors'' nghĩa là đi ra qua các cánh cửa ở tầng dưới.', 1, 8),
      (9, 1, 1, 109, N'The judges for this year''s screenplay competition include ------- from Hanovi Studios.', N'Sau động từ ''include'' cần một tân ngữ danh từ chỉ người ở số nhiều. ''Representatives'' (những người đại diện) là danh từ phù hợp.', 1, 9),
      (10, 1, 1, 110, N'I have attached my resume detailing my ------- experience in the hotel industry.', N'Tính từ ''extensive'' kết hợp với danh từ ''experience'' tạo cụm ''extensive experience'' (kinh nghiệm sâu rộng/dày dặn).', 1, 10),
      (11, 1, 1, 111, N'Remember to check the spelling of Mr. Kamashi''s name when ------- the document.', N'Rút gọn mệnh đề trạng ngữ chỉ thời gian khi cùng chủ ngữ (you): ''when revising'' (khi chỉnh sửa tài liệu).', 1, 11),
      (12, 1, 1, 112, N'Residents visited City Hall to ask ------- developers will preserve the historic properties.', N'Động từ ''ask'' đi với liên từ ''whether'' mang nghĩa hỏi xem liệu các nhà phát triển có bảo tồn di tích lịch sử hay không.', 1, 12),
      (13, 1, 1, 113, N'The Ford Group''s proposed advertising campaign is by far the most ------- we have seen so far.', N'Sau ''the most'' trong cấu trúc so sánh nhất của tính từ dài, cần một tính từ. ''Innovative'' (mang tính đổi mới, sáng tạo).', 1, 13),
      (14, 1, 1, 114, N'Solei Landscaping announced that the design for the Cherry Hill building complex is ------- complete.', N'Trạng từ mức độ ''almost'' bổ nghĩa cho tính từ ''complete'': ''almost complete'' (gần như hoàn thành).', 1, 14),
      (15, 1, 1, 115, N'Daniel Nishida, the chief supply officer, asked that ------- be given full responsibility for approving all invoices.', N'Trong mệnh đề danh từ sau ''asked that'', cần một đại từ nhân xưng làm chủ ngữ cho động từ bị động ''be given''. Do đó chọn ''he''.', 1, 15),
      (16, 1, 1, 116, N'In preparation for Mr. Kumar''s retirement at the end of March, the Carolex Corporation will need to ------- a new facilities director.', N'Động từ ''recruit'' (tuyển dụng) kết hợp với tân ngữ ''a new facilities director'' (một giám đốc cơ sở vật chất mới).', 1, 16),
      (17, 1, 1, 117, N'The team''s contributions to the Ripton Group''s marketing plan were very ------- acknowledged.', N'Cần trạng từ ''favorably'' đứng trước động từ quá khứ phân từ ''acknowledged'' để bổ nghĩa cho động từ: được công nhận một cách tán thành/tích cực.', 1, 17),
      (18, 1, 1, 118, N'------- receiving the engineering award, Ms. Kwon made a point of thanking longtime mentors.', N'Cụm ''Upon + V-ing'' nghĩa là ''Ngay khi nhận được...'': ''Upon receiving the engineering award''.', 1, 18),
      (19, 1, 1, 119, N'Please read the list of ------- qualifications to ensure that you have the necessary education and experience for the position.', N'Tính từ ''essential'' (thiết yếu, bắt buộc) bổ nghĩa cho danh từ ''qualifications'': ''essential qualifications'' (tiêu chuẩn thiết yếu).', 1, 19),
      (20, 1, 1, 120, N'Choosing the best software tool to eliminate computer viruses is rarely simple, ------- it is important to seek expert advice.', N'Liên từ kết hợp ''so'' (vì vậy, do đó) dùng để nối mệnh đề chỉ nguyên nhân - kết quả.', 1, 20),
      (21, 1, 1, 121, N'Ms. Delgado would like to meet with all loan officers ------- reviewing any more loan applications.', N'Giới từ chỉ thời gian ''before'' đi kèm V-ing: ''before reviewing any more loan applications'' (trước khi xem xét thêm hồ sơ vay).', 1, 21),
      (22, 1, 1, 122, N'Cedar Branch Hill has a ------- as a business-friendly environment that provides efficient licensing and other legal processes.', N'Cụm ''have a reputation as...'' (có danh tiếng là một...). ''Reputation'' phù hợp hoàn toàn với ngữ cảnh kinh doanh thuận lợi.', 1, 22),
      (23, 1, 1, 123, N'The actors held an additional rehearsal ------- perfect their performance in the final scene.', N'Cụm chỉ mục đích ''in order to + V (nguyên thể)'': ''in order to perfect their performance'' (nhằm hoàn thiện màn trình diễn của họ).', 1, 23),
      (24, 1, 1, 124, N'RZT Technology will double the size of its Toronto laboratory to ------- the organization''s rapid growth.', N'Động từ ''accommodate'' mang nghĩa ''đáp ứng / chứa đủ'': ''accommodate the organization''s rapid growth'' (đáp ứng sự tăng trưởng nhanh chóng).', 1, 24),
      (25, 1, 1, 125, N'Even though Smithton Electronics'' second quarter was not -------, the company plans to invest large sums on research.', N'Sau động từ tobe ''was not'' cần một tính từ miêu tả tình trạng tài chính của quý hai: ''profitable'' (có lợi nhuận / sinh lời).', 1, 25),
      (26, 1, 1, 126, N'The Williamsport Hotel is an ideal venue for the conference because of its ------- to the airport.', N'Cụm từ ''proximity to...'' (sự gần gũi về khoảng cách / vị trí gần với sân bay). Chọn ''proximity''.', 1, 26),
      (27, 1, 1, 127, N'The second training session is for employees ------- responsibilities include processing payroll forms.', N'Đại từ quan hệ sở hữu ''whose'' đứng trước danh từ ''responsibilities'' để chỉ trách nhiệm của các nhân viên đó.', 1, 27),
      (28, 1, 1, 128, N'------- poorly the high-speed printer may be functioning, it is still making copies that are adequate for our purposes.', N'Cấu trúc nhượng bộ: ''However + adv/adj + S + V'' (Dù cho ... đến mức nào đi chăng nữa): ''However poorly the high-speed printer may be functioning''.', 1, 28),
      (29, 1, 1, 129, N'The long-awaited Weka 2XG digital camera will finally be ------- at a product exhibition on August 16.', N'Động từ ''unveil'' (ra mắt, công bố sản phẩm mới). Ở thể bị động: ''will finally be unveiled'' (cuối cùng sẽ được ra mắt).', 1, 29),
      (30, 1, 1, 130, N'Northeast Community Finance ------- an online system in order to shorten service lines at branch locations.', N'Mệnh đề chính đang thiếu vị ngữ chủ động. ''Northeast Community Finance has implemented'' (đã triển khai một hệ thống trực tuyến).', 1, 30),
      (31, 1, 2, 131, N'Select the best answer to complete the text at (131).', N'Thì hiện tại hoàn thành: ''have transformed'' (đã biến đổi/làm thay đổi diện mạo của những khu vườn đô thị nhỏ).', 1, 31),
      (32, 1, 2, 132, N'Select the best sentence to complete the text at (132).', N'Câu sau dùng liên từ ''However, no single nursery...'' (Tuy nhiên, không có vườn ươm đơn lẻ nào có thể cung cấp đủ cây mọi chủng loại và kích cỡ), do đó câu trước hợp lý nhất là nói rằng phần lớn các dự án công ty dùng cây từ chính vườn ươm của mình.', 1, 32),
      (33, 1, 2, 133, N'Select the best answer to complete the text at (133).', N'Cấu trúc tính từ đứng sau danh từ bổ nghĩa: ''specialist growers ready to provide us'' (những người trồng chuyên môn sẵn sàng cung cấp cho chúng tôi).', 1, 33),
      (34, 1, 2, 134, N'Select the best answer to complete the text at (134).', N'Danh từ ''order'' (đơn đặt hàng): ''complete any order'' (hoàn thành bất kỳ đơn đặt hàng nào).', 1, 34),
      (35, 1, 2, 135, N'Select the best answer to complete the text at (135).', N'''Opening our second store'' (khai trương/mở cửa hàng thứ hai vào mùa xuân này).', 1, 35),
      (36, 1, 2, 136, N'Select the best answer to complete the text at (136).', N'Giới từ ''until'' chỉ thời hạn nộp đơn cho đến ngày 1 tháng 4: ''until 1 April''.', 1, 36),
      (37, 1, 2, 137, N'Select the best answer to complete the text at (137).', N'Danh từ không đếm được ''training'' (hoạt động đào tạo nhân viên mới) làm chủ ngữ cho ''is scheduled to begin''.', 1, 37),
      (38, 1, 2, 138, N'Select the best sentence to complete the text at (138).', N'CEO gửi email thông báo tuyển dụng nội bộ và khuyến khích nhân viên chia sẻ tin tuyển dụng này cho bạn bè quan tâm: ''Feel free to share this news with any interested friends.''', 1, 38),
      (39, 1, 2, 139, N'Select the best answer to complete the text at (139).', N'Chủ ngữ số ít ''A spokesperson'' cần động từ vị ngữ chia thì hiện tại hoàn thành ''has confirmed'' (đã xác nhận tin tức vừa diễn ra).', 1, 39),
      (40, 1, 2, 140, N'Select the best sentence to complete the text at (140).', N'Giải thích cho việc nhờ có sự hỗ trợ của cô Amon mà vượt qua khó khăn tài chính trước đây: ''The project had been delayed because of budget cuts.''', 1, 40),
      (41, 1, 2, 141, N'Select the best answer to complete the text at (141).', N'Tính từ ''existing'' (hiện có/hiện hữu): ''the south end of the existing conservatory'' (khu cánh mới xây ở phía nam của nhạc viện hiện tại).', 1, 41),
      (42, 1, 2, 142, N'Select the best answer to complete the text at (142).', N'Cụm giới từ chỉ vị trí ''adjacent to'' (nằm liền kề, kế bên phòng chờ sinh viên hiện tại).', 1, 42),
      (43, 1, 2, 143, N'Select the best answer to complete the text at (143).', N'Danh từ ''purchase'' (việc mua hàng): ''Thank you for your recent purchase of the Daqtex Mini-V camera''.', 1, 43),
      (44, 1, 2, 144, N'Select the best sentence to complete the text at (144).', N'Giải thích hậu quả của lỗi chip điện tử nêu ở câu trước: ''This defect will eventually interfere with the clarity of your images'' (Lỗi này về sau sẽ làm giảm độ rõ nét của hình ảnh).', 1, 44),
      (45, 1, 2, 145, N'Select the best answer to complete the text at (145).', N'Câu mệnh lệnh bắt đầu bằng ''Please'' đi với động từ nguyên thể không to: ''Please verify whether your camera...''.', 1, 45),
      (46, 1, 2, 146, N'Select the best answer to complete the text at (146).', N'Đại từ tân ngữ ''it'' thay thế cho danh từ số ít ''your camera'' / ''Mini-V'': ''repair it free of charge''.', 1, 46),
      (47, 1, 3, 147, N'Where would the notice likely be seen?', N'Đoạn văn nói về giải thưởng ''10 FREE round-trip bus trips'' (10 chuyến xe buýt khứ hồi miễn phí) của hãng xe buýt Fastest Fleet, do đó thông báo này xuất hiện ở trạm xe buýt (bus station).', 1, 47),
      (48, 1, 3, 148, N'What are customers asked to do?', N'Tiêu đề ghi: ''RATE OUR SERVICES... fill out the 5-minute questionnaire'' (Đánh giá dịch vụ của chúng tôi / điền bảng khảo sát ý kiến) -> Đưa ra phản hồi (Provide feedback).', 1, 48),
      (49, 1, 3, 149, N'What task was Mr. Mather given?', N'Daniel Mather viết: ''The manager asked me to make hard copies of some contract agreements'' (Quản lý yêu cầu tôi in bản cứng một số hợp đồng).', 1, 49),
      (50, 1, 3, 150, N'At 9:42 A.M., what does Ms. Maldini most likely mean when she writes "Sure thing"?', N'Daniel hỏi: ''Could I borrow yours?'' (Tôi mượn thẻ in của bạn được không?). Susan trả lời: ''Sure thing. It''s in the business card holder on my desk.'' (Chắc chắn rồi/Được chứ, thẻ ở trong hộp danh thiếp).', 1, 50);
    INSERT INTO dbo.Questions (Id, ExamId, GroupId, QuestionNumber, QuestionText, Explanation, CanShuffleAnswers, OrderIndex)
    VALUES
      (51, 1, 3, 151, N'What is the purpose of the memo?', N'Bản ghi nhớ giải thích quy định mới bắt đầu từ hôm nay: nhân viên đóng góp 50 cent cho mỗi tách trà/cà phê tự rót trong bếp nhỏ (To explain a new policy).', 1, 51),
      (52, 1, 3, 152, N'What are staff members asked to do?', N'Đoạn văn viết: ''just place your payment in the marked can on the counter next to the sink'' (bỏ tiền vào hộp lon được đánh dấu trên quầy bên cạnh bồn rửa).', 1, 52),
      (53, 1, 3, 153, N'What is indicated about the museum?', N'Dẫn chứng: ''More information about the featured artists and the exhibit can be found at www.milwaukeemodernart.org'' (Bảo tàng quảng bá thông tin triển lãm sắp tới trên trang web).', 1, 53),
      (54, 1, 3, 154, N'Who is Ms. Breeland?', N'Dẫn chứng: ''works by acclaimed international artists such as Sally Acosta, Frank Kember, Kimberly Hong, and Matilda Breeland'' -> Cô Breeland là một nghệ sĩ (artist).', 1, 54),
      (55, 1, 3, 155, N'Who was praised by Mr. Lerner?', N'Dẫn chứng: ''Theodore Carmody''s sculpture collection that was dubbed "most exciting debut of the decade" by Ethan Lerner'' -> Người được khen là ông Carmody.', 1, 55),
      (56, 1, 3, 156, N'Why has the price of a project been adjusted?', N'Dẫn chứng: ''Client will now be supplying the countertops and faucet in addition to the kitchen cabinets. Therefore, the total project cost will be adjusted to only include the cost of installation'' (Khách hàng tự cung cấp toàn bộ vật liệu).', 1, 56),
      (57, 1, 3, 157, N'How much money will Mr. Copeland most likely give Mr. Kleiber on July 15?', N'Ngày 15 tháng 7 là ngày hoàn thành dự án (''Project End Date: July 15''). Lịch thanh toán ghi: ''the remainder ($700) is due upon project completion'' -> Số tiền thanh toán là $700.', 1, 57),
      (58, 1, 3, 158, N'What most likely is Ms. Pawar''s occupation?', N'Thư gửi lời cảm ơn thành viên: ''Thank you for your continued membership in the North American Architects Association'' (Hiệp hội Kiến trúc sư Bắc Mỹ) -> Nghề nghiệp là Kiến trúc sư (Architect).', 1, 58),
      (59, 1, 3, 159, N'What is NOT a benefit of conference preregistration?', N'Các lợi ích được nêu: tour tham quan thành phố, tiệc VIP Banquet, giảm $30 phí đăng ký. Nâng hạng phòng khách sạn (hotel room upgrade) không hề được nhắc đến.', 1, 59),
      (60, 1, 3, 160, N'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "You will also find the complete conference program there."', N'Từ ''there'' trong câu thay thế cho ''our Web site'' ở câu ngay trước đó: ''Visit our Web site to register online. [4]. You will also find the complete conference program there.''', 1, 60),
      (61, 1, 3, 161, N'What are the writers discussing?', N'Các đồng nghiệp rủ nhau ăn tối sau giờ làm (''grabbing a bite to eat after work'') và thảo luận chọn nhà hàng phù hợp (Where to go for dinner).', 1, 61),
      (62, 1, 3, 162, N'What information does Mr. Foxx provide about Ocho Coronas?', N'Tim Foxx thông báo: ''That place closed a few days ago'' -> Quán đã đóng cửa, không còn hoạt động (It is no longer in business).', 1, 62),
      (63, 1, 3, 163, N'At 4:34 P.M., why most likely does Mr. Webber write, "That''s too bad"?', N'Kurt muốn ăn thử quán Mexico mới (''thinking of trying the new Mexican place'') nhưng nghe tin quán đã đóng cửa nên tiếc nuối: ''That''s too bad. I heard great things about it.''', 1, 63),
      (64, 1, 3, 164, N'What does Mr. Avril decide to do?', N'Davi Avril chốt: ''OK, but I won''t be able to get there till about six'' -> Đồng ý tham gia ăn cùng mọi người vào khoảng 6 giờ (Join his coworkers for a meal).', 1, 64),
      (65, 1, 3, 165, N'Why was the letter sent to Mr. Wehi?', N'Thư thông báo gói đăng ký dùng thử 3 tháng sắp hết hạn và nhắc ông gia hạn đặt báo tiếp tục (To remind him to resubscribe).', 1, 65),
      (66, 1, 3, 166, N'For about how long has Mr. Wehi been receiving Multinational Voice Magazine?', N'Dẫn chứng: ''On 25 March, your three-month trial subscription to Multinational Voice Magazine will expire'' -> Ông đã nhận tạp chí được 3 tháng.', 1, 66),
      (67, 1, 3, 167, N'What is one thing that Mr. Wehi is encouraged to do?', N'Dẫn chứng: ''To provide your feedback, please visit www.mvmagazine.co.nz and fill out our online comment form'' -> Đưa ra ý kiến phản hồi (Offer his opinion).', 1, 67),
      (68, 1, 3, 168, N'Where does Ms. Steiner work?', N'Chữ ký ghi ''Morgan Airport Shuttle'' (Dịch vụ xe đưa đón sân bay) -> Dịch vụ vận tải (At a transportation service).', 1, 68),
      (69, 1, 3, 169, N'What did Mr. Grant most likely inquire about?', N'Tiêu đề ''re: Suitcase on board'' và nội dung nói về việc tìm hành lý để quên trên xe -> Đồ thất lạc (Lost property).', 1, 69),
      (70, 1, 3, 170, N'What information will Mr. Grant be asked to provide?', N'Dẫn chứng: ''Please note that you will be asked to indicate what time your bus left the airport terminal'' (Giờ xe buýt rời nhà ga sân bay -> departure time).', 1, 70),
      (71, 1, 3, 171, N'What is Mr. Grant advised to do?', N'Dẫn chứng: ''Please do not delay... limit storage time to 7 days only'' -> Hãy đến văn phòng càng sớm càng tốt kẻo bị xử lý bỏ đồ (Visit the office as soon as possible).', 1, 71),
      (72, 1, 3, 172, N'What is mentioned about the cranes?', N'Dẫn chứng: ''One crane was assembled at the south bank of the river, while the other one was placed on a concrete pylon in the center of the Stonewell River'' -> Cả 2 cần cẩu đều được lắp ráp ngay tại công trường thi công cầu.', 1, 72),
      (73, 1, 3, 173, N'What is indicated by Mr. Lee?', N'Dẫn chứng lời Roger Lee: ''Any large project is going to require unforeseen adjustments that may disrupt an official construction schedule'' -> Các dự án lớn luôn phát sinh vấn đề bất ngờ.', 1, 73),
      (74, 1, 3, 174, N'What is NOT suggested about the Stonewell Bridge?', N'Cầu cung cấp tuyến phía bắc (A), có đài ngắm cảnh cho người đi bộ và làn xe tải (B), hòa hợp cảnh quan tự nhiên (C). Việc cần nhiều công nhân hơn ước tính ban đầu (D) không được nhắc đến.', 1, 74),
      (75, 1, 3, 175, N'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "The project, which was expected to take four years, was completed in less than three."', N'Vị trí [1] hợp lý nhất vì nối tiếp thông tin dự án hoàn thành nhanh hơn dự kiến (dưới 3 năm so với 4 năm), mở đầu cho câu tiếp theo giải thích lý do: ''The efficiency of the project was directly attributable to two RWC451 cranes...''', 1, 75),
      (76, 1, 3, 176, N'Why was the memo sent to employees?', N'Bản ghi nhớ gửi cho nhân viên để cảnh báo về việc sửa chữa, sơn lại và thay thảm văn phòng vào đầu tháng 3 (To alert them to upcoming renovations).', 1, 76),
      (77, 1, 3, 177, N'What are employees instructed to do?', N'Dẫn chứng: ''Please label them with your name and office number so that the crews can return them to the correct offices'' (Dán nhãn tên và số phòng để đánh dấu đồ dùng của mình).', 1, 77),
      (78, 1, 3, 178, N'What is stated about Room 409?', N'Dẫn chứng: ''The conference room (Room 409) will remain available to be used as a workspace during the entire week'' (Nhân viên có thể tập trung làm việc ở phòng 409).', 1, 78),
      (79, 1, 3, 179, N'When should Ms. Asbury be ready to vacate her office?', N'Trong lịch làm việc: Marlene Asbury ở phòng 402, sửa vào thứ Tư ngày 4/3. Bản ghi nhớ yêu cầu: ''box up all their office items by 3 P.M. on the day before their room is scheduled for work'' -> Phải dọn đồ trước 3h chiều ngày hôm trước là thứ Ba, ngày 3 tháng 3 (On March 3).', 1, 79),
      (80, 1, 3, 180, N'What is suggested about Mr. Hagburg?', N'Trong bảng lịch trình: ''Room 404 (Elliot Hagburg & Ana Keller)'' -> Ông Hagburg dùng chung phòng làm việc với một đồng nghiệp khác (He shares an office with a colleague).', 1, 80),
      (81, 1, 3, 181, N'What is the purpose of the flyer?', N'Tờ rơi quảng bá chương trình nông nghiệp hỗ trợ cộng đồng: ''invites you to participate in its community-supported agriculture program'' -> Quảng cáo chương trình nông trại (To advertise a farm program).', 1, 81),
      (82, 1, 3, 182, N'What is suggested about the workers at Livrou Farm?', N'Dẫn chứng: ''growing season from June to November... harvested by our farm staff'' -> Nhân viên thu hoạch nông sản từ tháng 6 đến tháng 11.', 1, 82),
      (83, 1, 3, 183, N'What is NOT indicated about Livrou Farm?', N'Nông trại có bản tin (A), dùng phân bón tự nhiên (B), tổ chức lễ hội âm nhạc (C). Lớp dạy nấu ăn (cooking classes) không được nhắc đến (chỉ có chia sẻ công thức nấu ăn trên website).', 1, 83),
      (84, 1, 3, 184, N'What is true about Mr. Bernard''s membership?', N'Dẫn chứng trong mục quyền lợi thành viên: ''A selection of pick-your-own strawberries, apples, and other fruits'' -> Được tự hái trái cây.', 1, 84),
      (85, 1, 3, 185, N'How much should Mr. Bernard pay for the membership?', N'Trong đơn đăng ký, ông Bernard tích chọn ''Size of share: Half''. Tờ rơi ghi rõ: ''a half-size share is $350'' -> Giá tiền là $350.', 1, 85),
      (86, 1, 3, 186, N'Why is Mr. Janssen relocating?', N'Jorge viết: ''I accepted a new position in Burlington and need to relocate'' -> Nhận công việc mới (To begin a new job).', 1, 86),
      (87, 1, 3, 187, N'What aspect of the property does NOT match Mr. Janssen''s preferences?', N'Jorge có ngân sách ''$1,400 monthly to cover ALL housing costs, including utilities''. Nhà cô McMahon giá thuê $1,400 nhưng ''Electricity and natural gas will be the responsibility of the tenant'' -> Chi phí hàng tháng vượt ngân sách của anh ấy (The monthly costs).', 1, 87),
      (88, 1, 3, 188, N'For what situation does Ms. McMahon mention that she will need additional information?', N'Cô McMahon viết: ''Cats or small dogs are potentially permitted, but with conditions, so please inquire'' -> Khi người thuê muốn nuôi thú cưng trong nhà (When someone wants to keep an indoor pet).', 1, 88),
      (89, 1, 3, 189, N'Why does Mr. Janssen send the e-mail?', N'Jorge viết: ''I''m eager to look over the apartment, and I just happen to be in Burlington all this week... My last day in town will be Sunday, June 30'' -> Hẹn lịch xem căn hộ (To make arrangements to view a property).', 1, 89),
      (90, 1, 3, 190, N'When does Mr. Janssen wish to start living in the residence?', N'Jorge viết: ''I''d want to move in the same day that it''s expected to be available''. Trong bài đăng của cô McMahon: ''anticipated to be move-in ready on August 1'' -> Ngày bắt đầu dọn vào sống là ngày 1 tháng 8 (On August 1).', 1, 90),
      (91, 1, 3, 191, N'What is NOT mentioned in the product description as a feature of the C3 food processor?', N'A (bảo hành 7 năm bền bỉ), B (lý tưởng cho nhà hàng), D (mẫu bán chạy nhất - best-selling). Đặc điểm to hơn của đối thủ cạnh tranh (C) không hề được nhắc đến.', 1, 91),
      (92, 1, 3, 192, N'What is indicated in the customer review?', N'Đánh giá 5 sao: ''This product is amazing... exceptionally satisfied with this product'' -> Ông Perles rất hài lòng với sản phẩm đã mua (Mr. Perles is pleased with his purchase).', 1, 92),
      (93, 1, 3, 193, N'What is suggested about Mr. Perles?', N'Ông viết: ''since I''m a loyalty club member, the price was reasonable''. Bảng giá nêu: ''KU Club Members: $299.00'' -> Ông đã mua với giá $299.', 1, 93),
      (94, 1, 3, 194, N'Why would the C2 processor likely be recommended as more suitable for Mr. Perles?', N'Ông Perles phàn nàn máy C3 rất nặng (''very heavy and therefore not as portable''). Hãng tư vấn dòng C2 nhỏ gọn hơn nhiều (''much smaller than the C3 in general'') nên nhẹ hơn (lightweight).', 1, 94),
      (95, 1, 3, 195, N'In the online response, the word "regarding" in paragraph 1, line 3, is closest in meaning to', N'''provide a suggestion regarding your concerns'' = đưa ra đề xuất liên quan tới / về những băn khoăn của bạn (''regarding'' đồng nghĩa với ''about'').', 1, 95),
      (96, 1, 3, 196, N'In the article, the word "draw" in paragraph 2, line 7, is closest in meaning to', N'Cụm ''draw thousands of volleyball fans'' mang nghĩa thu hút hàng ngàn người hâm mộ bóng chuyền (''draw'' đồng nghĩa với ''attract'').', 1, 96),
      (97, 1, 3, 197, N'What will be changed about Ment Hall?', N'Dẫn chứng: ''Seating 19,000 spectators, Ment Hall will be double its previous size'' -> Sức chứa chỗ ngồi tăng gấp đôi (Its seating capacity).', 1, 97),
      (98, 1, 3, 198, N'When will the first game be held at a new host venue?', N'Bài báo nêu: ''Ment Hall is the only major arena in the country that has never hosted a Piasek Cup event... The final game will inaugurate the refurbished hall''. Trận chung kết tại Ment Hall diễn ra vào ngày 16 tháng 6 (On June 16).', 1, 98),
      (99, 1, 3, 199, N'In the schedule, what are people advised to do?', N'Dẫn chứng trong mục NOTE: ''Tickets for the final game are selling fast, so don''t wait until after the semifinal games to order'' -> Hãy mua vé trận chung kết càng sớm càng tốt (Buy tickets for the final game as soon as possible).', 1, 99),
      (100, 1, 3, 200, N'Where will Mr. Cote be reporting from?', N'Bản tin phát thanh ghi: ''At 3:00 P.M., Venezuela will take on Australia... Our guest announcer will be Vin Cote''. Tra bảng lịch trình: trận Venezuela - Australia lúc 3:00 P.M. ngày 10 June diễn ra tại Loave Arena, thành phố Bydgoszcz.', 1, 100);
    SET IDENTITY_INSERT dbo.Questions OFF;
END
GO

-- 4. Nạp 120 lượt thi của sinh viên (Chế độ ẩn danh)
IF NOT EXISTS (SELECT 1 FROM dbo.ExamAttempts WHERE ExamId = 1)
BEGIN
    SET IDENTITY_INSERT dbo.ExamAttempts ON;
    INSERT INTO dbo.ExamAttempts (Id, ExamId, UserId, StudentName, StartTime, EndTime, TimeSpentSeconds, CorrectCount, WrongCount, SkippedCount, Score, IsSubmitted)
    VALUES
      (1, 1, 1001, N'Thí sinh ẩn danh #120', DATEADD(MINUTE, -68, GETUTCDATE()), GETUTCDATE(), 4080, 92, 8, 0, 460, 1),
      (2, 1, 1002, N'Thí sinh ẩn danh #119', DATEADD(MINUTE, -71, GETUTCDATE()), GETUTCDATE(), 4260, 85, 15, 0, 410, 1),
      (3, 1, 1003, N'Thí sinh ẩn danh #118', DATEADD(MINUTE, -62, GETUTCDATE()), GETUTCDATE(), 3720, 95, 5, 0, 480, 1),
      (4, 1, 1004, N'Thí sinh ẩn danh #117', DATEADD(MINUTE, -74, GETUTCDATE()), GETUTCDATE(), 4440, 78, 22, 0, 365, 1),
      (5, 1, 1005, N'Thí sinh ẩn danh #116', DATEADD(MINUTE, -58, GETUTCDATE()), GETUTCDATE(), 3480, 88, 12, 0, 430, 1),
      (6, 1, 1006, N'Thí sinh ẩn danh #115', DATEADD(MINUTE, -69, GETUTCDATE()), GETUTCDATE(), 4140, 81, 19, 0, 385, 1),
      (7, 1, 1007, N'Thí sinh ẩn danh #114', DATEADD(MINUTE, -74, GETUTCDATE()), GETUTCDATE(), 4440, 72, 28, 0, 351, 1),
      (8, 1, 1008, N'Thí sinh ẩn danh #113', DATEADD(MINUTE, -59, GETUTCDATE()), GETUTCDATE(), 3540, 68, 32, 0, 350, 1),
      (9, 1, 1009, N'Thí sinh ẩn danh #112', DATEADD(MINUTE, -73, GETUTCDATE()), GETUTCDATE(), 4380, 74, 26, 0, 390, 1),
      (10, 1, 1010, N'Thí sinh ẩn danh #111', DATEADD(MINUTE, -58, GETUTCDATE()), GETUTCDATE(), 3480, 76, 24, 0, 345, 1),
      (11, 1, 1011, N'Thí sinh ẩn danh #110', DATEADD(MINUTE, -56, GETUTCDATE()), GETUTCDATE(), 3360, 92, 8, 0, 466, 1),
      (12, 1, 1012, N'Thí sinh ẩn danh #109', DATEADD(MINUTE, -61, GETUTCDATE()), GETUTCDATE(), 3660, 79, 21, 0, 383, 1),
      (13, 1, 1013, N'Thí sinh ẩn danh #108', DATEADD(MINUTE, -70, GETUTCDATE()), GETUTCDATE(), 4200, 80, 20, 0, 400, 1),
      (14, 1, 1014, N'Thí sinh ẩn danh #107', DATEADD(MINUTE, -55, GETUTCDATE()), GETUTCDATE(), 3300, 74, 26, 0, 390, 1),
      (15, 1, 1015, N'Thí sinh ẩn danh #106', DATEADD(MINUTE, -56, GETUTCDATE()), GETUTCDATE(), 3360, 70, 30, 0, 359, 1),
      (16, 1, 1016, N'Thí sinh ẩn danh #105', DATEADD(MINUTE, -64, GETUTCDATE()), GETUTCDATE(), 3840, 79, 21, 0, 355, 1),
      (17, 1, 1017, N'Thí sinh ẩn danh #104', DATEADD(MINUTE, -72, GETUTCDATE()), GETUTCDATE(), 4320, 89, 11, 0, 399, 1),
      (18, 1, 1018, N'Thí sinh ẩn danh #103', DATEADD(MINUTE, -73, GETUTCDATE()), GETUTCDATE(), 4380, 80, 20, 0, 412, 1),
      (19, 1, 1019, N'Thí sinh ẩn danh #102', DATEADD(MINUTE, -54, GETUTCDATE()), GETUTCDATE(), 3240, 69, 31, 0, 359, 1),
      (20, 1, 1020, N'Thí sinh ẩn danh #101', DATEADD(MINUTE, -59, GETUTCDATE()), GETUTCDATE(), 3540, 86, 14, 0, 415, 1),
      (21, 1, 1021, N'Thí sinh ẩn danh #100', DATEADD(MINUTE, -75, GETUTCDATE()), GETUTCDATE(), 4500, 72, 28, 0, 360, 1),
      (22, 1, 1022, N'Thí sinh ẩn danh #99', DATEADD(MINUTE, -64, GETUTCDATE()), GETUTCDATE(), 3840, 86, 14, 0, 420, 1),
      (23, 1, 1023, N'Thí sinh ẩn danh #98', DATEADD(MINUTE, -56, GETUTCDATE()), GETUTCDATE(), 3360, 92, 8, 0, 448, 1),
      (24, 1, 1024, N'Thí sinh ẩn danh #97', DATEADD(MINUTE, -55, GETUTCDATE()), GETUTCDATE(), 3300, 81, 19, 0, 433, 1),
      (25, 1, 1025, N'Thí sinh ẩn danh #96', DATEADD(MINUTE, -53, GETUTCDATE()), GETUTCDATE(), 3180, 76, 24, 0, 380, 1),
      (26, 1, 1026, N'Thí sinh ẩn danh #95', DATEADD(MINUTE, -56, GETUTCDATE()), GETUTCDATE(), 3360, 92, 8, 0, 466, 1),
      (27, 1, 1027, N'Thí sinh ẩn danh #94', DATEADD(MINUTE, -69, GETUTCDATE()), GETUTCDATE(), 4140, 91, 9, 0, 461, 1),
      (28, 1, 1028, N'Thí sinh ẩn danh #93', DATEADD(MINUTE, -72, GETUTCDATE()), GETUTCDATE(), 4320, 94, 6, 0, 477, 1),
      (29, 1, 1029, N'Thí sinh ẩn danh #92', DATEADD(MINUTE, -53, GETUTCDATE()), GETUTCDATE(), 3180, 85, 15, 0, 428, 1),
      (30, 1, 1030, N'Thí sinh ẩn danh #91', DATEADD(MINUTE, -60, GETUTCDATE()), GETUTCDATE(), 3600, 79, 21, 0, 364, 1),
      (31, 1, 1031, N'Thí sinh ẩn danh #90', DATEADD(MINUTE, -55, GETUTCDATE()), GETUTCDATE(), 3300, 91, 9, 0, 476, 1),
      (32, 1, 1032, N'Thí sinh ẩn danh #89', DATEADD(MINUTE, -61, GETUTCDATE()), GETUTCDATE(), 3660, 85, 15, 0, 405, 1),
      (33, 1, 1033, N'Thí sinh ẩn danh #88', DATEADD(MINUTE, -75, GETUTCDATE()), GETUTCDATE(), 4500, 85, 15, 0, 407, 1),
      (34, 1, 1034, N'Thí sinh ẩn danh #87', DATEADD(MINUTE, -56, GETUTCDATE()), GETUTCDATE(), 3360, 84, 16, 0, 423, 1),
      (35, 1, 1035, N'Thí sinh ẩn danh #86', DATEADD(MINUTE, -60, GETUTCDATE()), GETUTCDATE(), 3600, 86, 14, 0, 430, 1),
      (36, 1, 1036, N'Thí sinh ẩn danh #85', DATEADD(MINUTE, -55, GETUTCDATE()), GETUTCDATE(), 3300, 69, 31, 0, 359, 1),
      (37, 1, 1037, N'Thí sinh ẩn danh #84', DATEADD(MINUTE, -68, GETUTCDATE()), GETUTCDATE(), 4080, 76, 24, 0, 387, 1),
      (38, 1, 1038, N'Thí sinh ẩn danh #83', DATEADD(MINUTE, -68, GETUTCDATE()), GETUTCDATE(), 4080, 86, 14, 0, 431, 1),
      (39, 1, 1039, N'Thí sinh ẩn danh #82', DATEADD(MINUTE, -66, GETUTCDATE()), GETUTCDATE(), 3960, 71, 29, 0, 387, 1),
      (40, 1, 1040, N'Thí sinh ẩn danh #81', DATEADD(MINUTE, -74, GETUTCDATE()), GETUTCDATE(), 4440, 91, 9, 0, 448, 1);
    INSERT INTO dbo.ExamAttempts (Id, ExamId, UserId, StudentName, StartTime, EndTime, TimeSpentSeconds, CorrectCount, WrongCount, SkippedCount, Score, IsSubmitted)
    VALUES
      (41, 1, 1041, N'Thí sinh ẩn danh #80', DATEADD(MINUTE, -60, GETUTCDATE()), GETUTCDATE(), 3600, 93, 7, 0, 451, 1),
      (42, 1, 1042, N'Thí sinh ẩn danh #79', DATEADD(MINUTE, -61, GETUTCDATE()), GETUTCDATE(), 3660, 81, 19, 0, 406, 1),
      (43, 1, 1043, N'Thí sinh ẩn danh #78', DATEADD(MINUTE, -54, GETUTCDATE()), GETUTCDATE(), 3240, 85, 15, 0, 401, 1),
      (44, 1, 1044, N'Thí sinh ẩn danh #77', DATEADD(MINUTE, -66, GETUTCDATE()), GETUTCDATE(), 3960, 75, 25, 0, 355, 1),
      (45, 1, 1045, N'Thí sinh ẩn danh #76', DATEADD(MINUTE, -65, GETUTCDATE()), GETUTCDATE(), 3900, 69, 31, 0, 355, 1),
      (46, 1, 1046, N'Thí sinh ẩn danh #75', DATEADD(MINUTE, -66, GETUTCDATE()), GETUTCDATE(), 3960, 82, 18, 0, 413, 1),
      (47, 1, 1047, N'Thí sinh ẩn danh #74', DATEADD(MINUTE, -75, GETUTCDATE()), GETUTCDATE(), 4500, 69, 31, 0, 382, 1),
      (48, 1, 1048, N'Thí sinh ẩn danh #73', DATEADD(MINUTE, -69, GETUTCDATE()), GETUTCDATE(), 4140, 86, 14, 0, 425, 1),
      (49, 1, 1049, N'Thí sinh ẩn danh #72', DATEADD(MINUTE, -72, GETUTCDATE()), GETUTCDATE(), 4320, 73, 27, 0, 349, 1),
      (50, 1, 1050, N'Thí sinh ẩn danh #71', DATEADD(MINUTE, -71, GETUTCDATE()), GETUTCDATE(), 4260, 86, 14, 0, 410, 1),
      (51, 1, 1051, N'Thí sinh ẩn danh #70', DATEADD(MINUTE, -69, GETUTCDATE()), GETUTCDATE(), 4140, 86, 14, 0, 431, 1),
      (52, 1, 1052, N'Thí sinh ẩn danh #69', DATEADD(MINUTE, -61, GETUTCDATE()), GETUTCDATE(), 3660, 78, 22, 0, 360, 1),
      (53, 1, 1053, N'Thí sinh ẩn danh #68', DATEADD(MINUTE, -53, GETUTCDATE()), GETUTCDATE(), 3180, 92, 8, 0, 449, 1),
      (54, 1, 1054, N'Thí sinh ẩn danh #67', DATEADD(MINUTE, -69, GETUTCDATE()), GETUTCDATE(), 4140, 85, 15, 0, 408, 1),
      (55, 1, 1055, N'Thí sinh ẩn danh #66', DATEADD(MINUTE, -62, GETUTCDATE()), GETUTCDATE(), 3720, 75, 25, 0, 368, 1),
      (56, 1, 1056, N'Thí sinh ẩn danh #65', DATEADD(MINUTE, -53, GETUTCDATE()), GETUTCDATE(), 3180, 87, 13, 0, 428, 1),
      (57, 1, 1057, N'Thí sinh ẩn danh #64', DATEADD(MINUTE, -75, GETUTCDATE()), GETUTCDATE(), 4500, 71, 29, 0, 351, 1),
      (58, 1, 1058, N'Thí sinh ẩn danh #63', DATEADD(MINUTE, -59, GETUTCDATE()), GETUTCDATE(), 3540, 90, 10, 0, 466, 1),
      (59, 1, 1059, N'Thí sinh ẩn danh #62', DATEADD(MINUTE, -73, GETUTCDATE()), GETUTCDATE(), 4380, 69, 31, 0, 350, 1),
      (60, 1, 1060, N'Thí sinh ẩn danh #61', DATEADD(MINUTE, -73, GETUTCDATE()), GETUTCDATE(), 4380, 92, 8, 0, 453, 1),
      (61, 1, 1061, N'Thí sinh ẩn danh #60', DATEADD(MINUTE, -53, GETUTCDATE()), GETUTCDATE(), 3180, 81, 19, 0, 430, 1),
      (62, 1, 1062, N'Thí sinh ẩn danh #59', DATEADD(MINUTE, -71, GETUTCDATE()), GETUTCDATE(), 4260, 94, 6, 0, 468, 1),
      (63, 1, 1063, N'Thí sinh ẩn danh #58', DATEADD(MINUTE, -64, GETUTCDATE()), GETUTCDATE(), 3840, 79, 21, 0, 347, 1),
      (64, 1, 1064, N'Thí sinh ẩn danh #57', DATEADD(MINUTE, -66, GETUTCDATE()), GETUTCDATE(), 3960, 79, 21, 0, 380, 1),
      (65, 1, 1065, N'Thí sinh ẩn danh #56', DATEADD(MINUTE, -53, GETUTCDATE()), GETUTCDATE(), 3180, 73, 27, 0, 371, 1),
      (66, 1, 1066, N'Thí sinh ẩn danh #55', DATEADD(MINUTE, -61, GETUTCDATE()), GETUTCDATE(), 3660, 81, 19, 0, 410, 1),
      (67, 1, 1067, N'Thí sinh ẩn danh #54', DATEADD(MINUTE, -60, GETUTCDATE()), GETUTCDATE(), 3600, 69, 31, 0, 375, 1),
      (68, 1, 1068, N'Thí sinh ẩn danh #53', DATEADD(MINUTE, -60, GETUTCDATE()), GETUTCDATE(), 3600, 93, 7, 0, 459, 1),
      (69, 1, 1069, N'Thí sinh ẩn danh #52', DATEADD(MINUTE, -61, GETUTCDATE()), GETUTCDATE(), 3660, 76, 24, 0, 349, 1),
      (70, 1, 1070, N'Thí sinh ẩn danh #51', DATEADD(MINUTE, -63, GETUTCDATE()), GETUTCDATE(), 3780, 94, 6, 0, 479, 1),
      (71, 1, 1071, N'Thí sinh ẩn danh #50', DATEADD(MINUTE, -56, GETUTCDATE()), GETUTCDATE(), 3360, 76, 24, 0, 347, 1),
      (72, 1, 1072, N'Thí sinh ẩn danh #49', DATEADD(MINUTE, -65, GETUTCDATE()), GETUTCDATE(), 3900, 84, 16, 0, 402, 1),
      (73, 1, 1073, N'Thí sinh ẩn danh #48', DATEADD(MINUTE, -70, GETUTCDATE()), GETUTCDATE(), 4200, 68, 32, 0, 378, 1),
      (74, 1, 1074, N'Thí sinh ẩn danh #47', DATEADD(MINUTE, -63, GETUTCDATE()), GETUTCDATE(), 3780, 78, 22, 0, 384, 1),
      (75, 1, 1075, N'Thí sinh ẩn danh #46', DATEADD(MINUTE, -63, GETUTCDATE()), GETUTCDATE(), 3780, 89, 11, 0, 421, 1),
      (76, 1, 1076, N'Thí sinh ẩn danh #45', DATEADD(MINUTE, -74, GETUTCDATE()), GETUTCDATE(), 4440, 74, 26, 0, 371, 1),
      (77, 1, 1077, N'Thí sinh ẩn danh #44', DATEADD(MINUTE, -70, GETUTCDATE()), GETUTCDATE(), 4200, 77, 23, 0, 370, 1),
      (78, 1, 1078, N'Thí sinh ẩn danh #43', DATEADD(MINUTE, -67, GETUTCDATE()), GETUTCDATE(), 4020, 93, 7, 0, 465, 1),
      (79, 1, 1079, N'Thí sinh ẩn danh #42', DATEADD(MINUTE, -74, GETUTCDATE()), GETUTCDATE(), 4440, 93, 7, 0, 455, 1),
      (80, 1, 1080, N'Thí sinh ẩn danh #41', DATEADD(MINUTE, -55, GETUTCDATE()), GETUTCDATE(), 3300, 87, 13, 0, 416, 1);
    INSERT INTO dbo.ExamAttempts (Id, ExamId, UserId, StudentName, StartTime, EndTime, TimeSpentSeconds, CorrectCount, WrongCount, SkippedCount, Score, IsSubmitted)
    VALUES
      (81, 1, 1081, N'Thí sinh ẩn danh #40', DATEADD(MINUTE, -53, GETUTCDATE()), GETUTCDATE(), 3180, 74, 26, 0, 354, 1),
      (82, 1, 1082, N'Thí sinh ẩn danh #39', DATEADD(MINUTE, -67, GETUTCDATE()), GETUTCDATE(), 4020, 92, 8, 0, 449, 1),
      (83, 1, 1083, N'Thí sinh ẩn danh #38', DATEADD(MINUTE, -68, GETUTCDATE()), GETUTCDATE(), 4080, 90, 10, 0, 469, 1),
      (84, 1, 1084, N'Thí sinh ẩn danh #37', DATEADD(MINUTE, -66, GETUTCDATE()), GETUTCDATE(), 3960, 68, 32, 0, 351, 1),
      (85, 1, 1085, N'Thí sinh ẩn danh #36', DATEADD(MINUTE, -56, GETUTCDATE()), GETUTCDATE(), 3360, 85, 15, 0, 410, 1),
      (86, 1, 1086, N'Thí sinh ẩn danh #35', DATEADD(MINUTE, -63, GETUTCDATE()), GETUTCDATE(), 3780, 85, 15, 0, 433, 1),
      (87, 1, 1087, N'Thí sinh ẩn danh #34', DATEADD(MINUTE, -58, GETUTCDATE()), GETUTCDATE(), 3480, 85, 15, 0, 423, 1),
      (88, 1, 1088, N'Thí sinh ẩn danh #33', DATEADD(MINUTE, -69, GETUTCDATE()), GETUTCDATE(), 4140, 94, 6, 0, 462, 1),
      (89, 1, 1089, N'Thí sinh ẩn danh #32', DATEADD(MINUTE, -62, GETUTCDATE()), GETUTCDATE(), 3720, 70, 30, 0, 390, 1),
      (90, 1, 1090, N'Thí sinh ẩn danh #31', DATEADD(MINUTE, -57, GETUTCDATE()), GETUTCDATE(), 3420, 85, 15, 0, 400, 1),
      (91, 1, 1091, N'Thí sinh ẩn danh #30', DATEADD(MINUTE, -55, GETUTCDATE()), GETUTCDATE(), 3300, 90, 10, 0, 458, 1),
      (92, 1, 1092, N'Thí sinh ẩn danh #29', DATEADD(MINUTE, -59, GETUTCDATE()), GETUTCDATE(), 3540, 81, 19, 0, 398, 1),
      (93, 1, 1093, N'Thí sinh ẩn danh #28', DATEADD(MINUTE, -68, GETUTCDATE()), GETUTCDATE(), 4080, 92, 8, 0, 469, 1),
      (94, 1, 1094, N'Thí sinh ẩn danh #27', DATEADD(MINUTE, -70, GETUTCDATE()), GETUTCDATE(), 4200, 94, 6, 0, 471, 1),
      (95, 1, 1095, N'Thí sinh ẩn danh #26', DATEADD(MINUTE, -68, GETUTCDATE()), GETUTCDATE(), 4080, 76, 24, 0, 372, 1),
      (96, 1, 1096, N'Thí sinh ẩn danh #25', DATEADD(MINUTE, -75, GETUTCDATE()), GETUTCDATE(), 4500, 93, 7, 0, 470, 1),
      (97, 1, 1097, N'Thí sinh ẩn danh #24', DATEADD(MINUTE, -71, GETUTCDATE()), GETUTCDATE(), 4260, 68, 32, 0, 370, 1),
      (98, 1, 1098, N'Thí sinh ẩn danh #23', DATEADD(MINUTE, -54, GETUTCDATE()), GETUTCDATE(), 3240, 82, 18, 0, 406, 1),
      (99, 1, 1099, N'Thí sinh ẩn danh #22', DATEADD(MINUTE, -65, GETUTCDATE()), GETUTCDATE(), 3900, 78, 22, 0, 366, 1),
      (100, 1, 1100, N'Thí sinh ẩn danh #21', DATEADD(MINUTE, -54, GETUTCDATE()), GETUTCDATE(), 3240, 68, 32, 0, 379, 1),
      (101, 1, 1101, N'Thí sinh ẩn danh #20', DATEADD(MINUTE, -60, GETUTCDATE()), GETUTCDATE(), 3600, 69, 31, 0, 346, 1),
      (102, 1, 1102, N'Thí sinh ẩn danh #19', DATEADD(MINUTE, -74, GETUTCDATE()), GETUTCDATE(), 4440, 72, 28, 0, 375, 1),
      (103, 1, 1103, N'Thí sinh ẩn danh #18', DATEADD(MINUTE, -58, GETUTCDATE()), GETUTCDATE(), 3480, 76, 24, 0, 368, 1),
      (104, 1, 1104, N'Thí sinh ẩn danh #17', DATEADD(MINUTE, -71, GETUTCDATE()), GETUTCDATE(), 4260, 68, 32, 0, 364, 1),
      (105, 1, 1105, N'Thí sinh ẩn danh #16', DATEADD(MINUTE, -56, GETUTCDATE()), GETUTCDATE(), 3360, 90, 10, 0, 460, 1),
      (106, 1, 1106, N'Thí sinh ẩn danh #15', DATEADD(MINUTE, -64, GETUTCDATE()), GETUTCDATE(), 3840, 93, 7, 0, 447, 1),
      (107, 1, 1107, N'Thí sinh ẩn danh #14', DATEADD(MINUTE, -53, GETUTCDATE()), GETUTCDATE(), 3180, 88, 12, 0, 416, 1),
      (108, 1, 1108, N'Thí sinh ẩn danh #13', DATEADD(MINUTE, -75, GETUTCDATE()), GETUTCDATE(), 4500, 58, 42, 0, 302, 1),
      (109, 1, 1109, N'Thí sinh ẩn danh #12', DATEADD(MINUTE, -72, GETUTCDATE()), GETUTCDATE(), 4320, 58, 42, 0, 254, 1),
      (110, 1, 1110, N'Thí sinh ẩn danh #11', DATEADD(MINUTE, -63, GETUTCDATE()), GETUTCDATE(), 3780, 61, 39, 0, 253, 1),
      (111, 1, 1111, N'Thí sinh ẩn danh #10', DATEADD(MINUTE, -71, GETUTCDATE()), GETUTCDATE(), 4260, 62, 38, 0, 303, 1),
      (112, 1, 1112, N'Thí sinh ẩn danh #9', DATEADD(MINUTE, -68, GETUTCDATE()), GETUTCDATE(), 4080, 48, 52, 0, 231, 1),
      (113, 1, 1113, N'Thí sinh ẩn danh #8', DATEADD(MINUTE, -70, GETUTCDATE()), GETUTCDATE(), 4200, 66, 34, 0, 255, 1),
      (114, 1, 1114, N'Thí sinh ẩn danh #7', DATEADD(MINUTE, -68, GETUTCDATE()), GETUTCDATE(), 4080, 61, 39, 0, 289, 1),
      (115, 1, 1115, N'Thí sinh ẩn danh #6', DATEADD(MINUTE, -53, GETUTCDATE()), GETUTCDATE(), 3180, 53, 47, 0, 299, 1),
      (116, 1, 1116, N'Thí sinh ẩn danh #5', DATEADD(MINUTE, -74, GETUTCDATE()), GETUTCDATE(), 4440, 45, 55, 0, 263, 1),
      (117, 1, 1117, N'Thí sinh ẩn danh #4', DATEADD(MINUTE, -63, GETUTCDATE()), GETUTCDATE(), 3780, 51, 49, 0, 325, 1),
      (118, 1, 1118, N'Thí sinh ẩn danh #3', DATEADD(MINUTE, -56, GETUTCDATE()), GETUTCDATE(), 3360, 46, 54, 0, 244, 1),
      (119, 1, 1119, N'Thí sinh ẩn danh #2', DATEADD(MINUTE, -59, GETUTCDATE()), GETUTCDATE(), 3540, 62, 38, 0, 232, 1),
      (120, 1, 1120, N'Thí sinh ẩn danh #1', DATEADD(MINUTE, -72, GETUTCDATE()), GETUTCDATE(), 4320, 56, 44, 0, 319, 1);
    SET IDENTITY_INSERT dbo.ExamAttempts OFF;
END
GO

-- 5. Tự động sinh dữ liệu chi tiết câu trả lời (AttemptAnswers) sao cho Top 10 câu sai chuẩn xác
IF NOT EXISTS (SELECT 1 FROM dbo.AttemptAnswers WHERE AttemptId = 1)
BEGIN
    -- Nạp bảng tạm danh sách câu sai của 120 lượt thi
    DECLARE @AttemptId BIGINT;
    DECLARE @QId INT;
    
    -- Mặc định sinh tất cả 100 câu trả lời đúng cho mỗi lượt thi
    INSERT INTO dbo.AttemptAnswers (AttemptId, QuestionId, SelectedAnswerId, IsCorrect, AnsweredTime)
    SELECT ea.Id, q.Id, NULL, 1, ea.EndTime
    FROM dbo.ExamAttempts ea
    CROSS JOIN dbo.Questions q
    WHERE ea.ExamId = 1;

    -- Cập nhật các câu làm sai theo dữ liệu thống kê Top 10 câu hỏi khó nhất:
    -- Top 1: Câu 28 (Id 28, ETS 128) - 82 lượt sai (68.4%)
    UPDATE dbo.AttemptAnswers SET IsCorrect = 0 WHERE QuestionId = 28 AND AttemptId IN (SELECT TOP 82 Id FROM dbo.ExamAttempts ORDER BY Score ASC, Id ASC);

    -- Top 2: Câu 87 (Id 87, ETS 187) - 77 lượt sai (64.2%)
    UPDATE dbo.AttemptAnswers SET IsCorrect = 0 WHERE QuestionId = 87 AND AttemptId IN (SELECT TOP 77 Id FROM dbo.ExamAttempts ORDER BY Score ASC, Id ASC);

    -- Top 3: Câu 98 (Id 98, ETS 198) - 71 lượt sai (59.1%)
    UPDATE dbo.AttemptAnswers SET IsCorrect = 0 WHERE QuestionId = 98 AND AttemptId IN (SELECT TOP 71 Id FROM dbo.ExamAttempts ORDER BY Score ASC, Id ASC);

    -- Top 4: Câu 40 (Id 40, ETS 140) - 66 lượt sai (54.8%)
    UPDATE dbo.AttemptAnswers SET IsCorrect = 0 WHERE QuestionId = 40 AND AttemptId IN (SELECT TOP 66 Id FROM dbo.ExamAttempts ORDER BY Score ASC, Id ASC);

    -- Top 5: Câu 15 (Id 15, ETS 115) - 62 lượt sai (51.3%)
    UPDATE dbo.AttemptAnswers SET IsCorrect = 0 WHERE QuestionId = 15 AND AttemptId IN (SELECT TOP 62 Id FROM dbo.ExamAttempts ORDER BY Score ASC, Id ASC);

    -- Top 6: Câu 63 (Id 63, ETS 163) - 58 lượt sai (48.7%)
    UPDATE dbo.AttemptAnswers SET IsCorrect = 0 WHERE QuestionId = 63 AND AttemptId IN (SELECT TOP 58 Id FROM dbo.ExamAttempts ORDER BY Score ASC, Id ASC);

    -- Top 7: Câu 74 (Id 74, ETS 174) - 55 lượt sai (46.2%)
    UPDATE dbo.AttemptAnswers SET IsCorrect = 0 WHERE QuestionId = 74 AND AttemptId IN (SELECT TOP 55 Id FROM dbo.ExamAttempts ORDER BY Score ASC, Id ASC);

    -- Top 8: Câu 22 (Id 22, ETS 122) - 52 lượt sai (43.5%)
    UPDATE dbo.AttemptAnswers SET IsCorrect = 0 WHERE QuestionId = 22 AND AttemptId IN (SELECT TOP 52 Id FROM dbo.ExamAttempts ORDER BY Score ASC, Id ASC);

    -- Top 9: Câu 82 (Id 82, ETS 182) - 49 lượt sai (41.0%)
    UPDATE dbo.AttemptAnswers SET IsCorrect = 0 WHERE QuestionId = 82 AND AttemptId IN (SELECT TOP 49 Id FROM dbo.ExamAttempts ORDER BY Score ASC, Id ASC);

    -- Top 10: Câu 95 (Id 95, ETS 195) - 47 lượt sai (38.9%)
    UPDATE dbo.AttemptAnswers SET IsCorrect = 0 WHERE QuestionId = 95 AND AttemptId IN (SELECT TOP 47 Id FROM dbo.ExamAttempts ORDER BY Score ASC, Id ASC);
END
GO

-- ============================================================================
-- KIỂM TRA TRUY VẤN STAGING: CHẠY THỬ STORED PROCEDURE
-- ============================================================================
PRINT N'>>> KẾT QUẢ TRUY VẤN dbo.sp_GetTop10DifficultQuestions CHO ĐỀ READING V02:';
EXEC dbo.sp_GetTop10DifficultQuestions @ExamId = 1;
GO

PRINT N'>>> TỔNG KẾT 120 LƯỢT THI CỦA SINH VIÊN:';
SELECT 
    COUNT(*) AS TotalAttempts,
    CAST(AVG(Score * 1.0) AS DECIMAL(5,1)) AS AvgToeicScore,
    CAST(AVG(TimeSpentSeconds * 1.0 / 60.0) AS DECIMAL(5,1)) AS AvgDurationMinutes,
    CAST(SUM(CASE WHEN Score >= 350 THEN 1.0 ELSE 0.0 END) * 100.0 / COUNT(*) AS DECIMAL(5,1)) AS PassingRatePercent
FROM dbo.ExamAttempts
WHERE ExamId = 1 AND IsSubmitted = 1;
GO