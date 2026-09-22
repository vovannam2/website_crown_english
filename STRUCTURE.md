# CROWN ENGLISH WEBSITE STRUCTURE

Tài liệu này là quy ước chung để thành viên trong nhóm và AI hỗ trợ code đúng cấu trúc website Crown English đã thống nhất với khách hàng.

## 1. Mục tiêu dự án

- Xây dựng website chính thức giới thiệu Crown English.
- Giới thiệu khóa học, giảng viên, đội ngũ vận hành và kết quả học viên.
- Mỗi khóa học có landing page riêng để phục vụ quảng cáo.
- Thu thập thông tin đăng ký tư vấn hoặc test đầu vào.
- Hỗ trợ SEO, responsive và có thể mở rộng hệ thống quản trị trong một dự án riêng ở giai đoạn sau nếu khách hàng cần.

## 2. Công nghệ

- Next.js với App Router.
- TypeScript.
- Tailwind CSS.
- ESLint.
- React Hook Form và Zod cho form.
- Lucide React cho icon.
- Vercel để deploy.
- Phiên bản hiện tại không sử dụng CMS, database hoặc trang quản trị.

## 3. Sitemap

```text
CROWN ENGLISH
├── Trang chủ
│   ├── Hero / Banner
│   ├── Giới thiệu ngắn về Crown
│   ├── Các khóa học nổi bật
│   ├── Tại sao chọn Crown / Điểm khác biệt
│   ├── Giảng viên nổi bật
│   └── Kết quả / Feedback nổi bật
├── Giới thiệu
│   ├── Câu chuyện Crown
│   ├── Giá trị cốt lõi
│   ├── Phương pháp đào tạo
│   └── Đội ngũ vận hành
├── Khóa học
│   ├── IELTS
│   ├── Tiếng Anh giao tiếp
│   └── IELTS 1 kèm 1
├── Giảng viên
│   ├── Đội ngũ vận hành
│   ├── Đội ngũ giảng viên
│   ├── Chuyên môn / Kinh nghiệm
│   └── Chứng chỉ / Thành tích
├── Học viên
│   ├── Kết quả học viên
│   ├── Thành tích / Bảng điểm
│   └── Feedback
├── Cam kết
├── Câu hỏi thường gặp
└── Liên hệ
    ├── Thông tin trung tâm
    ├── Địa chỉ và Google Maps
    ├── Hotline / Email / Zalo
    └── Form đăng ký tư vấn
```

## 4. Danh sách route

| Trang | Route |
| --- | --- |
| Trang chủ | `/` |
| Giới thiệu | `/gioi-thieu` |
| Danh sách khóa học | `/khoa-hoc` |
| IELTS | `/khoa-hoc/ielts` |
| Tiếng Anh giao tiếp | `/khoa-hoc/giao-tiep` |
| IELTS 1 kèm 1 | `/khoa-hoc/ielts-1-kem-1` |
| Giảng viên | `/giang-vien` |
| Học viên | `/hoc-vien` |
| Cam kết | `/cam-ket` |
| Câu hỏi thường gặp | `/cau-hoi-thuong-gap` |
| Liên hệ | `/lien-he` |

## 5. Cấu trúc thư mục

```text
crown-english/
├── public/
│   ├── images/
│   │   ├── home/
│   │   ├── about/
│   │   ├── courses/
│   │   │   ├── ielts/
│   │   │   ├── giao-tiep/
│   │   │   └── ielts-1-kem-1/
│   │   ├── teachers/
│   │   ├── staff/
│   │   ├── students/
│   │   ├── feedbacks/
│   │   ├── certificates/
│   │   └── facilities/
│   ├── icons/
│   └── logo/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── gioi-thieu/
│   │   │   └── page.tsx
│   │   ├── khoa-hoc/
│   │   │   ├── page.tsx
│   │   │   ├── ielts/
│   │   │   │   └── page.tsx
│   │   │   ├── giao-tiep/
│   │   │   │   └── page.tsx
│   │   │   └── ielts-1-kem-1/
│   │   │       └── page.tsx
│   │   ├── giang-vien/
│   │   │   └── page.tsx
│   │   ├── hoc-vien/
│   │   │   └── page.tsx
│   │   ├── cam-ket/
│   │   │   └── page.tsx
│   │   ├── cau-hoi-thuong-gap/
│   │   │   └── page.tsx
│   │   ├── lien-he/
│   │   │   └── page.tsx
│   │   └── api/
│   │       └── consultation/
│   │           └── route.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── DesktopNavigation.tsx
│   │   │   ├── MobileNavigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── FloatingContact.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Accordion.tsx
│   │   ├── courses/
│   │   │   ├── CourseCard.tsx
│   │   │   ├── CourseHero.tsx
│   │   │   ├── CourseOverview.tsx
│   │   │   ├── CourseRoadmap.tsx
│   │   │   ├── CourseBenefits.tsx
│   │   │   ├── CourseTuition.tsx
│   │   │   ├── OneToOneComparison.tsx
│   │   │   └── CourseCTA.tsx
│   │   ├── teachers/
│   │   │   ├── TeacherCard.tsx
│   │   │   ├── StaffCard.tsx
│   │   │   └── CertificateCard.tsx
│   │   ├── students/
│   │   │   ├── StudentResultCard.tsx
│   │   │   ├── ScoreCard.tsx
│   │   │   └── FeedbackCard.tsx
│   │   ├── forms/
│   │   │   └── ConsultationForm.tsx
│   │   └── contact/
│   │       ├── ContactInformation.tsx
│   │       ├── SocialContact.tsx
│   │       └── GoogleMap.tsx
│   ├── sections/
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutPreviewSection.tsx
│   │   │   ├── FeaturedCoursesSection.tsx
│   │   │   ├── WhyCrownSection.tsx
│   │   │   ├── FeaturedTeachersSection.tsx
│   │   │   ├── StudentResultsSection.tsx
│   │   │   └── FeaturedFeedbackSection.tsx
│   │   ├── about/
│   │   │   ├── CrownStorySection.tsx
│   │   │   ├── CoreValuesSection.tsx
│   │   │   ├── TeachingMethodSection.tsx
│   │   │   └── OperationsTeamSection.tsx
│   │   ├── commitment/
│   │   │   ├── QualityCommitmentSection.tsx
│   │   │   └── SupportCommitmentSection.tsx
│   │   └── contact/
│   │       └── ContactSection.tsx
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── courses.ts
│   │   ├── teachers.ts
│   │   ├── staff.ts
│   │   ├── student-results.ts
│   │   ├── feedbacks.ts
│   │   ├── commitments.ts
│   │   ├── faqs.ts
│   │   └── contact.ts
│   ├── config/
│   │   └── site.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── validations.ts
│   │   ├── email.ts
│   │   └── analytics.ts
│   └── types/
│       ├── course.ts
│       ├── teacher.ts
│       ├── student.ts
│       ├── feedback.ts
│       ├── faq.ts
│       └── consultation.ts
├── .env.local
├── .env.example
├── next.config.ts
├── package.json
└── README.md
```

## 6. Trách nhiệm của từng thư mục

- `app`: Khai báo route, metadata và ghép các section thành trang hoàn chỉnh.
- `components/layout`: Header, Footer và thành phần bố cục dùng toàn website.
- `components/ui`: Component giao diện nhỏ, dùng lại ở nhiều nơi và không chứa nội dung nghiệp vụ Crown.
- `components/courses`: Component dùng chung cho các trang khóa học.
- `sections`: Khối nội dung lớn thuộc từng trang.
- `data`: Nguồn nội dung tĩnh của website như khóa học, giảng viên, feedback và thông tin liên hệ.
- `types`: TypeScript type/interface dùng chung.
- `lib`: Hàm tiện ích, validation, email và analytics.
- `config`: Thông tin cấu hình chung của website.

## 7. Cấu trúc trang chủ

File `src/app/page.tsx` chỉ ghép section, không viết toàn bộ giao diện trực tiếp trong file này.

```tsx
import HeroSection from "@/sections/home/HeroSection";
import AboutPreviewSection from "@/sections/home/AboutPreviewSection";
import FeaturedCoursesSection from "@/sections/home/FeaturedCoursesSection";
import WhyCrownSection from "@/sections/home/WhyCrownSection";
import FeaturedTeachersSection from "@/sections/home/FeaturedTeachersSection";
import StudentResultsSection from "@/sections/home/StudentResultsSection";
import FeaturedFeedbackSection from "@/sections/home/FeaturedFeedbackSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <FeaturedCoursesSection />
      <WhyCrownSection />
      <FeaturedTeachersSection />
      <StudentResultsSection />
      <FeaturedFeedbackSection />
    </>
  );
}
```

Trang chủ chỉ hiển thị nội dung nổi bật. Mỗi section phải có liên kết đến trang chi tiết tương ứng.

## 8. Cấu trúc landing page khóa học

Mỗi trang khóa học nên sử dụng cùng một khung cơ bản:

```text
Course Hero
→ Đối tượng phù hợp
→ Vấn đề của học viên
→ Tổng quan khóa học
→ Lộ trình
→ Phương pháp học
→ Quyền lợi / Điểm khác biệt
→ Giảng viên
→ Kết quả / Feedback
→ Học phí hoặc yêu cầu tư vấn
→ FAQ
→ Form đăng ký
```

Trang IELTS 1 kèm 1 bổ sung:

```text
→ Lộ trình cá nhân hóa
→ So sánh lớp 1 kèm 1 và lớp thường
→ Lợi ích học 1 kèm 1
```

Không đưa thông tin `650–700` hoặc `2h` lên giao diện cho đến khi khách xác nhận rõ đó là học phí, mục tiêu điểm hay thời lượng học.

## 9. Quy tắc component

- Mỗi component chỉ đảm nhiệm một vai trò rõ ràng.
- Không viết toàn bộ một trang trong một file duy nhất.
- Component dùng lại từ hai nơi trở lên đặt trong `components`.
- Component chỉ dành cho một trang hoặc một nhóm trang đặt trong `sections`.
- Component nhận dữ liệu qua `props`; không hard-code nội dung khóa học bên trong card.
- Mọi `props` phải có TypeScript type rõ ràng.
- Server Component được ưu tiên mặc định.
- Chỉ thêm `"use client"` khi component có state, event, form, modal, carousel hoặc cần API trình duyệt.
- Dùng `next/image` cho ảnh và `next/link` cho liên kết nội bộ.
- Không dùng thẻ `<a>` cho liên kết nội bộ.

## 10. Quy tắc đặt tên

- Component: PascalCase, ví dụ `CourseCard.tsx`.
- Hàm và biến: camelCase, ví dụ `getFeaturedCourses`.
- Type/interface: PascalCase, ví dụ `Course` hoặc `ConsultationFormData`.
- Folder route: chữ thường, không dấu, dùng dấu gạch ngang.
- File dữ liệu: kebab-case, ví dụ `student-results.ts`.
- Biến môi trường public bắt đầu bằng `NEXT_PUBLIC_`.
- Không sử dụng tên chung chung như `Component1`, `data1`, `test2`.

## 11. Quy tắc giao diện chung

- Tất cả trang sử dụng chung `Header`, `Footer`, `Container` và hệ thống button.
- Màu, font, border radius, shadow và spacing phải được định nghĩa thống nhất.
- Không tự tạo màu mới trực tiếp trong từng component nếu chưa thống nhất.
- Thiết kế theo hướng mobile-first.
- Kiểm tra tối thiểu ở 360px, 768px, 1024px và 1440px.
- CTA chính dùng cùng nội dung và phong cách trên toàn website.
- Nội dung hình ảnh phải có `alt` phù hợp.
- Không đưa chữ quan trọng vào trong ảnh banner.

## 12. Form tư vấn

Form dự kiến gồm:

- Họ và tên.
- Số điện thoại.
- Email nếu khách yêu cầu.
- Khóa học quan tâm.
- Trình độ hiện tại.
- Khung giờ liên hệ.
- Ghi chú.
- Đồng ý cho Crown liên hệ tư vấn.

Yêu cầu kỹ thuật:

- Validate bằng Zod.
- Hiển thị trạng thái đang gửi, thành công và thất bại.
- Không để khóa email hoặc thông tin bảo mật ở phía client.
- Lưu nguồn trang và khóa học phát sinh đăng ký.
- Nơi nhận lead phải được khách xác nhận trước khi triển khai production.

## 13. Quản lý dữ liệu nội dung

Dữ liệu của phiên bản hiện tại được lưu trong `src/data`. Nội dung không được viết trực tiếp bên trong component.

```text
src/data → component → page
```

Khi khách hàng cần thay đổi nội dung, developer cập nhật file dữ liệu tương ứng, kiểm tra lại website rồi deploy phiên bản mới.

```text
Sửa src/data → kiểm tra → push GitHub → Vercel tự deploy
```

Các nhóm dữ liệu cần tách riêng:

- Banner.
- Khóa học và lộ trình.
- Học phí và ưu đãi nếu được công khai.
- Giảng viên và đội ngũ vận hành.
- Chứng chỉ.
- Kết quả học viên.
- Feedback.
- Cam kết.
- FAQ.
- Thông tin liên hệ.

CMS, database, trang `/admin` và tài khoản quản trị không nằm trong phạm vi phiên bản hiện tại. Nếu khách hàng cần tự cập nhật thường xuyên, chức năng này sẽ được khảo sát, báo giá và phát triển ở giai đoạn sau.

## 14. SEO

- Mỗi trang có `title` và `description` riêng.
- Chỉ có một `h1` chính trên mỗi trang.
- Dùng heading theo thứ tự `h1`, `h2`, `h3`.
- Tạo `sitemap.ts` và `robots.ts`.
- Thiết lập Open Graph cho trang chủ và các trang khóa học.
- Không nhúng toàn bộ brochure dưới dạng ảnh; nội dung quan trọng phải là HTML.
- URL dùng tiếng Việt không dấu và có ý nghĩa.

## 15. Biến môi trường

`.env.local` dùng cho máy cá nhân và không được commit lên GitHub.

`.env.example` chỉ chứa tên biến, không chứa giá trị bí mật.

```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GOOGLE_MAPS_URL=
NEXT_PUBLIC_ZALO_URL=
CONTACT_RECEIVER_EMAIL=
EMAIL_API_KEY=
```

## 16. Git workflow

```text
main
└── develop
    ├── feature/layout
    ├── feature/homepage
    ├── feature/courses
    ├── feature/teachers
    ├── feature/students
    └── feature/contact-form
```

- Không code trực tiếp trên `main`.
- Mỗi tính năng sử dụng một branch riêng.
- Pull Request vào `develop` để kiểm tra trước.
- Chỉ merge `develop` vào `main` khi phiên bản đã sẵn sàng deploy.

Quy ước commit:

```text
feat: add IELTS course page
feat: implement consultation form
fix: resolve mobile navigation overflow
style: update course card spacing
refactor: reuse course hero component
seo: add IELTS page metadata
```

## 17. Thứ tự triển khai

1. Khởi tạo Next.js và GitHub.
2. Thiết lập màu, font, spacing và component UI chung.
3. Làm Header, navigation mobile, Footer và Container.
4. Làm trang chủ.
5. Làm trang tổng hợp khóa học.
6. Làm ba landing page khóa học.
7. Làm trang Giới thiệu, Giảng viên và Học viên.
8. Làm trang Cam kết, FAQ và Liên hệ.
9. Làm form và kết nối nơi nhận lead.
10. Responsive và accessibility.
11. SEO, Analytics và Pixel nếu khách yêu cầu.
12. Testing.
13. Deploy staging trên Vercel.
14. Khách nghiệm thu, sau đó kết nối domain production.

## 18. Phạm vi chưa mặc định triển khai

Các chức năng sau không tự động nằm trong phạm vi website nếu khách chưa xác nhận:

- Đăng nhập học viên.
- LMS hoặc học trực tuyến.
- Thanh toán online.
- Thi thử IELTS tự động.
- Quản lý lớp học, học phí và điểm danh.
- CRM hoàn chỉnh.
- Chatbot AI.
- CMS, database, trang `/admin` hoặc tài khoản quản trị.
- Chạy quảng cáo Google, Facebook hoặc TikTok.

## 19. Nguyên tắc dành cho AI hỗ trợ code

- Đọc file này trước khi tạo route, component hoặc sửa cấu trúc dự án.
- Không tự ý thêm trang hoặc chức năng ngoài sitemap.
- Không tự ý thay đổi tên route.
- Không hard-code dữ liệu nghiệp vụ trong component; dữ liệu nội dung phải nằm trong `src/data`.
- Không cài CMS, database hoặc tạo route `/admin` trong phiên bản hiện tại.
- Tái sử dụng component hiện có trước khi tạo component mới.
- Không cài thư viện mới nếu chức năng có thể làm bằng công cụ hiện có.
- Không tự tạo nội dung học phí, cam kết, kết quả hoặc chứng chỉ.
- Nếu dữ liệu khách hàng chưa xác nhận, dùng placeholder rõ ràng và ghi chú `TODO`.
- Sau khi sửa phải chạy lint và build.

Các lệnh kiểm tra tối thiểu:

```bash
npm run lint
npm run build
```

## 20. Definition of Done

Một tính năng chỉ được xem là hoàn thành khi:

- Đúng sitemap và thiết kế đã duyệt.
- Hoạt động trên mobile, tablet và desktop.
- Không có lỗi TypeScript hoặc ESLint.
- Không có link hoặc ảnh bị hỏng.
- Nội dung đúng dữ liệu khách đã xác nhận.
- Có trạng thái loading, success và error nếu liên quan đến dữ liệu hoặc form.
- Có metadata phù hợp nếu là một trang mới.
- Đã chạy thành công `npm run lint` và `npm run build`.
