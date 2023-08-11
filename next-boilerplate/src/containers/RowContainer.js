import React from "react";
import InsertRow from "../components/InsertRow";
const Row = ({ opt, children, content }) => {
  const rowClass = opt.isBoxed ? "boxed-column" : "full-width-row";
  const alignTo = opt.alignTo ? `align-to-${opt.alignTo}` : "";
  const templateColumns = `repeat(${opt.numColumns || "1"}, ${
    opt.widthColumns || "1fr"
  })`;
  const bgParent = opt.bgColor && opt.isBoxed === false ? opt.bgColor : null;
  const bgChild = opt.bgColor && opt.isBoxed === true ? opt.bgColor : null;
  const styleHelper = {
    backgroundImage: opt.bgImg && !opt.bgColor ? `url(${opt.bgImg})` : null,
    backgroundColor: !opt.bgImg && bgChild ? bgChild : null,
    backgroundRepeat: "repeat",
    display: "grid",
    gridTemplateColumns: templateColumns,
  };
  return (
    <InsertRow
      content={content}
      rowClass={rowClass}
      classes={opt.classes}
      role={opt.role}
      styleHelper={styleHelper}
      bgParent={bgParent}
      alignTo={alignTo}
      rowWidth={opt.rowWidth}
    >
      {children}
    </InsertRow>
  );
};

export default Row;
