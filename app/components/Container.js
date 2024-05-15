import React from "react";

function Container({ className, children, style, bgImg }) {
  return (
    <div
      className={`w-full h-full ${className}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {children}
    </div>
  );
}

export default Container;
