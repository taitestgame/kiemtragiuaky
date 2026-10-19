# -*- coding: utf-8 -*-
"""
Generate clean SQL Server seed data for schema_sql_server.sql:
- Inserts Exam (Reading v02)
- Inserts QuestionGroups and Questions for all 100 questions
- Inserts 120 ExamAttempts (matching the authentic dataset)
- Seeds AttemptAnswers using a clean SQL batch loop so file stays concise
- Adds test verification queries
"""
import json

with open('all_100_questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

with open('frontend/attempts_data.js', 'r', encoding='utf-8') as f:
    js_text = f.read()

# Extract STUDENT_ATTEMPTS_DATA
prefix = "const STUDENT_ATTEMPTS_DATA = "
start_idx = js_text.find(prefix)
if start_idx != -1:
    json_str = js_text[start_idx + len(prefix):].rstrip().rstrip(';')
    attempts = json.loads(json_str)
else:
    attempts = []

sql_lines = []
sql_lines.append("-- ============================================================================")
sql_lines.append("-- SEED DATA: NẠP DỮ LIỆU MẪU ĐỀ THI READING V02 & 120 LƯỢT THI THỰC TẾ")
sql_lines.append("-- ============================================================================")
sql_lines.append("SET NOCOUNT ON;")
sql_lines.append("GO")
sql_lines.append("")

# 1. Insert Exam
sql_lines.append("-- 1. Nạp Đề thi Reading v02")
sql_lines.append("IF NOT EXISTS (SELECT 1 FROM dbo.Exams WHERE ExamCode = 'Reading v02')")
sql_lines.append("BEGIN")
sql_lines.append("    SET IDENTITY_INSERT dbo.Exams ON;")
sql_lines.append("    INSERT INTO dbo.Exams (Id, ExamCode, Title, Description, DurationMinutes, TotalQuestions, IsPublished, IsDeleted)")
sql_lines.append("    VALUES (1, 'Reading v02', N'TOEIC Reading Test - Reading v02', N'Đề thi giữa kỳ môn học (Mã đề v02). Bao gồm 100 câu hỏi: Part 5 (101-130), Part 6 (131-146), Part 7 (147-200).', 75, 100, 1, 0);")
sql_lines.append("    SET IDENTITY_INSERT dbo.Exams OFF;")
sql_lines.append("END")
sql_lines.append("GO")
sql_lines.append("")

# 2. Insert QuestionGroups
sql_lines.append("-- 2. Nạp Nhóm câu hỏi (Part 5, 6, 7)")
sql_lines.append("IF NOT EXISTS (SELECT 1 FROM dbo.QuestionGroups WHERE ExamId = 1)")
sql_lines.append("BEGIN")
sql_lines.append("    SET IDENTITY_INSERT dbo.QuestionGroups ON;")
sql_lines.append("    INSERT INTO dbo.QuestionGroups (Id, ExamId, PartNumber, GroupType, PassageText, OrderIndex)")
sql_lines.append("    VALUES ")
sql_lines.append("      (1, 1, 5, 'IncompleteSentences', N'Part 5: Incomplete Sentences (Câu 101 - 130)', 1),")
sql_lines.append("      (2, 1, 6, 'TextCompletion', N'Part 6: Text Completion (Câu 131 - 146)', 2),")
sql_lines.append("      (3, 1, 7, 'ReadingComprehension', N'Part 7: Reading Comprehension (Câu 147 - 200)', 3);")
sql_lines.append("    SET IDENTITY_INSERT dbo.QuestionGroups OFF;")
sql_lines.append("END")
sql_lines.append("GO")
sql_lines.append("")

# 3. Insert Questions (100 questions)
sql_lines.append("-- 3. Nạp 100 câu hỏi chuẩn từ Reading v02.docx")
sql_lines.append("IF NOT EXISTS (SELECT 1 FROM dbo.Questions WHERE ExamId = 1)")
sql_lines.append("BEGIN")
sql_lines.append("    SET IDENTITY_INSERT dbo.Questions ON;")
q_inserts = []
for idx, q in enumerate(questions, 1):
    part = q['part']
    gid = 1 if part == 5 else (2 if part == 6 else 3)
    q_num = q['num']
    # escape single quotes
    q_text = q['text'].replace("'", "''")
    hint = q.get('hint', '').replace("'", "''")
    q_inserts.append(f"      ({idx}, 1, {gid}, {q_num}, N'{q_text}', N'{hint}', 1, {idx})")

# Batch questions in chunks of 50
for chunk_i in range(0, len(q_inserts), 50):
    chunk = q_inserts[chunk_i:chunk_i+50]
    sql_lines.append("    INSERT INTO dbo.Questions (Id, ExamId, GroupId, QuestionNumber, QuestionText, Explanation, CanShuffleAnswers, OrderIndex)")
    sql_lines.append("    VALUES\n" + ",\n".join(chunk) + ";")

sql_lines.append("    SET IDENTITY_INSERT dbo.Questions OFF;")
sql_lines.append("END")
sql_lines.append("GO")
sql_lines.append("")

# 4. Insert 120 ExamAttempts
sql_lines.append("-- 4. Nạp 120 lượt thi của sinh viên (Chế độ ẩn danh)")
sql_lines.append("IF NOT EXISTS (SELECT 1 FROM dbo.ExamAttempts WHERE ExamId = 1)")
sql_lines.append("BEGIN")
sql_lines.append("    SET IDENTITY_INSERT dbo.ExamAttempts ON;")
att_inserts = []
for idx, a in enumerate(attempts, 1):
    s_label = a['studentLabel'].replace("'", "''")
    dur_sec = a['duration'] * 60
    c_count = a['correct']
    w_count = 100 - c_count
    score = a['score']
    att_inserts.append(f"      ({idx}, 1, {1000 + idx}, N'{s_label}', DATEADD(MINUTE, -{a['duration']}, GETUTCDATE()), GETUTCDATE(), {dur_sec}, {c_count}, {w_count}, 0, {score}, 1)")

for chunk_i in range(0, len(att_inserts), 40):
    chunk = att_inserts[chunk_i:chunk_i+40]
    sql_lines.append("    INSERT INTO dbo.ExamAttempts (Id, ExamId, UserId, StudentName, StartTime, EndTime, TimeSpentSeconds, CorrectCount, WrongCount, SkippedCount, Score, IsSubmitted)")
    sql_lines.append("    VALUES\n" + ",\n".join(chunk) + ";")

sql_lines.append("    SET IDENTITY_INSERT dbo.ExamAttempts OFF;")
sql_lines.append("END")
sql_lines.append("GO")
sql_lines.append("")

# 5. Seed AttemptAnswers using an efficient T-SQL stored block
sql_lines.append("-- 5. Tự động sinh dữ liệu chi tiết câu trả lời (AttemptAnswers) sao cho Top 10 câu sai chuẩn xác")
sql_lines.append("IF NOT EXISTS (SELECT 1 FROM dbo.AttemptAnswers WHERE AttemptId = 1)")
sql_lines.append("BEGIN")
sql_lines.append("""    -- Nạp bảng tạm danh sách câu sai của 120 lượt thi
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
""")

# 6. Test Query
sql_lines.append("-- ============================================================================")
sql_lines.append("-- KIỂM TRA TRUY VẤN STAGING: CHẠY THỬ STORED PROCEDURE")
sql_lines.append("-- ============================================================================")
sql_lines.append("PRINT N'>>> KẾT QUẢ TRUY VẤN dbo.sp_GetTop10DifficultQuestions CHO ĐỀ READING V02:';")
sql_lines.append("EXEC dbo.sp_GetTop10DifficultQuestions @ExamId = 1;")
sql_lines.append("GO")
sql_lines.append("")
sql_lines.append("PRINT N'>>> TỔNG KẾT 120 LƯỢT THI CỦA SINH VIÊN:';")
sql_lines.append("SELECT ")
sql_lines.append("    COUNT(*) AS TotalAttempts,")
sql_lines.append("    CAST(AVG(Score * 1.0) AS DECIMAL(5,1)) AS AvgToeicScore,")
sql_lines.append("    CAST(AVG(TimeSpentSeconds * 1.0 / 60.0) AS DECIMAL(5,1)) AS AvgDurationMinutes,")
sql_lines.append("    CAST(SUM(CASE WHEN Score >= 350 THEN 1.0 ELSE 0.0 END) * 100.0 / COUNT(*) AS DECIMAL(5,1)) AS PassingRatePercent")
sql_lines.append("FROM dbo.ExamAttempts")
sql_lines.append("WHERE ExamId = 1 AND IsSubmitted = 1;")
sql_lines.append("GO")

full_sql_seed = "\n".join(sql_lines)

# Read base schema up to line before seed
with open('schema_sql_server.sql', 'r', encoding='utf-8') as f:
    base_schema = f.read()

# Remove old seed if exists
cut_marker = "-- ============================================================================\n-- SEED DATA"
if cut_marker in base_schema:
    base_schema = base_schema[:base_schema.find(cut_marker)].strip() + "\n\n"
else:
    base_schema = base_schema.strip() + "\n\n"

final_sql = base_schema + full_sql_seed

with open('schema_sql_server.sql', 'w', encoding='utf-8') as f:
    f.write(final_sql)

with open('GiuaKy/backend/Database/schema_sql_server.sql', 'w', encoding='utf-8') as f:
    f.write(final_sql)

print(f"Generated and appended SQL seed data successfully (total length: {len(final_sql)} chars)!")
