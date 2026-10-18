import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Shoaib Alyaan Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDir = join(process.cwd(), "node_modules/@fontsource/poppins/files");
const [extraBold, medium] = await Promise.all([
  readFile(join(fontDir, "poppins-latin-800-normal.woff")),
  readFile(join(fontDir, "poppins-latin-500-normal.woff")),
]);

// Link preview image shared by every page on the site
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f6f7eb",
          fontFamily: "Poppins",
        }}
      >
        <div style={{ width: "50%", height: "100%", background: "#e94f37" }} />
        <div style={{ width: "50%", height: "100%", background: "#393e41" }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 120, fontWeight: 800, color: "#fff", textShadow: "6px 6px #000" }}>
            Shoaib Alyaan
          </div>
          <div style={{ fontSize: 40, fontWeight: 500, color: "#f6f7eb", marginTop: 10 }}>
            Projects · Research · Contact
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Poppins", data: extraBold, weight: 800, style: "normal" },
        { name: "Poppins", data: medium, weight: 500, style: "normal" },
      ],
    }
  );
}
