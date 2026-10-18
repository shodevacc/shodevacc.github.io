import Providers from "@/components/Layout/Providers";
import { siteMetadata } from "@/lib/metadata";
import "@/style/global.css";

export const metadata = siteMetadata;

export default function SiteLayout({ children }) {
  return <Providers>{children}</Providers>;
}
