import localLogoImage from "../../public/logo/logo.png";
import localCorkGrainImage from "../../public/images/about/cork-grain.svg";
// Hình ảnh dùng chung giữa các trang. Đường dẫn tính từ thư mục public.
export const sharedMedia = {
  logo: localLogoImage.src,
  corkTexture: localCorkGrainImage.src,
} as const;
