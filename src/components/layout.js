import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import Container from "react-bootstrap/Container"

import "../styles/main.sass"

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Adrian Parra`} />
      <Container fluid>
        <main className={`${props.page} main`}>{props.children}</main>
      </Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  page: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
