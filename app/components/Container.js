import React from "react";

function Container({ className, children, style, bgImg }) {
  return (
    <div
      className={`w-full h-full bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${bgImg})`,...style }}
    >
      {children}
    </div>
  );
}

export default Container;
