type NavigationItem = {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly NavigationChild[];
};

type NavigationChild = {
  readonly label: string;
  readonly href: string;
  readonly eyebrow?: string;
  readonly levels?: readonly string[];
};

export const courseNavigationItems = [
  {
    label: "IELTS",
    href: "/khoa-hoc/ielts",
    eyebrow: "Luyện thi 4 kỹ năng",
    levels: ["Foundation", "Newbie", "Advance", "Intensive"],
  },
  {
    label: "Tiếng Anh giao tiếp",
    href: "/khoa-hoc/giao-tiep",
    eyebrow: "Phản xạ nghe nói",
    levels: ["Elementary", "Pre-Advance", "Advance"],
  },
  {
    label: "IELTS 1 kèm 1",
    href: "/khoa-hoc/ielts-1-kem-1",
    eyebrow: "Lộ trình cá nhân hóa",
    levels: ["Foundation 1:1", "Newbie 1:1", "Advance 1:1", "Intense 1:1"],
  },
] as const;

export const navigationItems: readonly NavigationItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Khóa học", href: "/khoa-hoc", children: courseNavigationItems },
  { label: "Giảng viên", href: "/giang-vien" },
  { label: "Học viên", href: "/hoc-vien" },
  { label: "Cam kết", href: "/cam-ket" },
  { label: "Câu hỏi thường gặp", href: "/cau-hoi-thuong-gap" },
  { label: "Liên hệ", href: "/lien-he" },
] as const;
