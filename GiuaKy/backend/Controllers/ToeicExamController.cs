using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToeicExamApp.Entities;
using ToeicExamApp.Services;

namespace ToeicExamApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ToeicExamController : ControllerBase
    {
        private readonly ToeicDbContext _context;
        private readonly DocxExamParser _parser;

        public ToeicExamController(ToeicDbContext context, DocxExamParser parser)
        {
            _context = context;
            _parser = parser;
        }

        /// <summary>
        /// 1. Upload file Word .docx, phân tích cú pháp bộ Tags và lưu vào CSDL SQL Server.
        /// Tự động Rollback Transaction nếu phát hiện bất kỳ lỗi cú pháp nào.
        /// </summary>
        [HttpPost("upload")]
        public async Task<IActionResult> UploadExamWordFile(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest(new { success = false, message = "Vui lòng chọn file Word (.docx) hợp lệ." });

            if (!Path.GetExtension(file.FileName).Equals(".docx", StringComparison.OrdinalIgnoreCase))
                return BadRequest(new { success = false, message = "Chỉ chấp nhận file định dạng Word (.docx)." });

            using var memoryStream = new MemoryStream();
            await file.CopyToAsync(memoryStream);
            memoryStream.Position = 0;

            // Bắt đầu Transaction bảo đảm tính toàn vẹn CSDL (ACID)
            using var transaction = await _context.Database.BeginTransactionAsync();
            try
            {
                var parseResult = _parser.Parse(memoryStream, file.FileName);

                if (!parseResult.Success)
                {
                    // Phát hiện lỗi cú pháp -> Hủy bỏ toàn bộ (Rollback)
                    await transaction.RollbackAsync();
                    return UnprocessableEntity(new
                    {
                        success = false,
                        message = "Phát hiện lỗi cú pháp trong file Word. Hệ thống đã hủy bỏ toàn bộ dữ liệu (Rollback).",
                        errors = parseResult.Errors
                    });
                }

                // Lưu Exam và các thực thể liên kết vào SQL Server
                _context.Exams.Add(parseResult.Exam);
                await _context.SaveChangesAsync();
                await transaction.CommitAsync();

                return Ok(new
                {
                    success = true,
                    message = "Tải lên và nạp đề thi thành công vào CSDL Microsoft SQL Server!",
                    examId = parseResult.Exam.Id,
                    totalQuestions = parseResult.Exam.Questions.Count,
                    part5Count = parseResult.Exam.Questions.Count(q => q.PartNumber == 5),
                    part6Count = parseResult.Exam.Questions.Count(q => q.PartNumber == 6),
                    part7Count = parseResult.Exam.Questions.Count(q => q.PartNumber == 7)
                });
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                return StatusCode(500, new { success = false, message = "Lỗi hệ thống trong quá trình phân tích:", detail = ex.Message });
            }
        }

        /// <summary>
        /// 2. Lấy danh sách đề thi (Web Admin và Mobile App)
        /// Mobile App chỉ hiển thị đề có IsPublished = true khi sinh viên không đăng nhập.
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetExams([FromQuery] bool onlyPublished = false)
        {
            var query = _context.Exams.AsNoTracking().Where(e => !e.IsDeleted);
            if (onlyPublished)
            {
                query = query.Where(e => e.IsPublished);
            }

            var exams = await query.Select(e => new
            {
                e.Id,
                e.Code,
                e.Title,
                e.DurationMinutes,
                e.TotalQuestions,
                e.IsPublished,
                e.CreatedAt
            }).ToListAsync();

            return Ok(exams);
        }

        /// <summary>
        /// 3. Chức năng Đóng Đề Thi / Kích Hoạt Ca Thi (Tiêu chí IV.1.c)
        /// Giảng viên bật/tắt quyền truy cập của sinh viên.
        /// </summary>
        [HttpPost("{id}/toggle-publish")]
        public async Task<IActionResult> TogglePublish(long id)
        {
            var exam = await _context.Exams.FindAsync(id);
            if (exam == null || exam.IsDeleted)
                return NotFound(new { success = false, message = "Không tìm thấy đề thi." });

            exam.IsPublished = !exam.IsPublished;
            await _context.SaveChangesAsync();

            var statusText = exam.IsPublished ? "Đang Mở Ca Thi" : "Đã Đóng Đề Thi";
            return Ok(new
            {
                success = true,
                isPublished = exam.IsPublished,
                statusText,
                message = exam.IsPublished 
                    ? "Đã kích hoạt ca thi thành công! Sinh viên có thể vào thi ngay trên ứng dụng di động."
                    : "Đã đóng ca thi! Sinh viên tạm thời không thể vào làm bài."
            });
        }

        /// <summary>
        /// 4. Chỉnh sửa nội dung câu hỏi, đáp án, và gợi ý [HINT] (Tiêu chí IV.1.d)
        /// Hỗ trợ sửa toàn bộ 100 câu hỏi (Câu 1 đến Câu 100).
        /// </summary>
        [HttpPut("{examId}/questions/{questionId}")]
        public async Task<IActionResult> UpdateQuestion(long examId, long questionId, [FromBody] UpdateQuestionDto dto)
        {
            var question = await _context.Questions
                .Include(q => q.Answers)
                .Include(q => q.Group)
                .FirstOrDefaultAsync(q => q.Id == questionId && q.ExamId == examId);

            if (question == null)
                return NotFound(new { success = false, message = "Không tìm thấy câu hỏi." });

            question.QuestionText = dto.QuestionText;
            question.Explanation = dto.Hint;

            if (question.Group != null)
            {
                if (!string.IsNullOrEmpty(dto.PassageTitle)) question.Group.PassageTitle = dto.PassageTitle;
                if (!string.IsNullOrEmpty(dto.PassageText)) question.Group.PassageText = dto.PassageText;
            }

            // Cập nhật nội dung các lựa chọn và đánh dấu đáp án đúng
            foreach (var ans in question.Answers)
            {
                if (dto.Options.TryGetValue(ans.OptionLabel, out var text))
                {
                    ans.OptionText = text;
                }
                ans.IsCorrect = (ans.OptionLabel == dto.CorrectOption);
            }

            await _context.SaveChangesAsync();
            return Ok(new { success = true, message = $"Đã cập nhật Câu {question.QuestionNumber} thành công!" });
        }

        /// <summary>
        /// 5. Thống kê Top 10 câu hỏi sinh viên hay làm sai nhất (Gọi Stored Procedure)
        /// </summary>
        [HttpGet("{examId}/analytics/top-difficult")]
        public async Task<IActionResult> GetTop10DifficultQuestions(long examId)
        {
            var results = await _context.Set<DifficultQuestionDto>()
                .FromSqlInterpolated($"EXEC dbo.sp_GetTop10DifficultQuestions @ExamId={examId}")
                .ToListAsync();

            return Ok(results);
        }

        /// <summary>
        /// 6. Lấy lịch sử sinh viên nộp bài & bảng điểm (Exam Attempts Log)
        /// </summary>
        [HttpGet("{examId}/attempts")]
        public async Task<IActionResult> GetExamAttempts(long examId)
        {
            var attempts = await _context.ExamAttempts
                .AsNoTracking()
                .Where(a => a.ExamId == examId)
                .OrderByDescending(a => a.SubmittedAt)
                .Select(a => new
                {
                    a.Id,
                    a.StudentCode,
                    a.StudentName,
                    a.StudentClass,
                    a.SubmittedAt,
                    DurationMinutes = Math.Round(a.TimeSpentSeconds / 60.0, 1),
                    a.CorrectCount,
                    TotalQuestions = 100,
                    a.EstimatedScore,
                    Rating = a.EstimatedScore >= 450 ? "Xuất Sắc" : (a.EstimatedScore >= 400 ? "Giỏi" : (a.EstimatedScore >= 350 ? "Khá" : "Trung Bình"))
                })
                .ToListAsync();

            return Ok(attempts);
        }

        /// <summary>
        /// 7. Xóa đề thi (Cơ chế Soft-Delete trong CSDL Microsoft SQL Server)
        /// Đánh dấu IsDeleted = true để giữ toàn vẹn dữ liệu điểm số và lịch sử thi của thí sinh.
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExam(long id)
        {
            var exam = await _context.Exams.FindAsync(id);
            if (exam == null || exam.IsDeleted)
                return NotFound(new { success = false, message = "Không tìm thấy đề thi hoặc đề thi đã bị xóa trước đó." });

            exam.IsDeleted = true;
            exam.IsPublished = false; // Tự động đóng đề thi
            await _context.SaveChangesAsync();

            return Ok(new
            {
                success = true,
                examId = exam.Id,
                examCode = exam.Code,
                message = $"Đã xóa đề thi '{exam.Code}' thành công (Chuyển vào thùng rác Soft-Delete). Dữ liệu điểm số và lịch sử làm bài vẫn được bảo toàn nguyên vẹn."
            });
        }

        /// <summary>
        /// 8. Khôi phục đề thi đã xóa từ thùng rác (Restore Soft-Deleted Exam)
        /// </summary>
        [HttpPost("{id}/restore")]
        public async Task<IActionResult> RestoreExam(long id)
        {
            var exam = await _context.Exams.FindAsync(id);
            if (exam == null)
                return NotFound(new { success = false, message = "Không tìm thấy đề thi." });

            if (!exam.IsDeleted)
                return BadRequest(new { success = false, message = "Đề thi hiện đang ở trạng thái hoạt động bình thường, không cần khôi phục." });

            exam.IsDeleted = false;
            exam.IsPublished = true; // Mở lại ca thi
            await _context.SaveChangesAsync();

            return Ok(new
            {
                success = true,
                examId = exam.Id,
                examCode = exam.Code,
                message = $"Đã khôi phục đề thi '{exam.Code}' thành công! Đề thi đã quay trở lại danh sách hoạt động và ca thi đã được kích hoạt."
            });
        }
    }

    public class UpdateQuestionDto
    {
        public string QuestionText { get; set; }
        public string PassageTitle { get; set; }
        public string PassageText { get; set; }
        public Dictionary<string, string> Options { get; set; } = new();
        public string CorrectOption { get; set; }
        public string Hint { get; set; }
    }

    public class DifficultQuestionDto
    {
        public int RankNumber { get; set; }
        public int QuestionNumber { get; set; }
        public int PartNumber { get; set; }
        public string QuestionSnippet { get; set; }
        public int TotalAttempts { get; set; }
        public int WrongCount { get; set; }
        public decimal WrongRatePercent { get; set; }
        public string Explanation { get; set; }
    }
}
