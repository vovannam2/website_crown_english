import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getShareImage } from "@/config/share-image";
import CourseLandingPage from "@/components/courses/CourseLandingPage";
import { communicationPageData as data } from "@/data/courses";

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

export default function CommunicationPage() {
  const siteUrl = siteConfig.url;

  const pageUrl = `${siteUrl}${data.seo.canonical}`;

  const schema = {
    "@context": "https://schema.org",

    "@type": "Course",

    "@id": `${pageUrl}#course`,

    url: pageUrl,

    name: data.seo.h1,

    description: data.seo.description,

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

      <CourseLandingPage data={data} />
    </>
  );
}
