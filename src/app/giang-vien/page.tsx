import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getShareImage } from "@/config/share-image";
import Container from "@/components/ui/Container";
import TeachersHero from "@/components/teachers/TeachersHero";
import TeacherStandards from "@/components/teachers/TeacherStandards";
import TeacherShowcase from "@/components/teachers/TeacherShowcase";
import { teachersPageData as data } from "@/data/teachers";

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

export default function TeachersPage() {
  const siteUrl = siteConfig.url;

  const pageUrl = `${siteUrl}${data.seo.canonical}`;

  const schema = {
    "@context": "https://schema.org",

    "@type": "CollectionPage",

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
      "@type": "ItemList",

      itemListElement: data.teachers.map((teacher, index) => ({
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

        <TeacherShowcase teachers={data.teachers} />
      </Container>
    </>
  );
}
