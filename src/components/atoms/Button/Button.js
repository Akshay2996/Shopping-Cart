import React from "react";
import "./Button.scss";

export default function Button({ children, className = "", onClick }) {
  return (
    <button className={`${className} button-wrapper`} onClick={onClick}>
      {children}
    </button>
  );
}
