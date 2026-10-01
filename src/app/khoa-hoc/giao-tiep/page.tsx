import type { Metadata } from "next";
import CourseLandingPage from "@/components/courses/CourseLandingPage";
import { communicationPageData } from "@/data/courses";

const defaultOgImage = "/images/og/crown-english.jpg";

export const metadata: Metadata = {
  title: { absolute: communicationPageData.seo.title },
  description: communicationPageData.seo.description,
  alternates: {
    canonical: communicationPageData.seo.canonical,
  },
  robots: communicationPageData.seo.robots,

  openGraph: {
    title: communicationPageData.seo.openGraph.title,
    description: communicationPageData.seo.openGraph.description,
    images: [
      {
        url: communicationPageData.seo.openGraph.image || defaultOgImage,
      },
    ],
    type: "website",
  },
};

export default function CommunicationPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const pageUrl = `${siteUrl}${communicationPageData.seo.canonical}`;

  const schema = {
    "@context": "https://schema.org",

    "@type": "Course",

    "@id": `${pageUrl}#course`,

    url: pageUrl,

    name: communicationPageData.seo.h1,

    description: communicationPageData.seo.description,

    provider: {
      "@id": `${siteUrl}/#organization`,
    },

    inLanguage: "vi-VN",

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

      <CourseLandingPage data={communicationPageData} />
    </>
  );
}
