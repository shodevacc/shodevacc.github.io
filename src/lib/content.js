import path from "node:path";
import { readFileSync } from "node:fs";
import { createReader } from "@keystatic/core/reader";
import { imageSize } from "image-size";
import keystaticConfig from "../../keystatic.config";

const reader = createReader(process.cwd(), keystaticConfig);

// next/image needs real dimensions for images that live in /public
export function withSize(src) {
  if (!src) return null;
  const { width, height } = imageSize(
    readFileSync(path.join(process.cwd(), "public", src))
  );
  return { src, width, height };
}

const byOrder = (a, b) => a.entry.order - b.entry.order;

async function list(collection) {
  const entries = await reader.collections[collection].all();
  return entries.sort(byOrder).map(({ slug, entry }) => ({
    slug,
    ...entry,
    image: "image" in entry ? withSize(entry.image) : undefined,
  }));
}

export const getSite = () => reader.singletons.site.readOrThrow();
export const getProjects = () => list("projects");
export const getAcademicProjects = () => list("academicProjects");
export const getInternships = () => list("internships");
export const getPublications = () => list("publications");

export const getAcademicProject = async (slug) => {
  const entry = await reader.collections.academicProjects.read(slug, {
    resolveLinkedFiles: true,
  });
  return entry && { slug, ...entry };
};
