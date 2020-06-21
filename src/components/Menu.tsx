import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
    color: 'red',
    fontSize: '1.5rem'
};

const Menu = () => (
    <div>
        <ul>
            <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
            <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
            <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
            <li><NavLink exact to="/about/foo?detail=true" activeStyle={activeStyle}>About foo</NavLink></li>
        </ul>
    </div>
);

export default Menu;