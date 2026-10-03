import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";
import { contactPageData as data } from "@/data/contact";

export const metadata: Metadata = {
  title: {
    absolute: data.seo.title,
  },

  description: data.seo.description,

  alternates: {
    canonical: data.seo.canonical,
  },

  robots: data.seo.robots,

  openGraph: {
    title: data.seo.openGraph.title,
    description: data.seo.openGraph.description,
    url: data.seo.canonical,
    images: data.seo.openGraph.image ? [data.seo.openGraph.image] : undefined,
    type: "website",
  },
};

export default function Page() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.crownenglish.com.vn";

  const pageUrl = `${siteUrl}${data.seo.canonical}`;

  const schema = {
    "@context": "https://schema.org",

    "@type": "ContactPage",

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
      "@id": `${siteUrl}/#organization`,
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

      <ContactPage data={data} />
    </>
  );
}
