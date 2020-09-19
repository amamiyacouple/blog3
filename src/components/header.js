import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// add by myself
//import { Container, Navbar, Nav } from 'react-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Header = ({ siteTitle }) => (
    <Navbar style="background-color: #e3f2fd;" variant="light" expand="lg">
    <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="ml-auto">
            <NavItem href="../pages/about">
                <Nav.Link as={Link} activeClassName="active" to="../pages/about">プロフィール</Nav.Link>
            </NavItem>
            <NavItem href="../pages/contact">
                <Nav.Link as={Link} activeClassName="active" to="../pages/contact">お仕事依頼</Nav.Link>
            </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header