import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";

import { FontAwesomeIconPropShape } from "../../utils/propTypes";

import { FOOTER_LINKS } from "./constants";
import { FooterContainer, FooterLinksContainer, FooterText } from "./styles";
import { getCopyrightYears } from "./utils";

const FooterLink = ({ icon, title, url }) => (
  <a href={url} key={title} rel="noopener noreferrer" target="_blank" title={title}>
    <FontAwesomeIcon icon={icon} width="16" />
  </a>
);

FooterLink.propTypes = {
  icon: FontAwesomeIconPropShape.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const FooterLinks = () => (
  <FooterLinksContainer>{FOOTER_LINKS.map(FooterLink)}</FooterLinksContainer>
);

const Footer = () => (
  <FooterContainer>
    <FooterLinks />
    <FooterText>Copyright © {getCopyrightYears()}</FooterText>
  </FooterContainer>
);

export default Footer;
