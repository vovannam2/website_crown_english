import type { Metadata } from "next";
import CommitmentsPage from "@/components/commitments/CommitmentsPage";
import { commitmentsPageData as data } from "@/data/commitments";

const defaultOgImage = "/images/og/crown-english.jpg";

export const metadata: Metadata = {
  title: { absolute: data.seo.title },
  description: data.seo.description,
  alternates: { canonical: data.seo.canonical },
  robots: data.seo.robots,
  openGraph: {
    title: data.seo.openGraph.title,
    description: data.seo.openGraph.description,
    images: [
      {
        url: data.seo.openGraph.image || defaultOgImage,
      },
    ],
    type: "website",
  },
};

export default function CommitmentPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.crownenglish.com.vn";

  const pageUrl = `${siteUrl}${data.seo.canonical}`;

  const schema = {
    "@context": "https://schema.org",

    "@type": "WebPage",

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

    keywords: data.seo.secondaryTopics.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <CommitmentsPage data={data} />
    </>
  );
}
