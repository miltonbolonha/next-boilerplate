import React from "react";
import HeadingBlock from "../components/HeadingBlock";
const HeadingContainer = ({
  importance = 6,
  children,
  classes = "",
  width,
}) => {
  let Heading = null;

  // if (importance === 6) {
  //   Heading = `<h5 className="boilerplate-heading " + ${classes}>${children}</h5>`;
  // }

  // if (importance === 7) {
  //   Heading = `<h4 className="boilerplate-heading " + ${classes}>${children}</h4>`;
  // }
  // if (importance === 8) {
  //   Heading = `<h3 className="boilerplate-heading " + ${classes}>${children}</h3>`;
  // }
  // if (importance === 9) {
  //   Heading = `<h2 className="boilerplate-heading " + ${classes}>${children}</h2>`;
  // }

  // if (importance === 10) {
  //   Heading = `<h1 className="boilerplate-heading " + ${classes}>${children}</h1>`;
  // }

  return (
    <h1
      className={`boilerplate-heading  + ${classes}`}
      dangerouslySetInnerHTML={children}
    />
  );
};

export default HeadingContainer;
