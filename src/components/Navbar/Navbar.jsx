import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-container">
        <h1 className="app__navbar-container_logo">The Dojo Blog</h1>
        <ul className="app__navbar-container_links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/newblog">New blog</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
