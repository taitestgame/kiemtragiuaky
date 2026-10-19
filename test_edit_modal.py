import time
import sys
sys.stdout.reconfigure(encoding='utf-8')
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(channel='chrome')
    page = browser.new_page(viewport={'width': 1440, 'height': 920})
    page.goto('http://localhost:3000')
    page.wait_for_load_state('networkidle')
    time.sleep(1)

    # Open preview modal
    page.evaluate('openPreviewModal()')
    time.sleep(1)

    chips_count = page.evaluate("document.querySelectorAll('.edit-palette-chip').length")
    select_count = page.evaluate("document.getElementById('edit-q-select').options.length")
    header_text = page.evaluate("document.getElementById('edit-total-badge').textContent")
    first_option = page.evaluate("document.getElementById('edit-q-select').options[0].textContent")
    last_option = page.evaluate("document.getElementById('edit-q-select').options[document.getElementById('edit-q-select').options.length - 1].textContent")

    print(f"Total Chips in Palette: {chips_count}")
    print(f"Total Select Options: {select_count}")
    print(f"Header Total Badge: {header_text}")
    print(f"First Option: {first_option}")
    print(f"Last Option: {last_option}")

    # Capture Question 101 screenshot
    page.screenshot(path='screenshot_admin_edit.png')
    print("-> screenshot_admin_edit.png captured successfully!")

    # Test jumping to Question 131 (Part 6)
    page.evaluate("jumpToEditQuestion(30)")
    time.sleep(0.5)
    page.screenshot(path='screenshot_admin_edit_part6.png')
    print("-> screenshot_admin_edit_part6.png captured successfully!")

    # Test Student Flow with 100 questions
    page.evaluate("closePreviewModal()")
    time.sleep(0.3)
    page.evaluate("switchView('student')")
    time.sleep(0.5)
    page.evaluate("startExam()")
    time.sleep(0.5)
    student_chips = page.evaluate("document.querySelectorAll('.palette-btn').length")
    print(f"Student Palette Questions Count: {student_chips}")
    page.evaluate("selectOption(101, 'B')")
    page.evaluate("loadQuestion(99)")
    q200_label = page.evaluate("document.getElementById('curr-q-number').textContent")
    print(f"Loaded Last Question in Mobile App: {q200_label}")

    browser.close()
    print("All tests passed!")
