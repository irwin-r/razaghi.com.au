import "normalize.css/normalize.css";

import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import LoadingBar from "react-top-loading-bar";
import PropTypes from "prop-types";
import React from "react";
import { TransitionPortal } from "gatsby-plugin-transition-link";

import Footer from "../Footer";
import { MainWrapper } from "../layoutComponents";
import { baseTheme } from "../../themes";

import { GlobalStyle } from "./globalStyle";
import { COMPLETE_PROGRESS_BAR_DELAY, SHOW_PROGRESS_BAR_DELAY } from "./constants";

class Layout extends React.PureComponent {
  state = { show: false };

  componentDidMount() {
    this.loadingBar.staticStart(-1);

    setTimeout(() => {
      this.loadingBar.add(20);
    }, SHOW_PROGRESS_BAR_DELAY);

    setTimeout(() => {
      this.loadingBar.complete();
      this.setState({ show: true });
    }, COMPLETE_PROGRESS_BAR_DELAY);
  }

  setLoadingBarRef = ref => {
    this.loadingBar = ref;
  };

  render = () => (
    <ThemeProvider theme={baseTheme}>
      <>
        <Helmet
          defaultTitle="Irwin Razaghi"
          htmlAttributes={{ lang: "en" }}
          titleTemplate="%s - Irwin Razaghi"
        >
          <meta name="description" content="Irwin Razaghi - Full Stack Software Developer" />
        </Helmet>
        <GlobalStyle />
        <MainWrapper show={this.state.show}>
          <TransitionPortal>
            <LoadingBar
              height={3}
              background="#bbbbbb"
              color="#bbbbbb"
              onRef={this.setLoadingBarRef}
            />
          </TransitionPortal>
          <main>{this.props.children}</main>
          <TransitionPortal>
            <Footer />
          </TransitionPortal>
        </MainWrapper>
      </>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
