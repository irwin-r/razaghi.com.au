import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Karla&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
  
  html, body {
    background-color: ${({ theme }) => theme.background.application};
    color: #f3f3f3;
    font-family: 'Karla', sans-serif;
    -webkit-font-smoothing: subpixel-antialiased;
    overflow: hidden;
  }
`;
