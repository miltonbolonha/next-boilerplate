import React from "react";

const HeadingBlock = ({ width, Heading }) => {
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
      <Heading />
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
