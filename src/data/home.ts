// Homepage content and image slots. Featured IDs resolve against existing datasets.
import { sharedMedia } from "./media";
import homeBannerPrimary from "../../public/images/home/banner-01.png";
import homeBannerMentoring from "../../public/images/home/banner-02.jpg";
import homeBannerProgress from "../../public/images/home/banner-03.png";
import homeBannerSupport from "../../public/images/home/banner-04.jpg";
import homeFilm01 from "../../public/images/home/film-01.jpg";
import homeFilm02 from "../../public/images/home/film-02.jpg";
import homeFilm03 from "../../public/images/home/film-03.jpg";
import homeFilm04 from "../../public/images/home/film-04.png";
import homeFilm05 from "../../public/images/home/film-05.png";
import homeFilm06 from "../../public/images/home/film-06.jpg";
import homeFilm07 from "../../public/images/home/film-07.png";
import homeFilm08 from "../../public/images/home/film-08.jpg";
import homeFilm09 from "../../public/images/home/film-09.jpg";
import homeFilm10 from "../../public/images/home/film-10.jpg";
import crownStudentHallOfFame from "../../public/images/home/crown-student-hall-of-fame.png";

const heroFilmSources = [
  homeFilm01,
  homeFilm02,
  homeFilm03,
  homeFilm04,
  homeFilm05,
  homeFilm06,
  homeFilm07,
  homeFilm08,
  homeFilm09,
  homeFilm10,
] as const;

export const homePageData = {
  seo: {
    title: "Crown English | IELTS & Tiếng Anh giao tiếp",
    description:
      "Crown English cung cấp các chương trình IELTS, Tiếng Anh giao tiếp và IELTS 1 kèm 1 với lộ trình rõ ràng, cam kết đầu ra và đội ngũ giảng viên đồng hành cùng học viên.",
    h1: "Crown English",
    canonical: "/",
    searchIntent:
      "Thương hiệu + tìm hiểu trung tâm và các chương trình đào tạo",
    primaryTopic: "Crown English",
    secondaryTopics: [
      "khóa học IELTS",
      "tiếng Anh giao tiếp",
      "IELTS 1 kèm 1",
      "trung tâm tiếng Anh",
    ],
    localSignals: ["Bình Thạnh", "Nguyễn Gia Trí", "TP.HCM"],
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
    eyebrow: "IELTS & TIẾNG ANH GIAO TIẾP",
    title: "Crown English",
    headlineLines: ["CROWN", "ENGLISH"],
    programChips: ["IELTS", "GIAO TIẾP", "1 KÈM 1"],
    description:
      "Từng lộ trình được thiết kế riêng biệt để nâng tầm năng lực cho mỗi học viên.",
    backgroundImage: homeBannerPrimary,
    backgroundImageAlt: "Học viên học tập tại Crown English",
    bannerAlternatives: [
      homeBannerMentoring,
      homeBannerProgress,
      homeBannerSupport,
    ],
    primaryCta: {
      label: "Khám phá khóa học",
      href: "/khoa-hoc",
    },
    secondaryCta: {
      label: "Đăng ký tư vấn",
      href: "/lien-he",
    },
    metrics: [
      {
        id: "investment",
        label: "TỪ",
        value: "800.000",
        unit: "VNĐ / THÁNG",
        note: "Chi phí tối ưu",
      },
      {
        id: "commitment",
        label: "CAM KẾT ĐẦU RA",
        value: "24",
        unit: "BUỔI",
        note: "Đào tạo bổ sung cường độ cao",
        subnote: "Áp dụng khi học viên đủ điều kiện.",
      },
      {
        id: "premium-class",
        label: "IELTS PREMIUM",
        value: "5–8",
        unit: "HỌC VIÊN",
        note: "Tương tác và theo sát",
      },
    ],
    filmFrames: [
      {
        image: heroFilmSources[0],
        alt: "Khoảnh khắc học tập tại Crown English",
        index: "01",
        time: "08:00",
      },
      {
        image: heroFilmSources[1],
        alt: "Khoảnh khắc học tập tại Crown English",
        index: "02",
        time: "09:00",
      },
      {
        image: heroFilmSources[2],
        alt: "Khoảnh khắc học tập tại Crown English",
        index: "03",
        time: "10:00",
      },
      {
        image: heroFilmSources[3],
        alt: "Khoảnh khắc học tập tại Crown English",
        index: "04",
        time: "11:00",
      },
      {
        image: heroFilmSources[4],
        alt: "Khoảnh khắc học tập tại Crown English",
        index: "05",
        time: "12:00",
      },
      {
        image: heroFilmSources[5],
        alt: "Khoảnh khắc học tập tại Crown English",
        index: "06",
        time: "13:00",
      },
      {
        image: heroFilmSources[6],
        alt: "Khoảnh khắc học tập tại Crown English",
        index: "07",
        time: "14:00",
      },
      {
        image: heroFilmSources[7],
        alt: "Khoảnh khắc học tập tại Crown English",
        index: "08",
        time: "15:00",
      },
      {
        image: heroFilmSources[8],
        alt: "Khoảnh khắc học tập tại Crown English",
        index: "09",
        time: "16:00",
      },
      {
        image: heroFilmSources[9],
        alt: "Khoảnh khắc học tập tại Crown English",
        index: "10",
        time: "17:00",
      },
    ],
  },
  programsSection: {
    eyebrow: "CHƯƠNG TRÌNH ĐÀO TẠO",
    title: "Lộ trình cho từng mục tiêu",
    description:
      "Khám phá các chương trình IELTS, Tiếng Anh giao tiếp và IELTS 1 kèm 1 tại Crown English.",
  },
  programs: [
    {
      number: "01",
      courseId: "ielts",
      label: "IELTS",
      titleBreakAfter: 0,
      href: "/khoa-hoc/ielts",
      tone: "red",
      category: "LUYỆN THI IELTS",
      note: "Từng bước tới band điểm mục tiêu.",
      description: "Xây nền tảng vững, luyện đủ bốn kỹ năng và làm quen với bài thi IELTS.",
    },
    {
      number: "02",
      courseId: "giao-tiep",
      label: "Tiếng Anh Giao Tiếp",
      titleBreakAfter: 2,
      href: "/khoa-hoc/giao-tiep",
      tone: "cream",
      category: "TIẾNG ANH MỖI NGÀY",
      note: "Bắt đầu từ một cuộc trò chuyện.",
      description: "Luyện nghe, tập nói và dùng tiếng Anh trong những tình huống gần gũi mỗi ngày.",
    },
    {
      number: "03",
      courseId: "ielts-1-kem-1",
      label: "IELTS 1 Kèm 1",
      titleBreakAfter: 1,
      href: "/khoa-hoc/ielts-1-kem-1",
      tone: "ink",
      category: "HỌC CÙNG GIẢNG VIÊN",
      note: "Một lộ trình. Dành riêng cho bạn.",
      description: "Tập trung vào kỹ năng cần cải thiện với lộ trình theo mục tiêu và trình độ của bạn.",
    },
  ],
  studentResults: {
    eyebrow: "KẾT QUẢ HỌC VIÊN",
    title: "Dấu ấn học tập tại Crown English",
    description:
      "Kết quả và trải nghiệm thực tế của học viên trong quá trình học tập tại Crown English.",
    link: {
      label: "Xem kết quả học viên",
      href: "/hoc-vien",
    },
    featuredIds: ["viet-bao-8-0", "khanh-linh-7-5", "nhu-y-7-0"],
    hallOfFame: {
      eyebrow: "BẢNG DANH VỌNG",
      description: "Những cột mốc được tạo nên bởi học viên Crown",
      image: crownStudentHallOfFame,
      alt: "Bảng danh vọng kết quả học viên Crown English",
    },
  },
  trainingValue: {
    eyebrow: "GIÁ TRỊ ĐÀO TẠO",
    title: "Định hướng & phương pháp đào tạo",
    lines: ["Không áp lực vô hình –", "Chỉ có sự tiến bộ rõ rệt."],
    image: "",
    pillars: [
      {
        number: "01",
        title: "Lộ trình cá nhân hóa",
        description:
          "Từng lộ trình được thiết kế riêng biệt để nâng tầm năng lực cho mỗi học viên.",
      },
      {
        number: "02",
        title: "Tư duy ngôn ngữ ứng dụng",
        description:
          "Phát triển tư duy phản biện và kỹ năng thực hành ngôn ngữ.",
      },
      {
        number: "03",
        title: "Sự đồng hành từ Quản lý học tập",
        description:
          "Theo dõi tiến độ bài tập và phản hồi đa chiều từ đội ngũ Admin, giảng viên.",
      },
    ],
    link: {
      label: "Khám phá phương pháp đào tạo",
      href: "/gioi-thieu",
    },
  },
  whyCrown: {
    eyebrow: "VÌ SAO CROWN",
    title: "Những điểm khác biệt tại Crown English",
    link: {
      label: "Tìm hiểu thêm về Crown",
      href: "/gioi-thieu",
    },
    items: [
      {
        id: "investment",
        number: "01",
        title: "Đầu Tư Tối Ưu – Chi Phí Hợp Lý",
        metric: {
          prefix: "TỪ",
          value: "800.000",
          unit: "VNĐ / THÁNG",
        },
        description:
          "Hướng tới việc xóa bỏ rào cản tài chính trong luyện thi IELTS, Crown English thiết kế các gói học với mức phí tối ưu chỉ từ 800.000 VNĐ/tháng, giúp học viên nhận lại giá trị tri thức vượt trội so với mức chi phí đầu tư.",
        image: "",
      },
      {
        id: "commitment",
        number: "02",
        title: "Cam Kết Đầu Ra Bằng Văn Bản",
        metric: {
          value: "24",
          unit: "BUỔI",
          detail: "ĐÀO TẠO BỔ SUNG CƯỜNG ĐỘ CAO",
        },
        description:
          "Chúng tôi bảo chứng cho chất lượng giảng dạy bằng chính sách hỗ trợ 24 buổi đào tạo bổ sung cường độ cao nếu học viên chưa đạt điểm số mục tiêu tại IDP hoặc British Council và đủ điều kiện áp dụng.",
        note: "Áp dụng khi học viên đủ điều kiện.",
        image: "",
        link: {
          label: "Tìm hiểu chính sách cam kết",
          href: "/cam-ket",
        },
      },
      {
        id: "team",
        number: "03",
        title: "Đội Ngũ Giáo Viên & Cố Vấn Tận Tâm",
        description:
          "Tụ hội những người truyền cảm hứng giàu kinh nghiệm, không chỉ giỏi chuyên môn mà còn thấu hiểu tâm lý và rào cản của học viên người Việt.",
        image: "",
        link: {
          label: "Khám phá đội ngũ",
          href: "/giang-vien",
        },
      },
      {
        id: "experience",
        number: "04",
        title: "Trải Nghiệm Học Tập Tinh Gọn",
        keywords: ["Rõ ràng", "Đo lường được", "Tiết kiệm thời gian"],
        description:
          "Giáo trình được tinh lọc kỹ lưỡng, ứng dụng công cụ quản lý hiện đại giúp việc học trở nên rõ ràng, đo lường được và tiết kiệm thời gian tối đa.",
        image: "",
      },
    ],
  },
  teachers: {
    eyebrow: "ĐỘI NGŨ GIẢNG VIÊN",
    title: "Những người đồng hành cùng học viên",
    description:
      "Đội ngũ giáo viên và cố vấn tận tâm, chú trọng chuyên môn và sự đồng hành trong suốt quá trình học tập.",
    link: {
      label: "Khám phá đội ngũ giảng viên",
      href: "/giang-vien",
    },
    featuredIds: [
      "ms-nguyen-khanh",
      "ms-linh-nguyen",
      "ms-yen",
      "mr-alex-nguyen",
      "mr-minh-hieu",
      "mr-hung",
      "ms-minh-tu",
      "mr-nghia",
    ],
  },
  studentStories: {
    eyebrow: "GÓC CHIA SẺ",
    title: "Lắng nghe học viên Crown",
    description:
      "Từ những câu chuyện qua video đến từng lời nhắn sau giờ học — cùng lắng nghe học viên chia sẻ về thầy cô, lớp học và sự đồng hành tại Crown English.",
    link: {
      label: "Xem thêm chia sẻ của học viên",
      href: "/hoc-vien",
    },
    featuredVideoIds: ["huong-linh-7-5"],
    feedback: {
      imageDirectory: "/images/home",
      boardTexture: sharedMedia.corkTexture,
      year: 2026,
      // Ảnh đặt trong public/images/home. Thêm/xóa ảnh hoặc cả nhóm tháng tại đây.
      // Ví dụ: { month: 9, images: ["feedback-thang-9-1.jpg"] },
      months: [
        { month: 1, images: ["feedback-thang-1-1.jpg", "feedback-thang-1-2.jpg", "feedback-thang-1-3.jpg", "feedback-thang-1-4.jpg"] },
        { month: 2, images: ["feedback-thang-2-1.jpg", "feedback-thang-2-2.jpg", "feedback-thang-2-3.jpg"] },
        { month: 3, images: ["feedback-thang-3-1.jpg", "feedback-thang-3-2.jpg", "feedback-thang-3-3.jpg"] },
        { month: 4, images: ["feedback-thang-4-1.jpg", "feedback-thang-4-2.jpg", "feedback-thang-4-3.jpg", "feedback-thang-4-4.jpg"] },
        { month: 5, images: ["feedback-thang-5-1.jpg", "feedback-thang-5-2.jpg", "feedback-thang-5-3.jpg", "feedback-thang-5-4.jpg"] },
        { month: 6, images: ["feedback-thang-6-1.jpg", "feedback-thang-6-2.jpg", "feedback-thang-6-3.jpg", "feedback-thang-6-4.jpg"] },
        { month: 7, images: ["feedback-thang-7-1.jpg", "feedback-thang-7-2.jpg", "feedback-thang-7-3.jpg", "feedback-thang-7-4.jpg"] },
        { month: 8, images: ["feedback-thang-8-1.jpg", "feedback-thang-8-2.jpg", "feedback-thang-8-3.jpg", "feedback-thang-8-4.jpg"] },
      ],
    },
  },
  about: {
    eyebrow: "VỀ CROWN ENGLISH",
    title: "Tinh gọn. Tối ưu. Chuẩn hóa.",
    description:
      "Được xây dựng trên nền tảng chuyên môn vững chắc và tư duy đào tạo hiện đại, Crown English là trung tâm luyện thi IELTS và Tiếng Anh học thuật chất lượng cao.",
    image: "/images/home/crown-hero.jpg",
    keywords: ["Tận Tụy", "Minh Bạch", "Hiệu Quả", "Tối Ưu"],
    link: {
      label: "Tìm hiểu câu chuyện Crown English",
      href: "/gioi-thieu",
    },
  },
  cta: {
    eyebrow: "CROWN ENGLISH",
    title: "Tìm hiểu lộ trình học phù hợp",
    description:
      "Khám phá các chương trình đào tạo tại Crown English hoặc đăng ký để được tư vấn về lộ trình học.",
    primaryCta: {
      label: "Khám phá khóa học",
      href: "/khoa-hoc",
    },
    secondaryCta: {
      label: "Đăng ký tư vấn",
      href: "/lien-he",
    },
  },
} as const;
