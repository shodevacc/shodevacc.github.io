import React from "react";
import Landing from "../components/Landing";
import About from "../components/About";
import Academic from "../components/Academic";
import Cv from "../components/Cv";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Float from "../components/Float";
import Three from "../components/Three";
import Typography from '../components/Sections/Typography'
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
    <Typography/>
    <Float/>
    <Three />
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
