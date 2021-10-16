import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuHeader = () => {
    return (
        <div>
            <NavLink to='/breakfast'>Breakfast</NavLink>
            <NavLink to='/lunch'>Lunch</NavLink>
            <NavLink to='/dinner'>Dinner</NavLink>
        </div>
    );
};

export default MenuHeader;