import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"


const Project = ({project}) => {

    const { title, subtitle, description, url, technologies, documentation}  = project;
    const imgDesktop = project.image_desktop.childImageSharp.fluid;
    const imgMobile = project.image_mobile.childImageSharp.fluid;

    return (
        <Container fluid className="project">

            <Container fluid className="header">
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
            </Container>

            <Row>

                
                <Col md={3}>
                    {url ? <Button href={url} target="_blank" rel="noopener noreferrer">View Website</Button> : "" }  

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
                        <Row>
                            <Col lg={8}>
                                <Image fluid={imgDesktop} alt={`${title} desktop`}/>
                            </Col>
                            <Col lg={4}>
                                <Image fluid={imgMobile} alt={`${title} mobile`}/>
                            </Col>
                        </Row>

                    </Container>
                </Col>

                

                <Col md={{span: 9, offset:3}} className="project-documentation">
                    {
                        documentation.map(({element,text},index) => {

                            if (element === "h2"){
                                return <h2 key={index}>{text}</h2>
                            } else if (element === "p"){
                                return <p key={index}>{text}</p>
                            }
                    })
                    }
                </Col>

                
                
            </Row>
        </Container>
    )

}

Project.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string, 
    description: PropTypes.string, 
    url: PropTypes.string, 
    technologies: PropTypes.array, 
    documentation: PropTypes.object,
    imgDesktop: PropTypes.any,
    imgMobile: PropTypes.any
}

export default Project