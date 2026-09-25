import heroImage from "../../public/images/about/crown-hero.jpg";
import aboutImage from "../../public/images/about/crown-about.jpg";
import methodImage from "../../public/images/about/crown-method.jpg";
import supportImage from "../../public/images/about/crown-support.jpg";
import experienceImage from "../../public/images/about/crown-experience.jpg";
import investmentImage from "../../public/images/about/crown-investment-800k.png";
import commitmentImage from "../../public/images/about/crown-commitment-24-sessions.png";
export type AboutImageSlot = {
  src: string;
  fallback?: string;
  alt: string;
  position?: string;
  placeholder: string;
};

// Các ảnh chính của trang Giới thiệu.
// Static imports tạo URL theo nội dung ảnh và cập nhật khi thay file.
const images = {
  hero: {
    src: heroImage.src,
    fallback: "/images/about/crown-hero-classroom.jpg",
    alt: "Giáo viên và học viên trong lớp học tại Crown English",
    position: "55% center",
    placeholder: "Crown English",
  },

  about: {
    src: aboutImage.src,
    alt: "Không gian và hoạt động học tập tại Crown English",
    placeholder: "Crown English",
  },

  method: {
    src: methodImage.src,
    fallback: "/images/about/crown-training-method.jpg",
    alt: "Giảng viên hướng dẫn học viên trong giờ học tại Crown English",
    position: "center 65%",
    placeholder: "Phương pháp đào tạo",
  },

  support: {
    src: supportImage.src,
    fallback: "/images/about/crown-student-support.jpg",
    alt: "Giảng viên và học viên trao đổi trong quá trình học tại Crown English",
    position: "center 60%",
    placeholder: "Đồng hành cùng học viên",
  },

  experience: {
    src: experienceImage.src,
    alt: "Trải nghiệm học tập tại Crown English",
    placeholder: "Trải nghiệm học tập",
  },
  investment: {
    src: investmentImage.src,
    alt: "Sổ kế hoạch học IELTS với mức học phí 800K mỗi tháng",
    position: "center center",
    placeholder: "800K / tháng",
  },

  commitment: {
    src: commitmentImage.src,
    alt: "Giáo viên đánh dấu tiến độ trong kế hoạch 24 buổi đào tạo bổ sung",
    position: "center center",
    placeholder: "24 buổi đào tạo",
  },
} as const satisfies Record<string, AboutImageSlot>;

export const aboutPageData = {
  brand: "Crown English",

  // ==================================================
  // SEO
  // ==================================================
  seo: {
    title: "Giới thiệu Crown English | Phương pháp & giá trị đào tạo",

    description:
      "Tìm hiểu Crown English, giá trị cốt lõi, định hướng đào tạo, lộ trình cá nhân hóa và những điểm khác biệt trong quá trình học IELTS và Tiếng Anh học thuật.",

    h1: "Tiếng Anh không đơn thuần là một môn học hay một tấm bằng chứng chỉ.",

    canonical: "/gioi-thieu",

    searchIntent:
      "Tìm hiểu về Crown English, phương pháp đào tạo, giá trị cốt lõi và điểm khác biệt",

    primaryTopic: "giới thiệu Crown English",

    secondaryTopics: [
      "phương pháp đào tạo Crown English",
      "giá trị cốt lõi Crown English",
      "lộ trình học Crown English",
      "trung tâm IELTS Crown English",
    ],

    localSignals: [],

    schemaTypes: ["AboutPage", "EducationalOrganization"],

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: "Giới thiệu Crown English | Phương pháp & giá trị đào tạo",

      description:
        "Tìm hiểu Crown English, giá trị cốt lõi, định hướng đào tạo và những điểm khác biệt trong hành trình học IELTS và Tiếng Anh học thuật.",

      image: "/images/about/crown-hero.jpg",
    },
  },

  // ==================================================
  // HERO
  // ==================================================
  hero: {
    eyebrow: "VỀ CROWN ENGLISH",

    lines: [
      "Tiếng Anh",
      "không đơn thuần là",
      "một môn học hay",
      "một tấm bằng chứng chỉ.",
    ],

    description:
      "Tiếng Anh là công cụ chiến lược mở ra những cơ hội mới, giúp mỗi cá nhân khẳng định bản thân và tự tin bước ra thế giới.",

    image: images.hero,

    scrollLabel: "Tìm hiểu về Crown English",
  },

  // ==================================================
  // BRAND MANIFESTO
  // ==================================================
  manifesto: {
    eyebrow: "MÔI TRƯỜNG HỌC TẬP",

    words: ["Tinh gọn", "Tối ưu", "Chuẩn hóa"],
    translations: ["Streamlined", "Optimized", "Standardized"],

    description:
      "Từng lộ trình được thiết kế riêng biệt để nâng tầm năng lực cho mỗi học viên.",
  },

  // ==================================================
  // ABOUT CROWN
  // ==================================================
  about: {
    chapter: "CROWN ENGLISH",

    title: "Về chúng tôi",

    image: images.about,

    paragraphs: [
      "Tại Crown English, chúng tôi không xem tiếng Anh đơn thuần là một môn học hay một tấm bằng chứng chỉ. Tiếng Anh là công cụ chiến lược mở ra những cơ hội mới, giúp mỗi cá nhân khẳng định bản thân và tự tin bước ra thế giới.",

      "Được xây dựng trên nền tảng chuyên môn vững chắc và tư duy đào tạo hiện đại, Crown English là trung tâm luyện thi IELTS và Tiếng Anh học thuật chất lượng cao. Chúng tôi kiến tạo một môi trường học tập tinh gọn, tối ưu và chuẩn hóa, nơi từng lộ trình được thiết kế riêng biệt để nâng tầm năng lực cho mỗi học viên.",
    ],
  },

  // ==================================================
  // CORE VALUES
  // ==================================================
  valuesHeading: {
    eyebrow: "GIÁ TRỊ CỐT LÕI",
    title: "Giá trị cốt lõi tại Crown English",
  },

  coreValues: [
    {
      id: "dedication",

      number: "01",

      title: "Tận Tụy",

      english: "Dedication",

      description:
        "Đồng hành sát sao cùng học viên trong suốt hành trình, từ những bước khởi đầu đến khi đạt được mục tiêu đầu ra.",
    },

    {
      id: "transparency",

      number: "02",

      title: "Minh Bạch",

      english: "Transparency",

      description:
        "Rõ ràng trong lộ trình, công khai trong chính sách cam kết và minh bạch tuyệt đối về mọi chi phí đào tạo.",
    },

    {
      id: "efficiency",

      number: "03",

      title: "Hiệu Quả",

      english: "Efficiency",

      description:
        "Loại bỏ phương pháp học vẹt hay tiếp cận lan man; tập trung vào tư duy ngôn ngữ bản chất để đạt kết quả tối ưu trong thời gian ngắn nhất.",
    },

    {
      id: "optimization",

      number: "04",

      title: "Tối Ưu",

      english: "Optimization",

      description:
        "Tối ưu hóa lộ trình học, thời gian và chi phí đầu tư để mọi học viên đều có cơ hội tiếp cận giáo dục chất lượng cao.",
    },
  ],

  // ==================================================
  // TRAINING PHILOSOPHY
  // ==================================================
  philosophy: {
    eyebrow: "ĐỊNH HƯỚNG & PHƯƠNG PHÁP ĐÀO TẠO",

    intro:
      "Crown English hướng tới việc tái định hình trải nghiệm học tiếng Anh:",

    lead: "Không áp lực vô hình.",

    lines: ["Chỉ có", "sự tiến bộ", "rõ rệt."],
  },

  // ==================================================
  // LEARNING JOURNEY / TRAINING METHOD
  // ==================================================
  journey: {
    eyebrow: "LỘ TRÌNH CÁ NHÂN HÓA",

    title: "Lộ trình cá nhân hóa",

    image: images.method,

    start: "START",

    levels: [
      {
        id: "foundation",

        name: "Foundation",

        score: "3.5+",
      },

      {
        id: "newbie",

        name: "Newbie",

        score: "5.0+",
      },

      {
        id: "advance",

        name: "Advance",

        score: "6.0+",
      },
    ],

    methods: [
      {
        id: "personalized-roadmap",

        number: "01",

        title: "Lộ trình cá nhân hóa",

        description:
          "Phân lập trình độ chuẩn xác từ Foundation (3.5+), Newbie (5.0+) đến Advance (6.0+), giúp học viên đi đúng nhịp độ và tối ưu hóa năng lực cá nhân.",
      },

      {
        id: "applied-language-thinking",

        number: "02",

        title: "Tư duy ngôn ngữ ứng dụng",

        description:
          "Tập trung phát triển đồng đều tư duy phản biện (Critical Thinking) và kỹ năng thực hành ngôn ngữ, giúp học viên không chỉ thi tốt mà còn sử dụng tự tin trong môi trường quốc tế.",
      },

      {
        id: "learning-support",

        number: "03",

        title: "Sự đồng hành từ Quản lý học tập",

        description:
          "Hệ thống theo dõi tiến độ bài tập (Homework) và phản hồi đa chiều từ đội ngũ Admin/Giảng viên đảm bảo không một học viên nào bị bỏ lại phía sau.",
      },
    ],
  },

  // ==================================================
  // DIFFERENTIATORS
  // ==================================================
  differences: {
    eyebrow: "ĐIỂM KHÁC BIỆT",

    title: "Điểm khác biệt làm nên Crown English",

    // ----------------------------------------------
    // 01 — INVESTMENT
    // ----------------------------------------------
    investment: {
      id: "investment",

      image: images.investment,

      label: "01 / ĐẦU TƯ TỐI ƯU",

      title: "Đầu Tư Tối Ưu – Chi Phí Hợp Lý",

      prefix: "TỪ",

      metric: "800.000",

      unit: "VNĐ / THÁNG",

      description:
        "Hướng tới việc xóa bỏ rào cản tài chính trong luyện thi IELTS, Crown English thiết kế các gói học với mức phí tối ưu chỉ từ 800.000 VNĐ/tháng, giúp học viên nhận lại giá trị tri thức vượt trội so với mức chi phí đầu tư.",
    },

    // ----------------------------------------------
    // 02 — COMMITMENT
    // ----------------------------------------------
    commitment: {
      id: "commitment",

      image: images.commitment,

      label: "02 / CAM KẾT ĐẦU RA",

      title: "Cam Kết Đầu Ra Bằng Văn Bản",

      metric: "24",

      unit: "BUỔI",

      detail: "ĐÀO TẠO BỔ SUNG CƯỜNG ĐỘ CAO",

      description:
        "Chúng tôi bảo chứng cho chất lượng giảng dạy bằng chính sách hỗ trợ 24 buổi đào tạo bổ sung cường độ cao nếu học viên chưa đạt điểm số mục tiêu tại IDP hoặc British Council và đủ điều kiện áp dụng.",

      note: "Áp dụng khi học viên đủ điều kiện.",

      link: {
        label: "Tìm hiểu chính sách cam kết",
        href: "/cam-ket",
      },
    },

    // ----------------------------------------------
    // 03 — TEACHERS / SUPPORT
    // ----------------------------------------------
    support: {
      id: "support",

      label: "03 / ĐỘI NGŨ TẬN TÂM",

      title: "Đội Ngũ Giáo Viên & Cố Vấn Tận Tâm",

      image: images.support,

      description:
        "Tụ hội những người truyền cảm hứng giàu kinh nghiệm, không chỉ giỏi chuyên môn mà còn thấu hiểu tâm lý và rào cản của học viên người Việt.",

      link: {
        label: "Khám phá đội ngũ",
        href: "/giang-vien",
      },
    },

    // ----------------------------------------------
    // 04 — EXPERIENCE
    // ----------------------------------------------
    experience: {
      id: "experience",

      label: "04 / TRẢI NGHIỆM HỌC TẬP",

      title: "Trải Nghiệm Học Tập Tinh Gọn",

      image: images.experience,

      keywords: ["Rõ ràng", "Đo lường được", "Tiết kiệm thời gian"],

      description:
        "Giáo trình được tinh lọc kỹ lưỡng, ứng dụng công cụ quản lý hiện đại giúp việc học trở nên rõ ràng, đo lường được và tiết kiệm thời gian tối đa.",
    },
  },

  // ==================================================
  // CLOSING BRAND STATEMENT
  // ==================================================
  closing: {
    eyebrow: "CROWN ENGLISH",

    lead: "Không áp lực vô hình.",

    lines: ["Chỉ có", "sự tiến bộ", "rõ rệt."],

    watermark: "CROWN",
  },

  // ==================================================
  // CTA
  // ==================================================
  cta: {
    eyebrow: "CROWN ENGLISH",

    title: "Tìm hiểu lộ trình học phù hợp",

    description:
      "Khám phá các khóa học tại Crown English hoặc đăng ký để được tư vấn về lộ trình học.",
  },

  actions: [
    {
      id: "courses",

      label: "Khám phá khóa học",

      href: "/khoa-hoc",
    },

    {
      id: "consultation",

      label: "Đăng ký tư vấn",

      href: "/lien-he",
    },
  ],
} as const;
