/* eslint-disable */
import { TimelineMax, Power1 } from "gsap";
import TransitionLink from "gatsby-plugin-transition-link";
import React from "react";

const swipeTopDirection = (direction, reverse) => {
  const polarityPos = reverse ? "-" : "+";
  const polarityNeg = reverse ? "+" : "-";

  switch (direction) {
    case "down":
      return { y: `${polarityPos}=100vh`, ease: Power1.easeIn };
    case "up":
      return { y: `${polarityNeg}=100vh`, ease: Power1.easeIn };
    case "left":
      return { x: `${polarityNeg}=100%`, ease: Power1.easeIn };
    default:
      return { x: `${polarityPos}=100%`, ease: Power1.easeIn };
  }
};

const swipeBottomDirection = (direction, reverse = false, offset = 40) => {
  const polarityPos = reverse ? "-" : "";
  const polarityNeg = reverse ? "" : "-";

  switch (direction) {
    case "down":
      return { y: `${polarityNeg}${offset}vh`, ease: Power1.easeIn };
    case "up":
      return { y: `${polarityPos}${offset}vh`, ease: Power1.easeIn };
    case "left":
      return { x: `${polarityPos}${offset}%`, ease: Power1.easeIn };
    default:
      return { x: `${polarityNeg}${offset}%`, ease: Power1.easeIn };
  }
};

const swipe = ({ node, exit, direction, top, triggerName, entryOffset }) => {
  const scrollTop =
    (document.scrollingElement && document.scrollingElement.scrollTop) ||
    document.body.scrollTop ||
    window.pageYOffset;

  if (triggerName === "entry" && top === "entry") {
    return new TimelineMax()
      .set(node, {
        overflowY: "hidden",
        height: "100vh",
        scrollTop,
      })
      .from(node, exit.length, swipeTopDirection(direction, true))
      .set(node, { overflowY: "initial" });
  }
  if (triggerName === "entry") {
    return new TimelineMax().from(
      node,
      exit.length,
      swipeBottomDirection(direction, false, entryOffset),
    );
  }
  if (triggerName === "exit" && top === "exit") {
    return new TimelineMax()
      .set(node, {
        overflowY: "hidden",
        height: "100vh",
        scrollTop,
      })
      .to(node, exit.length, swipeTopDirection(direction))
      .set(node, { overflowY: "initial" });
  }
  return new TimelineMax()
    .set(node, {
      overflowY: "hidden",
      height: "100vh",
      scrollTop,
    })
    .to(node, exit.length, swipeBottomDirection(direction, true, entryOffset))
    .set(node, { overflowY: "initial" });
};

export default function AniLink(props) {
  const direction = "up";
  const top = "exit";
  const exitLength = 0.5;
  const entryLength = exitLength / 3.5;
  const entryOffset = 0;
  const entryZ = top === "entry" ? 1 : 0;
  const exitZ = top === "exit" ? 1 : 0;

  return (
    <TransitionLink
      exit={{
        length: exitLength,
        trigger: ({ node, exit }) =>
          swipe({
            node,
            exit,
            direction,
            top,
            entryOffset,
            triggerName: "exit",
          }),
        zIndex: exitZ,
      }}
      entry={{
        length: entryLength,
        trigger: ({ node, exit }) =>
          swipe({
            node,
            exit,
            direction,
            top,
            entryOffset,
            triggerName: "entry",
          }),
        zIndex: entryZ,
      }}
      {...props}
    >
      {props.children}
    </TransitionLink>
  );
}
/* eslint-enable */
