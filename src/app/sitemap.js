import { siteUrl } from "@/lib/metadata";
import { getAcademicProjects } from "@/lib/content";

const pages = ["", "/internships", "/projects", "/publications", "/animations", "/animations/imagelayer", "/typography", "/space"];

export default async function sitemap() {
  const projects = await getAcademicProjects();
  return [
    ...pages.map((path) => ({ url: `${siteUrl}${path}` })),
    ...projects.map(({ slug }) => ({ url: `${siteUrl}/projects/${slug}` })),
  ];
}
