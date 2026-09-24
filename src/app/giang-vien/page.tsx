import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import TeachersHero from "@/components/teachers/TeachersHero";
import TeacherStandards from "@/components/teachers/TeacherStandards";
import TeacherShowcase from "@/components/teachers/TeacherShowcase";
import { teachersPageData } from "@/data/teachers";

const { seo } = teachersPageData;

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  alternates: { canonical: seo.canonical },
  robots: seo.robots,
  openGraph: {
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    url: seo.canonical,
    type: "website",
    ...(seo.openGraph.image ? { images: [seo.openGraph.image] } : {}),
  },
};

export default function TeachersPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": [...seo.schemaTypes],
    name: seo.h1,
    description: seo.description,
    url: seo.canonical,
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <TeachersHero />
    <Container>
      <TeacherStandards />
      <TeacherShowcase teachers={teachersPageData.teachers} />
    </Container>
  </>;
}
