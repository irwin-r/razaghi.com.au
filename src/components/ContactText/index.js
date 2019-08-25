import styled from "styled-components";

const ContactText = styled.div`
  & > p {
    font-size: 25px;
    line-height: 49px;

    & > a {
      position: relative;
      z-index: 9999;
      line-height: 0;
      color: rgba(3, 3, 3, 0);
      -webkit-text-stroke: 1px #bbbbbb;
      -webkit-font-smoothing: subpixel-antialiased;
      letter-spacing: 0.6px;
      text-decoration: none;
      transition: all 0.2s linear;
      white-space: pre;

      &:hover {
        color: #bbbbbb;
      }
    }
  }
`;

export default ContactText;
