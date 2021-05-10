import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="header__sub-container">
                <Logo />
                <nav className="header__nav__items">
                    <Link to="/" className="header__nav__items__link">Home</Link>
                    <Link to="/products" className="header__nav__items__link">Products</Link>
                </nav>
                <nav className="header__nav__login">
                    <Link to="/signin" className="header__nav__login__link">SignIn</Link>
                    <Link to="/register" className="header__nav__login__link">Register</Link>
                </nav>
            </div>
        </header>
    )
}
