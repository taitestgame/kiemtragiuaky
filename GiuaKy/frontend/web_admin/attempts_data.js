// Top 10 câu hỏi sinh viên hay làm sai nhất (100% khớp đề Reading v02)
const TOP_10_DIFFICULT_QUESTIONS = [
  {
    "rank": 1,
    "cauNum": 28,
    "etsNum": 128,
    "part": 5,
    "text": "------- poorly the high-speed printer may be functioning, it is still making copies that are adequate for our purposes.",
    "errorRate": 68.4,
    "wrongCount": 82,
    "hint": "Cấu trúc nhượng bộ: 'However + adv/adj + S + V' (Dù cho ... đến mức nào đi chăng nữa): 'However poorly the high-speed printer may be functioning'.",
    "correct": "C",
    "correctText": "However",
    "options": {
      "A": "Rather",
      "B": "Seldom",
      "C": "However",
      "D": "Thoroughly"
    }
  },
  {
    "rank": 2,
    "cauNum": 87,
    "etsNum": 187,
    "part": 7,
    "text": "What aspect of the property does NOT match Mr. Janssen's preferences?",
    "errorRate": 64.2,
    "wrongCount": 77,
    "hint": "Jorge có ngân sách '$1,400 monthly to cover ALL housing costs, including utilities'. Nhà cô McMahon giá thuê $1,400 nhưng 'Electricity and natural gas will be the responsibility of the tenant' -> Chi phí hàng tháng vượt ngân sách của anh ấy (The monthly costs).",
    "correct": "B",
    "correctText": "The monthly costs",
    "options": {
      "A": "The location",
      "B": "The monthly costs",
      "C": "The parking availability",
      "D": "The size"
    }
  },
  {
    "rank": 3,
    "cauNum": 98,
    "etsNum": 198,
    "part": 7,
    "text": "When will the first game be held at a new host venue?",
    "errorRate": 59.1,
    "wrongCount": 71,
    "hint": "Bài báo nêu: 'Ment Hall is the only major arena in the country that has never hosted a Piasek Cup event... The final game will inaugurate the refurbished hall'. Trận chung kết tại Ment Hall diễn ra vào ngày 16 tháng 6 (On June 16).",
    "correct": "D",
    "correctText": "On June 16",
    "options": {
      "A": "On June 10",
      "B": "On June 13",
      "C": "On June 14",
      "D": "On June 16"
    }
  },
  {
    "rank": 4,
    "cauNum": 40,
    "etsNum": 140,
    "part": 6,
    "text": "Select the best sentence to complete the text at (140).",
    "errorRate": 54.8,
    "wrongCount": 66,
    "hint": "Giải thích cho việc nhờ có sự hỗ trợ của cô Amon mà vượt qua khó khăn tài chính trước đây: 'The project had been delayed because of budget cuts.'",
    "correct": "B",
    "correctText": "The project had been delayed because of budget cuts.",
    "options": {
      "A": "Ms. Amon's performance at the conservatory was outstanding.",
      "B": "The project had been delayed because of budget cuts.",
      "C": "Student enrollment has decreased over the past few years.",
      "D": "The original conservatory is being converted into student housing."
    }
  },
  {
    "rank": 5,
    "cauNum": 15,
    "etsNum": 115,
    "part": 5,
    "text": "Daniel Nishida, the chief supply officer, asked that ------- be given full responsibility for approving all invoices.",
    "errorRate": 51.3,
    "wrongCount": 62,
    "hint": "Trong mệnh đề danh từ sau 'asked that', cần một đại từ nhân xưng làm chủ ngữ cho động từ bị động 'be given'. Do đó chọn 'he'.",
    "correct": "A",
    "correctText": "he",
    "options": {
      "A": "he",
      "B": "him",
      "C": "his",
      "D": "himself"
    }
  },
  {
    "rank": 6,
    "cauNum": 63,
    "etsNum": 163,
    "part": 7,
    "text": "At 4:34 P.M., why most likely does Mr. Webber write, \"That's too bad\"?",
    "errorRate": 48.7,
    "wrongCount": 58,
    "hint": "Kurt muốn ăn thử quán Mexico mới ('thinking of trying the new Mexican place') nhưng nghe tin quán đã đóng cửa nên tiếc nuối: 'That's too bad. I heard great things about it.'",
    "correct": "A",
    "correctText": "He wanted to try a new restaurant.",
    "options": {
      "A": "He wanted to try a new restaurant.",
      "B": "Mr. Foxx cannot complete a project.",
      "C": "Slate Road is too far away.",
      "D": "He has a scheduling conflict."
    }
  },
  {
    "rank": 7,
    "cauNum": 74,
    "etsNum": 174,
    "part": 7,
    "text": "What is NOT suggested about the Stonewell Bridge?",
    "errorRate": 46.2,
    "wrongCount": 55,
    "hint": "Cầu cung cấp tuyến phía bắc (A), có đài ngắm cảnh cho người đi bộ và làn xe tải (B), hòa hợp cảnh quan tự nhiên (C). Việc cần nhiều công nhân hơn ước tính ban đầu (D) không được nhắc đến.",
    "correct": "D",
    "correctText": "It required more workers than first estimated.",
    "options": {
      "A": "It provides a northward exit out of town.",
      "B": "It was designed for both pedestrians and vehicles.",
      "C": "It was designed to blend with the natural setting.",
      "D": "It required more workers than first estimated."
    }
  },
  {
    "rank": 8,
    "cauNum": 22,
    "etsNum": 122,
    "part": 5,
    "text": "Cedar Branch Hill has a ------- as a business-friendly environment that provides efficient licensing and other legal processes.",
    "errorRate": 43.5,
    "wrongCount": 52,
    "hint": "Cụm 'have a reputation as...' (có danh tiếng là một...). 'Reputation' phù hợp hoàn toàn với ngữ cảnh kinh doanh thuận lợi.",
    "correct": "C",
    "correctText": "reputation",
    "options": {
      "A": "prediction",
      "B": "courtesy",
      "C": "reputation",
      "D": "statement"
    }
  },
  {
    "rank": 9,
    "cauNum": 82,
    "etsNum": 182,
    "part": 7,
    "text": "What is suggested about the workers at Livrou Farm?",
    "errorRate": 41.0,
    "wrongCount": 49,
    "hint": "Dẫn chứng: 'growing season from June to November... harvested by our farm staff' -> Nhân viên thu hoạch nông sản từ tháng 6 đến tháng 11.",
    "correct": "A",
    "correctText": "They collect farm produce from June to November.",
    "options": {
      "A": "They collect farm produce from June to November.",
      "B": "They update the farm's Web site once a week.",
      "C": "They create meals using the farm's products.",
      "D": "They sell farm products at several local markets."
    }
  },
  {
    "rank": 10,
    "cauNum": 95,
    "etsNum": 195,
    "part": 7,
    "text": "In the online response, the word \"regarding\" in paragraph 1, line 3, is closest in meaning to",
    "errorRate": 38.9,
    "wrongCount": 47,
    "hint": "'provide a suggestion regarding your concerns' = đưa ra đề xuất liên quan tới / về những băn khoăn của bạn ('regarding' đồng nghĩa với 'about').",
    "correct": "B",
    "correctText": "about",
    "options": {
      "A": "looking after",
      "B": "about",
      "C": "in comparison",
      "D": "admiring"
    }
  }
];

// Danh sách 120 lượt làm bài thực tế của sinh viên (SQL Server ExamAttempts)
const STUDENT_ATTEMPTS_DATA = [
  {
    "id": "TS-8841",
    "studentLabel": "Thí sinh ẩn danh #120",
    "device": "Mobile (iOS)",
    "submittedAt": "19/10/2026 14:48",
    "duration": 68,
    "correct": 92,
    "score": 460,
    "rating": "Xuất Sắc",
    "part5Correct": 26,
    "part6Correct": 15,
    "part7Correct": 51,
    "wrongQuestions": [
      {
        "num": 12,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 20,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 24,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 49,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 75,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 95,
        "userOpt": "C",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-1145",
    "studentLabel": "Thí sinh ẩn danh #119",
    "device": "Mobile (Android)",
    "submittedAt": "19/10/2026 15:02",
    "duration": 71,
    "correct": 85,
    "score": 410,
    "rating": "Giỏi",
    "part5Correct": 27,
    "part6Correct": 13,
    "part7Correct": 45,
    "wrongQuestions": [
      {
        "num": 14,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 44,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 45,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 56,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 57,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 58,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 71,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 73,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 74,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-2981",
    "studentLabel": "Thí sinh ẩn danh #118",
    "device": "Mobile (iOS)",
    "submittedAt": "19/10/2026 15:15",
    "duration": 62,
    "correct": 95,
    "score": 480,
    "rating": "Xuất Sắc",
    "part5Correct": 28,
    "part6Correct": 15,
    "part7Correct": 52,
    "wrongQuestions": [
      {
        "num": 4,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 22,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 44,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-5112",
    "studentLabel": "Thí sinh ẩn danh #117",
    "device": "Mobile (Android)",
    "submittedAt": "19/10/2026 15:24",
    "duration": 74,
    "correct": 78,
    "score": 365,
    "rating": "Khá",
    "part5Correct": 25,
    "part6Correct": 12,
    "part7Correct": 41,
    "wrongQuestions": [
      {
        "num": 8,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 24,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 31,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 32,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 39,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 44,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 51,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 52,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 55,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 58,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 67,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 84,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 91,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 95,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 100,
        "userOpt": "D",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-8774",
    "studentLabel": "Thí sinh ẩn danh #116",
    "device": "Mobile (iOS)",
    "submittedAt": "19/10/2026 15:30",
    "duration": 58,
    "correct": 88,
    "score": 430,
    "rating": "Giỏi",
    "part5Correct": 28,
    "part6Correct": 13,
    "part7Correct": 47,
    "wrongQuestions": [
      {
        "num": 11,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 35,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 37,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 44,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 55,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 60,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 66,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 73,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-9331",
    "studentLabel": "Thí sinh ẩn danh #115",
    "device": "Mobile (Android)",
    "submittedAt": "19/10/2026 15:42",
    "duration": 69,
    "correct": 81,
    "score": 385,
    "rating": "Khá",
    "part5Correct": 27,
    "part6Correct": 11,
    "part7Correct": 43,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 3,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 19,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 35,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 36,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 37,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 44,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 52,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 58,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 65,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 66,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 75,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 76,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 95,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 96,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-2824",
    "studentLabel": "Thí sinh ẩn danh #114",
    "device": "Mobile (iOS)",
    "submittedAt": "17/10/2026 11:14",
    "duration": 74,
    "correct": 72,
    "score": 351,
    "rating": "Khá",
    "part5Correct": 21,
    "part6Correct": 13,
    "part7Correct": 38,
    "wrongQuestions": [
      {
        "num": 10,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 17,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 19,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 24,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 26,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 30,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 37,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 45,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 50,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 52,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 57,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 62,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 66,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 70,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 73,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 76,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 77,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 83,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 91,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 100,
        "userOpt": "B",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-9935",
    "studentLabel": "Thí sinh ẩn danh #113",
    "device": "Mobile (iOS)",
    "submittedAt": "19/10/2026 14:02",
    "duration": 59,
    "correct": 68,
    "score": 350,
    "rating": "Khá",
    "part5Correct": 20,
    "part6Correct": 10,
    "part7Correct": 38,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 2,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 13,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 14,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 16,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 18,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 21,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 25,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 29,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 31,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 33,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 35,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 38,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 48,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 55,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 59,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 60,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 64,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 68,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 78,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 79,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 80,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 81,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 92,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 97,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "A",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-4811",
    "studentLabel": "Thí sinh ẩn danh #112",
    "device": "Mobile (Android)",
    "submittedAt": "19/10/2026 08:35",
    "duration": 73,
    "correct": 74,
    "score": 390,
    "rating": "Khá",
    "part5Correct": 24,
    "part6Correct": 7,
    "part7Correct": 43,
    "wrongQuestions": [
      {
        "num": 8,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 12,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 13,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 18,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 35,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 37,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 38,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 39,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 43,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 45,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 50,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 51,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 76,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 84,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 85,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 94,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "A",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-9928",
    "studentLabel": "Thí sinh ẩn danh #111",
    "device": "Mobile (iOS)",
    "submittedAt": "16/10/2026 15:37",
    "duration": 58,
    "correct": 76,
    "score": 345,
    "rating": "Khá",
    "part5Correct": 23,
    "part6Correct": 10,
    "part7Correct": 43,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 2,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 7,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 10,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 11,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 16,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 30,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 33,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 37,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 39,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 44,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 45,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 51,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 60,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 69,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 70,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 71,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 79,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 83,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 86,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-7924",
    "studentLabel": "Thí sinh ẩn danh #110",
    "device": "Web Desktop",
    "submittedAt": "17/10/2026 10:13",
    "duration": 56,
    "correct": 92,
    "score": 466,
    "rating": "Xuất Sắc",
    "part5Correct": 27,
    "part6Correct": 15,
    "part7Correct": 50,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 22,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 27,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 44,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 53,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 91,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-2519",
    "studentLabel": "Thí sinh ẩn danh #109",
    "device": "Mobile (iOS)",
    "submittedAt": "15/10/2026 13:54",
    "duration": 61,
    "correct": 79,
    "score": 383,
    "rating": "Khá",
    "part5Correct": 23,
    "part6Correct": 12,
    "part7Correct": 44,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 3,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 19,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 20,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 27,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 31,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 35,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 38,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 47,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 51,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 53,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 64,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 91,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 94,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 96,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 100,
        "userOpt": "C",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-1711",
    "studentLabel": "Thí sinh ẩn danh #108",
    "device": "Tablet (iPad)",
    "submittedAt": "18/10/2026 16:07",
    "duration": 70,
    "correct": 80,
    "score": 400,
    "rating": "Giỏi",
    "part5Correct": 22,
    "part6Correct": 14,
    "part7Correct": 44,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 3,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 12,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 14,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 22,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 25,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 27,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 31,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 32,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 49,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 58,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 59,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 67,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 68,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 69,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 72,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 85,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-5803",
    "studentLabel": "Thí sinh ẩn danh #107",
    "device": "Tablet (iPad)",
    "submittedAt": "19/10/2026 13:36",
    "duration": 55,
    "correct": 74,
    "score": 390,
    "rating": "Khá",
    "part5Correct": 22,
    "part6Correct": 12,
    "part7Correct": 40,
    "wrongQuestions": [
      {
        "num": 5,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 10,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 12,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 14,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 18,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 21,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 25,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 32,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 35,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 43,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 46,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 51,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 56,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 59,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 63,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 66,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 71,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 72,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 79,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 85,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 88,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-1750",
    "studentLabel": "Thí sinh ẩn danh #106",
    "device": "Tablet (iPad)",
    "submittedAt": "16/10/2026 20:18",
    "duration": 56,
    "correct": 70,
    "score": 359,
    "rating": "Khá",
    "part5Correct": 21,
    "part6Correct": 12,
    "part7Correct": 37,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 3,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 9,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 12,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 27,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 29,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 35,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 45,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 50,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 54,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 55,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 57,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 58,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 60,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 64,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 68,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 69,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 71,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 78,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 79,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 89,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 91,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-7227",
    "studentLabel": "Thí sinh ẩn danh #105",
    "device": "Web Desktop",
    "submittedAt": "18/10/2026 18:53",
    "duration": 64,
    "correct": 79,
    "score": 355,
    "rating": "Khá",
    "part5Correct": 25,
    "part6Correct": 12,
    "part7Correct": 42,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 2,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 22,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 44,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 45,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 55,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 66,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 70,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 71,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 76,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 84,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 89,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 93,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-6820",
    "studentLabel": "Thí sinh ẩn danh #104",
    "device": "Mobile (Android)",
    "submittedAt": "17/10/2026 19:59",
    "duration": 72,
    "correct": 89,
    "score": 399,
    "rating": "Giỏi",
    "part5Correct": 27,
    "part6Correct": 15,
    "part7Correct": 47,
    "wrongQuestions": [
      {
        "num": 7,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 31,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 54,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 56,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 70,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 83,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 94,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 95,
        "userOpt": "D",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-3803",
    "studentLabel": "Thí sinh ẩn danh #103",
    "device": "Mobile (Android)",
    "submittedAt": "16/10/2026 10:29",
    "duration": 73,
    "correct": 80,
    "score": 412,
    "rating": "Giỏi",
    "part5Correct": 24,
    "part6Correct": 13,
    "part7Correct": 43,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 6,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 9,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 17,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 25,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 26,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 33,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 39,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 47,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 57,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 60,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 84,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 95,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 96,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 100,
        "userOpt": "D",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-4598",
    "studentLabel": "Thí sinh ẩn danh #102",
    "device": "Tablet (iPad)",
    "submittedAt": "17/10/2026 20:49",
    "duration": 54,
    "correct": 69,
    "score": 359,
    "rating": "Khá",
    "part5Correct": 22,
    "part6Correct": 11,
    "part7Correct": 36,
    "wrongQuestions": [
      {
        "num": 3,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 6,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 8,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 20,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 25,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 32,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 36,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 39,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 41,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 47,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 49,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 51,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 52,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 61,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 69,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 73,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 75,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 76,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 79,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 80,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 81,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 85,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 100,
        "userOpt": "C",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-6168",
    "studentLabel": "Thí sinh ẩn danh #101",
    "device": "Mobile (iOS)",
    "submittedAt": "17/10/2026 09:13",
    "duration": 59,
    "correct": 86,
    "score": 415,
    "rating": "Giỏi",
    "part5Correct": 26,
    "part6Correct": 11,
    "part7Correct": 49,
    "wrongQuestions": [
      {
        "num": 9,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 26,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 35,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 39,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 44,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 66,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 80,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-9179",
    "studentLabel": "Thí sinh ẩn danh #100",
    "device": "Mobile (iOS)",
    "submittedAt": "18/10/2026 10:16",
    "duration": 75,
    "correct": 72,
    "score": 360,
    "rating": "Khá",
    "part5Correct": 21,
    "part6Correct": 11,
    "part7Correct": 40,
    "wrongQuestions": [
      {
        "num": 5,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 7,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 8,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 14,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 18,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 21,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 22,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 29,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 31,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 33,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 37,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 47,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 56,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 57,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 61,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 62,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 64,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 67,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 72,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 78,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 84,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 95,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 100,
        "userOpt": "C",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-9830",
    "studentLabel": "Thí sinh ẩn danh #99",
    "device": "Web Desktop",
    "submittedAt": "19/10/2026 14:57",
    "duration": 64,
    "correct": 86,
    "score": 420,
    "rating": "Giỏi",
    "part5Correct": 25,
    "part6Correct": 13,
    "part7Correct": 48,
    "wrongQuestions": [
      {
        "num": 16,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 18,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 21,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 30,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 34,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 37,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 59,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 61,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-4593",
    "studentLabel": "Thí sinh ẩn danh #98",
    "device": "Mobile (Android)",
    "submittedAt": "19/10/2026 15:05",
    "duration": 56,
    "correct": 92,
    "score": 448,
    "rating": "Xuất Sắc",
    "part5Correct": 26,
    "part6Correct": 13,
    "part7Correct": 53,
    "wrongQuestions": [
      {
        "num": 10,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 18,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 23,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 38,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 41,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 56,
        "userOpt": "D",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-3504",
    "studentLabel": "Thí sinh ẩn danh #97",
    "device": "Tablet (iPad)",
    "submittedAt": "16/10/2026 20:43",
    "duration": 55,
    "correct": 81,
    "score": 433,
    "rating": "Giỏi",
    "part5Correct": 23,
    "part6Correct": 12,
    "part7Correct": 46,
    "wrongQuestions": [
      {
        "num": 12,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 13,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 20,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 30,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 32,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 39,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 42,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 46,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 55,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 56,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 61,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 65,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 84,
        "userOpt": "B",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-7304",
    "studentLabel": "Thí sinh ẩn danh #96",
    "device": "Mobile (iOS)",
    "submittedAt": "19/10/2026 15:33",
    "duration": 53,
    "correct": 76,
    "score": 380,
    "rating": "Khá",
    "part5Correct": 24,
    "part6Correct": 13,
    "part7Correct": 39,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 21,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 24,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 25,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 26,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 35,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 37,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 38,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 48,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 59,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 60,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 61,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 65,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 67,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 76,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 78,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 84,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 90,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 97,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "D",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-2876",
    "studentLabel": "Thí sinh ẩn danh #95",
    "device": "Tablet (iPad)",
    "submittedAt": "19/10/2026 20:17",
    "duration": 56,
    "correct": 92,
    "score": 466,
    "rating": "Xuất Sắc",
    "part5Correct": 27,
    "part6Correct": 15,
    "part7Correct": 50,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 7,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 11,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 84,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 89,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-5808",
    "studentLabel": "Thí sinh ẩn danh #94",
    "device": "Mobile (iOS)",
    "submittedAt": "16/10/2026 15:00",
    "duration": 69,
    "correct": 91,
    "score": 461,
    "rating": "Xuất Sắc",
    "part5Correct": 27,
    "part6Correct": 15,
    "part7Correct": 49,
    "wrongQuestions": [
      {
        "num": 4,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 14,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 18,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 34,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 62,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 64,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 78,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-3927",
    "studentLabel": "Thí sinh ẩn danh #93",
    "device": "Mobile (Android)",
    "submittedAt": "15/10/2026 18:19",
    "duration": 72,
    "correct": 94,
    "score": 477,
    "rating": "Xuất Sắc",
    "part5Correct": 29,
    "part6Correct": 14,
    "part7Correct": 51,
    "wrongQuestions": [
      {
        "num": 17,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 36,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 52,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 59,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 62,
        "userOpt": "B",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-4258",
    "studentLabel": "Thí sinh ẩn danh #92",
    "device": "Mobile (Android)",
    "submittedAt": "17/10/2026 20:10",
    "duration": 53,
    "correct": 85,
    "score": 428,
    "rating": "Giỏi",
    "part5Correct": 25,
    "part6Correct": 15,
    "part7Correct": 45,
    "wrongQuestions": [
      {
        "num": 4,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 5,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 13,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 23,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 36,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 48,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 50,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 51,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 56,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 69,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 92,
        "userOpt": "D",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-6310",
    "studentLabel": "Thí sinh ẩn danh #91",
    "device": "Mobile (iOS)",
    "submittedAt": "15/10/2026 09:59",
    "duration": 60,
    "correct": 79,
    "score": 364,
    "rating": "Khá",
    "part5Correct": 23,
    "part6Correct": 13,
    "part7Correct": 43,
    "wrongQuestions": [
      {
        "num": 3,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 5,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 6,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 8,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 22,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 26,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 32,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 35,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 53,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 57,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 76,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 79,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 82,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 85,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 89,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 93,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 95,
        "userOpt": "D",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-1949",
    "studentLabel": "Thí sinh ẩn danh #90",
    "device": "Mobile (Android)",
    "submittedAt": "19/10/2026 09:05",
    "duration": 55,
    "correct": 91,
    "score": 476,
    "rating": "Xuất Sắc",
    "part5Correct": 27,
    "part6Correct": 16,
    "part7Correct": 48,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 25,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 49,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 71,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 75,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 89,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 92,
        "userOpt": "A",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-9727",
    "studentLabel": "Thí sinh ẩn danh #89",
    "device": "Mobile (Android)",
    "submittedAt": "16/10/2026 18:30",
    "duration": 61,
    "correct": 85,
    "score": 405,
    "rating": "Giỏi",
    "part5Correct": 27,
    "part6Correct": 15,
    "part7Correct": 43,
    "wrongQuestions": [
      {
        "num": 22,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 23,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 29,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 63,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 65,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 72,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 80,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 84,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 85,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 89,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-9645",
    "studentLabel": "Thí sinh ẩn danh #88",
    "device": "Mobile (Android)",
    "submittedAt": "18/10/2026 11:59",
    "duration": 75,
    "correct": 85,
    "score": 407,
    "rating": "Giỏi",
    "part5Correct": 26,
    "part6Correct": 13,
    "part7Correct": 46,
    "wrongQuestions": [
      {
        "num": 10,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 11,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 22,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 33,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 53,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 57,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 59,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 71,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 73,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 84,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-6107",
    "studentLabel": "Thí sinh ẩn danh #87",
    "device": "Mobile (iOS)",
    "submittedAt": "17/10/2026 15:57",
    "duration": 56,
    "correct": 84,
    "score": 423,
    "rating": "Giỏi",
    "part5Correct": 25,
    "part6Correct": 11,
    "part7Correct": 48,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 22,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 27,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 38,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 39,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 43,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 45,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 56,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 61,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-5061",
    "studentLabel": "Thí sinh ẩn danh #86",
    "device": "Mobile (Android)",
    "submittedAt": "15/10/2026 13:01",
    "duration": 60,
    "correct": 86,
    "score": 430,
    "rating": "Giỏi",
    "part5Correct": 24,
    "part6Correct": 14,
    "part7Correct": 48,
    "wrongQuestions": [
      {
        "num": 10,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 17,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 22,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 24,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 45,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 57,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 63,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 90,
        "userOpt": "A",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-4608",
    "studentLabel": "Thí sinh ẩn danh #85",
    "device": "Mobile (iOS)",
    "submittedAt": "15/10/2026 19:40",
    "duration": 55,
    "correct": 69,
    "score": 359,
    "rating": "Khá",
    "part5Correct": 17,
    "part6Correct": 12,
    "part7Correct": 40,
    "wrongQuestions": [
      {
        "num": 8,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 13,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 17,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 18,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 20,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 21,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 23,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 25,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 26,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 30,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 32,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 37,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 43,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 44,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 50,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 55,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 59,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 64,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 70,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 73,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 78,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 81,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 83,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 93,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 96,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 99,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 100,
        "userOpt": "B",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-1514",
    "studentLabel": "Thí sinh ẩn danh #84",
    "device": "Web Desktop",
    "submittedAt": "15/10/2026 16:15",
    "duration": 68,
    "correct": 76,
    "score": 387,
    "rating": "Khá",
    "part5Correct": 22,
    "part6Correct": 12,
    "part7Correct": 42,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 8,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 12,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 14,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 20,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 30,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 37,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 38,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 39,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 51,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 52,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 58,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 59,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 60,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 62,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 64,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 72,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 75,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-4510",
    "studentLabel": "Thí sinh ẩn danh #83",
    "device": "Mobile (Android)",
    "submittedAt": "16/10/2026 19:59",
    "duration": 68,
    "correct": 86,
    "score": 431,
    "rating": "Giỏi",
    "part5Correct": 26,
    "part6Correct": 14,
    "part7Correct": 46,
    "wrongQuestions": [
      {
        "num": 4,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 21,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 45,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 58,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 61,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 67,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 74,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 89,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "D",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-4981",
    "studentLabel": "Thí sinh ẩn danh #82",
    "device": "Mobile (iOS)",
    "submittedAt": "18/10/2026 11:06",
    "duration": 66,
    "correct": 71,
    "score": 387,
    "rating": "Khá",
    "part5Correct": 22,
    "part6Correct": 9,
    "part7Correct": 40,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 4,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 10,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 19,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 24,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 26,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 32,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 33,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 35,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 44,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 45,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 47,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 50,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 59,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 61,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 73,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 80,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 90,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 91,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 96,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 97,
        "userOpt": "D",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-6804",
    "studentLabel": "Thí sinh ẩn danh #81",
    "device": "Mobile (iOS)",
    "submittedAt": "18/10/2026 15:55",
    "duration": 74,
    "correct": 91,
    "score": 448,
    "rating": "Xuất Sắc",
    "part5Correct": 27,
    "part6Correct": 15,
    "part7Correct": 49,
    "wrongQuestions": [
      {
        "num": 7,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 12,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 43,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 59,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 62,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 70,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-2612",
    "studentLabel": "Thí sinh ẩn danh #80",
    "device": "Mobile (iOS)",
    "submittedAt": "18/10/2026 19:21",
    "duration": 60,
    "correct": 93,
    "score": 451,
    "rating": "Xuất Sắc",
    "part5Correct": 28,
    "part6Correct": 15,
    "part7Correct": 50,
    "wrongQuestions": [
      {
        "num": 18,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 32,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 47,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 63,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-4139",
    "studentLabel": "Thí sinh ẩn danh #79",
    "device": "Mobile (Android)",
    "submittedAt": "19/10/2026 15:08",
    "duration": 61,
    "correct": 81,
    "score": 406,
    "rating": "Giỏi",
    "part5Correct": 23,
    "part6Correct": 16,
    "part7Correct": 42,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 4,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 9,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 16,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 24,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 59,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 60,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 77,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 82,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 91,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 92,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 93,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 95,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-8579",
    "studentLabel": "Thí sinh ẩn danh #78",
    "device": "Mobile (Android)",
    "submittedAt": "15/10/2026 15:51",
    "duration": 54,
    "correct": 85,
    "score": 401,
    "rating": "Giỏi",
    "part5Correct": 23,
    "part6Correct": 14,
    "part7Correct": 48,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 7,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 11,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 12,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 17,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 22,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 29,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 39,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 84,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 85,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 96,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-9856",
    "studentLabel": "Thí sinh ẩn danh #77",
    "device": "Mobile (iOS)",
    "submittedAt": "15/10/2026 20:54",
    "duration": 66,
    "correct": 75,
    "score": 355,
    "rating": "Khá",
    "part5Correct": 21,
    "part6Correct": 12,
    "part7Correct": 42,
    "wrongQuestions": [
      {
        "num": 6,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 9,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 16,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 19,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 25,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 29,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 30,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 35,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 43,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 56,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 60,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 72,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 78,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 80,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 86,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 91,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 93,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 95,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 100,
        "userOpt": "C",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-8956",
    "studentLabel": "Thí sinh ẩn danh #76",
    "device": "Mobile (iOS)",
    "submittedAt": "16/10/2026 14:57",
    "duration": 65,
    "correct": 69,
    "score": 355,
    "rating": "Khá",
    "part5Correct": 18,
    "part6Correct": 10,
    "part7Correct": 41,
    "wrongQuestions": [
      {
        "num": 4,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 6,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 11,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 14,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 16,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 17,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 18,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 19,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 24,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 25,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 29,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 31,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 32,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 33,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 41,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 43,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 45,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 50,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 55,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 59,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 80,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 82,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 85,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 86,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 90,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 91,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 95,
        "userOpt": "D",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-1035",
    "studentLabel": "Thí sinh ẩn danh #75",
    "device": "Mobile (iOS)",
    "submittedAt": "17/10/2026 20:50",
    "duration": 66,
    "correct": 82,
    "score": 413,
    "rating": "Giỏi",
    "part5Correct": 24,
    "part6Correct": 13,
    "part7Correct": 45,
    "wrongQuestions": [
      {
        "num": 5,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 8,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 24,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 35,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 58,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 59,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 80,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 85,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 100,
        "userOpt": "D",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-8973",
    "studentLabel": "Thí sinh ẩn danh #74",
    "device": "Mobile (Android)",
    "submittedAt": "16/10/2026 12:13",
    "duration": 75,
    "correct": 69,
    "score": 382,
    "rating": "Khá",
    "part5Correct": 23,
    "part6Correct": 10,
    "part7Correct": 36,
    "wrongQuestions": [
      {
        "num": 5,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 9,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 14,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 24,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 27,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 33,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 34,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 39,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 41,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 45,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 49,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 57,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 58,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 65,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 69,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 71,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 75,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 79,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 84,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 85,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 86,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 90,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 92,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 96,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "D",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-9883",
    "studentLabel": "Thí sinh ẩn danh #73",
    "device": "Mobile (iOS)",
    "submittedAt": "17/10/2026 08:03",
    "duration": 69,
    "correct": 86,
    "score": 425,
    "rating": "Giỏi",
    "part5Correct": 24,
    "part6Correct": 15,
    "part7Correct": 47,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 3,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 17,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 18,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 20,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 45,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 47,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 51,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 66,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 96,
        "userOpt": "A",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-9701",
    "studentLabel": "Thí sinh ẩn danh #72",
    "device": "Mobile (Android)",
    "submittedAt": "15/10/2026 16:05",
    "duration": 72,
    "correct": 73,
    "score": 349,
    "rating": "Khá",
    "part5Correct": 23,
    "part6Correct": 13,
    "part7Correct": 37,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 17,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 18,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 19,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 24,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 26,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 41,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 43,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 47,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 49,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 57,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 65,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 67,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 71,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 76,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 78,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 79,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 93,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 94,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 97,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-2113",
    "studentLabel": "Thí sinh ẩn danh #71",
    "device": "Tablet (iPad)",
    "submittedAt": "16/10/2026 14:07",
    "duration": 71,
    "correct": 86,
    "score": 410,
    "rating": "Giỏi",
    "part5Correct": 25,
    "part6Correct": 12,
    "part7Correct": 49,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 2,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 16,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 32,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 36,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 38,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 45,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 50,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 55,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-1651",
    "studentLabel": "Thí sinh ẩn danh #70",
    "device": "Mobile (Android)",
    "submittedAt": "15/10/2026 14:42",
    "duration": 69,
    "correct": 86,
    "score": 431,
    "rating": "Giỏi",
    "part5Correct": 28,
    "part6Correct": 12,
    "part7Correct": 46,
    "wrongQuestions": [
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 34,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 36,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 51,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 62,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 71,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-6183",
    "studentLabel": "Thí sinh ẩn danh #69",
    "device": "Web Desktop",
    "submittedAt": "16/10/2026 18:45",
    "duration": 61,
    "correct": 78,
    "score": 360,
    "rating": "Khá",
    "part5Correct": 23,
    "part6Correct": 15,
    "part7Correct": 40,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 3,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 11,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 18,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 19,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 26,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 36,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 56,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 57,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 59,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 63,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 64,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 67,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 84,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 86,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 89,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-7484",
    "studentLabel": "Thí sinh ẩn danh #68",
    "device": "Mobile (Android)",
    "submittedAt": "17/10/2026 15:20",
    "duration": 53,
    "correct": 92,
    "score": 449,
    "rating": "Xuất Sắc",
    "part5Correct": 25,
    "part6Correct": 16,
    "part7Correct": 51,
    "wrongQuestions": [
      {
        "num": 3,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 18,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 24,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 89,
        "userOpt": "C",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-8508",
    "studentLabel": "Thí sinh ẩn danh #67",
    "device": "Mobile (Android)",
    "submittedAt": "19/10/2026 09:04",
    "duration": 69,
    "correct": 85,
    "score": 408,
    "rating": "Giỏi",
    "part5Correct": 24,
    "part6Correct": 13,
    "part7Correct": 48,
    "wrongQuestions": [
      {
        "num": 7,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 13,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 22,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 23,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 27,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 36,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 39,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 52,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 61,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-5345",
    "studentLabel": "Thí sinh ẩn danh #66",
    "device": "Mobile (Android)",
    "submittedAt": "17/10/2026 09:56",
    "duration": 62,
    "correct": 75,
    "score": 368,
    "rating": "Khá",
    "part5Correct": 21,
    "part6Correct": 12,
    "part7Correct": 42,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 4,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 5,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 8,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 9,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 12,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 14,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 35,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 36,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 41,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 51,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 58,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 67,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 78,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 81,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 88,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 90,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 91,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 95,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 96,
        "userOpt": "C",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-3584",
    "studentLabel": "Thí sinh ẩn danh #65",
    "device": "Mobile (iOS)",
    "submittedAt": "19/10/2026 19:19",
    "duration": 53,
    "correct": 87,
    "score": 428,
    "rating": "Giỏi",
    "part5Correct": 27,
    "part6Correct": 14,
    "part7Correct": 46,
    "wrongQuestions": [
      {
        "num": 17,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 51,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 77,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 81,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 93,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 95,
        "userOpt": "D",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-5905",
    "studentLabel": "Thí sinh ẩn danh #64",
    "device": "Tablet (iPad)",
    "submittedAt": "15/10/2026 10:16",
    "duration": 75,
    "correct": 71,
    "score": 351,
    "rating": "Khá",
    "part5Correct": 24,
    "part6Correct": 9,
    "part7Correct": 38,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 4,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 17,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 26,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 27,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 32,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 34,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 36,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 37,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 45,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 47,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 50,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 51,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 54,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 59,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 60,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 65,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 74,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 77,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 79,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 80,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 86,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 91,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 93,
        "userOpt": "D",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-3546",
    "studentLabel": "Thí sinh ẩn danh #63",
    "device": "Web Desktop",
    "submittedAt": "17/10/2026 17:13",
    "duration": 59,
    "correct": 90,
    "score": 466,
    "rating": "Xuất Sắc",
    "part5Correct": 28,
    "part6Correct": 14,
    "part7Correct": 48,
    "wrongQuestions": [
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 38,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 44,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 59,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-5325",
    "studentLabel": "Thí sinh ẩn danh #62",
    "device": "Mobile (Android)",
    "submittedAt": "18/10/2026 12:57",
    "duration": 73,
    "correct": 69,
    "score": 350,
    "rating": "Khá",
    "part5Correct": 18,
    "part6Correct": 11,
    "part7Correct": 40,
    "wrongQuestions": [
      {
        "num": 4,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 7,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 8,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 10,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 16,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 17,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 21,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 22,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 25,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 30,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 36,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 38,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 39,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 43,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 46,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 47,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 65,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 75,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 80,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 84,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 86,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 88,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 89,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 91,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-7939",
    "studentLabel": "Thí sinh ẩn danh #61",
    "device": "Web Desktop",
    "submittedAt": "15/10/2026 08:21",
    "duration": 73,
    "correct": 92,
    "score": 453,
    "rating": "Xuất Sắc",
    "part5Correct": 27,
    "part6Correct": 16,
    "part7Correct": 49,
    "wrongQuestions": [
      {
        "num": 13,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 14,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 52,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 54,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 68,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-5291",
    "studentLabel": "Thí sinh ẩn danh #60",
    "device": "Mobile (Android)",
    "submittedAt": "18/10/2026 16:45",
    "duration": 53,
    "correct": 81,
    "score": 430,
    "rating": "Giỏi",
    "part5Correct": 28,
    "part6Correct": 13,
    "part7Correct": 40,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 41,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 45,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 49,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 53,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 54,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 68,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 72,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 80,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 94,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "B",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-2832",
    "studentLabel": "Thí sinh ẩn danh #59",
    "device": "Mobile (iOS)",
    "submittedAt": "16/10/2026 16:02",
    "duration": 71,
    "correct": 94,
    "score": 468,
    "rating": "Xuất Sắc",
    "part5Correct": 28,
    "part6Correct": 13,
    "part7Correct": 53,
    "wrongQuestions": [
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 31,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 39,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 82,
        "userOpt": "B",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-3426",
    "studentLabel": "Thí sinh ẩn danh #58",
    "device": "Mobile (iOS)",
    "submittedAt": "16/10/2026 08:19",
    "duration": 64,
    "correct": 79,
    "score": 347,
    "rating": "Khá",
    "part5Correct": 25,
    "part6Correct": 13,
    "part7Correct": 41,
    "wrongQuestions": [
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 21,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 23,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 27,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 32,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 33,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 39,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 48,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 50,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 53,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 62,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 68,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 70,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 72,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 78,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 85,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 86,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 94,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-4441",
    "studentLabel": "Thí sinh ẩn danh #57",
    "device": "Tablet (iPad)",
    "submittedAt": "16/10/2026 18:06",
    "duration": 66,
    "correct": 79,
    "score": 380,
    "rating": "Khá",
    "part5Correct": 25,
    "part6Correct": 11,
    "part7Correct": 43,
    "wrongQuestions": [
      {
        "num": 3,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 6,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 25,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 26,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 32,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 34,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 46,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 47,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 49,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 61,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 79,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 82,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 92,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 94,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 95,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-3532",
    "studentLabel": "Thí sinh ẩn danh #56",
    "device": "Mobile (Android)",
    "submittedAt": "16/10/2026 20:51",
    "duration": 53,
    "correct": 73,
    "score": 371,
    "rating": "Khá",
    "part5Correct": 21,
    "part6Correct": 11,
    "part7Correct": 41,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 6,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 12,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 17,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 18,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 25,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 29,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 32,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 33,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 39,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 43,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 47,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 52,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 54,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 69,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 73,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 77,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 78,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 86,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 94,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "D",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-3938",
    "studentLabel": "Thí sinh ẩn danh #55",
    "device": "Tablet (iPad)",
    "submittedAt": "17/10/2026 20:59",
    "duration": 61,
    "correct": 81,
    "score": 410,
    "rating": "Giỏi",
    "part5Correct": 24,
    "part6Correct": 13,
    "part7Correct": 44,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 10,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 22,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 24,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 25,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 31,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 33,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 42,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 53,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 58,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 63,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 83,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 91,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "D",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-3608",
    "studentLabel": "Thí sinh ẩn danh #54",
    "device": "Tablet (iPad)",
    "submittedAt": "15/10/2026 14:55",
    "duration": 60,
    "correct": 69,
    "score": 375,
    "rating": "Khá",
    "part5Correct": 18,
    "part6Correct": 12,
    "part7Correct": 39,
    "wrongQuestions": [
      {
        "num": 3,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 7,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 10,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 14,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 18,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 19,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 20,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 24,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 25,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 27,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 31,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 35,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 42,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 44,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 48,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 56,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 58,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 60,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 64,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 65,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 67,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 69,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 79,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 92,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-4269",
    "studentLabel": "Thí sinh ẩn danh #53",
    "device": "Mobile (iOS)",
    "submittedAt": "17/10/2026 12:52",
    "duration": 60,
    "correct": 93,
    "score": 459,
    "rating": "Xuất Sắc",
    "part5Correct": 28,
    "part6Correct": 16,
    "part7Correct": 49,
    "wrongQuestions": [
      {
        "num": 20,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 49,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 53,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 57,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 97,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-1387",
    "studentLabel": "Thí sinh ẩn danh #52",
    "device": "Tablet (iPad)",
    "submittedAt": "16/10/2026 14:21",
    "duration": 61,
    "correct": 76,
    "score": 349,
    "rating": "Khá",
    "part5Correct": 26,
    "part6Correct": 12,
    "part7Correct": 38,
    "wrongQuestions": [
      {
        "num": 5,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 11,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 18,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 36,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 37,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 44,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 52,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 56,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 59,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 65,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 72,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 81,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 88,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 89,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 90,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 91,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 93,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 95,
        "userOpt": "C",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-6753",
    "studentLabel": "Thí sinh ẩn danh #51",
    "device": "Tablet (iPad)",
    "submittedAt": "19/10/2026 14:43",
    "duration": 63,
    "correct": 94,
    "score": 479,
    "rating": "Xuất Sắc",
    "part5Correct": 28,
    "part6Correct": 15,
    "part7Correct": 51,
    "wrongQuestions": [
      {
        "num": 5,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 37,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-1452",
    "studentLabel": "Thí sinh ẩn danh #50",
    "device": "Mobile (iOS)",
    "submittedAt": "17/10/2026 10:37",
    "duration": 56,
    "correct": 76,
    "score": 347,
    "rating": "Khá",
    "part5Correct": 24,
    "part6Correct": 14,
    "part7Correct": 38,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 9,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 18,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 21,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 27,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 43,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 45,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 48,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 51,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 53,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 54,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 67,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 72,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 84,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 85,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 88,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 90,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 94,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 96,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-8119",
    "studentLabel": "Thí sinh ẩn danh #49",
    "device": "Web Desktop",
    "submittedAt": "17/10/2026 14:38",
    "duration": 65,
    "correct": 84,
    "score": 402,
    "rating": "Giỏi",
    "part5Correct": 26,
    "part6Correct": 13,
    "part7Correct": 45,
    "wrongQuestions": [
      {
        "num": 4,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 8,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 41,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 43,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 65,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 79,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 81,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 97,
        "userOpt": "A",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-4114",
    "studentLabel": "Thí sinh ẩn danh #48",
    "device": "Web Desktop",
    "submittedAt": "15/10/2026 19:27",
    "duration": 70,
    "correct": 68,
    "score": 378,
    "rating": "Khá",
    "part5Correct": 20,
    "part6Correct": 10,
    "part7Correct": 38,
    "wrongQuestions": [
      {
        "num": 5,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 6,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 11,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 12,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 18,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 19,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 29,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 31,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 35,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 36,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 39,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 46,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 51,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 53,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 55,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 57,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 64,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 67,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 69,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 71,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 80,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 86,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 91,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "B",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-4228",
    "studentLabel": "Thí sinh ẩn danh #47",
    "device": "Web Desktop",
    "submittedAt": "18/10/2026 09:42",
    "duration": 63,
    "correct": 78,
    "score": 384,
    "rating": "Khá",
    "part5Correct": 24,
    "part6Correct": 14,
    "part7Correct": 40,
    "wrongQuestions": [
      {
        "num": 5,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 10,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 12,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 14,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 22,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 25,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 35,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 36,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 52,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 59,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 72,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 78,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 82,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 86,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 90,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 91,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 92,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 94,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 96,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 97,
        "userOpt": "B",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-3041",
    "studentLabel": "Thí sinh ẩn danh #46",
    "device": "Tablet (iPad)",
    "submittedAt": "17/10/2026 16:19",
    "duration": 63,
    "correct": 89,
    "score": 421,
    "rating": "Giỏi",
    "part5Correct": 26,
    "part6Correct": 15,
    "part7Correct": 48,
    "wrongQuestions": [
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 21,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 22,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 47,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 61,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 86,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 92,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 93,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 95,
        "userOpt": "D",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-7592",
    "studentLabel": "Thí sinh ẩn danh #45",
    "device": "Tablet (iPad)",
    "submittedAt": "17/10/2026 16:08",
    "duration": 74,
    "correct": 74,
    "score": 371,
    "rating": "Khá",
    "part5Correct": 23,
    "part6Correct": 11,
    "part7Correct": 40,
    "wrongQuestions": [
      {
        "num": 6,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 10,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 20,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 21,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 23,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 30,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 31,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 34,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 38,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 42,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 46,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 49,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 58,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 69,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 73,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 79,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 83,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 85,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 91,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 92,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "B",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-7211",
    "studentLabel": "Thí sinh ẩn danh #44",
    "device": "Tablet (iPad)",
    "submittedAt": "16/10/2026 17:36",
    "duration": 70,
    "correct": 77,
    "score": 370,
    "rating": "Khá",
    "part5Correct": 26,
    "part6Correct": 12,
    "part7Correct": 39,
    "wrongQuestions": [
      {
        "num": 6,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 19,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 26,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 32,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 36,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 38,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 50,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 51,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 52,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 56,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 60,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 70,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 80,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 89,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 95,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 100,
        "userOpt": "C",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-1006",
    "studentLabel": "Thí sinh ẩn danh #43",
    "device": "Web Desktop",
    "submittedAt": "17/10/2026 11:27",
    "duration": 67,
    "correct": 93,
    "score": 465,
    "rating": "Xuất Sắc",
    "part5Correct": 26,
    "part6Correct": 15,
    "part7Correct": 52,
    "wrongQuestions": [
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 19,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 29,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 38,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-8238",
    "studentLabel": "Thí sinh ẩn danh #42",
    "device": "Mobile (iOS)",
    "submittedAt": "16/10/2026 16:30",
    "duration": 74,
    "correct": 93,
    "score": 455,
    "rating": "Xuất Sắc",
    "part5Correct": 28,
    "part6Correct": 16,
    "part7Correct": 49,
    "wrongQuestions": [
      {
        "num": 10,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 59,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 75,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 79,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 82,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "C",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-2389",
    "studentLabel": "Thí sinh ẩn danh #41",
    "device": "Web Desktop",
    "submittedAt": "19/10/2026 18:40",
    "duration": 55,
    "correct": 87,
    "score": 416,
    "rating": "Giỏi",
    "part5Correct": 25,
    "part6Correct": 15,
    "part7Correct": 47,
    "wrongQuestions": [
      {
        "num": 5,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 14,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 18,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 43,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 64,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 73,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 75,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 82,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 95,
        "userOpt": "C",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-4848",
    "studentLabel": "Thí sinh ẩn danh #40",
    "device": "Tablet (iPad)",
    "submittedAt": "17/10/2026 11:51",
    "duration": 53,
    "correct": 74,
    "score": 354,
    "rating": "Khá",
    "part5Correct": 21,
    "part6Correct": 11,
    "part7Correct": 42,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 8,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 10,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 13,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 16,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 18,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 24,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 32,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 34,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 36,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 38,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 42,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 48,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 67,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 72,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 76,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 77,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 78,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 81,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 93,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 97,
        "userOpt": "A",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-1757",
    "studentLabel": "Thí sinh ẩn danh #39",
    "device": "Mobile (Android)",
    "submittedAt": "18/10/2026 17:54",
    "duration": 67,
    "correct": 92,
    "score": 449,
    "rating": "Xuất Sắc",
    "part5Correct": 26,
    "part6Correct": 15,
    "part7Correct": 51,
    "wrongQuestions": [
      {
        "num": 18,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 19,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 26,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 27,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 32,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 49,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 93,
        "userOpt": "C",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-7790",
    "studentLabel": "Thí sinh ẩn danh #38",
    "device": "Tablet (iPad)",
    "submittedAt": "19/10/2026 11:45",
    "duration": 68,
    "correct": 90,
    "score": 469,
    "rating": "Xuất Sắc",
    "part5Correct": 27,
    "part6Correct": 15,
    "part7Correct": 48,
    "wrongQuestions": [
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 25,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 80,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 82,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-7547",
    "studentLabel": "Thí sinh ẩn danh #37",
    "device": "Mobile (Android)",
    "submittedAt": "16/10/2026 18:44",
    "duration": 66,
    "correct": 68,
    "score": 351,
    "rating": "Khá",
    "part5Correct": 20,
    "part6Correct": 12,
    "part7Correct": 36,
    "wrongQuestions": [
      {
        "num": 6,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 7,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 9,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 14,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 16,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 20,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 23,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 24,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 32,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 37,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 39,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 45,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 49,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 50,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 51,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 56,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 57,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 58,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 59,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 72,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 73,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 79,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 80,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 81,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 83,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 85,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 89,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 100,
        "userOpt": "B",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-4585",
    "studentLabel": "Thí sinh ẩn danh #36",
    "device": "Mobile (Android)",
    "submittedAt": "19/10/2026 15:03",
    "duration": 56,
    "correct": 85,
    "score": 410,
    "rating": "Giỏi",
    "part5Correct": 25,
    "part6Correct": 12,
    "part7Correct": 48,
    "wrongQuestions": [
      {
        "num": 6,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 18,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 23,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 32,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 33,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 45,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 49,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 50,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 51,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 63,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 82,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-8478",
    "studentLabel": "Thí sinh ẩn danh #35",
    "device": "Mobile (Android)",
    "submittedAt": "18/10/2026 18:33",
    "duration": 63,
    "correct": 85,
    "score": 433,
    "rating": "Giỏi",
    "part5Correct": 24,
    "part6Correct": 14,
    "part7Correct": 47,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 19,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 21,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 32,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 36,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 53,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 56,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 57,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 100,
        "userOpt": "D",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-8251",
    "studentLabel": "Thí sinh ẩn danh #34",
    "device": "Mobile (Android)",
    "submittedAt": "19/10/2026 14:53",
    "duration": 58,
    "correct": 85,
    "score": 423,
    "rating": "Giỏi",
    "part5Correct": 29,
    "part6Correct": 13,
    "part7Correct": 43,
    "wrongQuestions": [
      {
        "num": 19,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 36,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 37,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 54,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 61,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 65,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 74,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 81,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 83,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 88,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 95,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 96,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-8777",
    "studentLabel": "Thí sinh ẩn danh #33",
    "device": "Mobile (iOS)",
    "submittedAt": "17/10/2026 20:15",
    "duration": 69,
    "correct": 94,
    "score": 462,
    "rating": "Xuất Sắc",
    "part5Correct": 30,
    "part6Correct": 15,
    "part7Correct": 49,
    "wrongQuestions": [
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 50,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-8939",
    "studentLabel": "Thí sinh ẩn danh #32",
    "device": "Tablet (iPad)",
    "submittedAt": "16/10/2026 12:28",
    "duration": 62,
    "correct": 70,
    "score": 390,
    "rating": "Khá",
    "part5Correct": 23,
    "part6Correct": 11,
    "part7Correct": 36,
    "wrongQuestions": [
      {
        "num": 3,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 6,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 14,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 26,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 30,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 31,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 33,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 36,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 44,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 50,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 58,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 59,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 63,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 64,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 71,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 72,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 78,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 86,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 89,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 91,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 95,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 97,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "D",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-4841",
    "studentLabel": "Thí sinh ẩn danh #31",
    "device": "Web Desktop",
    "submittedAt": "17/10/2026 13:57",
    "duration": 57,
    "correct": 85,
    "score": 400,
    "rating": "Giỏi",
    "part5Correct": 25,
    "part6Correct": 14,
    "part7Correct": 46,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 11,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 23,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 26,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 37,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 54,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 55,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 66,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 82,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 86,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 90,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-3471",
    "studentLabel": "Thí sinh ẩn danh #30",
    "device": "Mobile (Android)",
    "submittedAt": "18/10/2026 19:09",
    "duration": 55,
    "correct": 90,
    "score": 458,
    "rating": "Xuất Sắc",
    "part5Correct": 26,
    "part6Correct": 15,
    "part7Correct": 49,
    "wrongQuestions": [
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 20,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 22,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 23,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 95,
        "userOpt": "C",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-7797",
    "studentLabel": "Thí sinh ẩn danh #29",
    "device": "Mobile (iOS)",
    "submittedAt": "17/10/2026 16:29",
    "duration": 59,
    "correct": 81,
    "score": 398,
    "rating": "Giỏi",
    "part5Correct": 25,
    "part6Correct": 13,
    "part7Correct": 43,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 4,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 11,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 29,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 33,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 42,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 45,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 56,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 64,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 69,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 76,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 82,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 91,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 94,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-7883",
    "studentLabel": "Thí sinh ẩn danh #28",
    "device": "Mobile (iOS)",
    "submittedAt": "19/10/2026 19:01",
    "duration": 68,
    "correct": 92,
    "score": 469,
    "rating": "Xuất Sắc",
    "part5Correct": 27,
    "part6Correct": 16,
    "part7Correct": 49,
    "wrongQuestions": [
      {
        "num": 5,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 9,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 13,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 68,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 71,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 82,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 84,
        "userOpt": "A",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-1096",
    "studentLabel": "Thí sinh ẩn danh #27",
    "device": "Web Desktop",
    "submittedAt": "17/10/2026 20:24",
    "duration": 70,
    "correct": 94,
    "score": 471,
    "rating": "Xuất Sắc",
    "part5Correct": 29,
    "part6Correct": 14,
    "part7Correct": 51,
    "wrongQuestions": [
      {
        "num": 13,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 33,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 45,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 54,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 63,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 77,
        "userOpt": "D",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-9947",
    "studentLabel": "Thí sinh ẩn danh #26",
    "device": "Mobile (Android)",
    "submittedAt": "16/10/2026 15:14",
    "duration": 68,
    "correct": 76,
    "score": 372,
    "rating": "Khá",
    "part5Correct": 25,
    "part6Correct": 8,
    "part7Correct": 43,
    "wrongQuestions": [
      {
        "num": 13,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 18,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 23,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 29,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 36,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 37,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 38,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 41,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 44,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 50,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 52,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 61,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 78,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 82,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 89,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 91,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 92,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-1475",
    "studentLabel": "Thí sinh ẩn danh #25",
    "device": "Mobile (iOS)",
    "submittedAt": "17/10/2026 18:43",
    "duration": 75,
    "correct": 93,
    "score": 470,
    "rating": "Xuất Sắc",
    "part5Correct": 28,
    "part6Correct": 15,
    "part7Correct": 50,
    "wrongQuestions": [
      {
        "num": 9,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 30,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 62,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      }
    ]
  },
  {
    "id": "TS-3704",
    "studentLabel": "Thí sinh ẩn danh #24",
    "device": "Mobile (iOS)",
    "submittedAt": "16/10/2026 17:34",
    "duration": 71,
    "correct": 68,
    "score": 370,
    "rating": "Khá",
    "part5Correct": 23,
    "part6Correct": 11,
    "part7Correct": 34,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 4,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 7,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 11,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 17,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 27,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 31,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 37,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 39,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 43,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 47,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 49,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 55,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 57,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 61,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 62,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 67,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 70,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 73,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 75,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 81,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 89,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 90,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 95,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 96,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 97,
        "userOpt": "A",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-1444",
    "studentLabel": "Thí sinh ẩn danh #23",
    "device": "Mobile (iOS)",
    "submittedAt": "18/10/2026 10:55",
    "duration": 54,
    "correct": 82,
    "score": 406,
    "rating": "Giỏi",
    "part5Correct": 26,
    "part6Correct": 12,
    "part7Correct": 44,
    "wrongQuestions": [
      {
        "num": 6,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 8,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 32,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 35,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 45,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 51,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 52,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 61,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 77,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 94,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 95,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 100,
        "userOpt": "B",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-5262",
    "studentLabel": "Thí sinh ẩn danh #22",
    "device": "Mobile (iOS)",
    "submittedAt": "17/10/2026 11:29",
    "duration": 65,
    "correct": 78,
    "score": 366,
    "rating": "Khá",
    "part5Correct": 26,
    "part6Correct": 11,
    "part7Correct": 41,
    "wrongQuestions": [
      {
        "num": 4,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 9,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 37,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 38,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 39,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 43,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 49,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 56,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 62,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 71,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 72,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 74,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 80,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 81,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 86,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 95,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-5558",
    "studentLabel": "Thí sinh ẩn danh #21",
    "device": "Mobile (iOS)",
    "submittedAt": "17/10/2026 09:30",
    "duration": 54,
    "correct": 68,
    "score": 379,
    "rating": "Khá",
    "part5Correct": 24,
    "part6Correct": 10,
    "part7Correct": 34,
    "wrongQuestions": [
      {
        "num": 4,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 9,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 10,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 13,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 19,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 25,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 31,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 33,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 36,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 44,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 47,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 49,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 51,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 54,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 57,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 60,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 61,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 66,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 69,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 71,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 76,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 81,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 92,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 94,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 95,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 97,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 100,
        "userOpt": "C",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-6733",
    "studentLabel": "Thí sinh ẩn danh #20",
    "device": "Mobile (Android)",
    "submittedAt": "15/10/2026 20:41",
    "duration": 60,
    "correct": 69,
    "score": 346,
    "rating": "Khá",
    "part5Correct": 22,
    "part6Correct": 12,
    "part7Correct": 35,
    "wrongQuestions": [
      {
        "num": 3,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 6,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 12,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 13,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 18,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 21,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 25,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 32,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 38,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 45,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 51,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 53,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 56,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 61,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 65,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 66,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 68,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 76,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 80,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 84,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 85,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 93,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 95,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 100,
        "userOpt": "B",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-4266",
    "studentLabel": "Thí sinh ẩn danh #19",
    "device": "Mobile (iOS)",
    "submittedAt": "19/10/2026 10:15",
    "duration": 74,
    "correct": 72,
    "score": 375,
    "rating": "Khá",
    "part5Correct": 20,
    "part6Correct": 12,
    "part7Correct": 40,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 3,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 8,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 9,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 13,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 21,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 26,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 29,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 30,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 31,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 32,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 36,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 49,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 55,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 59,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 60,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 67,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 71,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 79,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 80,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 85,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 86,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "B",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-2874",
    "studentLabel": "Thí sinh ẩn danh #18",
    "device": "Mobile (Android)",
    "submittedAt": "16/10/2026 15:44",
    "duration": 58,
    "correct": 76,
    "score": 368,
    "rating": "Khá",
    "part5Correct": 22,
    "part6Correct": 13,
    "part7Correct": 41,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 4,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 8,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 10,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 13,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 18,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 23,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 26,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 31,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 41,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 47,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 52,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 57,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 62,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 63,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 68,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 76,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 88,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 89,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 95,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 99,
        "userOpt": "B",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-2876",
    "studentLabel": "Thí sinh ẩn danh #17",
    "device": "Mobile (Android)",
    "submittedAt": "17/10/2026 09:37",
    "duration": 71,
    "correct": 68,
    "score": 364,
    "rating": "Khá",
    "part5Correct": 21,
    "part6Correct": 11,
    "part7Correct": 36,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 5,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 6,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 7,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 9,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 23,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 26,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 36,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 43,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 45,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 54,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 56,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 58,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 59,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 66,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 68,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 75,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 76,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 78,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 81,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 86,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 88,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 92,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 94,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "B",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-7149",
    "studentLabel": "Thí sinh ẩn danh #16",
    "device": "Mobile (iOS)",
    "submittedAt": "16/10/2026 09:37",
    "duration": 56,
    "correct": 90,
    "score": 460,
    "rating": "Xuất Sắc",
    "part5Correct": 26,
    "part6Correct": 16,
    "part7Correct": 48,
    "wrongQuestions": [
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 16,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 23,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 51,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 74,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 80,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 84,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 100,
        "userOpt": "B",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-5941",
    "studentLabel": "Thí sinh ẩn danh #15",
    "device": "Tablet (iPad)",
    "submittedAt": "19/10/2026 20:07",
    "duration": 64,
    "correct": 93,
    "score": 447,
    "rating": "Xuất Sắc",
    "part5Correct": 27,
    "part6Correct": 15,
    "part7Correct": 51,
    "wrongQuestions": [
      {
        "num": 4,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 14,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 16,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 35,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 53,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 55,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-9728",
    "studentLabel": "Thí sinh ẩn danh #14",
    "device": "Mobile (iOS)",
    "submittedAt": "17/10/2026 09:32",
    "duration": 53,
    "correct": 88,
    "score": 416,
    "rating": "Giỏi",
    "part5Correct": 26,
    "part6Correct": 15,
    "part7Correct": 47,
    "wrongQuestions": [
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 19,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 21,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 53,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 62,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 68,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 72,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 75,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 88,
        "userOpt": "B",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-7882",
    "studentLabel": "Thí sinh ẩn danh #13",
    "device": "Mobile (iOS)",
    "submittedAt": "15/10/2026 14:23",
    "duration": 75,
    "correct": 58,
    "score": 302,
    "rating": "Trung Bình",
    "part5Correct": 13,
    "part6Correct": 8,
    "part7Correct": 37,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 2,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 10,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 11,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 12,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 13,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 14,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 17,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 18,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 20,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 21,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 23,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 24,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 26,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 27,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 31,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 32,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 33,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 36,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 38,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 46,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 50,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 51,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 54,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 55,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 59,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 60,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 61,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 65,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 71,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 77,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 78,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 83,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 91,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 94,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 100,
        "userOpt": "D",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-3506",
    "studentLabel": "Thí sinh ẩn danh #12",
    "device": "Mobile (iOS)",
    "submittedAt": "16/10/2026 19:33",
    "duration": 72,
    "correct": 58,
    "score": 254,
    "rating": "Trung Bình",
    "part5Correct": 15,
    "part6Correct": 10,
    "part7Correct": 33,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 5,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 9,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 12,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 13,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 16,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 18,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 20,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 23,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 24,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 25,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 26,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 29,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 31,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 34,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 36,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 37,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 41,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 47,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 50,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 56,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 58,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 59,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 60,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 62,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 65,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 66,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 67,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 71,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 78,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 79,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 84,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 85,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 89,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 90,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "A",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-9817",
    "studentLabel": "Thí sinh ẩn danh #11",
    "device": "Mobile (iOS)",
    "submittedAt": "18/10/2026 14:52",
    "duration": 63,
    "correct": 61,
    "score": 253,
    "rating": "Trung Bình",
    "part5Correct": 17,
    "part6Correct": 12,
    "part7Correct": 32,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 6,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 10,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 13,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 14,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 19,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 21,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 24,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 27,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 29,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 30,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 34,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 35,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 41,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 44,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 49,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 52,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 53,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 54,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 56,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 58,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 59,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 62,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 68,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 71,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 76,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 80,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 84,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 85,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 88,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 89,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 92,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 96,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 100,
        "userOpt": "D",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-5022",
    "studentLabel": "Thí sinh ẩn danh #10",
    "device": "Mobile (iOS)",
    "submittedAt": "17/10/2026 15:15",
    "duration": 71,
    "correct": 62,
    "score": 303,
    "rating": "Trung Bình",
    "part5Correct": 15,
    "part6Correct": 8,
    "part7Correct": 39,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 3,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 4,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 5,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 7,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 14,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 17,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 19,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 21,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 25,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 26,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 27,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 29,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 31,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 32,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 37,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 38,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 39,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 44,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 49,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 53,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 56,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 60,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 65,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 72,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 73,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 76,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 81,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 85,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 86,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 88,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 89,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-7209",
    "studentLabel": "Thí sinh ẩn danh #9",
    "device": "Web Desktop",
    "submittedAt": "15/10/2026 15:54",
    "duration": 68,
    "correct": 48,
    "score": 231,
    "rating": "Trung Bình",
    "part5Correct": 16,
    "part6Correct": 9,
    "part7Correct": 23,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 4,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 5,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 8,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 9,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 12,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 18,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 21,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 23,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 26,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 27,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 29,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 31,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 33,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 34,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 35,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 44,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 48,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 50,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 51,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 52,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 55,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 56,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 57,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 59,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 62,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 64,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 66,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 67,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 70,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 71,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 73,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 75,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 76,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 79,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 83,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 84,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 85,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 90,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 91,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 92,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 93,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 94,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 96,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 100,
        "userOpt": "B",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-4475",
    "studentLabel": "Thí sinh ẩn danh #8",
    "device": "Web Desktop",
    "submittedAt": "17/10/2026 13:17",
    "duration": 70,
    "correct": 66,
    "score": 255,
    "rating": "Trung Bình",
    "part5Correct": 15,
    "part6Correct": 13,
    "part7Correct": 38,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 3,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 5,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 6,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 7,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 8,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 10,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 11,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 12,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 15,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 21,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 24,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 26,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 27,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 37,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 38,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 51,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 52,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 53,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 57,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 60,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 66,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 70,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 73,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 78,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 79,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 85,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 86,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 97,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 100,
        "userOpt": "B",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-1166",
    "studentLabel": "Thí sinh ẩn danh #7",
    "device": "Mobile (Android)",
    "submittedAt": "16/10/2026 09:15",
    "duration": 68,
    "correct": 61,
    "score": 289,
    "rating": "Trung Bình",
    "part5Correct": 18,
    "part6Correct": 11,
    "part7Correct": 32,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 4,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 5,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 8,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 9,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 12,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 14,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 23,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 24,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 25,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 33,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 37,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 40,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 45,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 47,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 50,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 51,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 54,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 57,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 60,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 61,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 66,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 67,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 68,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 69,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 73,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 75,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 79,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 81,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 84,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 89,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 91,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 93,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 97,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 100,
        "userOpt": "B",
        "correctOpt": "A"
      }
    ]
  },
  {
    "id": "TS-4937",
    "studentLabel": "Thí sinh ẩn danh #6",
    "device": "Tablet (iPad)",
    "submittedAt": "18/10/2026 18:45",
    "duration": 53,
    "correct": 53,
    "score": 299,
    "rating": "Trung Bình",
    "part5Correct": 16,
    "part6Correct": 6,
    "part7Correct": 31,
    "wrongQuestions": [
      {
        "num": 3,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 4,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 6,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 7,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 8,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 13,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 16,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 18,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 25,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 26,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 27,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 29,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 31,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 32,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 33,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 35,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 39,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 41,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 43,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 44,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 45,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 47,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 49,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 53,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 54,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 57,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 61,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 62,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 64,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 70,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 71,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 76,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 80,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 83,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 85,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 86,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 91,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 92,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 93,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 94,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 97,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 98,
        "userOpt": "B",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-2524",
    "studentLabel": "Thí sinh ẩn danh #5",
    "device": "Web Desktop",
    "submittedAt": "16/10/2026 14:44",
    "duration": 74,
    "correct": 45,
    "score": 263,
    "rating": "Trung Bình",
    "part5Correct": 15,
    "part6Correct": 6,
    "part7Correct": 24,
    "wrongQuestions": [
      {
        "num": 3,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 5,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 6,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 8,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 9,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 10,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 11,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 12,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 14,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 16,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 19,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 23,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 30,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 33,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 34,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 35,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 38,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 41,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 43,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 44,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 45,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 47,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 48,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 50,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 54,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 55,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 56,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 57,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 58,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 62,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 66,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 69,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 70,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 71,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 72,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 73,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 75,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 76,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 77,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 79,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 80,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 81,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 85,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 86,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 88,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 91,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 94,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 96,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 97,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-7046",
    "studentLabel": "Thí sinh ẩn danh #4",
    "device": "Mobile (iOS)",
    "submittedAt": "19/10/2026 16:22",
    "duration": 63,
    "correct": 51,
    "score": 325,
    "rating": "Trung Bình",
    "part5Correct": 12,
    "part6Correct": 10,
    "part7Correct": 29,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 2,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 4,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 5,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 8,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 9,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 12,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 13,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 14,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 16,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 17,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 20,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 21,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 23,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 24,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 30,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 31,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 33,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 34,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 36,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 43,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 47,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 49,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 50,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 51,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 55,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 56,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 58,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 59,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 60,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 62,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 66,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 67,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 68,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 69,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 73,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 78,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 81,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 83,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 85,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 86,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 88,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 89,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 99,
        "userOpt": "A",
        "correctOpt": "C"
      }
    ]
  },
  {
    "id": "TS-6764",
    "studentLabel": "Thí sinh ẩn danh #3",
    "device": "Tablet (iPad)",
    "submittedAt": "18/10/2026 12:19",
    "duration": 56,
    "correct": 46,
    "score": 244,
    "rating": "Trung Bình",
    "part5Correct": 17,
    "part6Correct": 6,
    "part7Correct": 23,
    "wrongQuestions": [
      {
        "num": 2,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 3,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 4,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 5,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 6,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 8,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 9,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 10,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 16,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 18,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 19,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 31,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 32,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 36,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 37,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 38,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 40,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 41,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 42,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 45,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 51,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 54,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 56,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 57,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 59,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 61,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 62,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 65,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 68,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 69,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 70,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 72,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 73,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 75,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 76,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 77,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 78,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 79,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 80,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 81,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 84,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 85,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 86,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 88,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 89,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 91,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 93,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 94,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 96,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "C",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-4155",
    "studentLabel": "Thí sinh ẩn danh #2",
    "device": "Web Desktop",
    "submittedAt": "15/10/2026 19:34",
    "duration": 59,
    "correct": 62,
    "score": 232,
    "rating": "Trung Bình",
    "part5Correct": 16,
    "part6Correct": 12,
    "part7Correct": 34,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 5,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 11,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 13,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 14,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 15,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 16,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 18,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 20,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 24,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 26,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 27,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 30,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 34,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 39,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 44,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 47,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 49,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 54,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 55,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 57,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 61,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 66,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 67,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 69,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 70,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 75,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 77,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 79,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 85,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 89,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 90,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 92,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 96,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      }
    ]
  },
  {
    "id": "TS-4545",
    "studentLabel": "Thí sinh ẩn danh #1",
    "device": "Tablet (iPad)",
    "submittedAt": "18/10/2026 12:46",
    "duration": 72,
    "correct": 56,
    "score": 319,
    "rating": "Trung Bình",
    "part5Correct": 15,
    "part6Correct": 9,
    "part7Correct": 32,
    "wrongQuestions": [
      {
        "num": 1,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 4,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 5,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 7,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 8,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 10,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 11,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 12,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 13,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 16,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 17,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 18,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 19,
        "userOpt": "B",
        "correctOpt": "D"
      },
      {
        "num": 27,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 28,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 31,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 34,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 38,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 42,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 43,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 44,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 46,
        "userOpt": "C",
        "correctOpt": "B"
      },
      {
        "num": 50,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 51,
        "userOpt": "D",
        "correctOpt": "A"
      },
      {
        "num": 53,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 55,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 56,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 57,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 60,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 67,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 68,
        "userOpt": "C",
        "correctOpt": "A"
      },
      {
        "num": 70,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 71,
        "userOpt": "B",
        "correctOpt": "C"
      },
      {
        "num": 72,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 73,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 75,
        "userOpt": "B",
        "correctOpt": "A"
      },
      {
        "num": 77,
        "userOpt": "D",
        "correctOpt": "C"
      },
      {
        "num": 87,
        "userOpt": "A",
        "correctOpt": "B"
      },
      {
        "num": 91,
        "userOpt": "A",
        "correctOpt": "C"
      },
      {
        "num": 92,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 94,
        "userOpt": "C",
        "correctOpt": "D"
      },
      {
        "num": 96,
        "userOpt": "D",
        "correctOpt": "B"
      },
      {
        "num": 98,
        "userOpt": "A",
        "correctOpt": "D"
      },
      {
        "num": 100,
        "userOpt": "D",
        "correctOpt": "A"
      }
    ]
  }
];
