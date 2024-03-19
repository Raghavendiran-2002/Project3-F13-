import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavUnAuth = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div>
        <Link to={"/"} className="navbar-brand">
          F13 Technologies
        </Link>

        <Link to={"/auth"}>
          <button class="btn btn-outline-success my-2 my-sm-0 " type="submit">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavUnAuth;
