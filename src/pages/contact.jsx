import { Helmet } from "react-helmet";
import React from "react";

import ContactText from "../components/ContactText";
import Layout from "../components/Layout";
import Link from "../components/Link";

const SecondPage = () => (
  <Layout>
    <Helmet>
      <title>Contact</title>
    </Helmet>
    <ContactText>
      <p>
        Hey there!{" "}
        <span aria-label="Wave" role="img">
          👋
        </span>
      </p>
      <p>
        I&apos;m always keen to connect with new people, so if you&apos;d like to get in touch
        definitely email me at <a href="mailto:irwin@razaghi.com.au">irwin@razaghi.com.au</a>.
      </p>
      <p>
        Alternatively, you can give me a call on <a href="tel:+61419039382">+61 419 039 382</a>.
      </p>
      <Link to="/">back</Link>
    </ContactText>
  </Layout>
);

export default SecondPage;
