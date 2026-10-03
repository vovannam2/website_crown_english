import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.crownenglish.com.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/gioi-thieu",
    "/khoa-hoc",
    "/khoa-hoc/ielts",
    "/khoa-hoc/giao-tiep",
    "/khoa-hoc/ielts-1-kem-1",
    "/giang-vien",
    "/hoc-vien",
    "/cam-ket",
    "/cau-hoi-thuong-gap",
    "/lien-he",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));
}
