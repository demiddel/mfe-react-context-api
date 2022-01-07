import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{"backgroundColor": "#00b894"}}>
        <NavLink to="/" style={{"paddingRight":"2em"}}>Home</NavLink>
        <NavLink to="/cart" style={{"paddingRight":"2em"}}>Show Cart</NavLink>
        <NavLink to="/products">Products</NavLink>
    </nav>
  );
};

export { Header };
