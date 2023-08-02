import React from "react";

const HeadingBlock = ({
  importance = 6,
  children,
  classes = "",
  width,
  ribbon = true,
}) => {
  const WrapperHR = props => {
    return (
      <div className='wrapper-hr'>
        <div
          className='inner-hr left-hr'
          style={{
            maxWidth: `${props.width}px`,
          }}
        >
          <span className='ht-top'></span>
        </div>
        {props.children}
        <div
          className='inner-hr right-hr'
          style={{
            maxWidth: `${props.width}px`,
          }}
        >
          <span className='ht-top'></span>
        </div>
      </div>
    );
  };

  function Heading(props) {
    switch (importance) {
      case 6:
        return (
          <h5 className={"boilerplate-heading " + classes}>{props.children}</h5>
        );
      case 7:
        return (
          <h4 className={"boilerplate-heading " + classes}>{props.children}</h4>
        );
      case 8:
        return (
          <h3 className={"boilerplate-heading " + classes}>{props.children}</h3>
        );
      case 9:
        return (
          <h2 className={"boilerplate-heading " + classes}>{props.children}</h2>
        );
      default:
        return (
          <h1 className={"boilerplate-heading " + classes}>{props.children}</h1>
        );
    }
  }
  if (!ribbon) {
    return <Heading>{children}</Heading>;
  } else {
    return (
      <WrapperHR width={width}>
        <Heading>{children}</Heading>
      </WrapperHR>
    );
  }
};

export default HeadingBlock;
