import type { Metadata } from "next";
import CourseLandingPage from "@/components/courses/CourseLandingPage";
import { ieltsPageData } from "@/data/courses";

const defaultOgImage = "/images/og/crown-english.jpg";

export const metadata: Metadata = {
  title: { absolute: ieltsPageData.seo.title },
  description: ieltsPageData.seo.description,
  alternates: {
    canonical: ieltsPageData.seo.canonical,
  },
  robots: ieltsPageData.seo.robots,

  openGraph: {
    title: ieltsPageData.seo.openGraph.title,
    description: ieltsPageData.seo.openGraph.description,
    images: [
      {
        url: ieltsPageData.seo.openGraph.image || defaultOgImage,
      },
    ],
    type: "website",
  },
};

export default function IeltsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.crownenglish.com.vn";

  const pageUrl = `${siteUrl}${ieltsPageData.seo.canonical}`;

  const schema = {
    "@context": "https://schema.org",

    "@type": "Course",

    "@id": `${pageUrl}#course`,

    url: pageUrl,

    name: ieltsPageData.seo.h1,

    description: ieltsPageData.seo.description,

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

      <CourseLandingPage data={ieltsPageData} />
    </>
  );
}
