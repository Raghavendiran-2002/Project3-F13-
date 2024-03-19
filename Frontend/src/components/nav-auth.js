import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavAuth = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to={"/"} className="navbar-brand">
        F13 Technologies
      </Link>
      <div className="navbar-nav mr-auto">
        {/* <li className="nav-item">
        <Link to={"/tutorials"} className="nav-link">
          Tutorials
        </Link>
      </li> */}
        <li className="nav-item">
          <Link to={"/users"} className="nav-link">
            Users
          </Link>
        </li>

        <li className="nav-item">
          <Link to={"/adduser"} className="nav-link">
            Add Users
          </Link>
        </li>
      </div>
      <Link to={"/auth"}>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Login
        </button>
      </Link>
    </nav>
  );
};

export default NavAuth;
