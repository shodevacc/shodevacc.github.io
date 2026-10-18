import Page from "@/components/Layout/Page";
import PublicationList from "@/components/PublicationList";
import { getPublications } from "@/lib/content";

export const metadata = { title: "Publications" };

export default async function PublicationsPage() {
  const publications = await getPublications();
  return (
    <Page addPadd darkNav>
      <PublicationList publications={publications} />
    </Page>
  );
}
