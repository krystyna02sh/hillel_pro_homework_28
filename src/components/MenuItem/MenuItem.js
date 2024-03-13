import React from 'react';


function MenuItem({ text, onClick }) {
    return (
        <li className="item" onClick={onClick}>
            <a href='#'> {text}</a>
        </li>
    );
}

export default MenuItem;
