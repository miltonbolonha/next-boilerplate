import React from "react";

export const Row = ({ opt, children, content }) => {
  const rowWidth = opt.isBoxed ? "boxed-column" : "full-width-row";
  const alignTo = opt.alignTo ? `align-to-${opt.alignTo}` : "";
  const templateColumns = `repeat(${opt.numColumns || "1"}, ${
    opt.widthColumns || "1fr"
  })`;
  const bgParent = opt.bgColor && opt.isBoxed === false ? opt.bgColor : null;
  const bgChild = opt.bgColor && opt.isBoxed === true ? opt.bgColor : null;
  const styleHelper = {
    backgroundColor: !opt.bgImg && bgChild ? bgChild : null,
    display: "grid",
    gridTemplateColumns: templateColumns,
    background: opt.bgImg ? `url(${opt.bgImg}) repeat` : null,
  };
  return (
    <div
      className={`${rowWidth} ${opt.classes} ${alignTo} responsive-padding`}
      style={{
        backgroundColor: bgParent,
      }}
    >
      {content ? (
        <div
          className={rowWidth + "-child " + opt.classes}
          role={opt.role || null}
          style={styleHelper}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      ) : (
        <div
          className={rowWidth + "-child " + opt.classes}
          role={opt.role || null}
          style={styleHelper}
        >
          {children}
        </div>
      )}
    </div>
  );
};
