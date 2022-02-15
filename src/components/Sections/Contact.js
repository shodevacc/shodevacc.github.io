import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Section from "../Section";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "../../style/contact.module.css";

function Contact() {
  const data = useStaticQuery(graphql`
    {
      Logo: file(relativePath: { eq: "Logo.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  // console.log(data.Logo.childImageSharp.fluid)
  return (
    <Section
      title="Contact"
      contentContainerStyle={{ backgroundColor: "#393e41" }}
    >
      <div className={styles.container}>
        <GatsbyImage
          image={data.Logo.childImageSharp.gatsbyImageData}
          className={styles.logo}
          alt="Shoaib Alyaan"
        />

        <div className={styles.cards}>
          <a
            target="_blank"
            id="ContCard"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/shoaib-alyaan-355861184/"
            className={styles.contactCard}
          >
            <img
              id="in"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBGcmVlIDUuMTUuMSBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSAtLT48cGF0aCBkPSJNNDE2IDMySDMxLjlDMTQuMyAzMiAwIDQ2LjUgMCA2NC4zdjM4My40QzAgNDY1LjUgMTQuMyA0ODAgMzEuOSA0ODBINDE2YzE3LjYgMCAzMi0xNC41IDMyLTMyLjNWNjQuM2MwLTE3LjgtMTQuNC0zMi4zLTMyLTMyLjN6TTEzNS40IDQxNkg2OVYyMDIuMmg2Ni41VjQxNnptLTMzLjItMjQzYy0yMS4zIDAtMzguNS0xNy4zLTM4LjUtMzguNVM4MC45IDk2IDEwMi4yIDk2YzIxLjIgMCAzOC41IDE3LjMgMzguNSAzOC41IDAgMjEuMy0xNy4yIDM4LjUtMzguNSAzOC41em0yODIuMSAyNDNoLTY2LjRWMzEyYzAtMjQuOC0uNS01Ni43LTM0LjUtNTYuNy0zNC42IDAtMzkuOSAyNy0zOS45IDU0LjlWNDE2aC02Ni40VjIwMi4yaDYzLjd2MjkuMmguOWM4LjktMTYuOCAzMC42LTM0LjUgNjIuOS0zNC41IDY3LjIgMCA3OS43IDQ0LjMgNzkuNyAxMDEuOVY0MTZ6Ii8+PC9zdmc+"
            />
            <p>LinkedIn.</p>
          </a>
          <a
            id="ContCard"
            className={styles.contactCard}
            href="mailto:shodevacc@gmail.com"
          >
            <img
              id="contactIcon"
              src="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJlbnZlbG9wZSIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWVudmVsb3BlIGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNTAyLjMgMTkwLjhjMy45LTMuMSA5LjctLjIgOS43IDQuN1Y0MDBjMCAyNi41LTIxLjUgNDgtNDggNDhINDhjLTI2LjUgMC00OC0yMS41LTQ4LTQ4VjE5NS42YzAtNSA1LjctNy44IDkuNy00LjcgMjIuNCAxNy40IDUyLjEgMzkuNSAxNTQuMSAxMTMuNiAyMS4xIDE1LjQgNTYuNyA0Ny44IDkyLjIgNDcuNiAzNS43LjMgNzItMzIuOCA5Mi4zLTQ3LjYgMTAyLTc0LjEgMTMxLjYtOTYuMyAxNTQtMTEzLjd6TTI1NiAzMjBjMjMuMi40IDU2LjYtMjkuMiA3My40LTQxLjQgMTMyLjctOTYuMyAxNDIuOC0xMDQuNyAxNzMuNC0xMjguNyA1LjgtNC41IDkuMi0xMS41IDkuMi0xOC45di0xOWMwLTI2LjUtMjEuNS00OC00OC00OEg0OEMyMS41IDY0IDAgODUuNSAwIDExMnYxOWMwIDcuNCAzLjQgMTQuMyA5LjIgMTguOSAzMC42IDIzLjkgNDAuNyAzMi40IDE3My40IDEyOC43IDE2LjggMTIuMiA1MC4yIDQxLjggNzMuNCA0MS40eiI+PC9wYXRoPjwvc3ZnPg=="
            />
            <p>shodevacc@gmail.com</p>
          </a>
        </div>
      </div>
      <p style={{ color: "#f6f7eb" }}>
        Design Inspiration:
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#e94f37" }}
          href="https://tobiasahlin.com/"
        >
          {" "}
          Tobias Ahlin Bjerrome
        </a>
      </p>
    </Section>
  );
}

export default Contact;
