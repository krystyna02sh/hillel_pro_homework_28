// src/components/Header/Header.js
import React from 'react';
import MenuItem from '../MenuItem/MenuItem.js';

const Header = () => {
    return (
        <header>   <div className="container">
            <ul className='flex'>
                <MenuItem text="Головна" />
                <MenuItem text="Питання" />
                <MenuItem text="Матеріали" />
                <MenuItem text="Контакти" />
            </ul>

        </div></header>

    );
}

export default Header;
