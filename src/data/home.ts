export const homePageData = {
  seo: {
    title: "Crown English | IELTS & Tiếng Anh giao tiếp",
    description:
      "Crown English cung cấp các chương trình IELTS, Tiếng Anh giao tiếp và IELTS 1 kèm 1 với lộ trình rõ ràng, cam kết đầu ra và đội ngũ giảng viên đồng hành cùng học viên.",
    h1: "Crown English",
    canonical: "/",
    searchIntent: "Thương hiệu + tìm hiểu trung tâm và các chương trình đào tạo",
    primaryTopic: "Crown English",
    secondaryTopics: [
      "khóa học IELTS",
      "tiếng Anh giao tiếp",
      "IELTS 1 kèm 1",
      "trung tâm tiếng Anh",
    ],
    localSignals: [
      "Bình Thạnh",
      "Nguyễn Gia Trí",
      "TP.HCM",
    ],
    schemaTypes: ["EducationalOrganization", "WebSite"],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Crown English | IELTS & Tiếng Anh giao tiếp",
      description:
        "Các chương trình IELTS, Tiếng Anh giao tiếp và IELTS 1 kèm 1 tại Crown English.",
      image: "",
    },
  },

  hero: {
    title: "",
    description: "",
    image: "",
    primaryCta: {
      label: "",
      href: "",
    },
    secondaryCta: {
      label: "",
      href: "",
    },
  },

  aboutPreview: {
    title: "Về Crown English",
    paragraphs: [
      "Tại Crown English, chúng tôi không xem tiếng Anh đơn thuần là một môn học hay một tấm bằng chứng chỉ. Tiếng Anh là công cụ chiến lược mở ra những cơ hội mới, giúp mỗi cá nhân khẳng định bản thân và tự tin bước ra thế giới.",
      "Được xây dựng trên nền tảng chuyên môn vững chắc và tư duy đào tạo hiện đại, Crown English là trung tâm luyện thi IELTS và Tiếng Anh học thuật chất lượng cao. Chúng tôi kiến tạo một môi trường học tập tinh gọn, tối ưu và chuẩn hóa, nơi từng lộ trình được thiết kế riêng biệt để nâng tầm năng lực cho mỗi học viên.",
    ],
    href: "/gioi-thieu",
  },

  featuredCourses: [
    { courseId: "ielts", href: "/khoa-hoc/ielts" },
    { courseId: "giao-tiep", href: "/khoa-hoc/giao-tiep" },
    { courseId: "ielts-1-kem-1", href: "/khoa-hoc/ielts-1-kem-1" },
  ],

  whyCrown: [
    {
      title: "Đầu Tư Tối Ưu – Chi Phí Hợp Lý",
      description:
        "Hướng tới việc xóa bỏ rào cản tài chính trong luyện thi IELTS, Crown English thiết kế các gói học với mức phí tối ưu chỉ từ 800.000 VNĐ/tháng, giúp học viên nhận lại giá trị tri thức vượt trội so với mức chi phí đầu tư.",
    },
    {
      title: "Cam Kết Đầu Ra Bằng Văn Bản",
      description:
        "Chúng tôi bảo chứng cho chất lượng giảng dạy bằng chính sách hỗ trợ 24 buổi đào tạo bổ sung cường độ cao nếu học viên chưa đạt điểm số mục tiêu tại IDP hoặc British Council và đủ điều kiện áp dụng.",
    },
    {
      title: "Đội Ngũ Giáo Viên & Cố Vấn Tận Tâm",
      description:
        "Tụ hội những người truyền cảm hứng giàu kinh nghiệm, không chỉ giỏi chuyên môn mà còn thấu hiểu tâm lý và rào cản của học viên người Việt.",
    },
    {
      title: "Trải Nghiệm Học Tập Tinh Gọn",
      description:
        "Giáo trình được tinh lọc kỹ lưỡng, ứng dụng công cụ quản lý hiện đại giúp việc học trở nên rõ ràng, đo lường được và tiết kiệm thời gian tối đa.",
    },
  ],

  featuredTeacherIds: [],
  featuredStudentResultIds: [],
  featuredFeedbackIds: [],
} as const;
