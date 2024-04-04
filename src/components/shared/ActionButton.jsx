import React from "react";

const ActionButton = ({ children, className, variant, padding }) => {
  return (
    <button
      className={`${className} max-w-[386px] min-h-[40px] rounded-[6px] ${
        padding ? padding : "px-3 lg:px-8"
      } py-2 border ${
        variant === "primary"
          ? "bg-primaryColor text-white text-[14px] leading-[24px]"
          : "bg-white text-primaryColor min-w-[181px] text-[14px] leading-[20px]"
      }`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
