import React from 'react';
import logo from './Group.png'; // імпорт зображення

function Logo() {
    return (
        <div className="logo-container">
            <img src={logo} alt="Logo" />
        </div>
    );
}

export default Logo;
