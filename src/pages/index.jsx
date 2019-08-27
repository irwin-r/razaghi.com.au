import React from "react";

import Layout from "../components/Layout";
import Link from "../components/Link";
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
    <br />
    <Link to="/contact">let&apos;s talk?</Link>
  </Layout>
);

export default IndexPage;
