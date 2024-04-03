import React from "react";

const ActionButton = ({ children, className, variant }) => {
  return (
    <button
      className={`${className} min-w-[181px] max-w-[386px] min-h-[40px] rounded-[6px] px-10 py-3 border ${
        variant === "primary"
          ? "bg-primaryColor text-white"
          : "bg-white text-primaryColor"
      }`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
