import React from "react";

const OverlayBlock = ({ hide }) => {
  return (
    <div
      className='overlay-block'
      style={{ display: hide ? "none" : "block" }}
    ></div>
  );
};

export default OverlayBlock;
