import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import StudentsHero from "@/components/students/StudentsHero";
import StudentResults from "@/components/students/StudentResults";
import StudentMedia from "@/components/students/StudentMedia";
import { studentResultsPageData as data } from "@/data/student-results";

export const metadata: Metadata = {
  title: { absolute: data.seo.title }, description: data.seo.description,
  alternates: { canonical: data.seo.canonical }, robots: data.seo.robots,
  openGraph: { title: data.seo.openGraph.title, description: data.seo.openGraph.description, url: data.seo.canonical, type: "website", ...(data.seo.openGraph.image ? { images: [data.seo.openGraph.image] } : {}) },
};

export default function StudentsPage() {
  const schema = { "@context": "https://schema.org", "@type": [...data.seo.schemaTypes], name: data.seo.h1, description: data.seo.description, url: data.seo.canonical };
  return <Container>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <StudentsHero />
    <StudentResults results={data.results} />
    <StudentMedia videos={data.videos} moments={data.classMoments} />
  </Container>;
}
