import React, { useState } from "react";
import "./Form.scss";
import Button from "../../atoms/Button/Button";
import Inputbox from "../../atoms/Inputbox/Inputbox";

export default function Form({ className = "", inputLabel, button }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={`${className} form`} onSubmit={handleSubmit}>
      {inputLabel.map((input) => (
        <Inputbox
          key={input.inputId}
          type={input.type}
          placeholder={input.placeholder}
          inputId={input.inputId}
        />
      ))}
      <Button className={"form__login-button"}>{button}</Button>
    </form>
  );
}
