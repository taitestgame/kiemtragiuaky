import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'models/exam_data.dart';

void main() {
  runApp(const ToeicExamApp());
}

class ToeicExamApp extends StatelessWidget {
  const ToeicExamApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'TOEIC Reading Test',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF2563EB),
          primary: const Color(0xFF2563EB),
          surface: const Color(0xFFF8FAFC),
        ),
        scaffoldBackgroundColor: const Color(0xFFF8FAFC),
        appBarTheme: const AppBarTheme(
          backgroundColor: Colors.white,
          elevation: 0,
          scrolledUnderElevation: 1,
          iconTheme: IconThemeData(color: Color(0xFF0F172A)),
          titleTextStyle: TextStyle(
            color: Color(0xFF0F172A),
            fontSize: 18,
            fontWeight: FontWeight.w700,
          ),
        ),
      ),
      home: const ExamListScreen(),
    );
  }
}

// ============================================================================
// SCREEN 1: DANH SÁCH ĐỀ THI (KHÔNG CẦN ĐĂNG KÝ / ĐĂNG NHẬP, TỰ ĐỘNG ĐỒNG BỘ TRẠNG THÁI)
// ============================================================================
class ExamListScreen extends StatefulWidget {
  const ExamListScreen({super.key});

  @override
  State<ExamListScreen> createState() => _ExamListScreenState();
}

class _ExamListScreenState extends State<ExamListScreen> {
  bool isExamDeleted = false;
  bool isExamPublished = true;
  Timer? _statusPollingTimer;

  @override
  void initState() {
    super.initState();
    _fetchExamStatus();
    // Tự động kiểm tra trạng thái mỗi 1.5 giây để đồng bộ tức thời khi giảng viên đóng/xóa trên web
    _statusPollingTimer = Timer.periodic(const Duration(milliseconds: 1500), (_) {
      _fetchExamStatus();
    });
  }

  @override
  void dispose() {
    _statusPollingTimer?.cancel();
    super.dispose();
  }

  Future<void> _fetchExamStatus() async {
    // 1. Thử gọi API từ server port 3000
    try {
      final response = await http
          .get(Uri.parse('http://localhost:3000/api/exam-status'))
          .timeout(const Duration(milliseconds: 800));
      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        if (mounted) {
          setState(() {
            isExamDeleted = data['isDeleted'] == true;
            isExamPublished = data['isPublished'] != false;
          });
        }
        return;
      }
    } catch (_) {}

    // 2. Fallback: Lấy từ file exam_status.json cùng máy chủ
    try {
      final response2 = await http
          .get(Uri.parse('/exam_status.json'))
          .timeout(const Duration(milliseconds: 800));
      if (response2.statusCode == 200) {
        final data = jsonDecode(response2.body);
        if (mounted) {
          setState(() {
            isExamDeleted = data['isDeleted'] == true;
            isExamPublished = data['isPublished'] != false;
          });
        }
      }
    } catch (_) {}
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Kỳ Thi TOEIC Reading'),
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh, color: Color(0xFF2563EB)),
            tooltip: 'Làm Mới Trạng Thái',
            onPressed: () {
              _fetchExamStatus();
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(
                  content: Text('🔄 Đang đồng bộ trạng thái ca thi từ hệ thống...'),
                  duration: Duration(milliseconds: 800),
                ),
              );
            },
          ),
          Container(
            margin: const EdgeInsets.only(right: 16),
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
            decoration: BoxDecoration(
              color: const Color(0xFFDBEAFE),
              borderRadius: BorderRadius.circular(20),
            ),
            child: const Row(
              children: [
                Icon(Icons.person, size: 16, color: Color(0xFF1D4ED8)),
                SizedBox(width: 4),
                Text(
                  'Thí Sinh Tự Do',
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF1D4ED8),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          // Banner Thông báo
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                colors: [Color(0xFF2563EB), Color(0xFF0EA5E9)],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
              borderRadius: BorderRadius.circular(16),
              boxShadow: [
                BoxShadow(
                  color: const Color(0xFF2563EB).withValues(alpha: 0.3),
                  blurRadius: 12,
                  offset: const Offset(0, 4),
                ),
              ],
            ),
            child: const Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'TOEIC Reading 2026',
                  style: TextStyle(color: Colors.white70, fontSize: 13, fontWeight: FontWeight.w600),
                ),
                SizedBox(height: 4),
                Text(
                  'Luyện Thi & Kiểm Tra Trực Tuyến',
                  style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 8),
                Text(
                  'Thời gian làm bài: 75 phút | 100 câu trắc nghiệm (Part 5, 6, 7). Nộp bài tối thiểu khi làm từ 1 câu trở lên.',
                  style: TextStyle(color: Colors.white, fontSize: 12),
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),

          const Text(
            'Đề Thi Đang Mở (Kích Hoạt Bởi Giảng Viên)',
            style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color: Color(0xFF0F172A)),
          ),
          const SizedBox(height: 12),

          // HIỂN THỊ CÓ ĐIỀU KIỆN THEO TRẠNG THÁI XÓA / ĐÓNG / MỞ
          if (isExamDeleted)
            Container(
              margin: const EdgeInsets.only(top: 8),
              padding: const EdgeInsets.symmetric(vertical: 36, horizontal: 20),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: const Color(0xFFCBD5E1), width: 1.5),
                boxShadow: const [
                  BoxShadow(color: Colors.black12, blurRadius: 8, offset: Offset(0, 2)),
                ],
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Text('📭', style: TextStyle(fontSize: 42)),
                  const SizedBox(height: 12),
                  const Text(
                    'Hiện Chưa Có Đề Thi Nào Được Mở',
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Color(0xFF334155)),
                  ),
                  const SizedBox(height: 6),
                  const Text(
                    'Đề thi "Reading v02" đã được chuyển vào thùng rác (Soft-Delete) bởi Giảng viên.',
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 13, color: Color(0xFF64748B), height: 1.4),
                  ),
                  const SizedBox(height: 16),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                    decoration: BoxDecoration(
                      color: const Color(0xFFECFDF5),
                      borderRadius: BorderRadius.circular(20),
                      border: Border.all(color: const Color(0xFFA7F3D0)),
                    ),
                    child: const Text(
                      '✓ Ứng dụng vẫn hoạt động bình thường',
                      style: TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Color(0xFF059669)),
                    ),
                  ),
                ],
              ),
            )
          else
            // Card Đề thi Reading v02
            Card(
              elevation: 2,
              shadowColor: Colors.black12,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(16),
                side: BorderSide(
                  color: isExamPublished ? const Color(0xFF2563EB) : const Color(0xFFFCA5A5),
                  width: 1.5,
                ),
              ),
              color: isExamPublished ? Colors.white : const Color(0xFFFEF2F2),
              child: InkWell(
                borderRadius: BorderRadius.circular(16),
                onTap: () {
                  if (!isExamPublished) {
                    showDialog(
                      context: context,
                      builder: (ctx) => AlertDialog(
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                        title: const Row(
                          children: [
                            Icon(Icons.lock, color: Color(0xFFDC2626)),
                            SizedBox(width: 8),
                            Text('Phòng Thi Đang Khóa', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                          ],
                        ),
                        content: const Text(
                          'Ca thi "Reading v02" hiện đang bị ĐÓNG bởi Giảng viên. Bạn tạm thời chưa thể vào làm bài.',
                          style: TextStyle(fontSize: 13.5),
                        ),
                        actions: [
                          TextButton(
                            onPressed: () => Navigator.pop(ctx),
                            child: const Text('Đã Hiểu'),
                          ),
                        ],
                      ),
                    );
                    return;
                  }
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => const ExamScreen()),
                  );
                },
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                            decoration: BoxDecoration(
                              color: isExamPublished ? const Color(0xFFD1FAE5) : const Color(0xFFFEE2E2),
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: Text(
                              isExamPublished ? '● ĐANG MỞ THI' : '🔒 ĐÃ ĐÓNG CA THI',
                              style: TextStyle(
                                color: isExamPublished ? const Color(0xFF065F46) : const Color(0xFFDC2626),
                                fontSize: 11,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                          const Row(
                            children: [
                              Icon(Icons.timer_outlined, size: 16, color: Color(0xFF64748B)),
                              SizedBox(width: 4),
                              Text('75 phút', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: Color(0xFF64748B))),
                            ],
                          ),
                        ],
                      ),
                      const SizedBox(height: 12),
                      const Text(
                        'TOEIC Reading Test - Reading v02',
                        style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Color(0xFF0F172A)),
                      ),
                      const SizedBox(height: 6),
                      const Text(
                        'Đề thi giữa kỳ môn học (Mã đề v02). Bao gồm 100 câu hỏi: Part 5 (101-130), Part 6 (131-146), Part 7 (147-200).',
                        style: TextStyle(fontSize: 13, color: Color(0xFF64748B)),
                      ),
                      if (!isExamPublished) ...[
                        const SizedBox(height: 10),
                        Container(
                          padding: const EdgeInsets.all(8),
                          decoration: BoxDecoration(
                            color: const Color(0xFFFEE2E2),
                            borderRadius: BorderRadius.circular(8),
                            border: Border.all(color: const Color(0xFFFECACA)),
                          ),
                          child: const Row(
                            children: [
                              Icon(Icons.info_outline, size: 16, color: Color(0xFFDC2626)),
                              SizedBox(width: 6),
                              Expanded(
                                child: Text(
                                  'Ca thi này đang bị ĐÓNG bởi Giảng viên.',
                                  style: TextStyle(fontSize: 11.5, color: Color(0xFFDC2626), fontWeight: FontWeight.w600),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ],
                      const SizedBox(height: 16),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const Text(
                            '100 câu trắc nghiệm',
                            style: TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: Color(0xFF2563EB)),
                          ),
                          ElevatedButton.icon(
                            onPressed: isExamPublished
                                ? () {
                                    Navigator.push(
                                      context,
                                      MaterialPageRoute(builder: (context) => const ExamScreen()),
                                    );
                                  }
                                : () {
                                    ScaffoldMessenger.of(context).showSnackBar(
                                      const SnackBar(
                                        content: Text('🔒 Ca thi đang đóng, không thể bắt đầu làm bài!'),
                                        backgroundColor: Color(0xFFDC2626),
                                      ),
                                    );
                                  },
                            icon: Icon(isExamPublished ? Icons.play_arrow : Icons.lock, size: 18),
                            label: Text(isExamPublished ? 'Bắt Đầu Thi' : 'Phòng Thi Khóa'),
                            style: ElevatedButton.styleFrom(
                              backgroundColor: isExamPublished ? const Color(0xFF2563EB) : const Color(0xFF94A3B8),
                              foregroundColor: Colors.white,
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}

// ============================================================================
// SCREEN 2: GIAO DIỆN LÀM BÀI THI (75 PHÚT, PALETTE, TỐI THIỂU 1 CÂU ĐƯỢC NỘP)
// ============================================================================
class ExamScreen extends StatefulWidget {
  const ExamScreen({super.key});

  @override
  State<ExamScreen> createState() => _ExamScreenState();
}

class _ExamScreenState extends State<ExamScreen> {
  int currentIndex = 0;
  final Map<int, String> userAnswers = {}; // questionNum -> selectedOption
  late Timer _timer;
  int secondsRemaining = 75 * 60; // 75 phút = 4500 giây
  final PageController _pageController = PageController();

  @override
  void initState() {
    super.initState();
    startTimer();
  }

  void startTimer() {
    _timer = Timer.periodic(const Duration(seconds: 1), (timer) {
      if (secondsRemaining > 0) {
        setState(() {
          secondsRemaining--;
        });
        if (secondsRemaining == 5 * 60) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(
              content: Text('⚠️ Cảnh báo: Chỉ còn 5 phút! Hệ thống sẽ tự động nộp bài khi hết giờ.'),
              backgroundColor: Colors.orange,
              duration: Duration(seconds: 4),
            ),
          );
        }
      } else {
        _timer.cancel();
        autoSubmitWhenTimeUp();
      }
    });
  }

  void autoSubmitWhenTimeUp() {
    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => AlertDialog(
        title: const Text('Hết Thời Gian Làm Bài!'),
        content: const Text('Đã hết 75 phút làm bài thi TOEIC Reading. Hệ thống tự động thu bài và chuyển sang trang kết quả.'),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.pop(context);
              goToResultScreen();
            },
            child: const Text('Xem Kết Quả'),
          ),
        ],
      ),
    );
  }

  String formatTimer(int totalSeconds) {
    int m = totalSeconds ~/ 60;
    int s = totalSeconds % 60;
    return '${m.toString().padLeft(2, '0')}:${s.toString().padLeft(2, '0')}';
  }

  @override
  void dispose() {
    _timer.cancel();
    _pageController.dispose();
    super.dispose();
  }

  // Chọn hoặc hủy lựa chọn đáp án
  void toggleOption(int qNum, String option) {
    setState(() {
      if (userAnswers[qNum] == option) {
        userAnswers.remove(qNum); // Hủy chọn theo yêu cầu đề bài
      } else {
        userAnswers[qNum] = option; // Lưu chọn
      }
    });
  }

  // Xác nhận nộp bài (Điều kiện: tối thiểu 1 câu đã làm)
  void attemptSubmit() {
    int answeredCount = userAnswers.length;
    int totalQuestions = readingV02Questions.length;

    if (answeredCount < 1) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('❌ Bạn cần làm TỐI THIỂU 1 CÂU để có thể nộp bài!'),
          backgroundColor: Color(0xFFEF4444),
          duration: Duration(seconds: 3),
        ),
      );
      return;
    }

    int remaining = totalQuestions - answeredCount;
    showDialog(
      context: context,
      builder: (ctx) => AlertDialog(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
        title: const Row(
          children: [
            Icon(Icons.assignment_turned_in, color: Color(0xFF2563EB)),
            SizedBox(width: 8),
            Text('Xác Nhận Nộp Bài'),
          ],
        ),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Bạn đã hoàn thành: $answeredCount / $totalQuestions câu.'),
            if (remaining > 0) ...[
              const SizedBox(height: 8),
              Container(
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(
                  color: const Color(0xFFFEF3C7),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Text(
                  '⚠️ Cảnh báo: Còn $remaining câu bạn chưa chọn đáp án! Bạn có chắc chắn muốn nộp bài bây giờ không?',
                  style: const TextStyle(color: Color(0xFF92400E), fontSize: 13),
                ),
              ),
            ],
          ],
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(ctx),
            child: const Text('Tiếp Tục Làm'),
          ),
          ElevatedButton(
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFF10B981),
              foregroundColor: Colors.white,
            ),
            onPressed: () {
              Navigator.pop(ctx);
              goToResultScreen();
            },
            child: const Text('Nộp Bài Ngay'),
          ),
        ],
      ),
    );
  }

  void goToResultScreen() {
    _timer.cancel();
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(
        builder: (context) => ExamResultScreen(
          userAnswers: userAnswers,
          timeSpentSeconds: (75 * 60) - secondsRemaining,
        ),
      ),
    );
  }

  // Mở BottomSheet Bảng danh sách 100 câu hỏi
  void openPalette() {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (context) => Container(
        padding: const EdgeInsets.all(16),
        height: MediaQuery.of(context).size.height * 0.7,
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                const Text('Danh Sách 100 Câu Hỏi', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                Text(
                  'Đã làm: ${userAnswers.length}/100',
                  style: const TextStyle(fontWeight: FontWeight.bold, color: Color(0xFF2563EB)),
                ),
              ],
            ),
            const Divider(),
            Expanded(
              child: GridView.builder(
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 5,
                  childAspectRatio: 1.2,
                  crossAxisSpacing: 8,
                  mainAxisSpacing: 8,
                ),
                itemCount: readingV02Questions.length,
                itemBuilder: (context, index) {
                  final q = readingV02Questions[index];
                  bool isAnswered = userAnswers.containsKey(q.num);
                  bool isCurrent = index == currentIndex;

                  return InkWell(
                    borderRadius: BorderRadius.circular(8),
                    onTap: () {
                      Navigator.pop(context);
                      setState(() {
                        currentIndex = index;
                      });
                      _pageController.jumpToPage(index);
                    },
                    child: Container(
                      decoration: BoxDecoration(
                        color: isAnswered
                            ? const Color(0xFF2563EB)
                            : (isCurrent ? const Color(0xFFDBEAFE) : Colors.white),
                        borderRadius: BorderRadius.circular(8),
                        border: Border.all(
                          color: isCurrent ? const Color(0xFF2563EB) : const Color(0xFFE2E8F0),
                          width: isCurrent ? 2 : 1,
                        ),
                      ),
                      alignment: Alignment.center,
                      child: Text(
                        '${q.num}',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          color: isAnswered ? Colors.white : const Color(0xFF0F172A),
                        ),
                      ),
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final currentQ = readingV02Questions[currentIndex];

    return Scaffold(
      appBar: AppBar(
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('PART ${currentQ.part} • Reading v02', style: const TextStyle(fontSize: 14, fontWeight: FontWeight.bold)),
            Text('Câu ${currentQ.num} / 200', style: const TextStyle(fontSize: 11, color: Color(0xFF64748B))),
          ],
        ),
        actions: [
          // Đồng hồ đếm ngược 75 phút
          Container(
            margin: const EdgeInsets.only(right: 8),
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
            decoration: BoxDecoration(
              color: const Color(0xFFFEE2E2),
              borderRadius: BorderRadius.circular(20),
            ),
            child: Row(
              children: [
                const Icon(Icons.timer, size: 16, color: Color(0xFF991B1B)),
                const SizedBox(width: 4),
                Text(
                  formatTimer(secondsRemaining),
                  style: const TextStyle(
                    fontFamily: 'monospace',
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF991B1B),
                    fontSize: 13,
                  ),
                ),
              ],
            ),
          ),
          IconButton(
            icon: const Icon(Icons.grid_view_rounded, color: Color(0xFF2563EB)),
            tooltip: 'Bảng câu hỏi',
            onPressed: openPalette,
          ),
        ],
        bottom: PreferredSize(
          preferredSize: const Size.fromHeight(4),
          child: LinearProgressIndicator(
            value: (userAnswers.length) / readingV02Questions.length,
            backgroundColor: const Color(0xFFE2E8F0),
            valueColor: const AlwaysStoppedAnimation<Color>(Color(0xFF2563EB)),
          ),
        ),
      ),
      body: PageView.builder(
        controller: _pageController,
        itemCount: readingV02Questions.length,
        onPageChanged: (idx) {
          setState(() {
            currentIndex = idx;
          });
        },
        itemBuilder: (context, index) {
          final q = readingV02Questions[index];
          final selected = userAnswers[q.num];

          return SingleChildScrollView(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Hiển thị đoạn văn nếu là Part 6 hoặc Part 7
                if (q.passageText != null && q.passageText!.isNotEmpty) ...[
                  Card(
                    color: Colors.white,
                    elevation: 1,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                      side: const BorderSide(color: Color(0xFFE2E8F0)),
                    ),
                    child: Padding(
                      padding: const EdgeInsets.all(14),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          if (q.passageTitle != null) ...[
                            Text(
                              q.passageTitle!,
                              style: const TextStyle(
                                fontStyle: FontStyle.italic,
                                color: Color(0xFF2563EB),
                                fontWeight: FontWeight.bold,
                                fontSize: 12,
                              ),
                            ),
                            const Divider(height: 16),
                          ],
                          Text(
                            q.passageText!,
                            style: const TextStyle(fontSize: 13.5, height: 1.55, color: Color(0xFF1E293B)),
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),
                ],

                // Thẻ câu hỏi
                Card(
                  color: Colors.white,
                  elevation: 1.5,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                  child: Padding(
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                              decoration: BoxDecoration(
                                color: const Color(0xFFDBEAFE),
                                borderRadius: BorderRadius.circular(6),
                              ),
                              child: Text(
                                '${q.num}',
                                style: const TextStyle(
                                  fontWeight: FontWeight.bold,
                                  color: Color(0xFF1D4ED8),
                                  fontSize: 13,
                                ),
                              ),
                            ),
                            const SizedBox(width: 10),
                            Expanded(
                              child: Text(
                                q.text,
                                style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: Color(0xFF0F172A)),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 16),

                        // Các lựa chọn A, B, C, D
                        ...q.options.entries.map((opt) {
                          bool isSelected = selected == opt.key;
                          return Padding(
                            padding: const EdgeInsets.only(bottom: 10),
                            child: InkWell(
                              borderRadius: BorderRadius.circular(10),
                              onTap: () => toggleOption(q.num, opt.key),
                              child: Container(
                                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                                decoration: BoxDecoration(
                                  color: isSelected ? const Color(0xFFEFF6FF) : Colors.white,
                                  borderRadius: BorderRadius.circular(10),
                                  border: Border.all(
                                    color: isSelected ? const Color(0xFF2563EB) : const Color(0xFFE2E8F0),
                                    width: isSelected ? 2 : 1,
                                  ),
                                ),
                                child: Row(
                                  children: [
                                    Container(
                                      width: 28,
                                      height: 28,
                                      decoration: BoxDecoration(
                                        shape: BoxShape.circle,
                                        color: isSelected ? const Color(0xFF2563EB) : const Color(0xFFF1F5F9),
                                      ),
                                      alignment: Alignment.center,
                                      child: Text(
                                        opt.key,
                                        style: TextStyle(
                                          fontWeight: FontWeight.bold,
                                          fontSize: 13,
                                          color: isSelected ? Colors.white : const Color(0xFF475569),
                                        ),
                                      ),
                                    ),
                                    const SizedBox(width: 12),
                                    Expanded(
                                      child: Text(
                                        opt.value,
                                        style: TextStyle(
                                          fontSize: 14,
                                          fontWeight: isSelected ? FontWeight.w700 : FontWeight.w500,
                                          color: isSelected ? const Color(0xFF1D4ED8) : const Color(0xFF1E293B),
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          );
                        }),
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 80), // Chừa khoảng trống cho thanh dưới
              ],
            ),
          );
        },
      ),
      bottomSheet: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
        decoration: BoxDecoration(
          color: Colors.white,
          boxShadow: [
            BoxShadow(
              color: Colors.black.withValues(alpha: 0.06),
              blurRadius: 8,
              offset: const Offset(0, -2),
            ),
          ],
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            ElevatedButton.icon(
              onPressed: currentIndex > 0
                  ? () {
                      _pageController.previousPage(
                        duration: const Duration(milliseconds: 250),
                        curve: Curves.easeInOut,
                      );
                    }
                  : null,
              icon: const Icon(Icons.arrow_back, size: 16),
              label: const Text('Câu Trước'),
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFFF1F5F9),
                foregroundColor: const Color(0xFF334155),
                elevation: 0,
              ),
            ),
            ElevatedButton(
              onPressed: attemptSubmit,
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF10B981),
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 10),
              ),
              child: const Text('Nộp Bài', style: TextStyle(fontWeight: FontWeight.bold)),
            ),
            ElevatedButton.icon(
              onPressed: currentIndex < readingV02Questions.length - 1
                  ? () {
                      _pageController.nextPage(
                        duration: const Duration(milliseconds: 250),
                        curve: Curves.easeInOut,
                      );
                    }
                  : null,
              icon: const Icon(Icons.arrow_forward, size: 16),
              label: const Text('Câu Sau'),
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFF2563EB),
                foregroundColor: Colors.white,
                elevation: 0,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// ============================================================================
// SCREEN 3: KẾT QUẢ BÀI THI & XEM LẠI LỜI GIẢI CHI TIẾT (HINT)
// ============================================================================
class ExamResultScreen extends StatelessWidget {
  final Map<int, String> userAnswers;
  final int timeSpentSeconds;

  const ExamResultScreen({
    super.key,
    required this.userAnswers,
    required this.timeSpentSeconds,
  });

  @override
  Widget build(BuildContext context) {
    int correctCount = 0;
    for (var q in readingV02Questions) {
      if (userAnswers[q.num] == q.correct) {
        correctCount++;
      }
    }
    int wrongCount = userAnswers.length - correctCount;
    int skippedCount = readingV02Questions.length - userAnswers.length;

    // Quy đổi điểm TOEIC Reading chuẩn (5 - 495)
    int toeicScore = 5;
    if (correctCount >= 95) {
      toeicScore = 495;
    } else if (correctCount >= 90) {
      toeicScore = 470;
    } else if (correctCount >= 85) {
      toeicScore = 445;
    } else if (correctCount >= 80) {
      toeicScore = 415;
    } else if (correctCount >= 75) {
      toeicScore = 385;
    } else if (correctCount >= 70) {
      toeicScore = 355;
    } else if (correctCount >= 60) {
      toeicScore = 300;
    } else if (correctCount >= 50) {
      toeicScore = 245;
    } else if (correctCount >= 40) {
      toeicScore = 190;
    } else if (correctCount >= 30) {
      toeicScore = 135;
    } else if (correctCount >= 20) {
      toeicScore = 80;
    } else {
      toeicScore = correctCount * 5;
    }

    int minutesSpent = timeSpentSeconds ~/ 60;
    int secondsSpent = timeSpentSeconds % 60;

    return Scaffold(
      appBar: AppBar(
        title: const Text('Kết Quả Thi TOEIC Reading'),
        automaticallyImplyLeading: false,
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          // Thẻ điểm tổng quan
          Card(
            elevation: 2,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: Column(
                children: [
                  Container(
                    width: 130,
                    height: 130,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      border: Border.all(color: const Color(0xFF10B981), width: 8),
                      color: const Color(0xFFECFDF5),
                    ),
                    alignment: Alignment.center,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          '$toeicScore',
                          style: const TextStyle(fontSize: 34, fontWeight: FontWeight.w900, color: Color(0xFF065F46)),
                        ),
                        const Text('/ 495 ĐIỂM', style: TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Color(0xFF047857))),
                      ],
                    ),
                  ),
                  const SizedBox(height: 16),
                  const Text('TOEIC Reading Test - Mã đề v02', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                  Text('Thời gian làm bài: ${minutesSpent}m ${secondsSpent}s', style: const TextStyle(fontSize: 12, color: Color(0xFF64748B))),
                  const Divider(height: 24),

                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      _buildStatColumn('Số Câu Đúng', '$correctCount', const Color(0xFF10B981)),
                      _buildStatColumn('Số Câu Sai', '$wrongCount', const Color(0xFFEF4444)),
                      _buildStatColumn('Bỏ Qua', '$skippedCount', const Color(0xFF64748B)),
                    ],
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: 20),

          const Text(
            'Chi Tiết Bài Làm & Lời Giải Thích (HINT)',
            style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, color: Color(0xFF0F172A)),
          ),
          const SizedBox(height: 12),

          // Danh sách review từng câu
          ...readingV02Questions.map((q) {
            String? selected = userAnswers[q.num];
            bool isCorrect = selected == q.correct;
            bool isSkipped = selected == null;

            return Card(
              margin: const EdgeInsets.only(bottom: 12),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(12),
                side: BorderSide(
                  color: isCorrect
                      ? const Color(0xFF10B981)
                      : (isSkipped ? const Color(0xFFE2E8F0) : const Color(0xFFEF4444)),
                  width: 1.5,
                ),
              ),
              child: Padding(
                padding: const EdgeInsets.all(14),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text('Câu ${q.num} (Part ${q.part})', style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 13)),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                          decoration: BoxDecoration(
                            color: isCorrect
                                ? const Color(0xFFD1FAE5)
                                : (isSkipped ? const Color(0xFFF1F5F9) : const Color(0xFFFEE2E2)),
                            borderRadius: BorderRadius.circular(6),
                          ),
                          child: Text(
                            isCorrect ? 'ĐÚNG' : (isSkipped ? 'BỎ QUA' : 'SAI'),
                            style: TextStyle(
                              fontSize: 11,
                              fontWeight: FontWeight.bold,
                              color: isCorrect
                                  ? const Color(0xFF065F46)
                                  : (isSkipped ? const Color(0xFF475569) : const Color(0xFF991B1B)),
                            ),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 8),
                    Text(q.text, style: const TextStyle(fontSize: 13.5, fontWeight: FontWeight.w600)),
                    const SizedBox(height: 8),

                    Row(
                      children: [
                        Text('Lựa chọn của bạn: ', style: const TextStyle(fontSize: 12, color: Color(0xFF64748B))),
                        Text(
                          selected != null ? '($selected)' : 'Chưa làm',
                          style: TextStyle(
                            fontSize: 12,
                            fontWeight: FontWeight.bold,
                            color: isCorrect ? const Color(0xFF10B981) : const Color(0xFFEF4444),
                          ),
                        ),
                        const SizedBox(width: 16),
                        const Text('Đáp án chuẩn: ', style: TextStyle(fontSize: 12, color: Color(0xFF64748B))),
                        Text(
                          '(${q.correct})',
                          style: const TextStyle(fontSize: 12, fontWeight: FontWeight.bold, color: Color(0xFF10B981)),
                        ),
                      ],
                    ),
                    const SizedBox(height: 10),

                    // Gợi ý / Giải thích
                    Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: const Color(0xFFF8FAFC),
                        borderRadius: BorderRadius.circular(8),
                        border: const Border(left: BorderSide(color: Color(0xFF0EA5E9), width: 3)),
                      ),
                      child: Text(
                        '💡 Gợi ý (HINT): ${q.hint}',
                        style: const TextStyle(fontSize: 12, color: Color(0xFF334155)),
                      ),
                    ),
                  ],
                ),
              ),
            );
          }),

          const SizedBox(height: 16),
          ElevatedButton(
            onPressed: () {
              Navigator.pushAndRemoveUntil(
                context,
                MaterialPageRoute(builder: (context) => const ExamListScreen()),
                (route) => false,
              );
            },
            style: ElevatedButton.styleFrom(
              backgroundColor: const Color(0xFF2563EB),
              foregroundColor: Colors.white,
              padding: const EdgeInsets.symmetric(vertical: 14),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
            ),
            child: const Text('Quay Lại Danh Sách Đề Thi', style: TextStyle(fontWeight: FontWeight.bold)),
          ),
          const SizedBox(height: 30),
        ],
      ),
    );
  }

  Widget _buildStatColumn(String label, String value, Color color) {
    return Column(
      children: [
        Text(value, style: TextStyle(fontSize: 22, fontWeight: FontWeight.w900, color: color)),
        const SizedBox(height: 2),
        Text(label, style: const TextStyle(fontSize: 11, color: Color(0xFF64748B), fontWeight: FontWeight.w600)),
      ],
    );
  }
}
