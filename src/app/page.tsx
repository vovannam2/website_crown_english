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
    images: data.seo.openGraph.image
      ? [
          {
            url: data.seo.openGraph.image,
            width: 2772,
            height: 1024,
            alt: "Crown English IELTS & Tiếng Anh giao tiếp",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: data.seo.openGraph.title,
    description: data.seo.openGraph.description,
    images: data.seo.openGraph.image ? [data.seo.openGraph.image] : undefined,
  },
};

export default function Page() {
  return <HomePage />;
}
