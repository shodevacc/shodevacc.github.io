import React from "react";
import Landing from "../components/Sections/Landing";
import About from "../components/Sections/About";
import Academic from "../components/Sections/Academic";
import Cv from "../components/Sections/Cv";
import Contact from "../components/Sections/Contact";
import Projects from "../components/Sections/Projects";
import Float from "../components/Float";
import Frontend from '../components/Sections/Frontend'
import { Link } from "gatsby";

import MainLayout from "../components/MainLayout";
import Image from "../components/image";
import SEO from "../components/seo";
import * as styles from "../style/index.module.css";

const IndexPage = () => (
  <MainLayout>
    <SEO title="Shoaib Alyaan Portfolio Home" />
    <Landing />
    <About />
    <Float />
    <Academic />
    <Float />
    <Projects />
    <Float />
    <Frontend/>
    <Float />
    <Cv />
    <Float />
    <Contact />
  </MainLayout>
  // <Layout>
  //   <SEO title="Home" />
  //   <Landing/>
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link> <br />
  //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  // </Layout>
);

export default IndexPage;
