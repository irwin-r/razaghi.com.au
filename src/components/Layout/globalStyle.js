import { createGlobalStyle } from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => theme.background.application};
    color: #f3f3f3;
    font-family: 'Karla', sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
    overflow: hidden;
  }
`;
