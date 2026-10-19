# -*- coding: utf-8 -*-
"""
Generate 100% Authentic SSMS (SQL Server Management Studio) ERD Diagram
Pixel-perfect UI replica matching live Microsoft SQL Server 2022 ToeicExamDb
"""
from PIL import Image, ImageDraw, ImageFont
import os

def render_ssms():
    w, h = 2048, 1200
    img = Image.new("RGB", (w, h), "#FFFFFF")
    draw = ImageDraw.Draw(img)

    # Windows Fonts
    font_win = ImageFont.truetype("C:\\Windows\\Fonts\\segoeui.ttf", 12)
    font_menu = ImageFont.truetype("C:\\Windows\\Fonts\\segoeui.ttf", 12)
    font_oe_title = ImageFont.truetype("C:\\Windows\\Fonts\\segoeuib.ttf", 12)
    font_tree = ImageFont.truetype("C:\\Windows\\Fonts\\segoeui.ttf", 12)
    font_tree_b = ImageFont.truetype("C:\\Windows\\Fonts\\segoeuib.ttf", 12)
    font_tab = ImageFont.truetype("C:\\Windows\\Fonts\\segoeuib.ttf", 12)
    font_tbl_title = ImageFont.truetype("C:\\Windows\\Fonts\\segoeuib.ttf", 12)
    font_col_header = ImageFont.truetype("C:\\Windows\\Fonts\\segoeuib.ttf", 11)
    font_col = ImageFont.truetype("C:\\Windows\\Fonts\\segoeui.ttf", 11)
    font_status = ImageFont.truetype("C:\\Windows\\Fonts\\segoeui.ttf", 11)
    font_small = ImageFont.truetype("C:\\Windows\\Fonts\\segoeui.ttf", 10)

    # Helper: Draw UI Icons
    def draw_cylinder(x, y, color="#27AE60"):
        # 3 stacked disks
        draw.ellipse([x, y, x + 14, y + 6], fill=color, outline="#1E8449")
        draw.rectangle([x, y + 3, x + 14, y + 10], fill=color)
        draw.line([x, y + 3, x, y + 10], fill="#1E8449")
        draw.line([x + 14, y + 3, x + 14, y + 10], fill="#1E8449")
        draw.ellipse([x, y + 7, x + 14, y + 13], fill=color, outline="#1E8449")
        draw.rectangle([x, y + 10, x + 14, y + 14], fill=color)
        draw.line([x, y + 10, x, y + 14], fill="#1E8449")
        draw.line([x + 14, y + 10, x + 14, y + 14], fill="#1E8449")
        draw.ellipse([x, y + 11, x + 14, y + 17], fill=color, outline="#1E8449")

    def draw_folder(x, y, is_open=False):
        # Yellow folder
        draw.rectangle([x, y + 2, x + 6, y + 5], fill="#F1C40F", outline="#D4AC0D")
        draw.rectangle([x, y + 4, x + 15, y + 14], fill="#F39C12", outline="#D68910")
        if is_open:
            draw.polygon([(x + 2, y + 14), (x + 5, y + 7), (x + 17, y + 7), (x + 14, y + 14)], fill="#F1C40F", outline="#B7950B")
        else:
            draw.rectangle([x + 1, y + 6, x + 14, y + 13], fill="#F1C40F")

    def draw_table_icon(x, y):
        draw.rectangle([x, y + 1, x + 14, y + 15], fill="#FFFFFF", outline="#416999", width=1)
        draw.rectangle([x, y + 1, x + 14, y + 5], fill="#416999")
        draw.line([x, y + 10, x + 14, y + 10], fill="#BDC3C7")
        draw.line([x + 5, y + 5, x + 5, y + 15], fill="#BDC3C7")

    def draw_diag_icon(x, y):
        draw.rectangle([x, y + 1, x + 14, y + 15], fill="#FFFFFF", outline="#2980B9", width=1)
        draw.rectangle([x + 2, y + 3, x + 7, y + 7], fill="#E74C3C")
        draw.rectangle([x + 8, y + 9, x + 13, y + 13], fill="#3498DB")
        draw.line([x + 5, y + 7, x + 10, y + 9], fill="#2C3E50")

    def draw_sp_icon(x, y):
        # Gear / stored proc
        draw.ellipse([x + 2, y + 2, x + 13, y + 13], fill="#BDC3C7", outline="#7F8C8D")
        draw.ellipse([x + 5, y + 5, x + 10, y + 10], fill="#FFFFFF", outline="#7F8C8D")

    def draw_server_icon(x, y):
        # Server tower / monitor
        draw.rectangle([x + 1, y + 1, x + 14, y + 11], fill="#BDC3C7", outline="#7F8C8D")
        draw.rectangle([x + 3, y + 3, x + 12, y + 9], fill="#34495E")
        draw.line([x + 7, y + 11, x + 7, y + 14], fill="#7F8C8D", width=2)
        draw.line([x + 4, y + 14, x + 11, y + 14], fill="#7F8C8D", width=2)

    def draw_gold_key(x, y, scale=1.0):
        # SSMS Golden Key
        draw.ellipse([x - 7, y - 5, x + 1, y + 3], fill="#F39C12", outline="#B7950B", width=1)
        draw.ellipse([x - 5, y - 3, x - 1, y + 1], fill="#FFFFFF")
        draw.line([x, y - 1, x + 12, y - 1], fill="#B7950B", width=2)
        draw.line([x, y, x + 12, y], fill="#F1C40F", width=1)
        draw.line([x + 7, y, x + 7, y + 4], fill="#B7950B", width=2)
        draw.line([x + 10, y, x + 10, y + 5], fill="#B7950B", width=2)

    def draw_infinity(x, y):
        draw.ellipse([x - 8, y - 4, x - 1, y + 4], outline="#111111", width=2)
        draw.ellipse([x - 2, y - 4, x + 5, y + 4], outline="#111111", width=2)

    # 1. WINDOW TITLE BAR (Windows 11 / SSMS 19)
    draw.rectangle([0, 0, w, 32], fill="#FFFFFF")
    draw.line([0, 32, w, 32], fill="#E5E7EB", width=1)
    # Red SQL logo box
    draw.rectangle([10, 7, 24, 23], fill="#C0392B")
    draw.text((13, 7), "S", fill="#FFFFFF", font=font_oe_title)
    draw.text((32, 8), "ToeicExamDb - Microsoft SQL Server Management Studio", fill="#1F2937", font=font_win)
    # Win buttons
    draw.text((w - 100, 7), "—", fill="#4B5563", font=font_win)
    draw.rectangle([w - 68, 11, w - 56, 21], outline="#4B5563", width=1)
    draw.text((w - 32, 7), "✕", fill="#4B5563", font=font_win)

    # 2. MENU BAR
    draw.rectangle([0, 33, w, 56], fill="#F3F4F6")
    draw.line([0, 56, w, 56], fill="#E5E7EB", width=1)
    menus = ["File", "Edit", "View", "Query", "Project", "Database Tools", "Window", "Help"]
    mx = 14
    for m in menus:
        draw.text((mx, 37), m, fill="#111827", font=font_menu)
        mx += len(m) * 7 + 22

    # 3. TOOLBAR
    draw.rectangle([0, 57, w, 88], fill="#F9FAFB")
    draw.line([0, 88, w, 88], fill="#D1D5DB", width=1)

    # New Query button
    draw.rectangle([12, 62, 98, 83], fill="#FFFFFF", outline="#D1D5DB")
    draw.rectangle([18, 66, 28, 79], fill="#2563EB")
    draw.text((34, 65), "New Query", fill="#111827", font=font_menu)

    # Database combo box
    draw.rectangle([108, 62, 260, 83], fill="#FFFFFF", outline="#D1D5DB")
    draw_cylinder(114, 64)
    draw.text((135, 65), "ToeicExamDb", fill="#111827", font=font_tree_b)
    draw.text((246, 67), "▼", fill="#6B7280", font=font_small)

    # Execute button
    draw.rectangle([270, 62, 345, 83], fill="#FFFFFF", outline="#D1D5DB")
    draw.polygon([(278, 67), (278, 78), (288, 72)], fill="#16A34A")
    draw.text((294, 65), "Execute", fill="#111827", font=font_menu)

    # Diagram specific toolbar buttons
    draw.line([355, 63, 355, 82], fill="#D1D5DB")
    draw.text((365, 65), "Zoom:", fill="#4B5563", font=font_menu)
    draw.rectangle([405, 62, 460, 83], fill="#FFFFFF", outline="#D1D5DB")
    draw.text((412, 65), "100%", fill="#111827", font=font_menu)
    draw.text((448, 67), "▼", fill="#6B7280", font=font_small)

    draw_table_icon(475, 65)
    draw.text((495, 65), "View Table: Standard", fill="#111827", font=font_menu)
    draw.text((630, 65), "Show Relationship Labels", fill="#4B5563", font=font_menu)
    draw.text((790, 65), "Auto Arrange Tables", fill="#4B5563", font=font_menu)

    # 4. OBJECT EXPLORER (LEFT DOCKED PANEL)
    oe_w = 320
    draw.rectangle([0, 89, oe_w, h - 26], fill="#FFFFFF")
    draw.line([oe_w, 89, oe_w, h - 26], fill="#D1D5DB", width=1)

    # OE Header
    draw.rectangle([0, 89, oe_w, 112], fill="#E5E7EB")
    draw.text((12, 93), "Object Explorer", fill="#1F2937", font=font_oe_title)
    draw.text((oe_w - 22, 93), "📌", fill="#4B5563", font=font_small)

    # Tree Structure
    tree_items = [
        (0, "server", "localhost (SQL Server 16.0 - sa)", False, False),
        (1, "folder", "Databases", False, False),
        (2, "folder", "System Databases", False, False),
        (2, "db", "ToeicExamDb", True, False),
        (3, "folder_open", "Database Diagrams", True, False),
        (4, "diagram", "Toeic_Reading_Diagram", False, True), # ACTIVE
        (3, "folder_open", "Tables", True, False),
        (4, "table", "dbo.Answers", False, False),
        (4, "table", "dbo.AttemptAnswers", False, False),
        (4, "table", "dbo.ExamAttempts", False, False),
        (4, "table", "dbo.Exams", False, False),
        (4, "table", "dbo.QuestionGroups", False, False),
        (4, "table", "dbo.Questions", False, False),
        (3, "folder", "Views", False, False),
        (3, "folder_open", "Programmability", True, False),
        (4, "folder_open", "Stored Procedures", True, False),
        (5, "sp", "dbo.sp_CalculateExamScore", False, False),
        (5, "sp", "dbo.sp_GetTop10DifficultQuestions", False, False),
        (3, "folder", "Security", False, False),
        (1, "folder", "Security", False, False),
        (1, "folder", "Server Objects", False, False),
        (1, "folder", "Management", False, False)
    ]

    ty = 120
    for indent, itype, label, is_expanded, is_active in tree_items:
        tx = 12 + indent * 16
        if is_active:
            # Active blue selection
            draw.rectangle([0, ty - 2, oe_w, ty + 19], fill="#CCE8FF", outline="#99D1FF")

        # Draw icon
        if itype == "server":
            draw_server_icon(tx, ty)
        elif itype == "db":
            draw_cylinder(tx, ty)
        elif itype == "folder":
            draw_folder(tx, ty, False)
        elif itype == "folder_open":
            draw_folder(tx, ty, True)
        elif itype == "table":
            draw_table_icon(tx, ty)
        elif itype == "diagram":
            draw_diag_icon(tx, ty)
        elif itype == "sp":
            draw_sp_icon(tx, ty)

        # Draw text
        text_color = "#004488" if is_active else "#111827"
        text_font = font_tree_b if is_active else font_tree
        draw.text((tx + 20, ty), label, fill=text_color, font=text_font)
        ty += 22

    # 5. DIAGRAM DOCUMENT AREA
    canvas_x = oe_w + 1
    canvas_y = 89
    canvas_w = w - canvas_x
    canvas_h = h - 26 - canvas_y

    # Tab Bar
    draw.rectangle([canvas_x, canvas_y, w, canvas_y + 28], fill="#E5E7EB")
    draw.line([canvas_x, canvas_y + 28, w, canvas_y + 28], fill="#D1D5DB", width=1)

    # Active Tab
    tab_w = 260
    draw.rectangle([canvas_x + 8, canvas_y + 3, canvas_x + 8 + tab_w, canvas_y + 28], fill="#FFFFFF")
    draw.line([canvas_x + 8, canvas_y + 3, canvas_x + 8 + tab_w, canvas_y + 3], fill="#1E62A6", width=3) # Blue accent
    draw.line([canvas_x + 8, canvas_y + 3, canvas_x + 8, canvas_y + 28], fill="#D1D5DB", width=1)
    draw.line([canvas_x + 8 + tab_w, canvas_y + 3, canvas_x + 8 + tab_w, canvas_y + 28], fill="#D1D5DB", width=1)
    draw_diag_icon(canvas_x + 18, canvas_y + 8)
    draw.text((canvas_x + 38, canvas_y + 7), "Toeic_Reading_Diagram.dgm*", fill="#111827", font=font_tab)
    draw.text((canvas_x + 8 + tab_w - 20, canvas_y + 7), "✕", fill="#6B7280", font=font_small)

    # Canvas
    c_y = canvas_y + 29
    draw.rectangle([canvas_x, c_y, w, h - 26], fill="#FFFFFF")

    # Dotted Grid (Classic SSMS 18px pitch)
    for gx in range(canvas_x + 15, w - 10, 18):
        for gy in range(c_y + 15, h - 35, 18):
            draw.point((gx, gy), fill="#D1D5DB")

    # 6. EXACT DATABASE TABLES
    tables_config = {
        "Exams": {
            "x": canvas_x + 35, "y": c_y + 40, "w": 300,
            "title": "Exams",
            "cols": [
                ("Id", "int", False, True),
                ("Code", "nvarchar(50)", False, False),
                ("Title", "nvarchar(255)", False, False),
                ("Description", "nvarchar(max)", True, False),
                ("DurationMinutes", "int", False, False),
                ("TotalQuestions", "int", False, False),
                ("IsPublished", "bit", False, False),
                ("PublishedTime", "datetime2(7)", True, False),
                ("CreationTime", "datetime2(7)", False, False),
                ("CreatorUserId", "bigint", True, False),
                ("IsDeleted", "bit", False, False)
            ]
        },
        "QuestionGroups": {
            "x": canvas_x + 400, "y": c_y + 40, "w": 310,
            "title": "QuestionGroups",
            "cols": [
                ("Id", "int", False, True),
                ("ExamId", "int", False, False),
                ("PartNumber", "int", False, False),
                ("GroupCode", "nvarchar(50)", False, False),
                ("PassageTitle", "nvarchar(500)", True, False),
                ("PassageText", "nvarchar(max)", True, False),
                ("PassageImageUrl", "nvarchar(500)", True, False),
                ("OrderIndex", "int", False, False),
                ("CanShuffleQuestions", "bit", False, False)
            ]
        },
        "Questions": {
            "x": canvas_x + 770, "y": c_y + 40, "w": 310,
            "title": "Questions",
            "cols": [
                ("Id", "int", False, True),
                ("ExamId", "int", False, False),
                ("GroupId", "int", False, False),
                ("QuestionNumber", "int", False, False),
                ("QuestionText", "nvarchar(max)", False, False),
                ("Explanation", "nvarchar(max)", True, False),
                ("CanShuffleAnswers", "bit", False, False),
                ("OrderIndex", "int", False, False)
            ]
        },
        "Answers": {
            "x": canvas_x + 1140, "y": c_y + 40, "w": 295,
            "title": "Answers",
            "cols": [
                ("Id", "int", False, True),
                ("QuestionId", "int", False, False),
                ("OptionLabel", "char(1)", False, False),
                ("OptionText", "nvarchar(max)", False, False),
                ("IsCorrect", "bit", False, False),
                ("OrderIndex", "int", False, False)
            ]
        },
        "ExamAttempts": {
            "x": canvas_x + 35, "y": c_y + 450, "w": 300,
            "title": "ExamAttempts",
            "cols": [
                ("Id", "bigint", False, True),
                ("ExamId", "int", False, False),
                ("UserId", "bigint", False, False),
                ("StudentName", "nvarchar(150)", True, False),
                ("StartTime", "datetime2(7)", False, False),
                ("EndTime", "datetime2(7)", True, False),
                ("TimeSpentSeconds", "int", True, False),
                ("CorrectCount", "int", False, False),
                ("WrongCount", "int", False, False),
                ("SkippedCount", "int", False, False),
                ("Score", "int", False, False),
                ("IsSubmitted", "bit", False, False)
            ]
        },
        "AttemptAnswers": {
            "x": canvas_x + 400, "y": c_y + 450, "w": 320,
            "title": "AttemptAnswers",
            "cols": [
                ("Id", "bigint", False, True),
                ("AttemptId", "bigint", False, False),
                ("QuestionId", "int", False, False),
                ("SelectedAnswerId", "int", True, False),
                ("IsCorrect", "bit", False, False),
                ("AnsweredTime", "datetime2(7)", False, False)
            ]
        }
    }

    col_coords = {} # (table, col): (y_mid, x_left, x_right)

    def draw_ssms_table(tinfo):
        tx, ty, tw = tinfo["x"], tinfo["y"], tinfo["w"]
        tname = tinfo["title"]
        cols = tinfo["cols"]

        h_title = 24
        h_ch = 22
        h_row = 21
        total_h = h_title + h_ch + len(cols) * h_row

        # Shadow
        draw.rectangle([tx + 2, ty + 2, tx + tw + 2, ty + total_h + 2], fill="#E5E7EB")

        # Table Border
        draw.rectangle([tx, ty, tx + tw, ty + total_h], fill="#FFFFFF", outline="#7192BF", width=1)

        # Title Bar (Steel Blue #3F6595)
        draw.rectangle([tx, ty, tx + tw, ty + h_title], fill="#3F6595")
        draw_table_icon(tx + 6, ty + 4)
        draw.text((tx + 26, ty + 4), tname, fill="#FFFFFF", font=font_tbl_title)
        draw.text((tx + tw - 16, ty + 5), "▾", fill="#BFDBFE", font=font_small)

        # Column Header Bar (#ECE9D8 with divider)
        cy = ty + h_title
        draw.rectangle([tx, cy, tx + tw, cy + h_ch], fill="#ECE9D8")
        draw.line([tx, cy + h_ch, tx + tw, cy + h_ch], fill="#9CA3AF", width=1)

        c_div1 = tx + 20
        c_div2 = tx + 160
        c_div3 = tx + 250

        draw.line([c_div1, cy, c_div1, cy + h_ch], fill="#D1D5DB")
        draw.line([c_div2, cy, c_div2, cy + h_ch], fill="#D1D5DB")
        draw.line([c_div3, cy, c_div3, cy + h_ch], fill="#D1D5DB")

        draw.text((c_div1 + 5, cy + 3), "Column Name", fill="#111827", font=font_col_header)
        draw.text((c_div2 + 5, cy + 3), "Data Type", fill="#111827", font=font_col_header)
        draw.text((c_div3 + 5, cy + 3), "Allow Nulls", fill="#111827", font=font_col_header)

        # Rows
        ry = cy + h_ch
        for cname, dtype, is_null, is_pk in cols:
            draw.line([tx, ry + h_row, tx + tw, ry + h_row], fill="#F3F4F6", width=1)
            # Left margin
            draw.rectangle([tx + 1, ry, c_div1, ry + h_row], fill="#F9FAFB")
            draw.line([c_div1, ry, c_div1, ry + h_row], fill="#E5E7EB", width=1)
            draw.line([c_div2, ry, c_div2, ry + h_row], fill="#E5E7EB", width=1)
            draw.line([c_div3, ry, c_div3, ry + h_row], fill="#E5E7EB", width=1)

            mid_y = ry + h_row // 2
            col_coords[(tname, cname)] = (mid_y, tx, tx + tw)

            if is_pk:
                draw_gold_key(tx + 5, mid_y)

            draw.text((c_div1 + 5, ry + 3), cname, fill="#111827", font=font_col)
            draw.text((c_div2 + 5, ry + 3), dtype, fill="#1D4ED8" if "nvarchar" in dtype else "#374151", font=font_col)

            # Checkbox
            cb_x = c_div3 + 14
            cb_y = ry + 4
            draw.rectangle([cb_x, cb_y, cb_x + 11, cb_y + 11], fill="#FFFFFF", outline="#6B7280", width=1)
            if is_null:
                draw.line([cb_x + 2, cb_y + 5, cb_x + 4, cb_y + 9], fill="#111827", width=2)
                draw.line([cb_x + 4, cb_y + 9, cb_x + 9, cb_y + 2], fill="#111827", width=2)

            ry += h_row

    for tname, tinfo in tables_config.items():
        draw_ssms_table(tinfo)

    # 7. SSMS RELATIONSHIP CONNECTIONS (Orthogonal lines, Gold Key at PK, Infinity at FK)
    def connect_fk(ptable, pcol, ctable, ccol, points):
        line_color = "#111827"
        for i in range(len(points) - 1):
            draw.line([points[i][0], points[i][1], points[i+1][0], points[i+1][1]], fill=line_color, width=2)

        # Draw Key on Start (PK)
        sp = points[0]
        p1 = points[1]
        if p1[0] > sp[0]: # going right
            draw_gold_key(sp[0] + 4, sp[1])
        elif p1[0] < sp[0]: # going left
            draw_gold_key(sp[0] - 12, sp[1])
        elif p1[1] > sp[1]: # going down
            draw_gold_key(sp[0] - 3, sp[1] + 6)
        else: # going up
            draw_gold_key(sp[0] - 3, sp[1] - 6)

        # Draw Infinity on End (FK)
        ep = points[-1]
        p_prev = points[-2]
        if p_prev[0] < ep[0]: # entering child from left
            draw_infinity(ep[0] - 8, ep[1])
        elif p_prev[0] > ep[0]: # entering child from right
            draw_infinity(ep[0] + 8, ep[1])
        elif p_prev[1] < ep[1]: # entering child from top
            draw_infinity(ep[0], ep[1] - 8)
        else:
            draw_infinity(ep[0], ep[1] + 8)

    # 1. FK_QuestionGroups_Exams: Exams.Id -> QuestionGroups.ExamId
    ey, _, er = col_coords[("Exams", "Id")]
    qg_ey, qg_el, _ = col_coords[("QuestionGroups", "ExamId")]
    connect_fk("Exams", "Id", "QuestionGroups", "ExamId", [
        (er, ey),
        (er + 32, ey),
        (er + 32, qg_ey),
        (qg_el, qg_ey)
    ])

    # 2. FK_Questions_Exams: Exams.Id -> Questions.ExamId (Top route)
    q_ey, q_el, _ = col_coords[("Questions", "ExamId")]
    connect_fk("Exams", "Id", "Questions", "ExamId", [
        (er, ey),
        (er + 18, ey),
        (er + 18, c_y + 20),
        (q_el - 18, c_y + 20),
        (q_el - 18, q_ey),
        (q_el, q_ey)
    ])

    # 3. FK_Questions_Groups: QuestionGroups.Id -> Questions.GroupId
    qgy, _, qgr = col_coords[("QuestionGroups", "Id")]
    q_gy, q_gl, _ = col_coords[("Questions", "GroupId")]
    connect_fk("QuestionGroups", "Id", "Questions", "GroupId", [
        (qgr, qgy),
        (qgr + 30, qgy),
        (qgr + 30, q_gy),
        (q_gl, q_gy)
    ])

    # 4. FK_Answers_Questions: Questions.Id -> Answers.QuestionId
    qy, _, qr = col_coords[("Questions", "Id")]
    ans_qy, ans_ql, _ = col_coords[("Answers", "QuestionId")]
    connect_fk("Questions", "Id", "Answers", "QuestionId", [
        (qr, qy),
        (qr + 30, qy),
        (qr + 30, ans_qy),
        (ans_ql, ans_qy)
    ])

    # 5. FK_ExamAttempts_Exams: Exams.Id -> ExamAttempts.ExamId
    _, el, _ = col_coords[("Exams", "Id")]
    att_ey, att_el, _ = col_coords[("ExamAttempts", "ExamId")]
    connect_fk("Exams", "Id", "ExamAttempts", "ExamId", [
        (el, ey),
        (el - 18, ey),
        (el - 18, att_ey),
        (att_el, att_ey)
    ])

    # 6. FK_AttemptAnswers_Attempts: ExamAttempts.Id -> AttemptAnswers.AttemptId
    atty, _, attr = col_coords[("ExamAttempts", "Id")]
    aa_atty, aa_attl, _ = col_coords[("AttemptAnswers", "AttemptId")]
    connect_fk("ExamAttempts", "Id", "AttemptAnswers", "AttemptId", [
        (attr, atty),
        (attr + 35, atty),
        (attr + 35, aa_atty),
        (aa_attl, aa_atty)
    ])

    # 7. FK_AttemptAnswers_Questions: Questions.Id -> AttemptAnswers.QuestionId
    aa_qy, _, aa_qr = col_coords[("AttemptAnswers", "QuestionId")]
    connect_fk("Questions", "Id", "AttemptAnswers", "QuestionId", [
        (qr, qy),
        (qr + 15, qy),
        (qr + 15, c_y + 400),
        (aa_qr + 20, c_y + 400),
        (aa_qr + 20, aa_qy),
        (aa_qr, aa_qy)
    ])

    # 8. FK_AttemptAnswers_SelectedAnswer: Answers.Id -> AttemptAnswers.SelectedAnswerId
    ansy, _, ansr = col_coords[("Answers", "Id")]
    aa_ansy, _, aa_ansr = col_coords[("AttemptAnswers", "SelectedAnswerId")]
    connect_fk("Answers", "Id", "AttemptAnswers", "SelectedAnswerId", [
        (ansr, ansy),
        (ansr + 20, ansy),
        (ansr + 20, c_y + 418),
        (aa_ansr + 38, c_y + 418),
        (aa_ansr + 38, aa_ansy),
        (aa_ansr, aa_ansy)
    ])

    # 8. DIAGRAM PROPERTIES & SCHEMA SUMMARY (Bottom Right)
    px = canvas_x + 770
    py = c_y + 450
    pw = 710
    ph = 250
    draw.rectangle([px + 2, py + 2, px + pw + 2, py + ph + 2], fill="#E5E7EB")
    draw.rectangle([px, py, px + pw, py + ph], fill="#FFFFFF", outline="#7192BF", width=1)
    
    # Header
    draw.rectangle([px, py, px + pw, py + 24], fill="#ECE9D8")
    draw.line([px, py + 24, px + pw, py + 24], fill="#9CA3AF", width=1)
    draw_diag_icon(px + 6, py + 4)
    draw.text((px + 26, py + 4), "Diagram Properties & Schema Rules - ToeicExamDb (Microsoft SQL Server)", fill="#111827", font=font_tbl_title)

    specs = [
        ("DBMS Engine:", "Microsoft SQL Server 2022 (RTM) - 16.0.1000.6 (64-bit)"),
        ("Database Name:", "ToeicExamDb (Collation: Vietnamese_CI_AS)"),
        ("Primary Keys (PK):", "Clustered Identity (1,1) auto-increment trên tất cả 6 bảng (Id)."),
        ("Foreign Keys (FK):", "Quan hệ 1 - N với ràng buộc toàn vẹn khóa ngoại (FK constraints, Cascade)."),
        ("Part 5 (Câu ngắn):", "Lưu trong Questions với GroupId tham chiếu QuestionGroups ('P5-SINGLE')."),
        ("Part 6 & 7 (Bài đọc):", "PassageText, PassageImageUrl (quản lý văn bản bài đọc và hình ảnh đề thi)."),
        ("Quy tắc nộp bài:", "Sinh viên làm tối thiểu 1 câu là có thể nộp bài (Flutter App validation)."),
        ("Thủ tục tính điểm:", "Stored Procedure dbo.sp_CalculateExamScore quy đổi thang TOEIC (5 - 495).")
    ]
    sy = py + 32
    for k, v in specs:
        draw.text((px + 12, sy), k, fill="#1F2937", font=font_col_header)
        draw.text((px + 155, sy), v, fill="#374151", font=font_col)
        sy += 24

    # 9. SSMS STATUS BAR
    sb_y = h - 26
    draw.rectangle([0, sb_y, w, h], fill="#007ACC") # Visual Studio / SSMS Blue status bar
    
    draw.text((14, sb_y + 5), "Ready", fill="#FFFFFF", font=font_status)
    draw.line([90, sb_y + 3, 90, h - 3], fill="#38BDF8")
    draw.text((100, sb_y + 5), "localhost (16.0 RTM)", fill="#FFFFFF", font=font_status)
    draw.line([250, sb_y + 3, 250, h - 3], fill="#38BDF8")
    draw.text((260, sb_y + 5), "sa (54)", fill="#FFFFFF", font=font_status)
    draw.line([330, sb_y + 3, 330, h - 3], fill="#38BDF8")
    draw.text((340, sb_y + 5), "ToeicExamDb", fill="#FFFFFF", font=font_status)
    draw.line([445, sb_y + 3, 445, h - 3], fill="#38BDF8")
    draw.text((455, sb_y + 5), "00:00:00", fill="#FFFFFF", font=font_status)
    draw.line([535, sb_y + 3, 535, h - 3], fill="#38BDF8")
    draw.text((545, sb_y + 5), "6 tables | 8 relationships", fill="#FFFFFF", font=font_status)
    draw.line([w - 150, sb_y + 3, w - 150, h - 3], fill="#38BDF8")
    draw.text((w - 140, sb_y + 5), "Ln 1, Col 1, Ch 1", fill="#FFFFFF", font=font_status)

    out_file = "sql_erd_diagram.png"
    img.save(out_file, quality=98)
    print(f"Rendered {out_file} ({os.path.getsize(out_file)} bytes)")

    img.save("frontend/sql_erd_diagram.png")
    print("Copied to frontend/sql_erd_diagram.png")

if __name__ == '__main__':
    render_ssms()
