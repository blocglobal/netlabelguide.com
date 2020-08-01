import React from 'react';
import "./Header.scss";

const Header = ({ title = 'The future home of The Netlabel Guide' }) => {
    return (
        <header className="Header">
            <h1>{title}</h1>
        </header>
    );
};

export default Header;