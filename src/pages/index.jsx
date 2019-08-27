import React from "react";

import AniLink from "../components/AniLink";
import Layout from "../components/Layout";
import Taglines from "../components/Tagline";

const TAGLINES = [
  "full stack developer",
  "typescript enthusiast",
  "cloud technology nerd",
  "incredibly funny guy",
  "not actually that funny",
];

const IndexPage = () => (
  <Layout>
    <h1
      style={{
        fontSize: "36px",
        lineHeight: "49px",
        marginBlockStart: 0,
        marginBlockEnd: "0.5rem",
      }}
    >
      Irwin Razaghi
    </h1>
    <Taglines lines={TAGLINES} />
    <br />
    <AniLink swipe direction="up" to="/contact">
      let&apos;s talk?
    </AniLink>
  </Layout>
);

export default IndexPage;
