import Link from "next/link";
import Providers from "@/components/Layout/Providers";
import Page from "@/components/Layout/Page";
import { siteMetadata } from "@/lib/metadata";
import * as styles from "@/style/notfound.module.css";

export const metadata = { ...siteMetadata, title: "Page not found" };

export default function NotFound() {
  return (
    <Providers>
      <div className={styles.page}>
        <Page darkNav addPadd>
          <div className={styles.container}>
            <h1 className={styles.code}>404</h1>
            <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
            <Link className={styles.home} href="/">
              Take me home
            </Link>
          </div>
        </Page>
      </div>
    </Providers>
  );
}
