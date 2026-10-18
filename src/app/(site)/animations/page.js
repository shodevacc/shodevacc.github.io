import Page from "@/components/Layout/Page";
import InfoCard from "@/components/Cards/InfoCard";
import * as styles from "@/style/internships.module.css";

export const metadata = { title: "Animations" };

export default function AnimationsPage() {
  return (
    <Page darkNav>
      <div className={styles.MainContainer}>
        <div className={styles.header}>
          <h2 className={styles.headText}>Animations</h2>
        </div>

        <div
          style={{ backgroundColor: "#393e41" }}
          className={styles.ContentContainer}
        >
          <InfoCard
            title="Rapid Image Layers"
            info="Rapid Image layer intro animation"
            link="/animations/imagelayer"
          />
        </div>
      </div>
    </Page>
  );
}
