import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


import APLogo from "../images/AP-Logo.png"


const Header = ({ siteTitle }) => {


  return (
    <header style={{paddingTop: "1rem", paddingBottom: "1rem"}}>
      <div>
        <Link
          to="/"
        >
          <img src={APLogo} alt="AP-Logo"/>
      
          <h1>{siteTitle}</h1>
        </Link>
      </div>
      
      <nav>
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
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
