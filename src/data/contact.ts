import { siteConfig } from "@/config/site";

export const contactPageData = {
  seo: {
    title: "Liên hệ Crown English | Địa chỉ & Hotline tại TP.HCM",

    description:
      "Liên hệ Crown English tại 168/20 Nguyễn Gia Trí, phường Thạnh Mỹ Tây, TP.HCM qua hotline, email, Zalo hoặc Fanpage. Xem bản đồ và giờ làm việc của trung tâm.",

    h1: "Liên hệ Crown English tại TP.HCM",

    canonical: "/lien-he",

    searchIntent:
      "Tìm địa chỉ, hotline, giờ làm việc và các kênh liên hệ Crown English",

    primaryTopic: "liên hệ Crown English",

    secondaryTopics: [
      "địa chỉ Crown English",
      "hotline Crown English",
      "giờ làm việc Crown English",
      "Zalo Crown English",
    ],

    localSignals: ["168/20 Nguyễn Gia Trí", "phường Thạnh Mỹ Tây", "TP.HCM"],

    schemaTypes: ["ContactPage"],

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: "Liên hệ Crown English | Địa chỉ & Hotline",

      description:
        "Xem địa chỉ, hotline, Zalo, email, giờ làm việc và Google Maps của Crown English tại TP.HCM.",
      image: "",
    },
  },
  hero: {
    eyebrow: "Kết nối với Crown English",
    title: "Cần tư vấn lộ trình? Crown luôn sẵn sàng hỗ trợ",
    description:
      "Chọn kênh liên hệ phù hợp để được đội ngũ Crown tư vấn khóa học, lịch học, học phí và hướng dẫn đến trung tâm.",
  },

  center: {
    address: siteConfig.contact.address,
    googleMapsName: siteConfig.contact.maps,
    googleMapsUrl: siteConfig.contact.mapsHref,
    hotline: siteConfig.contact.hotline,
    phoneHref: siteConfig.contact.phoneHref,
    email: siteConfig.contact.email,
    emailHref: siteConfig.contact.emailHref,
    zaloOA: siteConfig.contact.zalo,
    zaloUrl: siteConfig.contact.zaloHref,
    zaloHotline: siteConfig.contact.zaloHotline,
    zaloHotlineUrl: siteConfig.contact.zaloHotlineHref,
    fanpage: siteConfig.contact.facebookHref,
    workingHours: siteConfig.contact.workingHours,
  },

  socialContact: {
    messengerUrl: siteConfig.contact.socialLinks.messenger.url,
    zaloUrl: siteConfig.contact.socialLinks.zalo.url,
  },

  googleMaps: {
    embedUrl: siteConfig.contact.mapsEmbed,
    directUrl: siteConfig.contact.mapsHref,
  },

  visitTips: [
    "Gửi trước mục tiêu học để Crown tư vấn nhanh hơn.",
    "Bấm Google Maps để được chỉ đường trực tiếp đến trung tâm.",
    "Có thể liên hệ qua Messenger hoặc Zalo nếu bạn chưa tiện gọi điện.",
  ],
} as const;

export type ContactPageData = typeof contactPageData;
