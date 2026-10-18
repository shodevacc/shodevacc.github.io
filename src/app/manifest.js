export default function manifest() {
  return {
    name: "Shoaib Alyaan Portfolio",
    short_name: "Shoaib Alyaan",
    description:
      "Shoaib Alyaan's academic work, projects, work experience, resume and contact information",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f7eb",
    theme_color: "#e94f37",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
