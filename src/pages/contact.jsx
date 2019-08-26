import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";

import ContactText from "../components/ContactText";
import Layout from "../components/Layout";

const SecondPage = () => (
  <Layout>
    <ContactText>
      <p>
        Hey there!{" "}
        <span aria-label="Wave" role="img">
          👋
        </span>
      </p>
      <p>
        I&apos;m always keen to connect with new people, so if you&apos;d like to get in touch, feel
        free to email me at <a href="mailto:irwin@razaghi.com.au">irwin@razaghi.com.au</a>.
      </p>
      <p>
        Alternatively, you can give me a call on <a href="tel:+61419039382">+61 419 039 382</a>.
      </p>
      <AniLink fade to="/">let's talk?</AniLink>
    </ContactText>
  </Layout>
);

export default SecondPage;
