import styled from "styled-components";

export const MainWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  & > main {
    min-width: 300px;
    max-width: 600px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  min-width: 270px;
  max-width: 540px;
  padding: 0 1.0875rem 0;
`;
