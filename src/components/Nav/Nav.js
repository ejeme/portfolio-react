import React from "react";
import Sidebar from "../Sidebar";
import "./Nav.css";

// Component for the Navbar

const Nav = props => (
  <nav className="navbar navbar-default navbar-fixed-side">

    <div className="container-fluid">

      <div className="navbar-header">
        <ul>
          <li className="brand">
            <a href="/">Ejeme Ogedengbe</a>
          </li>
        </ul>
      </div>

    </div>
  </nav>


);

export default Nav;
