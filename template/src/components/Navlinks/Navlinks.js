import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <ul >
            <li><NavLink to="/bosses">Bosses</NavLink></li>
        </ul>
    );
};

export default NavLinks;