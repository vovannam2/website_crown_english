export const defaultShareImage = {
  url: "/images/og/preview.jpg",
  width: 2772,
  height: 1024,
  alt: "Crown English IELTS & Tiếng Anh giao tiếp",
};

export function getShareImage(image?: string) {
  return image ? { url: image } : defaultShareImage;
}
