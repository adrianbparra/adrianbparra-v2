import React from "react"    

import { Link } from "gatsby"
import PropTypes from "prop-types"


import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import APLogo from "../images/AP-Logo.png"
import { Container } from "react-bootstrap"
// import "../styles/components/header.sass"


const Header = ({ siteTitle }) => {

  return (
    <header>
      <Navbar fixed="top" expand="md">
        <Navbar.Brand className="title" as={Link} to="/">
        
          <img src={APLogo} width="50" height="50" alt="AP-Logo"/>
          <div>{siteTitle}</div>
          
        </Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            
            <Nav.Link as={Link} to="/" activeClassName="active">Home</Nav.Link>
        
            <Nav.Link as={Link} to="/portfolio" activeClassName="active">Portfolio</Nav.Link>
          
            <Nav.Link as={Link} to="/about" activeClassName="active">About</Nav.Link>
          
            <Nav.Link as={Link} to="/contact" activeClassName="active">Contact</Nav.Link>
              
            
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
