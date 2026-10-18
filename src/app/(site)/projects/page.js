import Page from "@/components/Layout/Page";
import InfoCard from "@/components/Cards/InfoCard";
import { getAcademicProjects } from "@/lib/content";
import * as styles from "@/style/internships.module.css";

export const metadata = { title: "Academic Projects" };

export default async function ProjectsPage() {
  const projects = await getAcademicProjects();
  return (
    <Page addPadd darkNav>
      <div className={styles.header}>
        <h2 className={styles.headText}>Academic-Projects</h2>
      </div>

      <div
        style={{ backgroundColor: "#393e41" }}
        className={styles.ContentContainer}
      >
        {projects.map((project) => (
          <InfoCard
            key={project.slug}
            title={project.title}
            image={project.image}
            info={project.summary}
            link={`/projects/${project.slug}`}
          />
        ))}
      </div>
    </Page>
  );
}
