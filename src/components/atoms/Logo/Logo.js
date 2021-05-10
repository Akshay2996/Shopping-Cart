import React from 'react';
import logo from '../../../../static/images/logo.png';
import './Logo.scss';

export default function Logo() {
    return (
        <main className="logo">
            <img src={logo} className="logo__image" alt="Logo Image" />
        </main>
    )
}
