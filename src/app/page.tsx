import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import { homePageData as data } from "@/data/home";

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

export default function Page() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const jsonLd = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": `${siteUrl}/#organization`,

        name: "Crown English",
        url: siteUrl,

        description:
          "Crown English cung cấp các chương trình IELTS, Tiếng Anh giao tiếp và IELTS 1 kèm 1.",

        telephone: "089 819 26 33",

        email: "ieltsgiaotiepcrown@gmail.com",

        address: {
          "@type": "PostalAddress",
          streetAddress: "168/20 Nguyễn Gia Trí",
          addressLocality: "TP.HCM",
          addressCountry: "VN",
        },
      },

      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,

        url: siteUrl,
        name: "Crown English",

        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <HomePage />
    </>
  );
}
