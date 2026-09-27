import type { Metadata } from "next";
import CourseLandingPage from "@/components/courses/CourseLandingPage";
import { ieltsOneToOnePageData } from "@/data/courses";

export const metadata: Metadata = {
  title: { absolute: ieltsOneToOnePageData.seo.title },
  description: ieltsOneToOnePageData.seo.description,
  alternates: { canonical: ieltsOneToOnePageData.seo.canonical },
  robots: ieltsOneToOnePageData.seo.robots,
  openGraph: {
    title: ieltsOneToOnePageData.seo.openGraph.title,
    description: ieltsOneToOnePageData.seo.openGraph.description,
    url: ieltsOneToOnePageData.seo.canonical,
    type: "website",
  },
};

export default function OneToOnePage() {
  return <CourseLandingPage data={ieltsOneToOnePageData} />;
}
