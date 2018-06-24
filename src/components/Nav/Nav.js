import React from "react";
import NavMessage from "../NavMessage";
import "./Nav.css";

// Component for the Navbar

const Nav = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">Ejeme Ogedengbe</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
