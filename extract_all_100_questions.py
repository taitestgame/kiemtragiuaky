# -*- coding: utf-8 -*-
import docx
import re
import json

doc = docx.Document('Reading v02.docx')
paras = [p.text.strip() for p in doc.paragraphs if p.text.strip()]

questions = []
curr_part = 5
curr_passage = ''
curr_passage_title = ''

i = 0
while i < len(paras):
    p = paras[i]
    if '[PART:' in p:
        m = re.search(r'\[PART:\s*(\d+)\]', p)
        if m:
            curr_part = int(m.group(1))
    elif '[PASSAGE_TITLE:' in p:
        m = re.search(r'\[PASSAGE_TITLE:\s*(.*?)\]', p)
        if m:
            curr_passage_title = m.group(1).strip()
    elif '[PASSAGE_TEXT]' in p:
        pass_lines = [p.replace('[PASSAGE_TEXT]', '').strip()]
        i += 1
        while i < len(paras) and not paras[i].startswith('[PASSAGE_TEXT_END]') and not paras[i].startswith('[QUESTION:'):
            pass_lines.append(paras[i])
            i += 1
        curr_passage = '\n'.join([l for l in pass_lines if l])
    elif '[GROUP_END:' in p:
        curr_passage = ''
        curr_passage_title = ''
    elif '[QUESTION:' in p:
        m = re.search(r'\[QUESTION:\s*(\d+)\]', p)
        q_num = int(m.group(1)) if m else 0
        q_text = ''
        options = {}
        correct = ''
        hint = ''

        i += 1
        while i < len(paras) and not paras[i].startswith('[QUESTION_END]') and not paras[i].startswith('[QUESTION:'):
            line = paras[i]
            if line.startswith('[A]'):
                options['A'] = re.sub(r'^\[A\]\s*(\(A\)\s*)?', '', line).strip()
            elif line.startswith('[B]'):
                options['B'] = re.sub(r'^\[B\]\s*(\(B\)\s*)?', '', line).strip()
            elif line.startswith('[C]'):
                options['C'] = re.sub(r'^\[C\]\s*(\(C\)\s*)?', '', line).strip()
            elif line.startswith('[D]'):
                options['D'] = re.sub(r'^\[D\]\s*(\(D\)\s*)?', '', line).strip()
            elif line.startswith('[CORRECT:'):
                mc = re.search(r'\[CORRECT:\s*([A-D])\]', line)
                if mc:
                    correct = mc.group(1)
            elif line.startswith('[HINT:'):
                hint = line.replace('[HINT:', '').rstrip(']').strip()
            elif not options:
                cleaned = re.sub(r'^\d+\.\s*', '', line).strip()
                if cleaned:
                    q_text = (q_text + ' ' + cleaned).strip()
            i += 1

        questions.append({
            'num': q_num,
            'part': curr_part,
            'passage_title': curr_passage_title,
            'passage_text': curr_passage,
            'text': q_text,
            'options': options,
            'correct': correct,
            'hint': hint
        })
    i += 1

print(f"Total parsed: {len(questions)}")
with open('all_100_questions.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

# Verify
with open('all_100_questions.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
    print("Sample Q101:", data[0]['num'], data[0]['text'], data[0]['options'], "Correct:", data[0]['correct'])
    print("Sample Q150:", data[49]['num'], data[49]['text'], data[49]['options'], "Correct:", data[49]['correct'])
    print("Sample Q200:", data[99]['num'], data[99]['text'], data[99]['options'], "Correct:", data[99]['correct'])
