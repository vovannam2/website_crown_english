import type { Metadata } from "next";
import CourseLandingPage from "@/components/courses/CourseLandingPage";
import { ieltsPageData } from "@/data/courses";

export const metadata: Metadata = {
  title: { absolute: ieltsPageData.seo.title },
  description: ieltsPageData.seo.description,
  alternates: { canonical: ieltsPageData.seo.canonical },
  robots: ieltsPageData.seo.robots,
  openGraph: {
    title: ieltsPageData.seo.openGraph.title,
    description: ieltsPageData.seo.openGraph.description,
    images: ieltsPageData.seo.openGraph.image ? [ieltsPageData.seo.openGraph.image] : undefined,
    url: ieltsPageData.seo.canonical,
    type: "website",
  },
};

export default function IeltsPage() {
  return <CourseLandingPage data={ieltsPageData} />;
}
