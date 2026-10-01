import type { Metadata } from "next";
import CourseLandingPage from "@/components/courses/CourseLandingPage";
import { ieltsOneToOnePageData } from "@/data/courses";

const defaultOgImage = "/images/og/crown-english.jpg";

export const metadata: Metadata = {
  title: { absolute: ieltsOneToOnePageData.seo.title },
  description: ieltsOneToOnePageData.seo.description,
  alternates: {
    canonical: ieltsOneToOnePageData.seo.canonical,
  },
  robots: ieltsOneToOnePageData.seo.robots,

  openGraph: {
    title: ieltsOneToOnePageData.seo.openGraph.title,
    description: ieltsOneToOnePageData.seo.openGraph.description,
    images: [
      {
        url: ieltsOneToOnePageData.seo.openGraph.image || defaultOgImage,
      },
    ],
    type: "website",
  },
};

export default function OneToOnePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const pageUrl = `${siteUrl}${ieltsOneToOnePageData.seo.canonical}`;

  const schema = {
    "@context": "https://schema.org",

    "@type": "Course",

    "@id": `${pageUrl}#course`,

    url: pageUrl,

    name: ieltsOneToOnePageData.seo.h1,

    description: ieltsOneToOnePageData.seo.description,

    inLanguage: "vi-VN",

    provider: {
      "@id": `${siteUrl}/#organization`,
    },

    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <CourseLandingPage data={ieltsOneToOnePageData} />
    </>
  );
}
