import React from "react"
import { Link } from "gatsby"
import "../styles/style.scss"

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__li">
          <Link to="/">HOME</Link>
        </li>
        <li className="navbar__li">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="navbar__li">
          <Link to="/contact">お仕事依頼</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;