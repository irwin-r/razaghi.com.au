import styled from "styled-components";
import { LAYOUT_FADE_IN_TIME } from "./Layout/constants";

export const MainWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 87.5vh;
  justify-content: center;
  width: 100vw;

  & > main {
    min-width: 300px;
    max-width: 600px;
    opacity: ${({ show }) => (show ? 1 : 0)};
    transition: opacity ${LAYOUT_FADE_IN_TIME}ms ease-in-out;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  min-width: 270px;
  max-width: 540px;
  padding: 0 1.0875rem 0;
`;
