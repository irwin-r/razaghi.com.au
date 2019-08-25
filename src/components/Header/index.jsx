import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { Container } from "../layoutComponents";

import { HeaderContainer } from "./styles";

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Container>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Container>
  </HeaderContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
