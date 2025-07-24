import React from "react";

const InputField = ({ type = "text", name, placeholder, required = false }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 bg-transparent border border-white/10 text-white placeholder:text-white/50 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00B2FF] transition"
    />
  );
};

export default InputField;
