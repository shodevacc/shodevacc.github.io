import { siteUrl } from "@/lib/metadata";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/keystatic", "/api/"] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
