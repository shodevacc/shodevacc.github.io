import { notFound } from "next/navigation";
import Page from "@/components/Layout/Page";
import ProjectBody from "@/components/ProjectBody";
import { getAcademicProject, getAcademicProjects } from "@/lib/content";
import * as styles from "@/style/projects/project.module.css";

export const dynamicParams = false;

export async function generateStaticParams() {
  const projects = await getAcademicProjects();
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getAcademicProject(slug);
  return { title: project?.title, description: project?.summary };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await getAcademicProject(slug);
  if (!project) notFound();

  return (
    <Page darkNav addPadd>
      <article className={styles.container}>
        <h2>{project.title}</h2>
        <ProjectBody node={project.body.node} />
      </article>
    </Page>
  );
}
