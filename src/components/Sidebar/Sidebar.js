import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

// Component for the Sidebar
const Sidebar = props => (

    <div className="nav-side-menu" >
        <div className="brand"></div>
        <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
        <div className="menu-list">

            <ul id="menu-content" className="menu-content collapse out">
                <li><Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
                    <a href="#">
                        <i className="fa fa-home fa-lg"></i> </a>
                </li>
                <li><Link to="/about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>About</Link>
                    <a href="#">
                        <i className="fa fa-female fa-lg"></i>
                    </a>
                </li>
                <li><Link to="/projects" className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}>Projects</Link>
                    <a href="#">
                        <i className="fa fa-briefcase fa-lg"></i>
                    </a>
                </li>
                <li><Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                    <a href="#">
                        <i className="fa fa-envelope fa-lg"></i></a>
                </li>
               </ul>
        </div>
    </div>
);
export default Sidebar;