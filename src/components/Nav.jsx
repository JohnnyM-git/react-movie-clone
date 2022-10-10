import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__right">
        <figure className="nav__logo">
          <img src={logo} alt="" />
        </figure>
        <h4>Streamify</h4>
      </div>
      <div className="nav__left">
        <ul className="nav__links">
          <li>
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
