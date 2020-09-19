import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// add by myself
import { Container, Navbar, Nav } from 'react-bootstrap'
//import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Header = ({ siteTitle }) => (
    <header className="bg-dark">
        <Container>
            <Navbar expand="lg" variant="dark">
                <Navbar.Brand href="/">バリキャリ夫婦雨宮のブログ</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarResponsive" />
                <Navbar.Collapse id="navbarResponsive">
                    <Nav as="ul" className="ml-auto">
                    <Nav.Item as="li">
                        <Link to="/about" className="nav-link" activeClassName="active">プロフィール</Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Link to="/contact" className="nav-link" activeClassName="active">お仕事依頼</Link>
                    </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header