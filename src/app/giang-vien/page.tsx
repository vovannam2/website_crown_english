import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import TeachersHero from "@/components/teachers/TeachersHero";
import TeacherStandards from "@/components/teachers/TeacherStandards";
import TeacherShowcase from "@/components/teachers/TeacherShowcase";
import { teachersPageData } from "@/data/teachers";

const { seo } = teachersPageData;

const defaultOgImage = "/images/og/crown-english.jpg";

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
  alternates: { canonical: seo.canonical },
  robots: seo.robots,
  openGraph: {
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    images: [
      {
        url: seo.openGraph.image || defaultOgImage,
      },
    ],
    type: "website",
  },
};

export default function TeachersPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.crownenglish.com.vn";

  const pageUrl = `${siteUrl}${seo.canonical}`;

  const schema = {
    "@context": "https://schema.org",

    "@type": "CollectionPage",

    "@id": `${pageUrl}#webpage`,

    url: pageUrl,

    name: seo.h1,

    description: seo.description,

    inLanguage: "vi-VN",

    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },

    about: {
      "@id": `${siteUrl}/#organization`,
    },

    mainEntity: {
      "@type": "ItemList",

      itemListElement: teachersPageData.teachers.map((teacher, index) => ({
        "@type": "ListItem",

        position: index + 1,

        item: {
          "@type": "Person",

          name: teacher.name,

          worksFor: {
            "@id": `${siteUrl}/#organization`,
          },
        },
      })),
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

      <TeachersHero />

      <Container>
        <TeacherStandards />

        <TeacherShowcase teachers={teachersPageData.teachers} />
      </Container>
    </>
  );
}
