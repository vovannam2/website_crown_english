export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationItem[];
};

export const navigationItems: NavigationItem[] = [
  { label: "Giới thiệu", href: "/gioi-thieu" },
  {
    label: "Khóa học",
    href: "/khoa-hoc",
    children: [
      { label: "IELTS", href: "/khoa-hoc/ielts" },
      { label: "Tiếng Anh giao tiếp", href: "/khoa-hoc/giao-tiep" },
      { label: "IELTS 1 kèm 1", href: "/khoa-hoc/ielts-1-kem-1" },
    ],
  },
  { label: "Giảng viên", href: "/giang-vien" },
  { label: "Học viên", href: "/hoc-vien" },
  { label: "Cam kết", href: "/cam-ket" },
  { label: "Câu hỏi thường gặp", href: "/cau-hoi-thuong-gap" },
  { label: "Liên hệ", href: "/lien-he" },
];
