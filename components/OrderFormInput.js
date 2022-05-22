import React from "react";

const OrderFormInput = ({
  type,
  value,
  name,
  label,
  desc,
  onChange,
  min,
  max,
  placeholder,
  error,
  errorMessage,
}) => {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="text-xl flex font-semibold cursor-pointer"
      >
        {label} <span className="text-primary ml-1">*</span>
      </label>
      <p className="text-sm mb-4">{desc}</p>
      {error && (
        <p className="absolute top-0 right-0 text-primary">{errorMessage}</p>
      )}
      <input
        className={`border text-dark text-lg rounded-full w-full py-4 px-6 cursor-text transition ${error ? "border-primary" : "border-medium"}`}
        type={type}
        id={name}
        min={min}
        max={max}
        value={value}
        required
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default OrderFormInput;
