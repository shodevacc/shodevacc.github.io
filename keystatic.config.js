import { config, collection, singleton, fields } from "@keystatic/core";

// Local storage in development (edits write straight to files in this repo).
// In production the admin commits to GitHub instead. See README for setup.
const storage =
  process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE === "github"
    ? { kind: "github", repo: "shodevacc/shodevacc.github.io" }
    : { kind: "local" };

const image = (dir, label = "Image") =>
  fields.image({
    label,
    directory: `public/images/${dir}`,
    publicPath: `/images/${dir}/`,
  });

const order = fields.integer({
  label: "Order",
  description: "Lower numbers show first",
  defaultValue: 0,
});

export default config({
  storage,
  ui: {
    brand: { name: "Shoaib Alyaan" },
    navigation: {
      Site: ["site"],
      Work: ["projects", "academicProjects", "internships", "publications"],
    },
  },
  singletons: {
    site: singleton({
      label: "Site info",
      path: "content/site",
      schema: {
        intro: fields.text({
          label: "Intro",
          description: "Shown under “I'm Shoaib.” on the landing section",
          multiline: true,
        }),
        languages: fields.array(fields.text({ label: "Language" }), {
          label: "Languages",
          itemLabel: (props) => props.value,
        }),
        software: fields.array(fields.text({ label: "Software" }), {
          label: "Software",
          itemLabel: (props) => props.value,
        }),
        email: fields.text({ label: "Email" }),
        linkedin: fields.url({ label: "LinkedIn URL" }),
        github: fields.url({ label: "GitHub URL" }),
        resume: fields.file({
          label: "Resume (PDF)",
          directory: "public",
          publicPath: "/",
        }),
      },
    }),
  },
  collections: {
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "content/projects/*",
      columns: ["title", "order"],
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description", multiline: true }),
        image: image("projects"),
        roundImage: fields.checkbox({ label: "Show image as a circle" }),
        github: fields.url({ label: "Repository URL" }),
        link: fields.url({ label: "Live site URL" }),
        order,
      },
    }),
    academicProjects: collection({
      label: "Academic projects",
      slugField: "title",
      path: "content/academic-projects/*",
      columns: ["title", "order"],
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        summary: fields.text({ label: "Summary", multiline: true }),
        image: image("academic-projects"),
        order,
      },
    }),
    internships: collection({
      label: "Internships",
      slugField: "title",
      path: "content/internships/*",
      columns: ["title", "period"],
      schema: {
        title: fields.slug({ name: { label: "Organisation" } }),
        period: fields.text({ label: "Period", description: "e.g. July–August 2019" }),
        description: fields.text({ label: "Description", multiline: true }),
        image: image("internships", "Logo"),
        order,
      },
    }),
    publications: collection({
      label: "Publications",
      slugField: "title",
      path: "content/publications/*",
      columns: ["title"],
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        link: fields.url({ label: "Link" }),
        abstract: fields.text({ label: "Abstract", multiline: true }),
        order,
      },
    }),
  },
});
