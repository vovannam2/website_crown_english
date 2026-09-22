export const commitmentsPageData = {
  seo: {
    title: "Cam kết đầu ra | Crown English",
    description:
      "Thông tin cam kết đầu ra IELTS và Tiếng Anh giao tiếp tại Crown English, điều kiện áp dụng, chính sách hỗ trợ và theo dõi tiến độ học tập.",
    h1: "Cam kết đầu ra tại Crown English",
    canonical: "/cam-ket",
    searchIntent: "Tìm hiểu chính sách cam kết đầu ra và điều kiện áp dụng",
    primaryTopic: "cam kết đầu ra Crown English",
    secondaryTopics: [
      "cam kết đầu ra IELTS",
      "cam kết đầu ra tiếng Anh giao tiếp",
      "điều kiện cam kết đầu ra",
    ],
    localSignals: [],
    schemaTypes: ["WebPage"],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Cam kết đầu ra | Crown English",
      description:
        "Cam kết đầu ra IELTS và Tiếng Anh giao tiếp tại Crown English.",
      image: "",
    },
  },

  hero: {
    title: "Cam kết",
    description: "",
  },

  ielts: {
    outcomes: [
      "FOUNDATION - 3.5+",
      "NEWBIE - 5.0+",
      "ADVANCE - 6.0+",
    ],
    conditions: [
      "Làm đủ trên 95% bài tập được giao",
      "Không nghỉ quá 2 buổi/ tháng",
      "Rep tin nhắn hỗ trợ từ team Admin",
      "Không bảo lưu quá 30-40 days / khoá",
    ],
    support:
      "Trường hợp học viên đã đi thi và có kết quả chính thức từ IDP, BC nhưng không may không đạt được đầu ra cam kết sẽ được đào tạo tiếp 24 buổi cùng lớp nhóm cường độ cao để thi lại (thời gian từ khi có kết quả và học tiếp không cách nhau quá 30 ngày)",
    quality:
      "Cam kết về nội dung giảng dạy, chính sách và sự tận tụy của các thầy cô như đã giới thiệu cho học viên.",
    progress:
      "Theo dõi tiến độ học tập của học viên liên tục thông qua hệ thống homework, hỗ trợ kịp thời để học viên đạt được đầu ra mong muốn.",
  },

  communication: {
    // Tạm lấy thông tin A theo chỉ thị hiện tại.
    outcomes: [
      "ELEMENTARY - A1-A2",
      "PRE-ADVANCE - A2-B1+",
      "ADVANCE - B1-C1",
    ],
    conditions: [
      "Làm đủ trên 95% bài tập được giao",
      "Không nghỉ quá 2 buổi/ tháng",
      "Rep tin nhắn hỗ trợ từ team Admin",
      "Không bảo lưu quá 30-40 days / khoá",
    ],
    framework:
      "Crown đo trình độ theo khung CEFR (A1–B2+), gắn trực tiếp với năng lực giao tiếp thực tế.",
    guarantee:
      "Crown không cam kết bằng chứng chỉ, mà cam kết học viên sau khóa phải nói được, phản xạ được và sử dụng đúng từ vựng – cấu trúc đúng level. Nếu chưa đạt, Crown tiếp tục hỗ trợ học viên cho đến khi đạt chuẩn đầu ra.",
    quality:
      "Cam kết về nội dung giảng dạy, chính sách và sự tận tụy của các thầy cô như đã giới thiệu cho học viên.",
    progress:
      "Theo dõi tiến độ học tập của học viên liên tục thông qua hệ thống homework, hỗ trợ kịp thời để học viên đạt được đầu ra mong muốn.",
  },
} as const;
