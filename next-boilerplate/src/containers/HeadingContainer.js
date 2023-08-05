import React from "react";
import HeadingBlock from "../components/HeadingBlock";
const HeadingContainer = ({
  importance = 6,
  children,
  classes = "",
  width,
}) => {
  function Heading(classes, children) {
    if (importance === 6) {
      return `<h5 className="boilerplate-heading " + ${classes} dangerouslySetInnerHTML=${children} />`;
    }
    if (importance === 7) {
      return `<h4 className="boilerplate-heading " + ${classes} dangerouslySetInnerHTML=${children} />`;
    }
    if (importance === 8) {
      return `<h3 className="boilerplate-heading " + ${classes} dangerouslySetInnerHTML=${children} />`;
    }
    if (importance === 9) {
      return `<h2 className="boilerplate-heading " + ${classes} dangerouslySetInnerHTML=${children} />`;
    }
    if (importance === 10) {
      return `<h1 className="boilerplate-heading " + ${classes} dangerouslySetInnerHTML=${children} />`;
    }
  }
  return (
    <HeadingBlock>
      <Heading classes={classes} children={children} width={width} />
    </HeadingBlock>
  );
};

export default HeadingContainer;
