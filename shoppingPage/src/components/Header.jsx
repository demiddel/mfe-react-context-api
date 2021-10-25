import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{"backgroundColor": "#00b894"}}>
        <NavLink to="/" style={{"paddingRight":"2em"}}>Home</NavLink>
        <NavLink to="/cart">Show Cart</NavLink>
    </nav>
  );
};

export { Header };
