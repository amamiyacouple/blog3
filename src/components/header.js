import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// add by myself
import { Navbar, Nav } from 'react-bootstrap'
//import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Header = ({ siteTitle }) => (
    <Navbar bg="dark" variant="dark" expand="true">
        <Navbar.Brand href="/">バリキャリ夫婦雨宮のブログ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
        <Nav className="mr-auto">
            <Nav.Link href="/about">プロフィール</Nav.Link>
            <Nav.Item as="li">
                <Link to="/contact" className="nav-link" activeClassName="active">お仕事依頼</Link>
            </Nav.Item>
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