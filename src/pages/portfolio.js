import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectList from "../components/projectsList"

import Container from "react-bootstrap/Container"

const Portfolio = () => (
  <Layout page="portfolio">
    <SEO title="Portfolio" />

    <Container fluid className="header">
      <h1>Full Stack Portfolio</h1>
      <p>
        Websites created with best practice and continuing further development.
      </p>
    </Container>

    <ProjectList />
  </Layout>
)

export default Portfolio
