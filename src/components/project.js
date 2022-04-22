import React from "react"
// import PropTypes from "prop-types"
import Image from "gatsby-image"

import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"


const Project = ({project}) => {

    const { title, subtitle, description, url, technologies, documentation}  = project;
    // const imgLogo = project.image.childImageSharp.fluid;
    const imgDesktop = project.image_desktop.childImageSharp.fluid;
    const imgMobile = project.image_mobile.childImageSharp.fluid;

    return (
        <Container fluid>
            <Jumbotron>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
            </Jumbotron>

        <Row>

            
            <Col md={3}>
                <Button variant="info" href={url} target="_blank" rel="noopener noreferrer" block>View Website</Button>

                <Container fluid="true">
                    <h4 className="tech-title">Technologies</h4>

                    <ListGroup>
                
                        {technologies.map(tech => <ListGroup.Item key={tech}>{tech}</ListGroup.Item>)}

                    </ListGroup>
                </Container>
            </Col>

            <Col md={9}>

                <Container>
                    <p>{description}</p>
                </Container>

                <Container>
                    {/* images fluid as it changes show mobile, desktop or both */}
                    <Image fluid={imgDesktop}/>
                    <Image fluid={imgMobile}/>


                </Container>
            </Col>

            

            <Col md={{span: 10, offset:2}} className="project-documentation">
                {
                    documentation.map(({element,text}) => {
                        if (element === "h2"){
                            return <h2>{text}</h2>
                        } else if (element === "p"){
                            return <p>{text}</p>
                        }
                })
                }
            </Col>

            
            
        </Row>
        </Container>
    )

}

export default Project