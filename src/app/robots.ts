import type { MetadataRoute } from "next";
import { getPublicLinks } from "@/lib/public-links";

export default function robots(): MetadataRoute.Robots {
  const { siteUrl } = getPublicLinks();
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
