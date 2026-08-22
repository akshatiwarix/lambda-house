import type { MetadataRoute } from "next";
import { getPublicLinks } from "@/lib/public-links";

export default function sitemap(): MetadataRoute.Sitemap {
  const { siteUrl } = getPublicLinks();
  const lastModified = new Date();

  return [
    { url: `${siteUrl}/`, lastModified, priority: 1 },
    { url: `${siteUrl}/conduct`, lastModified, priority: 0.5 },
    { url: `${siteUrl}/privacy`, lastModified, priority: 0.5 },
  ];
}
