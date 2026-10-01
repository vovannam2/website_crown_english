import type { Metadata } from "next";
import FaqsPage from "@/components/faqs/FaqsPage";
import { faqsPageData as data } from "@/data/faqs";

const description =
  "Giải đáp các câu hỏi thường gặp về khóa học, học phí, giảng viên, đăng ký, ưu đãi và chính sách tại Crown English.";

const defaultOgImage = "/images/og/crown-english.jpg";

export const metadata: Metadata = {
  title: { absolute: data.seo.title },
  description,
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

export default function FaqPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const pageUrl = `${siteUrl}${data.seo.canonical}`;

  const schema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    "@id": `${pageUrl}#faqpage`,

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

    mainEntity: data.items.map((item) => ({
      "@type": "Question",

      name: item.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.join("\n"),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <FaqsPage items={data.items} />
    </>
  );
}
