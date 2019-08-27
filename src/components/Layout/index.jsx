import "normalize.css/normalize.css";

import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import React from "react";
import { TransitionPortal } from "gatsby-plugin-transition-link";

import Footer from "../Footer";
import { MainWrapper } from "../layoutComponents";
import { baseTheme } from "../../themes";

import { GlobalStyle } from "./globalStyle";

const Layout = ({ children }) => (
  <ThemeProvider theme={baseTheme}>
    <>
      <GlobalStyle />
      <MainWrapper>
        <main>{children}</main>
        <TransitionPortal>
          <Footer />
        </TransitionPortal>
      </MainWrapper>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
