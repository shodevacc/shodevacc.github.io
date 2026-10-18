import Page from "@/components/Layout/Page";
import InfoCard from "@/components/Cards/InfoCard";
import { getInternships } from "@/lib/content";
import * as styles from "@/style/internships.module.css";

export const metadata = { title: "Internships" };

export default async function InternshipsPage() {
  const internships = await getInternships();
  return (
    <Page darkNav>
      <div className={styles.MainContainer}>
        <div className={styles.header}>
          <h2 className={styles.headText}>Internships</h2>
        </div>

        <div
          style={{ backgroundColor: "#393e41" }}
          className={styles.ContentContainer}
        >
          {internships.map((internship) => (
            <InfoCard
              key={internship.slug}
              title={`${internship.title} (${internship.period}).`}
              image={internship.image}
              info={internship.description}
            />
          ))}
        </div>
      </div>
    </Page>
  );
}
