// Set NEXT_PUBLIC_SITE_URL once the site has its final domain.
// On Vercel the production URL is picked up automatically until then.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  "http://localhost:3000";

export const siteMetadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shoaib Alyaan Portfolio",
    template: "%s | Shoaib Alyaan Portfolio",
  },
  description:
    "A website about Shoaib Alyaan. It includes his academic work, other projects, work experience information, resume, and contact information",
  openGraph: { type: "website", siteName: "Shoaib Alyaan Portfolio" },
  twitter: { card: "summary_large_image", creator: "@shoaibalyaan" },
};
