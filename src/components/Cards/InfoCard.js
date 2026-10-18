import Image from "next/image";
import Link from "next/link";
import * as styles from "../../style/internships.module.css";

// Card used on the internships and academic projects pages
function InfoCard({ title, info, image, link }) {
  return (
    <div className={styles.cardContainer}>
      {image && (
        <div className={styles.cardImg}>
          <div className={styles.Img}>
            <Image
              {...image}
              alt={title}
              sizes="(min-width: 768px) 50vw, 100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      )}

      <div className={styles.cardInfo}>
        <h2 style={{ color: "#e94f37", textAlign: "center" }}>{title}</h2>
        <p className={styles.info}>{info}</p>
        {link && (
          <Link className={styles.link} href={link}>
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
}

export default InfoCard;
