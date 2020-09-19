import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// add by myself
//import { Container, Navbar, Nav } from 'react-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <header className="bg-dark">
    <Navbar expand="md" variant="white">
    <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarResponsive" />
    <Navbar.Collapse id="navbarResponsive">
        <Nav as="ul" className="ml-auto">
        <Nav.Item as="li">
            <Link to="/page-2" className="nav-link" activeClassName="active">Page2</Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Link to="/page-3" className="nav-link" activeClassName="active">Page3</Link>
        </Nav.Item>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header