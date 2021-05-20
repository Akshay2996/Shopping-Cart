import React from 'react';
import './Button.scss';

export default function Button({button, className = "", id = "", handleProduct = ""}) {
    return (
            <button className={`${className} button-wrapper`} onClick={() => handleProduct(id)}>{button}</button>
    )
}
