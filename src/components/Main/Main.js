import React from 'react';
import Description from '../Description/Description.js';
import Logo from '../Logo/Logo.js';

function Main() {
    return (
        <div className="container">
            <div className='title'>
                <Description />
            </div>
            <Logo />
        </div>
    );
}

export default Main;
