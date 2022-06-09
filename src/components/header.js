import React from "react"    

import { Link } from "gatsby"
import PropTypes from "prop-types"

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <Navbar fixed="top" expand="md">
        <Navbar.Brand className="title" as={Link} to="/">
        
          <svg width="122" height="122" viewBox="0 0 122 122" fill="none" className="logo" xmlns="http://www.w3.org/2000/svg">
            <g id="Logo">
            <path id="a" d="M2 117L35.8182 5L47.0909 33.4308L41.021 55.8308H57L64 71.3385H35.8182L21.0769 117H2Z" fill="black"/>
            <path id="p" d="M85.8058 118.5L36.9062 4.11495L118.5 4.11495L118.5 22.5L81 53.7146L74.5 39L99.5 18L63.8166 18.6482L107 118.5L85.8058 118.5Z" fill="black"/>
            </g>
          </svg>

          <div>{siteTitle}</div>
          
        </Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="nav-links">
          <Nav>
            <Nav.Link as={Link} to="/" activeClassName="active">Home</Nav.Link>
            <Nav.Link as={Link} to="/portfolio/" activeClassName="active" partiallyActive={true}>Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/about/" activeClassName="active">About</Nav.Link>
            <Nav.Link as={Link} to="/contact/" activeClassName="active">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



export default Header
