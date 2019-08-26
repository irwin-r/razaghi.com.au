import styled from "styled-components";

const BOTTOM_MARGIN = "20px";

export const FooterContainer = styled.footer`
  // Affix to the bottom of the window
  bottom: 0;
  position: fixed;
  margin-bottom: ${BOTTOM_MARGIN};

  font-family: "SourceSansPro", monospace;
  text-align: center;

  width: 100%;
`;

export const FooterLinksContainer = styled.div`
  margin-bottom: ${BOTTOM_MARGIN};

  & > a {
    color: white;
    margin: 5px;
    opacity: 0.5;
    transition: opacity 250ms ease-in-out;

    &:hover {
      opacity: 1;
    }

    & > svg {
      max-width: 0.875em;
    }
  }
`;

export const FooterText = styled.div`
  font-size: 0.75rem;
`;
