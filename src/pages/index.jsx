import React from "react";
import Typist from "react-typist";

import "react-typist/dist/Typist.css";

import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <h1 style={{ fontSize: "36px", lineHeight: "49px", marginBlockStart: 0 }}>Irwin Razaghi</h1>
    <Typist>
      <span style={{ fontFamily: "SourceSansPro, monospace", fontSize: "14px" }}>
        full stack software engineer.
      </span>
    </Typist>
  </Layout>
);

export default IndexPage;
