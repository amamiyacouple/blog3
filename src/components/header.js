import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// add by myself
import { Navbar, Nav } from 'react-bootstrap'
import profilePic from "../../content/assets/profile-pic.jpg"

const Header = ({}) => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} href="/">
            <img
            alt=""
            src="profilePic"
            width="30"
            height="30"
            />
            Amamiyablog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/about">プロフィール</Nav.Link>
                <Nav.Link href="/contact">お仕事依頼</Nav.Link>
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