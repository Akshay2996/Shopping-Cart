import React from 'react';
import './Button.scss';

export default function Button({button, className = "", onClick}) {
    return (
            <button className={`${className} button-wrapper`} onClick={onClick}>{button}</button>
    )
}
