export const coursesPageData = {
  seo: {
    title: "Các khóa học tại Crown English | IELTS, Giao tiếp & 1:1",
    description:
      "Khám phá các chương trình đào tạo tại Crown English gồm IELTS, Tiếng Anh giao tiếp và IELTS 1 kèm 1.",
    h1: "Các khóa học tại Crown English",
    canonical: "/khoa-hoc",
    searchIntent: "Tìm và so sánh các chương trình học tại Crown English",
    primaryTopic: "các khóa học tại Crown English",
    secondaryTopics: [
      "khóa học IELTS",
      "khóa học tiếng Anh giao tiếp",
      "IELTS 1 kèm 1",
    ],
    localSignals: [
      "Bình Thạnh",
      "Nguyễn Gia Trí",
      "TP.HCM",
    ],
    schemaTypes: ["CollectionPage"],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Các khóa học tại Crown English",
      description:
        "IELTS, Tiếng Anh giao tiếp và IELTS 1 kèm 1 tại Crown English.",
      image: "",
    },
  },

  hero: {
    title: "Khóa học",
    description: "",
  },
  courses: [
    {
      id: "ielts",
      title: "IELTS",
      href: "/khoa-hoc/ielts",
      description: "",
      image: "",
    },
    {
      id: "giao-tiep",
      title: "Tiếng Anh giao tiếp",
      href: "/khoa-hoc/giao-tiep",
      description: "",
      image: "",
    },
    {
      id: "ielts-1-kem-1",
      title: "IELTS 1 kèm 1",
      href: "/khoa-hoc/ielts-1-kem-1",
      description: "",
      image: "",
    },
  ],
} as const;

export const ieltsPageData = {
  seo: {
    title: "Khóa học IELTS 0–7.5+ | Crown English",
    description:
      "Khám phá lộ trình IELTS tại Crown English từ Foundation, Newbie, Advance đến Intensive cùng thông tin lớp học, học phí và chính sách cam kết.",
    h1: "Khóa học IELTS tại Crown English",
    canonical: "/khoa-hoc/ielts",
    searchIntent: "Tìm hiểu và đăng ký khóa học IELTS",
    primaryTopic: "khóa học IELTS",
    secondaryTopics: [
      "lộ trình IELTS",
      "luyện thi IELTS",
      "IELTS Foundation",
      "IELTS Newbie",
      "IELTS Advance",
      "IELTS Intensive",
      "học phí IELTS",
      "cam kết đầu ra IELTS",
    ],
    localSignals: [
      "Bình Thạnh",
      "Nguyễn Gia Trí",
      "TP.HCM",
    ],
    schemaTypes: ["Course", "WebPage"],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Khóa học IELTS 0–7.5+ | Crown English",
      description:
        "Lộ trình IELTS từ Foundation đến Intensive tại Crown English.",
      image: "",
    },
  },

  id: "ielts",
  slug: "ielts",
  href: "/khoa-hoc/ielts",

  hero: {
    title: "IELTS",
    subtitle: "Lộ trình nhanh nhất",
    highlight: "0-7.5+",
    description: "",
    image: "",
  },

  suitableFor: [],
  studentProblems: [],

  overview: {
    title: "",
    paragraphs: [],
  },

  roadmap: [
    {
      name: "FOUNDATION",
      range: "0 - 3.5+",
      items: [
        "Học toàn bộ ngữ pháp từ cơ bản đến nâng cao",
        "Kết hợp Listening nền tảng Ielts và đọc hiểu bài văn ngắn",
        "Luyện phát âm thông qua bài tập và từ vựng cơ bản",
      ],
    },
    {
      name: "NEWBIE",
      range: "3.5 - 5.0+",
      items: [
        "Dành cho các bạn có nền grammar nhưng chưa học qua Ielts",
        "Thực hành 4 skills : Nghe - Nói - Đọc - Viết trong Ielts",
        "Đắm Mình vào sự đa dạng từ vựng Academic",
      ],
    },
    {
      name: "ADVANCED",
      range: "5.0 - 6.5+",
      items: [
        "Dành cho các bạn từng học/thi qua và nắm structure Ielts",
        "Chuyên sâu và thực chiến giải đề thi thực 4 skills",
        "Áp dụng tiêu chí nâng cao và nâng band kĩ năng Writing task 2",
      ],
    },
    {
      // Tạm lấy thông tin A theo chỉ thị hiện tại.
      name: "INTENSE",
      range: "6.0 - 7.5+",
      note: "ĐẠT AIM REFUND HỌC PHÍ",
      items: [
        "Phù hợp cho học viên aim band 7.0+ và nắm kĩ format Ielts 4 kĩ năng",
        "Hoàn Học phí và lệ phí thi nếu đạt aim*",
        "Mô Phỏng thi thực & Test level định kì",
      ],
    },
  ],

  levels: [
    {
      id: "foundation",
      name: "FOUNDATION",
      range: "0-3.0",
      tuition: "2.400.000/khoá",
      duration: "3 tháng/24 buổi",
      suitableFor:
        "Lớp Foundation phù hợp với học viên chưa vững nền tảng ngữ pháp.",
      content: [
        "Học grammar chuyên sâu từ cơ bản đến nâng cao level B1.",
        "Listening Basic và hiểu phương pháp Shadowing.",
        "Học từ vựng cơ bản và áp dụng cấu trúc thì, ngữ pháp.",
        "Reading đọc hiểu sơ cấp và làm quen nền tảng IELTS và kết hợp Speaking để luyện phản xạ.",
      ],
      detail:
        "lớp foundation bên chị tập trung 60-70% vào grammar, học tất cả các thì có trong IELTS và TOEIC. Trong quá trình học Foundation, bên chị có lồng vào dạy vocabs A1-A2 thông qua bài tập grammar em ha. Bên cạnh đó, chị có dạy Listening Basic Level A1-A2 ( sách basic ielts) và speaking ( level A2+) để em áp dụng grammar và kĩ năng vocabs vào phát triển câu đơn, câu phức em ha",
      schedule: ["Ca 1: 18:15-19:45", "Ca 2: 20:00-21:30"],
    },
    {
      id: "newbie",
      // Roadmap dùng NEWBIE; brochure chi tiết dùng IELTS COURSE BASIC.
      name: "NEWBIE",
      sourceHeading: "IELTS COURSE BASIC",
      range: "3.0-5.0",
      tuition: "2.400.000/khoá",
      duration: "3 tháng/24 buổi",
      suitableFor:
        "Lớp Basic phù hợp với học viên chưa học qua IELTS nhưng vững Ngữ Pháp , học toàn diện 4 skills.",
      content: [
        "Writing Task 1 học và viết được toàn bộ 4 dạng cơ bản .",
        "Reading chuyên sâu IELTS và nắm được cấu trúc câu hỏi giải đề.",
        "Listening nắm và hiểu phương pháp Synonyms và khám phá cách làm riêng biệt cho từng dạng.",
        "Speaking học theo topics từng dạng, áp dụng kĩ thuật né tránh và mở rộng câu trả lời.",
      ],
      detail:
        "Lớp thì dành cho các bạn mới tinh về Ielts, chưa từng thi và chưa từng tiếp xúc, còn rất mới về môn này. Trong khóa học này, học viên sẽ được làm quen và nắm chắc các dạng đề IELTS, bao gồm giới thiệu đầy đủ các dạng bài thường gặp và hướng dẫn phương pháp làm bài rõ ràng, dễ áp dụng. Lớp học chuyên sâu về học từ vựng học thuật theo ngữ cảnh, và rèn kỹ năng đọc hiểu từng bước để tránh bị ngợp trước khi chuyển vào giải đề sau này.",
      schedule: ["Ca 1: 18:15-19:45", "Ca 2: 20:00-21:30"],
    },
    {
      id: "advance",
      name: "ADVANCE",
      range: "5.0-6.5",
      tuition: "4.200.000/khoá",
      duration: "4 tháng/32 buổi",
      suitableFor:
        "Lớp Advance phù hợp với học viên đã học qua IELTS và có nhu cầu nâng band hoặc thi lại",
      entryRequirement:
        "Đầu vào lớp Advance yêu cầu học viên phải từng thi qua hay học qua Ielts, nắm full format all skills IELTS và đã viết được luận hoàn chỉnh Writing Task 1",
      content: [
        "Đầu vào bắt buộc phải nắm structure và từng giải đề Cambridge.",
        "Reading chuyên sâu, đảm bảo 25/40 câu đúng.",
        "Listening chuyên sâu và shadowing được 80% script, đảm bảo 25/40 câu đúng.",
        "Speaking học theo Forecast, tập trung nhiều vào part 2,3 để nâng band.",
        "Chấm bài writing ngoài giờ liên tục và hỗ trợ 24/7.",
      ],
      detail: [
        "Lớp này học theo sách chương trình của Bank Test- ngân hàng đề thi gốc, cọ xát thực tế độ khó trong phòng thi, ban sẽ học giống như thi thực, xây dựng chiến thuật làm bài nhanh, .",
        "Writing học chuyên sâu theo đủ dạng, phát triển tư duy lập luận rõ ràng, logic, đồng thời áp dụng ngữ pháp nâng cao để paraphrase và đa dạng hóa cấu trúc câu",
        "Với Speaking, mình sẽ nâng cấp độ trôi chảy và chiều sâu câu trả lời, luyện full 3 parts theo format đề thi thật, phát triển câu trả lời có chiều sâu, rõ ý và tự nhiên, mở rộng ý tưởng nhanh để tránh bí ý khi nói, đồng thời cải thiện phát âm, ngữ điệu và sự mạch lạc.",
      ],
      schedule: ["Ca 1: 18:00-20:00", "Ca 2: 20:00-22:00"],
    },
    {
      id: "intensive",
      // Tạm lấy thông tin A: range 6.0 - 7.5+ và ca học 1.5h.
      name: "INTENSE",
      range: "6.0 - 7.5+",
      tuition: "8.900.000/khoá",
      duration: "4 tháng/32 buổi",
      description:
        "Khoá aim 7.0+ , Khoá này là khoá học Exclusive dành cho học viên muốn thử sức aim band cao, học lớp sỉ số nhỏ và khi đạt được đầu ra từ 7.0+ trở lên, bên chị có chính sách treo thưởng hoàn học phí cho học viên - đối với lớp Premium",
      content:
        "Lớp Intensive là lớp signature và chuyên biệt dành riêng cho học viên học IELTS chuyên nghiệp, aim cao, đầu vào bắt buộc phải nắm structure và format IELTS ở mức khá, 6.5 input. Reading học theo bank test để cọ xát độ khó thực trong phòng thi, đảm bảo 32/40 câu đúng. Listening Bank Test, 32/40 câu đúng. Speaking sẽ học tư duy và ngôn ngữ từ vựng mới theo mỗi topic và ưu tiên đẩy phản xạ và fluency.",
      schedule: ["Ca 1: 18:15-19:45", "Ca 2: 20:00-21:30"],
      refund: [
        "7.0: Được Hoàn 20% Học Phí",
        "7.5: Được Hoàn 50% Học Phí",
        "8.0: Được Hoàn 100% Học Phí",
        "8.5: Được Hoàn 100% Học Phí & Lệ Phí Thi",
      ],
      benefits: [
        "Học Viên được chấm bài và chăm sóc 24/7 ngoài giờ học miễn phí và xuyên suốt",
        "Trải nghiệm thi thực trong suốt quá trình học",
        "Được Cung cấp bộ đề Actual Tests",
      ],
    },
  ],

  method: {
    title: "",
    paragraphs: [],
  },

  benefits: {
    standard: [
      "Hỗ trợ cá nhân: Lớp 15 học viên nhưng giáo viên đảm bảo ai cũng được chăm sóc từng người, sửa bài, feedback trực tiếp, giải thích kỹ từng lỗi và đưa ví dụ minh họa.",
      "Đảm bảo học viên học lý thuyết và được sửa bài trực tiếp trong lớp",
      "Bài tập được giao đủ và chấm chữa trả theo tuần",
      "Cam kết đầu ra rõ ràng, lộ trình giáo án và quyền lợi học viên tương đương như các lớp cao cấp khác.",
    ],
    premium: [
      "Hỗ trợ cá nhân hóa, 1:1 attention trong lớp nhỏ: Dù lớp nhóm, giáo viên đảm bảo mỗi học viên đều được chăm sóc riêng, chấm bài trực tiếp, phân tích điểm mạnh/yếu và đưa chiến lược nâng band cá nhân.",
      "Đảm bảo Mỗi bài được sửa riêng từng bạn, đảm bảo phát triển tư duy logic, ngôn ngữ Academic, các bạn được xoay vòng trong 1 nhóm rất nhỏ, được trả bài nhiều lần và speaking nhiều lượt trong lớp",
      "Cam kết đầu ra rõ ràng, và các quyền lợi tương đương khác.",
    ],
  },

  classTypes: {
    // Tạm lấy thông tin A về sĩ số.
    standard: {
      classSize: "13-15 học viên",
      frequency: "2 buổi/tuần",
      tuition: [
        {
          course: "Foundation",
          duration: "3 tháng",
          sessions: "24 buổi",
          price: "2.400.000/ khoá",
          sessionDuration: "1.5h",
        },
        {
          course: "Newbie",
          duration: "3 tháng",
          sessions: "24 buổi",
          price: "2.400.000/ khoá",
          sessionDuration: "1.5h",
        },
        {
          course: "Advance",
          duration: "",
          sessions: "32 buổi",
          price: "4.200.000/ khoá",
          sessionDuration: "2h",
        },
        {
          course: "Intensive 7.0+",
          duration: "",
          sessions: "32 buổi",
          price: "4.200.000/ khoá",
          // Tạm lấy thông tin A.
          sessionDuration: "1.5h",
        },
      ],
    },
    premium: {
      classSize: "5-8 học viên",
      frequency: "2-3buổi/tuần",
      tuition: [
        {
          course: "Foundation",
          duration: "3 tháng",
          sessions: "24 buổi",
          price: "5.900.000/ khoá",
          sessionDuration: "2h",
        },
        {
          course: "Newbie",
          duration: "3 tháng",
          sessions: "24 buổi",
          price: "5.900.000/ khoá",
          sessionDuration: "2h",
        },
        {
          course: "Advance",
          duration: "",
          sessions: "32 buổi",
          price: "7.900.000/ khoá",
          sessionDuration: "2h",
        },
        {
          course: "Intensive 7.0+",
          duration: "",
          sessions: "32 buổi",
          price: "8.900.000/ khoá",
          // Tạm lấy thông tin A.
          sessionDuration: "1.5h",
        },
      ],
    },
  },

  teacherIds: [],
  studentResultIds: [],
  feedbackIds: [],
  faqIds: [],

  cta: {
    title: "",
    description: "",
    buttonLabel: "",
  },
} as const;

export const communicationPageData = {
  seo: {
    title: "Khóa học Tiếng Anh giao tiếp | Crown English",
    description:
      "Khóa Tiếng Anh giao tiếp tại Crown English tập trung Listening, Speaking, phản xạ, phát âm, Daily Topics và Business English theo từng trình độ.",
    h1: "Khóa học Tiếng Anh giao tiếp tại Crown English",
    canonical: "/khoa-hoc/giao-tiep",
    searchIntent: "Tìm hiểu và đăng ký khóa học Tiếng Anh giao tiếp",
    primaryTopic: "khóa học tiếng Anh giao tiếp",
    secondaryTopics: [
      "tiếng Anh giao tiếp",
      "luyện phản xạ tiếng Anh",
      "Listening Speaking",
      "phát âm IPA",
      "Business English",
      "Daily Topics",
    ],
    localSignals: [
      "Bình Thạnh",
      "Nguyễn Gia Trí",
      "TP.HCM",
    ],
    schemaTypes: ["Course", "WebPage"],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Khóa học Tiếng Anh giao tiếp | Crown English",
      description:
        "Các lớp Tiếng Anh giao tiếp theo trình độ tại Crown English.",
      image: "",
    },
  },

  id: "giao-tiep",
  slug: "giao-tiep",
  href: "/khoa-hoc/giao-tiep",

  hero: {
    title: "LỚP GIAO TIẾP",
    subtitle: "",
    description: "",
    image: "",
  },

  suitableFor: [],
  studentProblems: [],

  overview: {
    title: "",
    paragraphs: [],
  },

  roadmap: [
    {
      name: "ELEMENTARY",
      range: "A1-A2",
      content: [
        "Nếu em đang mất gốc, chưa nắm được tiếng anh cơ bản thì em bắt đầu học từ lớp Elementary bên chị nha.",
        "Lớp này em sẽ học lại phát âm IPA, ghép những vocab đơn giản thành câu phức nè và khoá này chị đảm bảo em từ level A1-A2.",
      ],
    },
    {
      name: "PRE-ADVANCE",
      range: "A2-B1+",
      content: [
        "Nếu em có nền tiếng anh tốt thì học lên lớp Pre-advance bên chị được rồi nè.",
        "Bên chị dạy giao tiếp theo phương pháp song ngữ và giao tiếp 100% tiếng anh trong lớp, lấy tiếng anh làm theme chính (chủ đạo) trong lớp và chị đảm bảo đầu ra A2-B1+. Lớp sẽ học chủ đề cơ bản về cuộc sống hằng ngày và kết hợp những tình huống giả tưởng để nói chuyện và tương tác, tập trung nâng cao phản xạ và dùng từ vựng nâng cao hơn nhé.",
      ],
    },
    {
      name: "ADVANCE",
      range: "B1-C1",
      content: [
        "Nếu em tốt giao tiếp rồi, muốn đẩy nhanh phản xạ và vốn từ vựng nâng cao thì em có thể học lên advance luôn nhen.",
        "Lớp này chị sẽ luyện cho em giao tiếp nhanh nhạy, phản xạ bén và chị đảm bảo đầu ra B1-C1.",
        "Bên cạnh những topic cơ bản, em sẽ dạy tập trung bảng IPA xuyên suốt quá trình học để luyện phát âm và chỉnh inotation (tức là ngữ điệu hen). Và cũng kết hợp với topic về vấn đề xã hội (controversial topic debate), tranh luận, discuss về những vấn đề rộng lớn về con người , xã hội để mở rộng kiến thức và từ vựng cao cấp.",
      ],
    },
  ],

  method: {
    title: "PHƯƠNG PHÁP DẠY GIAO TIẾP BÊN CHỊ NHÉ",
    description:
      "Sử dụng tối đa tiếng Anh trong lớp để nâng cao phản xạ cũng như là khả năng dự đoán ngữ cảnh của học viên. Sẽ học các topics thông dụng trong cuộc sống hằng ngày và tập trung vào 2 skills là Listening + Speaking, level cao hơn sẽ kết hợp topics debate và tranh luận. Việc tạo môi trường nói tiếng anh trong lớp sẽ giúp cho học viên cảm nhận được sự thực tế cũng như là thực chiến, ép bản thân phải thích nghi và nói tiếng Anh liên tục trong lớp.",
  },

  benefits: [],

  classTypes: {
    // Tạm lấy thông tin A.
    standard: {
      classSize: "5-8 học viên",
      frequency: "2 buổi/tuần",
      schedule: ["Ca 1: 18:15-19:45", "Ca 2: 20:00-21:30"],
      tuition: [
        {
          course: "Elementary - Sơ Cấp A1-A2",
          duration: "3 tháng",
          sessions: "24 buổi",
          price: "3.000.000/ khoá",
          sessionDuration: "1.5h",
        },
        {
          course: "Pre Advance - Trung Cấp A2-B1",
          duration: "3 tháng",
          sessions: "24 buổi",
          price: "3.000.000/ khoá",
          sessionDuration: "1.5h",
        },
        {
          course: "Advance - Nâng Cấp B1-B2",
          duration: "3 tháng",
          sessions: "24 buổi",
          price: "3.000.000/ khoá",
          sessionDuration: "1.5h",
        },
      ],
    },

    // Tạm lấy thông tin A: brochure trang phương pháp vẫn có nhóm 3.
    premiumGroup3: {
      classSize: "kèm nhóm 3 học viên",
      frequency: "2-3buổi/tuần",
      tuition: [],
    },

    oneToOne: {
      classSize: "1:1",
      frequency: "",
      standardTime:
        "Lớp Kèm 1:1 → khoá 24 buổi, 1 buổi kéo dài 1 tiếng (Trước 5h30pm)",
      tuition: [
        {
          course: "Elementary - Sơ Cấp A1-A2",
          duration: "3 tháng",
          sessions: "24 buổi",
          price: "7.200.000/ khoá",
          sessionDuration: "1 tiếng",
        },
        {
          course: "Pre Advance - Trung Cấp A2-B1",
          duration: "3 tháng",
          sessions: "24 buổi",
          price: "7.200.000/ khoá",
          sessionDuration: "1 tiếng",
        },
        {
          course: "Advance - Nâng Cấp B1-B2",
          duration: "3 tháng",
          sessions: "24 buổi",
          price: "7.200.000/ khoá",
          sessionDuration: "1 tiếng",
        },
      ],
      offline:
        "Đối với học viên chọn platform OFFLINE, lớp kèm kéo dài 1.5h/ buổi → tổng khoá 16 buổi",
      evening:
        "Đối với học viên chọn học khung 6h00pm trở đi, học phí lớp kèm all level 8tr500/ khoá",
      benefits: [
        "Tập trung vào học viên, học lộ trình riêng biệt, Giáo viên tập trung 100% vào học viên trong suốt buổi học",
        "Tốc độ học phù hợp với năng lực của từng học viên và chủ động sắp xếp lịch học, dễ dàng thay đổi khi cần",
        "Chương trình học được cá nhân hóa hoàn toàn, tập trung vào các lĩnh vực Business English và Daily Topics",
      ],
    },
  },

  teacherIds: [],
  studentResultIds: [],
  feedbackIds: [],
  faqIds: [],

  cta: {
    title: "",
    description: "",
    buttonLabel: "",
  },
} as const;

export const ieltsOneToOnePageData = {
  seo: {
    title: "IELTS 1 kèm 1 | Lộ trình cá nhân hóa | Crown English",
    description:
      "IELTS 1 kèm 1 tại Crown English với lộ trình cá nhân hóa, lịch học linh hoạt, sửa bài chuyên sâu và chương trình theo từng trình độ.",
    h1: "Khóa học IELTS 1 kèm 1 tại Crown English",
    canonical: "/khoa-hoc/ielts-1-kem-1",
    searchIntent: "Tìm hiểu và đăng ký khóa IELTS 1 kèm 1",
    primaryTopic: "IELTS 1 kèm 1",
    secondaryTopics: [
      "IELTS 1:1",
      "luyện IELTS cá nhân",
      "lộ trình IELTS cá nhân hóa",
      "học IELTS 1 kèm 1",
    ],
    localSignals: [
      "Bình Thạnh",
      "Nguyễn Gia Trí",
      "TP.HCM",
    ],
    schemaTypes: ["Course", "WebPage"],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "IELTS 1 kèm 1 | Crown English",
      description:
        "Lộ trình IELTS 1 kèm 1 cá nhân hóa tại Crown English.",
      image: "",
    },
  },

  id: "ielts-1-kem-1",
  slug: "ielts-1-kem-1",
  href: "/khoa-hoc/ielts-1-kem-1",

  hero: {
    title: "Lộ trình kèm 1:1 nhanh nhất",
    subtitle: "0-7.5+",
    description: "",
    image: "",
  },

  suitableFor: [
    "Phù hợp với Học viên cần thi gấp, bận rộn hoặc muốn tập trung cải thiện kỹ năng yếu",
  ],

  studentProblems: [],

  overview: {
    title: "",
    paragraphs: [],
  },

  roadmap: [
    { name: "FOUNDATION", range: "0 - 3.5+" },
    { name: "NEWBIE", range: "3.5 - 5.0+" },
    { name: "ADVANCED", range: "5.0 - 6.5+" },
    // Tạm lấy thông tin A theo chỉ thị hiện tại.
    { name: "INTENSE", range: "6.0 - 7.5+" },
  ],

  personalizedRoadmap: [
    {
      id: "foundation",
      level: "FOUNDATION 0-3.0",
      sessions: "20 buổi",
      content: [
        "Trọng tâm: 60–70% thời lượng tập trung vào ngữ pháp (grammar), bao quát toàn bộ các thì trong IELTS và TOEIC.",
        "Tích hợp từ vựng: Trong quá trình học grammar, học viên được lồng ghép từ vựng trình độ A1–A2 thông qua các bài tập ngữ pháp, giúp ghi nhớ tự nhiên và dễ áp dụng.",
        "Listening: Học theo sách Basic IELTS, ở mức A1–A2, để rèn luyện nền tảng nghe hiểu.",
        "Speaking: Ghép câu đơn, câu phức và áp dụng phản xạ nhanh ngữ pháp và từ vựng vào thực hành nói, phát triển câu đơn và câu phức.",
      ],
      priceAfter18: "13.000.000",
      priceBefore18: "12.000.000",
    },
    {
      id: "newbie",
      level: "NEWBIE 3.0-5.0",
      sessions: "22 buổi",
      content: [
        "IELTS Skill Training: Thực hành các bài tập dạng IELTS theo từng phần (Listening, Reading, Writing, Speaking).",
        "Phương pháp & Kỹ năng: Học cách làm bài theo barem chấm điểm (scoring criteria), luyện phương pháp trả lời để có chiến lược lên IELTS.",
        "Vocabulary & Synonyms: Học từ vựng học thuật và luyện từ đồng nghĩa để dùng trong Speaking & Writing.",
        "Writing: Tập viết từng câu (câu đơn, câu phức) → phát triển thành đoạn, đồng thời học Writing Task 1 đủ 4 dạng chính.",
        "Speaking: Luyện nói với topic đơn giản (B1-B2), tập áp dụng grammar + vocab để tạo câu chính xác và mạch lạc và bám theo Forecast chuẩn IELTS.",
      ],
      priceAfter18: "14.300.000",
      priceBefore18: "13.000.000",
    },
    {
      id: "advance",
      level: "Advance 5.0-6.5",
      sessions: "24 buổi",
      content: [
        "Tài liệu học: bộ sách chính thống của Cambridge, luyện đề với cường độ cao & hệ thống Bank Test đề thi thực để cọ xát độ khó thực trong phòng thi",
        "Writing: Học cách build up idea mạch lạc, triển khai luận điểm chuyên sâu, nắm vững structure theo chuẩn BC (British Council) và cường độ cao kết hợp 12 dạng Writing 2 Tasks.",
        "Speaking: Luyện forecast theo quý, tập trung phát triển phản xạ, fluency và coherence và ép từ vựng và phrases/ collocations.",
        "3 kỹ năng còn lại (Listening, Reading, Grammar/Vocab): Luyện theo hệ thống Bank Test để tăng tốc độ làm bài và cải thiện điểm số.",
      ],
      priceAfter18: "15.600.000",
      priceBefore18: "14.400.000",
    },
    {
      id: "intense",
      level: "Intense 6.5-7.5",
      // Tạm lấy thông tin A: 28 buổi.
      sessions: "28 buổi",
      content: [
        "Writing: Luyện chuyên sâu cả Task 1 & Task 2, nhấn mạnh vào tư duy phản biện, phân tích số liệu, lập luận logic, mở rộng kho từ vựng học thuật và cụm collocations nâng band. Học cách “paraphrase nâng cao” và áp dụng idiomatic expressions để đạt band descriptor cao nhất.",
        "Speaking: Luyện mock test cường độ cao, tập trung vào fluency, coherence, lexical resource và pronunciation. Học viên được luyện forecast quý, rèn kỹ năng phản xạ nhạy bén và cách xử lý chủ đề khó.",
        "Listening & Reading: Giải full test Cambridge & Kết Hợp Actual Tests để cọ xát độ khó thực trong phòng thi, học chiến lược “time management” để tối ưu điểm. Đồng thời phân tích sâu các dạng bẫy, dạng matching headings, multiple choice, map/diagram…",
        "Grammar & Vocabulary: Ôn tập tinh gọn, tập trung vào các cấu trúc nâng band và từ vựng học thuật (academic vocab), đồng thời tránh các lỗi thường gặp khiến trừ điểm ở mức band cao.",
      ],
      priceAfter18: "18.200.000",
      priceBefore18: "16.500.000",
      refund: [
        "7.0: Được Hoàn 20% Học Phí",
        "7.5: Được Hoàn 50% Học Phí",
        "8.0: Được Hoàn 100% Học Phí",
        "8.5: Được Hoàn 100% Học Phí & Lệ Phí Thi",
      ],
    },
  ],

  method: {
    title: "",
    paragraphs: [],
  },

  benefits: [
    {
      title: "Lộ trình cá nhân hóa",
      description: "Thiết kế riêng theo đúng trình độ và mục tiêu điểm số.",
    },
    {
      title: "Sửa bài chuyên sâu",
      description:
        "Giảng viên dành 100% thời gian chỉnh sửa chi tiết tư duy, từ vựng và phát âm ngay tại lớp.",
    },
    {
      title: "Lịch học linh hoạt",
      description:
        "Chủ động sắp xếp thời gian theo lịch rảnh cá nhân.",
    },
    {
      title: "Tiết kiệm thời gian",
      description:
        "Tăng tốc tiến độ, rút ngắn tối đa thời gian ôn luyện.",
    },
    {
      title: "Tương tác tối đa",
      description:
        "Thoải mái trao đổi 1:1 cùng giảng viên IELTS 7.5 – 8.0 mà không lo áp lực.",
    },
  ],

  comparison: {
    oneToOne: [],
    groupClass: [],
  },

  schedule: [
    "THỜI GIAN HỌC CHỊ ĐỂ TRONG LỘ TRÌNH ĐANG LÀ THỜI GIAN CHUẨN 2 BUỔI/TUẦN",
    "NẾU EM HỌC ĐƯỢC 3-4 BUỔI/TUẦN THÌ TIẾN ĐỘ SẼ NHANH HƠN NHA",
    "Em có thể kết hợp học lớp nhóm trước sau đó học lớp kèm để tối ưu chi phí hơn nhé, lớp nào tụi chị cũng take care học viên hết mình nè",
  ],

  teacherIds: [],
  studentResultIds: [],
  feedbackIds: [],
  faqIds: [],

  cta: {
    title: "",
    description: "",
    buttonLabel: "",
  },
} as const;
