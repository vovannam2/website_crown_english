import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

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
    url: `${siteConfig.url}${route}`,
  }));
}
