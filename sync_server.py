# -*- coding: utf-8 -*-
import http.server
import json
import os
import sys

FRONTEND_DIR = os.path.abspath(r"c:\code\python\hoc\bailam\frontend")
STATUS_FILE_FRONTEND = os.path.join(FRONTEND_DIR, "exam_status.json")
STATUS_FILE_FLUTTER = os.path.abspath(r"c:\code\python\hoc\bailam\toeic_mobile_app\build\web\exam_status.json")

class SyncHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=FRONTEND_DIR, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        if self.path.startswith('/api/exam-status'):
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            data = {"isDeleted": False, "isPublished": True, "examCode": "Reading v02"}
            if os.path.exists(STATUS_FILE_FRONTEND):
                try:
                    with open(STATUS_FILE_FRONTEND, 'r', encoding='utf-8') as f:
                        data = json.load(f)
                except Exception:
                    pass
            self.wfile.write(json.dumps(data, ensure_ascii=False).encode('utf-8'))
            return
        return super().do_GET()

    def do_POST(self):
        if self.path.startswith('/api/exam-status'):
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length).decode('utf-8') if content_length > 0 else '{}'
            try:
                data = json.loads(body)
            except Exception:
                data = {"isDeleted": False, "isPublished": True}

            # Save to frontend
            try:
                with open(STATUS_FILE_FRONTEND, 'w', encoding='utf-8') as f:
                    json.dump(data, f, ensure_ascii=False, indent=2)
            except Exception as e:
                print("Error saving to frontend:", e)

            # Save to Flutter web build directory
            try:
                os.makedirs(os.path.dirname(STATUS_FILE_FLUTTER), exist_ok=True)
                with open(STATUS_FILE_FLUTTER, 'w', encoding='utf-8') as f:
                    json.dump(data, f, ensure_ascii=False, indent=2)
            except Exception as e:
                print("Error saving to flutter:", e)

            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            self.wfile.write(json.dumps({"success": True, "status": data}).encode('utf-8'))
            return

        self.send_response(404)
        self.end_headers()

def main():
    port = 3000
    server_address = ('', port)
    httpd = http.server.ThreadingHTTPServer(server_address, SyncHTTPRequestHandler)
    print(f"Sync Server serving {FRONTEND_DIR} with API on port {port}...")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        httpd.server_close()

if __name__ == '__main__':
    main()
