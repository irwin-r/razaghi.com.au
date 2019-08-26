import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Typist from "react-typist";

import "react-typist/dist/Typist.css";

import { Tagline } from "./styles";

function Taglines({ lines }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setTimeout(() => setCount(1), 1000);
  }, [count]);

  if (!count) {
    return (
      <div className="Typist">
        <span style={{ height: 18 }}>&nbsp;</span>
      </div>
    );
  }

  return (
    <Typist onTypingDone={() => setCount(0)}>
      {lines.map((line, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Tagline key={`tagline-${index}`}>
          {line}
          <Typist.Backspace count={line.length} delay={1000} />
        </Tagline>
      ))}
    </Typist>
  );
}

Taglines.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Taglines;
