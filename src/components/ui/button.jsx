// src/components/ui/Button.jsx
import React from "react";
import clsx from "clsx";

const Button = ({ variant = "primary", children, className, ...props }) => {
  const baseStyles = "px-6 py-2 rounded-md font-medium text-sm transition";
  const variants = {
    primary: "bg-gradient-to-r from-cyan-600 to-teal-600 text-white hover:bg-[#007d98]",
    secondary: "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
