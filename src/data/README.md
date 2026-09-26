# Chỉnh hình ảnh trên website

Đặt ảnh trong `public/images`, rồi sửa dữ liệu theo bảng dưới đây. Đường dẫn `/images/...` tương ứng với `public/images/...`.

| Khu vực | File | Dữ liệu cần chỉnh |
| --- | --- | --- |
| Trang chủ | `home.ts` | Banner, film, ảnh khóa học, bảng vinh danh và ảnh giới thiệu trong `homePageData` |
| Feedback trang chủ | `home.ts` | `studentStories.feedback`: `year`, `imageDirectory`, `months` và `boardTexture` |
| Học viên/giảng viên nổi bật trang chủ | `home.ts` | `studentResults.featuredIds`, `teachers.featuredIds`, `studentStories.featuredVideoIds`; ảnh và video lấy từ các hồ sơ tương ứng |
| Trang giới thiệu | `about.ts` | Các ảnh được import ở đầu file và các trường `image`; nền bảng ghim tại `manifesto.boardTexture` |
| Trang giảng viên | `teachers.ts` | `teachers[].image`; chọn ba ảnh đầu trang bằng `hero.featuredIds` theo thứ tự trái, giữa, phải |
| Trang học viên | `student-results.ts` | `hero.portraits` (ba ảnh trái, giữa, phải), `results[].thumbnail`, `results[].fullImage`, `classMoments` và `videos` |
| Logo và nền bảng ghim dùng chung | `media.ts` | `sharedMedia.logo`, `sharedMedia.corkTexture` |

Các ảnh đang dùng `import` có đường dẫn ở đầu file data. Thay đường dẫn import để đổi ảnh; khi thêm ảnh mới, thêm import và tham chiếu biến đó trong dữ liệu tương ứng. Giữ kiểu giá trị hiện có (`imageVariable` hoặc `imageVariable.src`).

Với feedback, thêm nhóm `{ month: 9, images: ["feedback-thang-9-1.jpg"] }` vào `months`. Có thể thêm/xóa tên ảnh hoặc cả nhóm tháng. Số ảnh và khoảng tháng được tính tự động; nhóm rỗng được bỏ qua, và bảng tin được ẩn khi không còn ảnh.

Khi chạy development, lưu file data để giao diện cập nhật. Với website production, cần build và triển khai lại sau khi sửa data hoặc thay ảnh.
