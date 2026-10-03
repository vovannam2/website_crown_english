import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getShareImage } from "@/config/share-image";
import { CoursesOverviewPage } from "@/components/courses/CourseLandingPage";
import {
  communicationPageData,
  coursesPageData as data,
  ieltsOneToOnePageData,
  ieltsPageData,
} from "@/data/courses";
import { studentResultsPageData } from "@/data/student-results";

export const metadata: Metadata = {
  title: { absolute: data.seo.title },
  description: data.seo.description,
  alternates: { canonical: data.seo.canonical },
  robots: data.seo.robots,
  openGraph: {
    title: data.seo.openGraph.title,
    description: data.seo.openGraph.description,
    images: [getShareImage(data.seo.openGraph.image)],
    type: "website",
  },
};

export default function CoursesPage() {
  const siteUrl = siteConfig.url;

  const pageUrl = `${siteUrl}${data.seo.canonical}`;

  const schema = {
    "@context": "https://schema.org",

    "@type": "CollectionPage",

    "@id": `${pageUrl}#webpage`,

    url: pageUrl,

    name: data.seo.h1,

    description: data.seo.description,

    inLanguage: "vi-VN",

    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },

    about: {
      "@id": `${siteUrl}/#organization`,
    },

    mainEntity: {
      "@type": "ItemList",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Course",
            "@id": `${siteUrl}${ieltsPageData.href}#course`,
            name: ieltsPageData.seo.h1,
            description: ieltsPageData.seo.description,
            url: `${siteUrl}${ieltsPageData.href}`,
            provider: {
              "@id": `${siteUrl}/#organization`,
            },
          },
        },

        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Course",
            "@id": `${siteUrl}${communicationPageData.href}#course`,
            name: communicationPageData.seo.h1,
            description: communicationPageData.seo.description,
            url: `${siteUrl}${communicationPageData.href}`,
            provider: {
              "@id": `${siteUrl}/#organization`,
            },
          },
        },

        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Course",
            "@id": `${siteUrl}${ieltsOneToOnePageData.href}#course`,
            name: ieltsOneToOnePageData.seo.h1,
            description: ieltsOneToOnePageData.seo.description,
            url: `${siteUrl}${ieltsOneToOnePageData.href}`,
            provider: {
              "@id": `${siteUrl}/#organization`,
            },
          },
        },
      ],
    },
  };

  const courseImages = Object.fromEntries(
    data.courses.map((course) => [course.id, course.image]),
  );

  const featuredVideo = studentResultsPageData.videos.find(
    (video) => video.id === "huong-linh-7-5",
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <CoursesOverviewPage
        title={data.seo.h1}
        description={data.seo.description}
        heroImage={data.hero.image}
        learningFormats={data.learningFormats}
        achievements={{
          title: "Bảng vàng thành tích học viên Crown English",
          description:
            "Những kết quả IELTS nổi bật từ học viên là minh chứng rõ ràng cho lộ trình học, sự đồng hành và nỗ lực bền bỉ trong từng khóa.",
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
    </>
  );
}
