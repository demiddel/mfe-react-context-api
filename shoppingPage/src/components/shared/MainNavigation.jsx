import React from 'react';
import { NavLink } from 'react-router-dom';

// import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <nav style={{ backgroundColor: '#00b894' }}>
            <NavLink
                to="/"
                style={{ paddingRight: '2em' }}
                // className={({ isActive }) =>
                //     isActive ? classes.active : undefined
                // }
            >
                Home
            </NavLink>
            <NavLink
                to="/cart"
                style={{ paddingRight: '2em' }}
                // className={({ isActive }) =>
                //     isActive ? classes.active : undefined
                // }
            >
                Show Cart
            </NavLink>
            <NavLink
                to="/products"
                // className={({ isActive }) =>
                //     isActive ? classes.active : undefined
                // }
            >
                Products
            </NavLink>
        </nav>
    );
};

export { MainNavigation };
