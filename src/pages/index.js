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

import Page from '../components/Layout/Page'

const IndexPage = () => (
  <Page title="Shoaib Alyaan Portfolio Home" >
    <MainLayout>
      <Landing />
      {/* <About /> */}
      <Float />
      <Academic />
      <Float />
      <Projects />
      <Float />
      <Frontend />
      <Float />
      <Cv />
      <Float />
      <Contact />
    </MainLayout>
  </Page>
);

export default IndexPage;
