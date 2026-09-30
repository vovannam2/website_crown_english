import localQAImage from "../../../public/images/Design/QA.png";
import type { Metadata } from "next";
import FaqsPage from "@/components/faqs/FaqsPage";
import { faqsPageData as data } from "@/data/faqs";

const description =
  "Giải đáp các câu hỏi thường gặp về khóa học, học phí, giảng viên, đăng ký, ưu đãi và chính sách tại Crown English.";

export const metadata: Metadata = {
  title: { absolute: data.seo.title },
  description,
  alternates: { canonical: data.seo.canonical },
  robots: data.seo.robots,
  openGraph: {
    title: data.seo.openGraph.title,
    description,
    images: [localQAImage.src],
    url: data.seo.canonical,
    type: "website",
  },
};

export default function FaqPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <FaqsPage items={data.items} />
    </>
  );
}
