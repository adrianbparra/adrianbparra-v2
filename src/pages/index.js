import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Jumbotron fluid className="text-center index-title">
      <h1>Full Stack Web Developer</h1>
      <p>Hello. My name is Adrian Parra, I am a Full Stack Web Developer. Creating appealing websites that operate.</p>
    </Jumbotron>
  
    <Container className="index-types">

    </Container>
  </Layout>
)

export default IndexPage
