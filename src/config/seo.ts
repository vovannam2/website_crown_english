const productionSiteOrigin = "https://www.crownenglish.com.vn";

const vercelSiteUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL;

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const isLocalSiteUrl =
  configuredSiteUrl?.includes("localhost") ||
  configuredSiteUrl?.includes("127.0.0.1");

function normalizeSiteOrigin(url: string) {
  const withProtocol = url.startsWith("http") ? url : `https://${url}`;

  return withProtocol.replace(/\/+$/, "");
}

export function getSiteOrigin() {
  const siteUrl =
    configuredSiteUrl && !(process.env.VERCEL && isLocalSiteUrl)
      ? configuredSiteUrl
      : vercelSiteUrl || productionSiteOrigin;

  return normalizeSiteOrigin(siteUrl);
}

export const defaultSiteTitle =
  "Crown English | IELTS, Tiếng Anh giao tiếp & 1 kèm 1";

export const defaultSiteDescription =
  "Crown English cung cấp các khóa học IELTS, Tiếng Anh giao tiếp và IELTS 1 kèm 1 với lộ trình cá nhân hóa, chương trình theo từng mục tiêu và đội ngũ giảng viên đồng hành cùng học viên.";

export const defaultShareImage = {
  url: "/images/og/academic-team-ielts-share.jpg",
  width: 2772,
  height: 1024,
  alt: "Crown English IELTS & Tiếng Anh giao tiếp",
} as const;

export const sitemapEntries = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/gioi-thieu", changeFrequency: "monthly", priority: 0.8 },
  { path: "/khoa-hoc", changeFrequency: "weekly", priority: 0.9 },
  { path: "/khoa-hoc/ielts", changeFrequency: "weekly", priority: 0.9 },
  { path: "/khoa-hoc/giao-tiep", changeFrequency: "weekly", priority: 0.85 },
  { path: "/khoa-hoc/ielts-1-kem-1", changeFrequency: "weekly", priority: 0.85 },
  { path: "/giang-vien", changeFrequency: "monthly", priority: 0.75 },
  { path: "/hoc-vien", changeFrequency: "weekly", priority: 0.8 },
  { path: "/cam-ket", changeFrequency: "monthly", priority: 0.75 },
  { path: "/cau-hoi-thuong-gap", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lien-he", changeFrequency: "monthly", priority: 0.8 },
] as const;
