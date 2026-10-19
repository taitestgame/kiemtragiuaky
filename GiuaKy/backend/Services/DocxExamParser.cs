using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;

namespace AbpCompanyName.Toeic
{
    public class ParseResult
    {
        public bool IsSuccess { get; set; }
        public List<string> Errors { get; set; } = new List<string>();
        public Exam ParsedExam { get; set; }
    }

    /// <summary>
    /// Service phân tích và kiểm tra cú pháp file Word đề thi (.docx)
    /// Đảm bảo tính toàn vẹn 100% trước khi lưu vào CSDL SQL Server.
    /// </summary>
    public class DocxExamParser
    {
        public ParseResult ParseDocxStream(Stream docxStream)
        {
            var result = new ParseResult();
            var lines = new List<string>();

            try
            {
                using (WordprocessingDocument wordDoc = WordprocessingDocument.Open(docxStream, false))
                {
                    var body = wordDoc.MainDocumentPart.Document.Body;
                    foreach (var para in body.Elements<Paragraph>())
                    {
                        var text = para.InnerText?.Trim();
                        if (!string.IsNullOrEmpty(text))
                        {
                            // Tách nếu có nhiều dòng trong 1 paragraph
                            var splitLines = text.Split(new[] { '\r', '\n' }, StringSplitOptions.RemoveEmptyEntries);
                            foreach (var line in splitLines)
                            {
                                if (!string.IsNullOrWhiteSpace(line))
                                    lines.Add(line.Trim());
                            }
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                result.IsSuccess = false;
                result.Errors.Add($"Lỗi cấu trúc file Word .docx không hợp lệ: {ex.Message}");
                return result;
            }

            // Tiến hành phân tích bộ thẻ (Tags)
            return ValidateAndBuildExam(lines);
        }

        private ParseResult ValidateAndBuildExam(List<string> lines)
        {
            var result = new ParseResult();
            var exam = new Exam
            {
                Code = "Reading v02",
                Title = "TOEIC Reading Test - Reading v02",
                DurationMinutes = 75,
                TotalQuestions = 100,
                IsPublished = false,
                QuestionGroups = new List<QuestionGroup>(),
                Questions = new List<Question>()
            };

            int currentPart = 5;
            QuestionGroup currentGroup = null;
            Question currentQuestion = null;
            var currentOptions = new Dictionary<string, string>();
            string currentCorrect = null;
            string currentHint = null;
            int questionCount = 0;

            // Kiểm tra thẻ bắt đầu & kết thúc
            bool hasExamBegin = lines.Any(l => l.Contains("[EXAM_BEGIN]"));
            bool hasExamEnd = lines.Any(l => l.Contains("[EXAM_END]"));

            if (!hasExamBegin)
                result.Errors.Add("Thiếu thẻ bắt đầu toàn bộ bài thi: [EXAM_BEGIN]");
            if (!hasExamEnd)
                result.Errors.Add("Thiếu thẻ kết thúc toàn bộ bài thi: [EXAM_END]");

            for (int i = 0; i < lines.Count; i++)
            {
                string line = lines[i];

                // Đọc metadata đề thi
                if (line.StartsWith("[EXAM_TITLE:"))
                {
                    exam.Title = ExtractTagValue(line, "[EXAM_TITLE:");
                    continue;
                }
                if (line.StartsWith("[EXAM_DURATION:"))
                {
                    if (int.TryParse(ExtractTagValue(line, "[EXAM_DURATION:"), out int dur))
                        exam.DurationMinutes = dur;
                    continue;
                }

                // Chuyển Part
                if (line.StartsWith("[PART:"))
                {
                    string partStr = ExtractTagValue(line, "[PART:");
                    if (int.TryParse(partStr, out int partNum))
                    {
                        currentPart = partNum;
                        if (currentPart == 5)
                        {
                            currentGroup = new QuestionGroup
                            {
                                PartNumber = 5,
                                GroupCode = "P5-SINGLE",
                                PassageTitle = "Incomplete Sentences",
                                CanShuffleQuestions = true,
                                Questions = new List<Question>()
                            };
                            exam.QuestionGroups.Add(currentGroup);
                        }
                    }
                    continue;
                }

                // Part 6 & 7 Group Begin
                if (line.StartsWith("[GROUP_BEGIN:"))
                {
                    string groupCode = ExtractTagValue(line, "[GROUP_BEGIN:");
                    currentGroup = new QuestionGroup
                    {
                        PartNumber = currentPart,
                        GroupCode = groupCode,
                        CanShuffleQuestions = false,
                        Questions = new List<Question>()
                    };
                    exam.QuestionGroups.Add(currentGroup);
                    continue;
                }

                if (line.StartsWith("[PASSAGE_TITLE:"))
                {
                    if (currentGroup != null)
                        currentGroup.PassageTitle = ExtractTagValue(line, "[PASSAGE_TITLE:");
                    continue;
                }

                if (line.StartsWith("[PASSAGE_IMAGE:"))
                {
                    if (currentGroup != null)
                        currentGroup.PassageImageUrl = ExtractTagValue(line, "[PASSAGE_IMAGE:");
                    continue;
                }

                if (line.StartsWith("[PASSAGE_TEXT]"))
                {
                    var passageLines = new List<string>();
                    i++;
                    while (i < lines.Count && !lines[i].Contains("[/PASSAGE_TEXT]"))
                    {
                        passageLines.Add(lines[i]);
                        i++;
                    }
                    if (currentGroup != null)
                        currentGroup.PassageText = string.Join("\n", passageLines);
                    continue;
                }

                // Bắt đầu Câu hỏi
                if (line.StartsWith("[QUESTION:"))
                {
                    string qNumStr = ExtractTagValue(line, "[QUESTION:");
                    if (!int.TryParse(qNumStr, out int qNum))
                    {
                        result.Errors.Add($"Dòng {i + 1}: Số thứ tự câu hỏi không hợp lệ: '{line}'");
                        continue;
                    }

                    questionCount++;
                    int expectedNum = 100 + questionCount;
                    if (qNum != expectedNum)
                    {
                        result.Errors.Add($"Dòng {i + 1}: Sai thứ tự câu hỏi! Đang mong đợi câu {expectedNum} nhưng nhận được câu {qNum}.");
                    }

                    currentQuestion = new Question
                    {
                        QuestionNumber = qNum,
                        OrderIndex = questionCount,
                        Answers = new List<Answer>()
                    };
                    currentOptions.Clear();
                    currentCorrect = null;
                    currentHint = null;

                    // Dòng tiếp theo thường là nội dung câu hỏi
                    if (i + 1 < lines.Count && !lines[i + 1].StartsWith("["))
                    {
                        i++;
                        currentQuestion.QuestionText = lines[i];
                    }
                    continue;
                }

                // Các lựa chọn đáp án [A], [B], [C], [D]
                var optMatch = Regex.Match(line, @"^\[([A-D])\]\s*(.*)$");
                if (optMatch.Success)
                {
                    string optKey = optMatch.Groups[1].Value;
                    string optText = optMatch.Groups[2].Value;
                    // Bỏ tiền tố (A) nếu có
                    optText = Regex.Replace(optText, @"^\([A-D]\)\s*", "");
                    currentOptions[optKey] = optText;
                    continue;
                }

                // Đáp án đúng
                if (line.StartsWith("[CORRECT:"))
                {
                    currentCorrect = ExtractTagValue(line, "[CORRECT:").ToUpper();
                    continue;
                }

                // Gợi ý / giải thích
                if (line.StartsWith("[HINT:"))
                {
                    currentHint = ExtractTagValue(line, "[HINT:");
                    continue;
                }

                // Kết thúc câu hỏi
                if (line.StartsWith("[QUESTION_END]"))
                {
                    if (currentQuestion == null)
                    {
                        result.Errors.Add($"Dòng {i + 1}: Thẻ [QUESTION_END] xuất hiện nhưng không có câu hỏi nào đang mở.");
                        continue;
                    }

                    // Kiểm tra đủ 4 đáp án A, B, C, D
                    foreach (var key in new[] { "A", "B", "C", "D" })
                    {
                        if (!currentOptions.ContainsKey(key) || string.IsNullOrWhiteSpace(currentOptions[key]))
                        {
                            result.Errors.Add($"Câu {currentQuestion.QuestionNumber}: Thiếu lựa chọn đáp án [{key}].");
                        }
                    }

                    // Kiểm tra đáp án đúng hợp lệ
                    if (string.IsNullOrEmpty(currentCorrect) || !"ABCD".Contains(currentCorrect))
                    {
                        result.Errors.Add($"Câu {currentQuestion.QuestionNumber}: Đáp án đúng không hợp lệ hoặc bị thiếu [CORRECT: A/B/C/D].");
                    }

                    currentQuestion.Explanation = currentHint;

                    // Tạo các entity Answer
                    foreach (var kvp in currentOptions.OrderBy(x => x.Key))
                    {
                        currentQuestion.Answers.Add(new Answer
                        {
                            OptionLabel = kvp.Key,
                            OptionText = kvp.Value,
                            IsCorrect = (kvp.Key == currentCorrect),
                            OrderIndex = kvp.Key[0] - 'A' + 1
                        });
                    }

                    if (currentGroup != null)
                        currentGroup.Questions.Add(currentQuestion);
                    exam.Questions.Add(currentQuestion);

                    currentQuestion = null;
                    continue;
                }
            }

            // Kiểm tra tổng số câu hỏi
            if (questionCount != 100)
            {
                result.Errors.Add($"Tổng số câu hỏi không đủ 100 câu theo chuẩn TOEIC Reading! Tìm thấy: {questionCount} câu.");
            }

            if (result.Errors.Count > 0)
            {
                result.IsSuccess = false;
                result.ParsedExam = null; // Huỷ bỏ không lưu CSDL nếu có bất kỳ lỗi nào
            }
            else
            {
                result.IsSuccess = true;
                result.ParsedExam = exam;
            }

            return result;
        }

        private string ExtractTagValue(string line, string tagPrefix)
        {
            int start = line.IndexOf(tagPrefix) + tagPrefix.Length;
            int end = line.LastIndexOf("]");
            if (end > start)
                return line.Substring(start, end - start).Trim();
            return line.Substring(start).Trim();
        }
    }
}
