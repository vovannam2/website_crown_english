type NavigationItem = {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly { readonly label: string; readonly href: string }[];
};

export const navigationItems: readonly NavigationItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Khóa học", href: "/khoa-hoc" },
  { label: "Giảng viên", href: "/giang-vien" },
  { label: "Học viên", href: "/hoc-vien" },
  { label: "Cam kết", href: "/cam-ket" },
  { label: "Câu hỏi thường gặp", href: "/cau-hoi-thuong-gap" },
  { label: "Liên hệ", href: "/lien-he" },
] as const;

export const courseNavigationItems = [
  { label: "IELTS", href: "/khoa-hoc/ielts" },
  { label: "Tiếng Anh giao tiếp", href: "/khoa-hoc/giao-tiep" },
  { label: "IELTS 1 kèm 1", href: "/khoa-hoc/ielts-1-kem-1" },
] as const;
