import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-nav">
        <NavLink className="nav-link" activeStyle={activeStyle} exact to="/">
          Home
        </NavLink>
        {" | "}
        <NavLink
          className="nav-link"
          activeStyle={activeStyle}
          exact
          to="/courses"
        >
          Courses
        </NavLink>
        {" | "}
        <NavLink
          className="nav-link"
          activeStyle={activeStyle}
          exact
          to="/about"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
