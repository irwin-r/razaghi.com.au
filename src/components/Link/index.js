import styled from "styled-components";

import AniLink from "../AniLink";

export default styled(AniLink)`
  color: white;
  border-bottom: 1px solid rgba(243, 243, 243, 0.1);
  box-shadow: 0px -4px 0px rgba(243, 243, 243, 0.1) inset;
  text-decoration: none;
  padding: 0 0.2rem;

  &:hover {
    box-shadow: 0 100px 0 rgba(243, 243, 243, 0.1) inset;
  }

  &:visited {
    color: white;
  }
`;
