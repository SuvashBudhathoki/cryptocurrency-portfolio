import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Cryptocurrency</h1>
    <NavLink to="/" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create">Create Transaction</NavLink>
  </header>
);

export default Header;
