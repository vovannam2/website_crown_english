import type { Metadata } from "next";
import CourseLandingPage from "@/components/courses/CourseLandingPage";
import { communicationPageData } from "@/data/courses";

export const metadata: Metadata = {
  title: { absolute: communicationPageData.seo.title },
  description: communicationPageData.seo.description,
  alternates: { canonical: communicationPageData.seo.canonical },
  robots: communicationPageData.seo.robots,
  openGraph: {
    title: communicationPageData.seo.openGraph.title,
    description: communicationPageData.seo.openGraph.description,
    url: communicationPageData.seo.canonical,
    type: "website",
  },
};

export default function CommunicationPage() {
  return <CourseLandingPage data={communicationPageData} />;
}
