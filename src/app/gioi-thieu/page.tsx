import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { getShareImage } from "@/config/share-image";
import Container from "@/components/ui/Container";
import AboutCoreValues from "@/components/about/AboutCoreValues";
import AboutCta from "@/components/about/AboutCta";
import AboutDifferences from "@/components/about/AboutDifferences";
import AboutHero from "@/components/about/AboutHero";
import AboutJourney from "@/components/about/AboutJourney";
import AboutManifesto from "@/components/about/AboutManifesto";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutStory from "@/components/about/AboutStory";
import { aboutPageData as data } from "@/data/about";
import styles from "@/components/about/about.module.css";

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

export default function AboutPage() {
  const siteUrl = siteConfig.url;

  const pageUrl = `${siteUrl}${data.seo.canonical}`;

  const schema = {
    "@context": "https://schema.org",

    "@type": "AboutPage",

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
        <div className={styles.page} data-reveal-easing="ease">
          <AboutHero />
          <AboutManifesto />
          <AboutStory />
          <AboutCoreValues />
          <AboutPhilosophy />
          <AboutJourney />
          <AboutDifferences />
          <AboutCta />
        </div>
      </Container>
    </>
  );
}
