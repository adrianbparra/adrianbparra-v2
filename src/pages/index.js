import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ProjectList from "../components/projectsList"

import { FaNodeJs } from "react-icons/fa";

import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import { ListGroup } from "react-bootstrap";


const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />

    <Jumbotron fluid className="text-center index-title">
      <h1>Full Stack Web Developer</h1>
      <p className="subtitle">Hello. My name is Adrian Parra, I am a Full Stack Web Developer. Creating appealing websites that operate.</p>
    </Jumbotron>
  
    <Container className="index-types" fluid="md">
      <Row xs={1} md={3} className="justify-content-around">

        <Card className="text-center">
          <Card.Header>
            Front End
          </Card.Header>

          <ListGroup variant="flush">
            <ListGroup.Item>React</ListGroup.Item>
            <ListGroup.Item>Javascript</ListGroup.Item>
            <ListGroup.Item>SASS</ListGroup.Item>
            <ListGroup.Item>CSS</ListGroup.Item>

          </ListGroup>

        </Card>


        <Card className="text-center">
          <Card.Header>
              Back End
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item><FaNodeJs/>Node</ListGroup.Item>
            

          </ListGroup>
        </Card>
      </Row>
    </Container>

    <Jumbotron fluid className="text-center index-title">
      <h2>Featured Work</h2>
    </Jumbotron>

    <ProjectList/>

  </Layout>
)

export default IndexPage
