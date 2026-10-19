# Đồ Án Giữa Kỳ: Hệ Thống Khảo Thí TOEIC Reading (Đề Reading v02)

[![Flutter](https://img.shields.io/badge/Flutter-3.41-02569B?logo=flutter&logoColor=white)](https://flutter.dev)
[![ASP.NET Core](https://img.shields.io/badge/ASP.NET_Core-8.0-512BD4?logo=dotnet&logoColor=white)](https://dotnet.microsoft.com)
[![SQL Server](https://img.shields.io/badge/SQL_Server-2022-CC292B?logo=microsoftsqlserver&logoColor=white)](https://www.microsoft.com/sql-server)

## 👨‍🎓 Thông Tin Sinh Viên
- **Họ và tên:** Lê Phan Tiến Nam
- **MSSV:** 2380604608
- **Lớp:** 23DTHD5
- **Mã đề thi:** `Reading v02` (100 câu trắc nghiệm: Part 5, Part 6, Part 7)

---

## 📁 Cấu Trúc Thư Mục Đồ Án (GiuaKy)

```text
├── GiuaKy/
│   ├── backend/
│   │   ├── Controllers/ToeicExamController.cs    # API RESTful quản trị đề thi, chấm điểm, thống kê
│   │   ├── Database/schema_sql_server.sql        # Script CSDL 6 bảng chuẩn 3NF, Stored Procedures & Seed Data
│   │   ├── Entities/ToeicEntities.cs             # Entity Models C#
│   │   ├── Services/DocxExamParser.cs            # Parser bẫy lỗi thẻ Tags & Transaction Rollback
│   │   └── README.md
│   └── frontend/
│       ├── web_admin/                            # Web Quản trị Giảng viên
│       │   ├── index.html                        # Giao diện SaaS chuẩn Figma
│       │   ├── all_100_questions.json            # 100 câu hỏi chuẩn đề Reading v02
│       │   ├── attempts_data.js                  # Dữ liệu 120 lượt thi & Top 10 câu khó nhất
│       │   └── questions_data.js
│       └── mobile_app/                           # Ứng dụng Di động Sinh viên (Flutter)
│           ├── lib/main.dart                     # Màn hình thi 75 phút, đồng bộ mở/đóng/xóa đề
│           ├── pubspec.yaml
│           └── pubspec.lock
├── frontend/                                     # Web Admin độc lập (Port 3000)
├── backend_src/                                  # Source C# nghiệp vụ
└── toeic_mobile_app/                             # Toàn bộ dự án Flutter di động
```

---

## 🌟 Điểm Nổi Bật Đồ Án
1. **Chuẩn hóa 100 câu đề Reading v02**: Gắn đầy đủ thẻ Tags `[EXAM]`, `[TIME]`, `[PART]`, `[GROUP]`, `[PASSAGE]`, `[Q]`, `[A]`, `[CORRECT]`, `[HINT]`.
2. **Parser bẫy lỗi & Transaction Rollback**: Tự động phát hiện lỗi cú pháp, số thứ tự câu nhảy cóc, thiếu lựa chọn đáp án và rollback CSDL bảo đảm toàn vẹn.
3. **CSDL SQL Server 2022**: 6 bảng chuẩn quan hệ 3NF, Stored Procedure chấm điểm `dbo.sp_CalculateExamScore` và thống kê `dbo.sp_GetTop10DifficultQuestions`.
4. **Web Admin SaaS chuẩn Figma**: Chỉnh sửa trực tiếp 100 câu, bật/tắt đóng ca thi, xóa đề thi (Soft-delete), thống kê Top 10 câu khó nhất và xuất file Excel 120 lượt thi.
5. **Mobile App Flutter**: Làm bài 75 phút, Question Palette 100 câu, tối thiểu 1 câu được nộp bài, tự động đồng bộ thời gian thực với Web Admin.
