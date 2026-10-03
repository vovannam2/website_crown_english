import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import StudentsHero from "@/components/students/StudentsHero";
import StudentResults from "@/components/students/StudentResults";
import StudentMedia from "@/components/students/StudentMedia";
import { studentResultsPageData as data } from "@/data/student-results";

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

export default function StudentsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.crownenglish.com.vn";

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

      itemListElement: data.results.map((student, index) => ({
        "@type": "ListItem",

        position: index + 1,

        item: {
          "@type": "Person",

          name: student.name,

          description: `${student.name} - ${student.exam} Overall ${student.overall}`,
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

      <Container>
        <StudentsHero />

        <StudentResults results={data.results} />

        <StudentMedia videos={data.videos} moments={data.classMoments} />
      </Container>
    </>
  );
}
