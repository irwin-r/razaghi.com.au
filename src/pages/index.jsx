import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";

import Layout from "../components/Layout";
import Taglines from "../components/Tagline";

const TAGLINES = ["full stack engineer", "lasagna enthusiast"];

const IndexPage = () => (
  <Layout>
    <h1 style={{ fontSize: "36px", lineHeight: "49px", marginBlockStart: 0 }}>Irwin Razaghi</h1>
    <Taglines lines={TAGLINES} />
    <br />
    <AniLink fade to="/contact">let's talk?</AniLink>
  </Layout>
);

export default IndexPage;
