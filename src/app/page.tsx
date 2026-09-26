import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import { homePageData as data } from "@/data/home";

export const metadata: Metadata = {
  title: { absolute: data.seo.title },
  description: data.seo.description,
  alternates: { canonical: data.seo.canonical },
  robots: data.seo.robots,
  openGraph: {
    title: data.seo.openGraph.title,
    description: data.seo.openGraph.description,
    url: data.seo.canonical,
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
