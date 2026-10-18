import Page from "@/components/Layout/Page";
import MainLayout from "@/components/MainLayout";
import Landing from "@/components/Sections/Landing";
import Academic from "@/components/Sections/Academic";
import Projects from "@/components/Sections/Projects";
import Frontend from "@/components/Sections/Frontend";
import Cv from "@/components/Sections/Cv";
import Contact from "@/components/Sections/Contact";
import Float from "@/components/Float";
import { getSite, getProjects } from "@/lib/content";

export default async function HomePage() {
  const [site, projects] = await Promise.all([getSite(), getProjects()]);
  return (
    <Page>
      <MainLayout>
        <Landing site={site} />
        <Float />
        <Academic />
        <Float />
        <Projects projects={projects} />
        <Float />
        <Frontend />
        <Float />
        <Cv resume={site.resume} />
        <Float />
        <Contact site={site} />
      </MainLayout>
    </Page>
  );
}
