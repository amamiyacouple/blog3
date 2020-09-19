import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap' // ←追記

const Header = ({ siteTitle }) => (
// ↓ここから
  <header className="bg-dark">
    <Container>
      <Navbar expand="md" variant="dark">
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
    </Container> 
  </header>
// ↑ここまで
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header