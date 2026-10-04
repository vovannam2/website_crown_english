# Crown English

Website giới thiệu Crown English, các khóa IELTS và tiếng Anh giao tiếp, đội ngũ giảng viên, kết quả học viên và thông tin tư vấn. Nội dung trang được quản lý bằng các file TypeScript trong `src/data`; giao diện được xây dựng bằng Next.js App Router.

## Chạy trên máy

Yêu cầu Node.js và npm. Tại thư mục dự án:

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000). Để kiểm tra bản production trên máy:

```bash
npm run build
npm run start
```

## Các trang hiện có

| Đường dẫn | Nội dung |
| --- | --- |
| `/` | Trang chủ |
| `/gioi-thieu` | Giới thiệu Crown English |
| `/khoa-hoc` | Tổng quan khóa học |
| `/khoa-hoc/ielts` | Khóa IELTS |
| `/khoa-hoc/giao-tiep` | Khóa tiếng Anh giao tiếp |
| `/khoa-hoc/ielts-1-kem-1` | Khóa IELTS 1 kèm 1 |
| `/giang-vien` | Đội ngũ giảng viên |
| `/hoc-vien` | Kết quả và chia sẻ của học viên |
| `/cam-ket` | Cam kết |
| `/cau-hoi-thuong-gap` | Câu hỏi thường gặp |
| `/lien-he` | Liên hệ |

## Cấu trúc dự án

```text
src/
├── app/          # Route, layout, CSS toàn cục, sitemap và robots
├── components/   # Giao diện theo từng trang và thành phần dùng chung
├── config/       # Địa chỉ website, liên hệ và ảnh chia sẻ mặc định
├── data/         # Nội dung các trang và điều hướng
└── types/        # Kiểu dữ liệu dùng chung cho nội dung và giao diện
public/
├── images/       # Ảnh theo từng khu vực của website
└── logo/         # Logo Crown English
```

**Sửa nội dung:** tìm trang trong `src/app`, rồi chỉnh đối tượng dữ liệu tương ứng tại `src/data`. Xem [hướng dẫn cập nhật nội dung](src/data/README.md) để biết từng file phụ trách phần nào.

**Sửa ảnh:** đặt ảnh trong `public/images`, cập nhật đường dẫn hoặc import tại file dữ liệu đang dùng ảnh đó. Đường dẫn `/images/...` trỏ tới `public/images/...`.

**Sửa giao diện:** các component nằm trong `src/components`; kiểu dữ liệu của chúng nằm trong `src/types`.

## Công nghệ và kiểm tra

Next.js 16, React 19, TypeScript, Tailwind CSS 4 và Lucide React. Font giao diện là Bai Jamjuree, được khai báo trong `src/app/layout.tsx`.

| Lệnh | Mục đích |
| --- | --- |
| `npm run dev` | Chạy máy chủ phát triển |
| `npm run lint` | Kiểm tra ESLint |
| `npm run typecheck` | Kiểm tra TypeScript và biến/import không dùng |
| `npm run build` | Tạo bản production |
| `npm run start` | Chạy bản production đã build |

## SEO và địa chỉ website

Metadata của từng trang lấy từ trường `seo` trong file dữ liệu tương ứng. Cấu hình chung nằm ở `src/app/layout.tsx`; ảnh chia sẻ mặc định nằm ở `src/config/share-image.ts`. Domain và thông tin liên hệ dùng chung nằm ở `src/config/site.ts`. `src/app/sitemap.ts` và `src/app/robots.ts` tạo sitemap và robots theo domain đó.

Sau khi sửa nội dung, ảnh hoặc cấu hình, cần build và triển khai lại để website đang chạy nhận thay đổi.
