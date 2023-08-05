import React from "react";

const HeadingBlock = ({ children, width }) => {
  return (
    <div className='wrapper-hr'>
      <div
        className='inner-hr left-hr'
        style={{
          maxWidth: `${width}px`,
        }}
      >
        <span className='ht-top'></span>
      </div>
      {children}
      <div
        className='inner-hr right-hr'
        style={{
          maxWidth: `${width}px`,
        }}
      >
        <span className='ht-top'></span>
      </div>
    </div>
  );
};

export default HeadingBlock;
