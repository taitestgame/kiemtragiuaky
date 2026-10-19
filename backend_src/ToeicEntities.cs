using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;

namespace AbpCompanyName.Toeic
{
    /// <summary>
    /// Bảng Đề thi TOEIC Reading
    /// </summary>
    [Table("Exams")]
    public class Exam : FullAuditedEntity<int>
    {
        [Required]
        [StringLength(50)]
        public string Code { get; set; } // Ví dụ: "Reading v02"

        [Required]
        [StringLength(255)]
        public string Title { get; set; } // "TOEIC Reading Test - Reading v02"

        public string Description { get; set; }

        public int DurationMinutes { get; set; } = 75;

        public int TotalQuestions { get; set; } = 100;

        public bool IsPublished { get; set; } = false;

        public DateTime? PublishedTime { get; set; }

        public virtual ICollection<QuestionGroup> QuestionGroups { get; set; }
        public virtual ICollection<Question> Questions { get; set; }
    }

    /// <summary>
    /// Nhóm câu hỏi / Đoạn văn bài đọc (Part 6, Part 7)
    /// </summary>
    [Table("QuestionGroups")]
    public class QuestionGroup : Entity<int>
    {
        public int ExamId { get; set; }
        [ForeignKey("ExamId")]
        public virtual Exam Exam { get; set; }

        public int PartNumber { get; set; } // 5, 6, 7

        [Required]
        [StringLength(50)]
        public string GroupCode { get; set; } // "131-134", "147-148"

        [StringLength(500)]
        public string PassageTitle { get; set; }

        public string PassageText { get; set; }

        [StringLength(500)]
        public string PassageImageUrl { get; set; }

        public int OrderIndex { get; set; }

        public bool CanShuffleQuestions { get; set; } = false;

        public virtual ICollection<Question> Questions { get; set; }
    }

    /// <summary>
    /// Câu hỏi trắc nghiệm (101 - 200)
    /// </summary>
    [Table("Questions")]
    public class Question : Entity<int>
    {
        public int ExamId { get; set; }
        [ForeignKey("ExamId")]
        public virtual Exam Exam { get; set; }

        public int GroupId { get; set; }
        [ForeignKey("GroupId")]
        public virtual QuestionGroup Group { get; set; }

        public int QuestionNumber { get; set; } // 101 .. 200

        [Required]
        public string QuestionText { get; set; }

        public string Explanation { get; set; } // Gợi ý / giải thích đáp án (HINT)

        public bool CanShuffleAnswers { get; set; } = true;

        public int OrderIndex { get; set; }

        public virtual ICollection<Answer> Answers { get; set; }
    }

    /// <summary>
    /// Lựa chọn đáp án A, B, C, D
    /// </summary>
    [Table("Answers")]
    public class Answer : Entity<int>
    {
        public int QuestionId { get; set; }
        [ForeignKey("QuestionId")]
        public virtual Question Question { get; set; }

        [Required]
        [StringLength(1)]
        public string OptionLabel { get; set; } // "A", "B", "C", "D"

        [Required]
        public string OptionText { get; set; }

        public bool IsCorrect { get; set; }

        public int OrderIndex { get; set; }
    }

    /// <summary>
    /// Phiên thi của thí sinh
    /// </summary>
    [Table("ExamAttempts")]
    public class ExamAttempt : Entity<long>
    {
        public int ExamId { get; set; }
        [ForeignKey("ExamId")]
        public virtual Exam Exam { get; set; }

        public long UserId { get; set; }

        [StringLength(150)]
        public string StudentName { get; set; }

        public DateTime StartTime { get; set; } = DateTime.UtcNow;

        public DateTime? EndTime { get; set; }

        public int? TimeSpentSeconds { get; set; }

        public int CorrectCount { get; set; } = 0;

        public int WrongCount { get; set; } = 0;

        public int SkippedCount { get; set; } = 0;

        public int Score { get; set; } = 0; // Điểm TOEIC Reading (5 - 495)

        public bool IsSubmitted { get; set; } = false;

        public virtual ICollection<AttemptAnswer> AttemptAnswers { get; set; }
    }

    /// <summary>
    /// Chi tiết lựa chọn của thí sinh cho từng câu
    /// </summary>
    [Table("AttemptAnswers")]
    public class AttemptAnswer : Entity<long>
    {
        public long AttemptId { get; set; }
        [ForeignKey("AttemptId")]
        public virtual ExamAttempt Attempt { get; set; }

        public int QuestionId { get; set; }
        [ForeignKey("QuestionId")]
        public virtual Question Question { get; set; }

        public int? SelectedAnswerId { get; set; }
        [ForeignKey("SelectedAnswerId")]
        public virtual Answer SelectedAnswer { get; set; }

        public bool IsCorrect { get; set; }

        public DateTime AnsweredTime { get; set; } = DateTime.UtcNow;
    }
}
