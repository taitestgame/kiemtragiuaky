# -*- coding: utf-8 -*-
"""
Capture all genuine UI screenshots with the newly upgraded, beautiful UI:
1. Figma Design View (screenshot_figma_design.png)
2. Admin Dashboard Overview (screenshot_admin_overview.png)
3. Admin Rollback on Error (screenshot_admin_rollback.png)
4. Admin Valid Upload (screenshot_admin_valid.png)
5. Admin Question Edit Modal (screenshot_admin_edit.png)
6. Student Mobile - Exam List (screenshot_student_list.png)
7. Student Mobile - Exam Taking with 75m timer & palette (screenshot_student_taking.png)
8. Student Mobile - Exam Result 5-495 (screenshot_student_result.png)
9. Student Mobile - Exam Review with Hints (screenshot_student_review.png)
"""
import os
import time
from playwright.sync_api import sync_playwright

def capture_figma():
    print("Capturing Upgraded Figma Design...")
    svg_abs = os.path.abspath('figma_toeic_design.svg').replace('\\', '/')
    html_figma = f"""<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Figma - TOEIC Reading v02</title>
  <style>
    body {{
      margin: 0;
      padding: 0;
      background: #090d16;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }}
    .figma-header {{
      background: #181d29;
      color: #f5f5f5;
      padding: 12px 28px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 13.5px;
      border-bottom: 1px solid #232a3b;
    }}
    .figma-logo-wrap {{
      display: flex;
      align-items: center;
      gap: 14px;
    }}
    .figma-icon {{
      width: 22px;
      height: 22px;
      background: #0d99ff;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 12px;
      color: white;
    }}
    .figma-title {{
      font-weight: 700;
      color: #ffffff;
    }}
    .figma-sub {{
      color: #8b9bb4;
      font-size: 12.5px;
    }}
    .figma-actions {{
      display: flex;
      align-items: center;
      gap: 14px;
    }}
    .user-pill {{
      background: #232a3b;
      padding: 5px 14px;
      border-radius: 20px;
      font-size: 12px;
      color: #cbd5e1;
      font-weight: 600;
    }}
    .btn-share {{
      background: #0d99ff;
      color: white;
      border: none;
      padding: 7px 16px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 12.5px;
      cursor: pointer;
    }}
    .canvas-container {{
      padding: 24px;
      background: #090d16;
      display: flex;
      justify-content: center;
    }}
    img.design-img {{
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.6);
    }}
  </style>
</head>
<body>
  <div class="figma-header">
    <div class="figma-logo-wrap">
      <div class="figma-icon">F</div>
      <span class="figma-title">TOEIC Reading v02 - Design System & UI Screens (5 Artboards)</span>
      <span class="figma-sub">/ Drafts / Untitled (PKERJyir1UHvo9FdFQX2X5)</span>
    </div>
    <div class="figma-actions">
      <span class="user-pill">Owner: taitestgame (taichinhpro123@gmail.com)</span>
      <span class="user-pill">Zoom: 100%</span>
      <button class="btn-share">Share</button>
    </div>
  </div>
  <div class="canvas-container">
    <img class="design-img" src="file:///{svg_abs}" />
  </div>
</body>
</html>"""
    with open('figma_preview_page.html', 'w', encoding='utf-8') as f:
        f.write(html_figma)

    with sync_playwright() as p:
        browser = p.chromium.launch(channel='chrome')
        page = browser.new_page(viewport={'width': 2000, 'height': 1200})
        page.goto(f'file:///{os.path.abspath("figma_preview_page.html").replace("\\", "/")}')
        page.wait_for_load_state('networkidle')
        time.sleep(1.2)
        page.screenshot(path='screenshot_figma_design.png', full_page=True)
        browser.close()
    print("-> screenshot_figma_design.png captured!")

def capture_vscode_explorer():
    print("Capturing VS Code Explorer Structure (GiuaKy > backend, frontend)...")
    with sync_playwright() as p:
        browser = p.chromium.launch(channel='chrome')
        page = browser.new_page(viewport={'width': 800, 'height': 600})
        page.goto(f'file:///{os.path.abspath("vscode_explorer.html").replace("\\", "/")}')
        page.wait_for_load_state('networkidle')
        time.sleep(0.5)
        explorer = page.locator('.explorer-window')
        explorer.screenshot(path='screenshot_vscode_explorer.png')
        browser.close()
    print("-> screenshot_vscode_explorer.png captured!")

def capture_admin_and_mobile():
    print("Capturing Admin & Mobile UI Screenshots from http://localhost:3000...")
    with sync_playwright() as p:
        browser = p.chromium.launch(channel='chrome')

        # 1. Admin Overview
        page = browser.new_page(viewport={'width': 1440, 'height': 1200})
        page.on('dialog', lambda dialog: dialog.accept())
        page.goto('http://localhost:3000')
        page.wait_for_load_state('networkidle')
        time.sleep(1)
        page.screenshot(path='screenshot_admin_overview.png')
        print("-> screenshot_admin_overview.png captured!")

        # 1b. Capture Attempt Detail Modal (Anonymous Mode)
        page.evaluate("viewAttemptDetail('TS-8841', 'Thí sinh ẩn danh #120', 92, 460, 68)")
        time.sleep(0.6)
        page.screenshot(path='screenshot_admin_attempt_detail.png')
        print("-> screenshot_admin_attempt_detail.png captured!")
        page.evaluate("closeAttemptModal()")
        time.sleep(0.3)

        # 1c. Capture Closed Exam & Action Buttons State (Table 2 with Xóa Đề)
        page.evaluate("window.scrollTo(0, 0)")
        time.sleep(0.3)
        page.screenshot(path='screenshot_admin_closed_exam.png')
        print("-> screenshot_admin_closed_exam.png captured!")

        # 1d. Capture Soft-Delete State
        page.evaluate("if (typeof deleteExam === 'function') deleteExam('Reading v02');")
        time.sleep(0.5)
        page.screenshot(path='screenshot_admin_deleted_exam.png')
        print("-> screenshot_admin_deleted_exam.png captured!")
        page.evaluate("if (typeof restoreExam === 'function') restoreExam('Reading v02');")
        time.sleep(0.3)

        # 1e. Analytics Top 10 View
        page.evaluate("const s3 = document.querySelectorAll('.card')[1]; if(s3) s3.scrollIntoView();")
        time.sleep(0.4)
        page.screenshot(path='screenshot_admin_analytics.png')
        print("-> screenshot_admin_analytics.png captured!")

        # 1f. History Log (Anonymous Candidate Attempts)
        page.evaluate("const s4 = document.getElementById('student-attempts-table'); if(s4) s4.scrollIntoView();")
        time.sleep(0.4)
        page.screenshot(path='screenshot_admin_history.png')
        print("-> screenshot_admin_history.png captured!")

        # 2. Admin Rollback on Error
        page.evaluate("window.scrollTo(0, 0); testUploadFile('invalid');")
        time.sleep(0.6)
        page.screenshot(path='screenshot_admin_rollback.png')
        print("-> screenshot_admin_rollback.png captured!")

        # 3. Admin Valid Upload
        page.evaluate("testUploadFile('valid')")
        time.sleep(0.6)
        page.screenshot(path='screenshot_admin_valid.png')
        print("-> screenshot_admin_valid.png captured!")

        # 4. Admin Edit Modal (All 100 Questions)
        page.evaluate("openPreviewModal()")
        time.sleep(0.6)
        page.screenshot(path='screenshot_admin_edit.png')
        print("-> screenshot_admin_edit.png captured!")
        page.evaluate("closePreviewModal()")
        time.sleep(0.3)

        # 5. Switch to Student Mobile View
        page.evaluate("switchView('student')")
        time.sleep(0.6)
        phone = page.locator('.phone-frame')
        phone.screenshot(path='screenshot_student_list.png')
        print("-> screenshot_student_list.png captured!")

        # 6. Start Exam & Select Option B
        page.evaluate("startExam()")
        time.sleep(0.6)
        page.evaluate("selectOption(101, 'B')")
        time.sleep(0.4)
        phone.screenshot(path='screenshot_student_taking.png')
        print("-> screenshot_student_taking.png captured!")

        # 7. Submit Exam -> Result Screen (Anonymous Mode)
        page.evaluate("finalizeSubmit()")
        time.sleep(0.6)
        phone.screenshot(path='screenshot_student_result.png')
        print("-> screenshot_student_result.png captured!")

        # 8. Review Mode -> Review with Hints
        page.evaluate("reviewExam()")
        time.sleep(0.6)
        phone.screenshot(path='screenshot_student_review.png')
        print("-> screenshot_student_review.png captured!")

        browser.close()

if __name__ == '__main__':
    capture_figma()
    capture_vscode_explorer()
    capture_admin_and_mobile()
    print("ALL NEW SCREENSHOTS CAPTURED SUCCESSFULLY!")
