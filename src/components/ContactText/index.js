import styled, { keyframes } from "styled-components";
import { START_TYPING_DELAY } from "../Layout/constants";

const wave = keyframes`
    0% { transform: rotate(  0.0deg) }
   10% { transform: rotate(-10.0deg) }
   20% { transform: rotate( 12.0deg) }
   30% { transform: rotate(-10.0deg) }
   40% { transform: rotate(  9.0deg) }
   50% { transform: rotate(  0.0deg) }
  100% { transform: rotate(  0.0deg) }
`;

const ContactText = styled.div`
  padding: 0 1.5rem;

  & > p {
    font-size: 30px;
    line-height: 45px;

    & > span[aria-label="Wave"] {
      animation-name: ${wave};
      animation-delay: ${START_TYPING_DELAY}ms;
      animation-duration: 2.5s;
      animation-iteration-count: 1;
      transform-origin: 70% 70%;
      display: inline-block;
    }

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
