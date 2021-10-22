import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Show Cart</NavLink>
    </nav>
  );
};

export { Header };
