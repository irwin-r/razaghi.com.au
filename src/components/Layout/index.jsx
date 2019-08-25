import "normalize.css/normalize.css";

import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import React from "react";

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
        <Footer />
      </MainWrapper>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
