import React, { useState } from "react";
import "./Dropdown.scss";
import Button from "../../atoms/Button/Button";

export default function Dropdown({ filteredCategory, handleProduct }) {
  const [isActive, setIsActive] = useState(true);

  const handleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="dropdown">
      <Button
        onClick={() => handleDropdown()}
        className="dropdown__button"
        button={`All Products ▼`}
      />
      <ul className="dropdown__content">
        {filteredCategory.map((category) => (
          <li
            onClick={() => {
              handleDropdown();
              handleProduct(category.id);
            }}
            key={category.id}
            className={`${
              isActive
                ? "dropdown__content__list"
                : "dropdown__content__list show"
            }`}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
