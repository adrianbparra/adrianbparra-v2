import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import ProjectList from "../components/projectsList"

// import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import { ListGroup } from "react-bootstrap";


const IndexPage = (props) => (
  <Layout page={"index"}>
    <SEO title="Home"/>

    <Container fluid className="header">
      <h1>Full Stack Web Developer</h1>
      <p className="subtitle">Hello, My name is Adrian Parra, I am a Full Stack Web Developer. Creating appealing websites that go beyond operation.</p>
    </Container>
  
    <Container className="tech" fluid="md">
      <Row xs={1} md={3}>
        <Card>
          <Card.Header>
            FRONT END
          </Card.Header>

          <ListGroup variant="flush">
            <ListGroup.Item>React</ListGroup.Item>
            <ListGroup.Item>Javascript</ListGroup.Item>
            <ListGroup.Item>C#</ListGroup.Item>
            <ListGroup.Item>SASS</ListGroup.Item>
          </ListGroup>

        </Card>

        <Card>
          <Card.Header>
              BACK END
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Node.js</ListGroup.Item>
            <ListGroup.Item>.NET</ListGroup.Item>
            <ListGroup.Item>MSSQL</ListGroup.Item>
            <ListGroup.Item>PostgreSQL</ListGroup.Item>
          </ListGroup>
        </Card>
      </Row>
    </Container>
    <hr/>
    <Container fluid>

      <h2 className="feature-title">
        Feature Work
      </h2>

      <ProjectList/>
    </Container>

  </Layout>
)

export default IndexPage
