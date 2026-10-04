import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { defaultShareImage } from "@/config/share-image";
import HomePage from "@/components/home/HomePage";
import { homePageData as data } from "@/data/home";

export const metadata: Metadata = {
  title: { absolute: data.seo.title },
  description: data.seo.description,
  alternates: { canonical: data.seo.canonical },
  robots: data.seo.robots,
  openGraph: {
    title: data.seo.openGraph.title,
    description: data.seo.openGraph.description,
    type: "website",
    images: data.seo.openGraph.image
      ? [
          {
            url: data.seo.openGraph.image,
            width: 2772,
            height: 1024,
            alt: "Crown English IELTS & Tiếng Anh giao tiếp",
          },
        ]
      : [defaultShareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: data.seo.openGraph.title,
    description: data.seo.openGraph.description,
    images: [data.seo.openGraph.image || defaultShareImage.url],
  },
};

export default function Page() {
  const siteUrl = siteConfig.url;

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
