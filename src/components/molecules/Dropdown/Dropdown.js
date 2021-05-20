import React, { useState } from 'react';
import './Dropdown.scss';
import Button from '../../atoms/Button/Button';

export default function Dropdown({ filteredCategory, handleProduct }) {
    const [isActive, setIsActive] = useState(true);

    const handleDropdown = () => {
        setIsActive(!isActive);
    }

    return (
        <aside className="dropdown">
            <Button onClick={() => handleDropdown()} className="dropdown__button" button={`Dropdown ▼`} />
            <ul>
                {filteredCategory.map((category) => (
                    <li onClick={() => handleProduct(category.id)} key={category.id} className={`${isActive ? "dropdown__content" : "dropdown__content show"}`}>{category.name}</li>
                ))}
            </ul>
        </aside>
    )
}
