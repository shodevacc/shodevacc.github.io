import React from "react";
import Markdoc from "@markdoc/markdoc";
import { fields } from "@keystatic/core";
import { projectBodyComponents } from "../../../keystatic.config";
import { withSize } from "@/lib/content";
import Image from "next/image";
import * as styles from "./ProjectBody.module.css";

const markdocConfig = fields.markdoc.createMarkdocConfig({
  components: projectBodyComponents,
  render: {
    tags: {
      figure: "Figure",
      video: "Video",
      columns: "Columns",
      column: "Column",
      linkButtons: "LinkButtons",
    },
  },
});

function Figure({ image, caption, narrow }) {
  if (!image) return null;
  return (
    <figure className={narrow ? `${styles.figure} ${styles.narrow}` : styles.figure}>
      <Image
        {...withSize(image)}
        alt={caption || ""}
        unoptimized={image.endsWith(".gif")}
        sizes={narrow ? "500px" : "(min-width: 768px) 80vw, 100vw"}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function Video({ webm, mp4 }) {
  return (
    <video className={styles.video} autoPlay loop muted playsInline>
      {webm && <source src={webm} type="video/webm" />}
      {mp4 && <source src={mp4} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
}

const Columns = ({ children }) => <div className={styles.columns}>{children}</div>;
const Column = ({ children }) => <div>{children}</div>;
const LinkButtons = ({ children }) => <div className={styles.linkButtons}>{children}</div>;

// Renders an academic project's write-up from its Markdoc content
function ProjectBody({ node }) {
  const content = Markdoc.transform(node, markdocConfig);
  return (
    <div className={styles.body}>
      {Markdoc.renderers.react(content, React, {
        components: { Figure, Video, Columns, Column, LinkButtons },
      })}
    </div>
  );
}

export default ProjectBody;
