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
  rowClass,
}) => (
  <div
    className={`${rowClass} ${classes} ${alignTo} responsive-padding`}
    style={{
      backgroundImage: bgParent,
      backgroundRepeat: "repeat",
      maxWidth: rowWidth || "100%",
    }}
  >
    {content ? (
      <div
        className={rowClass + "-child " + classes}
        role={role || null}
        style={styleHelper}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    ) : (
      <div
        className={rowClass + "-child " + classes}
        role={role || null}
        style={styleHelper}
      >
        {children}
      </div>
    )}
  </div>
);

export default InsertRow;
