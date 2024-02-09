import React from "react";

const sizeClasses = {
  txtInterBold40: "font-bold font-inter",
  txtSourceSansProRegular20: "font-normal font-sourcesanspro",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular24: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
