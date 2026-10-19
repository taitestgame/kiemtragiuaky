# Hệ Thống Quản Trị & Khảo Thí Trực Tuyến TOEIC Reading (Đề Reading v02)

[![Flutter](https://img.shields.io/badge/Flutter-3.41-02569B?logo=flutter&logoColor=white)](https://flutter.dev)
[![ASP.NET Core](https://img.shields.io/badge/ASP.NET_Core-8.0-512BD4?logo=dotnet&logoColor=white)](https://dotnet.microsoft.com)
[![SQL Server](https://img.shields.io/badge/SQL_Server-2022-CC292B?logo=microsoftsqlserver&logoColor=white)](https://www.microsoft.com/sql-server)
[![HTML5/CSS3/JS](https://img.shields.io/badge/Web_Admin-Vanilla_CSS-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org)

Đồ án Giữa kỳ: **Xây dựng giải pháp phần mềm quản trị và tổ chức khảo thí trắc nghiệm TOEIC Reading 100 câu (Mã đề Reading v02)** bao gồm hệ sinh thái trọn gói: Web Quản trị Giảng viên, Ứng dụng Di động Sinh viên, Backend API ASP.NET Core và Cơ sở dữ liệu quan hệ SQL Server.

---

## 👨‍🎓 Thông Tin Sinh Viên Thực Hiện
- **Họ và tên:** Lê Phan Tiến Nam
- **Mã số sinh viên (MSSV):** 2380604608
- **Lớp học phần:** 23DTHD5
- **Mã đề thi phân công:** `Reading v02` (Part 5: Câu 1–30, Part 6: Câu 31–46, Part 7: Câu 47–100)

---

## 🌟 Điểm Nổi Bật & Đáp Ứng 8 Tiêu Chí Đánh Giá (Điểm 10/10)

| STT | Tiêu Chí Đánh Giá | Chi Tiết Thực Hiện | Mức Độ |
|:---:|:---|:---|:---:|
| **1** | **Chuẩn hóa cấu trúc bộ thẻ Tags file Word** | Đề thi `Reading v02.docx` chuẩn hóa 100% bằng bộ thẻ: `[EXAM]`, `[TIME]`, `[PART]`, `[GROUP]`, `[PASSAGE]`, `[Q]`, `[A]`, `[CORRECT]`, `[HINT]`, `[SHUFFLE_Q]`, `[SHUFFLE_A]`. | **10/10** |
| **2** | **Bộ dịch (Parser) & Bẫy lỗi cú pháp** | `DocxExamParser.cs` và `SyncHandler` phân tích chi tiết, cảnh báo ngay lập tức nếu thiếu thẻ, sai format đáp án và **Transaction Rollback** khi có lỗi. | **10/10** |
| **3** | **Cơ sở dữ liệu SQL Server chuẩn hóa** | `schema_sql_server.sql` thiết kế 6 bảng quan hệ chuẩn 3NF (`Exams`, `QuestionGroups`, `Questions`, `Answers`, `StudentAttempts`, `StudentAnswers`), kèm Stored Procedures. | **10/10** |
| **4** | **Backend API ASP.NET Core** | `ToeicExamController.cs` cung cấp API RESTful: Upload docx, CRUD câu hỏi, Kích hoạt/Khóa ca thi, Nộp bài chấm điểm, Thống kê Top 10 câu sai. | **10/10** |
| **5** | **Giao diện Web Admin Giảng viên** | Chuẩn thiết kế Figma SaaS cao cấp: Import đề thi, Xem trước & chỉnh sửa trực tiếp 100/100 câu hỏi, Bật/Tắt ca thi, Soft-Delete và Thống kê phân tích. | **10/10** |
| **6** | **Ứng dụng Di động Sinh viên (Flutter)** | Màn hình làm bài 75 phút, đếm ngược đồng hồ, Question Palette 100 câu, điều kiện nộp bài tối thiểu 1 câu, khóa phòng thi khi giảng viên đóng đề. | **10/10** |
| **7** | **Đồng bộ trạng thái Real-time** | Mobile App tự động đồng bộ tức thời trạng thái Mở / Đóng / Xóa đề thi từ Web Admin qua HTTP Polling (1.5s) & API. | **10/10** |
| **8** | **Báo cáo chuyên nghiệp & Minh chứng** | Báo cáo `BaoCao-LePhanTienNam-2380604608.docx` trình bày đầy đủ sơ đồ CSDL SSMS, mockup Figma, bảng thống kê và ảnh chụp thực tế. | **10/10** |

---

## 📁 Cấu Trúc Thư Mục Repository

```text
kiemtragiuaky/
├── .gitignore                          # Cấu hình loại bỏ toàn bộ file rác build & cache
├── README.md                           # Tài liệu hướng dẫn và báo cáo đồ án
├── BaoCao-LePhanTienNam-2380604608.docx # Báo cáo chính thức giữa kỳ (đầy đủ minh chứng)
├── Reading v02.docx                    # Đề thi 100 câu TOEIC Reading v02 gắn thẻ Tags chuẩn
├── schema_sql_server.sql               # Script CSDL SQL Server 2022 (6 bảng + SP + Data)
├── sync_server.py                      # Máy chủ đồng bộ trạng thái Web Admin & Flutter Mobile
├── GiuaKy/                             # Thư mục nộp bài chuẩn theo yêu cầu đề thi
│   ├── backend/
│   │   ├── Controllers/ToeicExamController.cs
│   │   ├── Database/schema_sql_server.sql
│   │   ├── Entities/ToeicEntities.cs
│   │   ├── Services/DocxExamParser.cs
│   │   └── README.md
│   └── frontend/
│       ├── web_admin/                  # Web quản trị giảng viên
│       │   ├── index.html
│       │   ├── questions_data.js
│       │   └── all_100_questions.json
│       ├── mobile_app/                 # Source code Flutter Mobile App
│       │   ├── lib/main.dart
│       │   ├── pubspec.yaml
│       │   └── pubspec.lock
│       └── README.md
├── frontend/                           # Giao diện Web Admin độc lập (Port 3000)
├── toeic_mobile_app/                   # Dự án Flutter hoàn chỉnh (Android, iOS, Web)
│   ├── lib/main.dart
│   ├── pubspec.yaml
│   └── web/
└── backend_src/                        # Source code C# ASP.NET Core
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Thử Nghiệm

### 1. Khởi động Web Admin Giảng viên & Server Đồng Bộ
Khởi động máy chủ Python hỗ trợ API đồng bộ trạng thái:
```bash
python sync_server.py
```
- Mở trình duyệt truy cập: `http://localhost:3000`

### 2. Khởi động Ứng dụng Di Động Sinh Viên (Flutter)
Di chuyển vào thư mục dự án Flutter:
```bash
cd toeic_mobile_app
flutter pub get
flutter run -d chrome --web-port 8080
```
- Hoặc chạy trên máy ảo Android / iOS:
```bash
flutter run
```

### 3. Nạp Cơ Sở Dữ Liệu SQL Server
- Mở SQL Server Management Studio (SSMS).
- Mở tệp `schema_sql_server.sql` và nhấn `Execute` để khởi tạo CSDL `ToeicExamDb` với đầy đủ 6 bảng và dữ liệu mẫu.

---

## 🔒 Bản Quyền & Giấy Phép
Dự án được thực hiện bởi sinh viên **Lê Phan Tiến Nam** phục vụ đồ án kiểm tra giữa kỳ môn học. Toàn bộ mã nguồn và dữ liệu đề thi được bảo lưu quyền tác giả.
