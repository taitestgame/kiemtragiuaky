import 'package:flutter_test/flutter_test.dart';
import 'package:toeic_mobile_app/main.dart';

void main() {
  testWidgets('App smoke test', (WidgetTester tester) async {
    await tester.pumpWidget(const ToeicExamApp());
    expect(find.text('Kỳ Thi TOEIC Reading'), findsOneWidget);
  });
}
