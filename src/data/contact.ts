export const contactPageData = {
  seo: {
    title: "Liên hệ Crown English | Địa chỉ, Hotline, Zalo",
    description:
      "Liên hệ Crown English qua hotline, email, Zalo OA, Fanpage hoặc đến trung tâm tại 168/20 Nguyễn Gia Trí, phường 25, quận Bình Thạnh.",
    h1: "Liên hệ Crown English",
    canonical: "/lien-he",
    searchIntent: "Tìm địa chỉ và thông tin liên hệ Crown English",
    primaryTopic: "liên hệ Crown English",
    secondaryTopics: [
      "địa chỉ Crown English",
      "hotline Crown English",
      "Zalo Crown English",
    ],
    localSignals: [
      "168/20 Nguyễn Gia Trí",
      "phường 25",
      "Bình Thạnh",
      "TP.HCM",
    ],
    schemaTypes: ["ContactPage"],
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Liên hệ Crown English",
      description:
        "Địa chỉ, hotline, email, Zalo OA và Fanpage Crown English.",
      image: "",
    },
  },

  hero: {
    title: "Liên hệ",
    description: "",
  },

  center: {
    // Tạm lấy thông tin A theo chỉ thị hiện tại.
    address: "168/20 Nguyễn Gia Trí, phường 25, quận Bình Thạnh",
    googleMapsName: "IELTS & Giao Tiếp Crown",
    hotline: "089 819 26 33",
    email: "ieltsgiaotiepcrown@gmail.com",
    zaloOA: "0846 220414",
    fanpage: "https://www.facebook.com/ieltsgiaotiepcrown",
  },

  socialContact: {
    messengerUrl: "",
    zaloUrl: "",
  },

  googleMaps: {
    embedUrl: "",
  },

  consultationForm: {
    fullName: "",
    phone: "",
    email: "",
    interestedCourse: "",
    currentLevel: "",
    contactTime: "",
    note: "",
    consent: "",
  },
} as const;
