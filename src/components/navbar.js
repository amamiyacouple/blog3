import React from "react";
import { useStaticQuery, Link, graphql } from 'gatsby'
import "./styles/styleMedia.scss"

const NavBar = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery (
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    )

  return (
    <header id="luxbar" class="luxbar-fixed">
        <input type="checkbox" class="luxbar-checkbox" id="luxbar-checkbox"/>
        <div class="luxbar-menu luxbar-menu-right luxbar-menu-dark">
            <ul class="luxbar-navigation">
                <li class="luxbar-header">
                    <a href="https://amamiyacouple.work/" class="luxbar-brand">{title}</a>
                    <label class="luxbar-hamburger luxbar-hamburger-doublespin" 
                    id="luxbar-hamburger" for="luxbar-checkbox"> <span></span> </label>
                </li>
                <li class="luxbar-item"><Link to="/">HOME</Link></li>
                <li class="luxbar-item"><Link to="/about">ABOUT</Link></li>
                <li class="luxbar-item"><Link to="/contact">お仕事依頼</Link></li>
            </ul>
        </div>
    </header>

    /*    <nav className="navbar">
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
    </nav>*/
  );
};


export default NavBar;