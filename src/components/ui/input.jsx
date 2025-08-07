import React from "react";

const InputField = ({
  type = "text",
  name,
  label,
  placeholder,
  icon,
  value,
  onChange,
}) => {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label
          htmlFor={name}
          className="text-left text-sm font-medium text-white/80"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full bg-transparent border border-white/10 text-white text-sm rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
            icon ? "pl-10" : ""
          }`}
          required
        />
      </div>
    </div>
  );
};

export default InputField;
