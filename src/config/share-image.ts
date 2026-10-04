export const defaultShareImage = {
  url: "/images/og/academic-team-ielts-share.jpg",
  width: 1200,
  height: 443,
  alt: "Crown English IELTS & Tiếng Anh giao tiếp",
};

export function getShareImage(image?: string) {
  return image ? { url: image } : defaultShareImage;
}
