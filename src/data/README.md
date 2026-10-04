# Hướng dẫn cập nhật nội dung

Các file trong thư mục này chứa nội dung đang hiển thị trên website Crown English. Mỗi trang lấy dữ liệu từ một đối tượng TypeScript; component trong `src/components` dùng đối tượng đó để dựng giao diện. Sửa dữ liệu ở đây, sau đó chạy `npm run dev` để xem thay đổi.

## Tìm đúng file

| File | Nội dung chính |
| --- | --- |
| `home.ts` | Trang chủ: banner, khóa học, giảng viên và học viên nổi bật, feedback |
| `about.ts` | Trang giới thiệu |
| `courses.ts` | Tổng quan khóa học, IELTS, giao tiếp và IELTS 1 kèm 1 |
| `teachers.ts` | Danh sách và nội dung trang giảng viên |
| `student-results.ts` | Kết quả, hình ảnh và video học viên |
| `commitments.ts` | Trang cam kết |
| `faqs.ts` | Trang câu hỏi thường gặp |
| `contact.ts` | Trang liên hệ |
| `navigation.ts` | Liên kết điều hướng của website |
| `media.ts` | Logo và hình nền bảng ghim dùng chung |

Thông tin liên hệ dùng chung và domain nằm ở `src/config/site.ts`. Ảnh chia sẻ mặc định nằm ở `src/config/share-image.ts`. Kiểu dữ liệu của các trang nằm trong `src/types`.

## Cập nhật ảnh

1. Thêm ảnh vào thư mục phù hợp dưới `public/images`, chẳng hạn `public/images/home` hoặc `public/images/courses`. Đặt tên thể hiện nội dung ảnh để dễ tìm và thay thế.
2. Tìm trường ảnh trong file dữ liệu ở bảng trên. Nếu ảnh được import ở đầu file, cập nhật đường dẫn import hoặc thêm import mới. Nếu trường chứa chuỗi `/images/...`, cập nhật chuỗi đó theo vị trí file trong `public/images`.
3. Giữ kiểu giá trị mà trường đang dùng: có nơi lưu ảnh import trực tiếp, có nơi lưu `tenAnh.src` hoặc chuỗi URL. Khi đổi tên hay chuyển ảnh, tìm mọi chỗ tham chiếu tới đường dẫn cũ.

Ví dụ, feedback trên trang chủ nằm ở `homePageData.studentStories.feedback` trong `home.ts`. Để thêm ảnh cho một tháng, import ảnh từ `public/images/home`, thêm `tenAnh.src` vào `images` của tháng tương ứng và kiểm tra lại trường `year`. Các nhóm học viên/giảng viên nổi bật trên trang chủ dùng `featuredIds` để tham chiếu hồ sơ ở `student-results.ts` và `teachers.ts`.

## Cập nhật SEO

Mỗi đối tượng trang có trường `seo` cho tiêu đề, mô tả, canonical và thông tin chia sẻ. Khi đổi nội dung chính của trang, kiểm tra các trường này cùng lúc. Nếu không có ảnh chia sẻ riêng, trang dùng ảnh mặc định từ `src/config/share-image.ts`.

Sau khi cập nhật dữ liệu hoặc ảnh, bản đang triển khai cần được build và triển khai lại.
