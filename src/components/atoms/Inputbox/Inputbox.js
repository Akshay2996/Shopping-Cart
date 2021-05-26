import React from "react";
import "./Inputbox.scss";
export default function Inputbox({ type, placeholder, inputId }) {
  return (
    <>
      <input
        type={type}
        className="floating-input"
        id={inputId}
        placeholder={placeholder}
        required
      />
      <label htmlFor={inputId} className="floating-label">
        {placeholder}
      </label>
    </>
  );
}
