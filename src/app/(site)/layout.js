import { Poppins } from "next/font/google";
import Providers from "@/components/Layout/Providers";
import "@/style/global.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    default: "Shoaib Alyaan Portfolio",
    template: "%s | Shoaib Alyaan Portfolio",
  },
  description:
    "A website about Shoaib Alyaan. It includes his academic work, other projects, work experience information, resume, and contact information",
  icons: { icon: "/icon.png" },
  openGraph: { type: "website" },
  twitter: { card: "summary", creator: "@shoaibalyaan" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
