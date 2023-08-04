import React from "react";

const InsertRow = ({
  children,
  content,
  rowWidth,
  classes,
  role,
  styleHelper,
  bgParent,
  alignTo,
}) => (
  <div
    className={`${rowWidth} ${classes} ${alignTo} responsive-padding`}
    style={{
      backgroundColor: bgParent,
    }}
  >
    {content ? (
      <div
        className={rowWidth + "-child " + classes}
        role={role || null}
        style={styleHelper}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    ) : (
      <div
        className={rowWidth + "-child " + classes}
        role={role || null}
        style={styleHelper}
      >
        {children}
      </div>
    )}
  </div>
);

export default InsertRow;
