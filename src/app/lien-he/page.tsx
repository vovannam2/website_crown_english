import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";
import { contactPageData as data } from "@/data/contact";

export const metadata: Metadata = {
  title: data.seo.title,
  description: data.seo.description,
  alternates: {
    canonical: data.seo.canonical,
  },
  openGraph: {
    title: data.seo.openGraph.title,
    description: data.seo.openGraph.description,
    url: data.seo.canonical,
    images: data.seo.openGraph.image ? [data.seo.openGraph.image] : undefined,
  },
};

export default function Page() {
  return <ContactPage data={data} />;
}
