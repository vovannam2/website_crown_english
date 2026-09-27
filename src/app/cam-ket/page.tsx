import type { Metadata } from "next";
import CommitmentsPage from "@/components/commitments/CommitmentsPage";
import { commitmentsPageData as data } from "@/data/commitments";

export const metadata: Metadata = {
  title: { absolute: data.seo.title },
  description: data.seo.description,
  alternates: { canonical: data.seo.canonical },
  robots: data.seo.robots,
  openGraph: {
    title: data.seo.openGraph.title,
    description: data.seo.openGraph.description,
    images: data.seo.openGraph.image ? [data.seo.openGraph.image] : undefined,
    url: data.seo.canonical,
    type: "website",
  },
};

export default function CommitmentPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": data.seo.schemaTypes,
    name: data.seo.h1,
    description: data.seo.description,
    url: data.seo.canonical,
    about: data.seo.secondaryTopics,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
      <CommitmentsPage data={data} />
    </>
  );
}
