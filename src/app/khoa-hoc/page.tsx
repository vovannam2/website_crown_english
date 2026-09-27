import type { Metadata } from "next";
import { CoursesOverviewPage } from "@/components/courses/CourseLandingPage";
import { communicationPageData, coursesPageData, ieltsOneToOnePageData, ieltsPageData } from "@/data/courses";
import { studentResultsPageData } from "@/data/student-results";

export const metadata: Metadata = {
  title: { absolute: coursesPageData.seo.title },
  description: coursesPageData.seo.description,
  alternates: { canonical: coursesPageData.seo.canonical },
  robots: coursesPageData.seo.robots,
  openGraph: {
    title: coursesPageData.seo.openGraph.title,
    description: coursesPageData.seo.openGraph.description,
    images: coursesPageData.seo.openGraph.image ? [coursesPageData.seo.openGraph.image] : undefined,
    url: coursesPageData.seo.canonical,
    type: "website",
  },
};

export default function CoursesPage() {
  const courseImages = Object.fromEntries(coursesPageData.courses.map((course) => [course.id, course.image]));
  const featuredVideo = studentResultsPageData.videos.find((video) => video.id === "huong-linh-7-5");

  return (
    <CoursesOverviewPage
      title={coursesPageData.seo.h1}
      description={coursesPageData.seo.description}
      heroImage={coursesPageData.hero.image}
      learningFormats={coursesPageData.learningFormats}
      achievements={{
        title: "Bảng vàng thành tích học viên Crown English",
        description: "Những kết quả IELTS nổi bật từ học viên là minh chứng rõ ràng cho lộ trình học, sự đồng hành và nỗ lực bền bỉ trong từng khóa.",
        results: studentResultsPageData.results.slice(0, 8),
        video: featuredVideo,
      }}
      courses={[
        {
          id: ieltsPageData.id,
          title: ieltsPageData.hero.title,
          href: ieltsPageData.href,
          description: ieltsPageData.seo.description,
          levels: ieltsPageData.roadmap.map((item) => item.name),
          image: courseImages[ieltsPageData.id],
        },
        {
          id: communicationPageData.id,
          title: communicationPageData.hero.title,
          href: communicationPageData.href,
          description: communicationPageData.seo.description,
          levels: communicationPageData.roadmap.map((item) => item.name),
          image: courseImages[communicationPageData.id],
        },
        {
          id: ieltsOneToOnePageData.id,
          title: "IELTS 1 kèm 1",
          href: ieltsOneToOnePageData.href,
          description: ieltsOneToOnePageData.seo.description,
          levels: ieltsOneToOnePageData.roadmap.map((item) => item.name),
          image: courseImages[ieltsOneToOnePageData.id],
        },
      ]}
    />
  );
}
