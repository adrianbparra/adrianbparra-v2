import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from "gatsby-image"

import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container"


const ProjectList = () => {

    const data = useStaticQuery(graphql`
        query {
            allProjectsJson {
                nodes {
                slug
                title
                description
                id
                documentation {
                    element
                    text
                }
                image {
                    childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                image_desktop {
                    childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                image_mobile {
                    childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                }
            }
        }
    `)

    const projects = data.allProjectsJson.nodes;

    return ( 
        <Container className="project-container" fluid>
            {
                projects.map(project => {
                    const {id, title, slug, description} = project;
                    const imgLogo = project.image.childImageSharp.fluid;
                    const imgDesktop = project.image_desktop.childImageSharp.fluid;
                    const imgMobile = project.image_mobile.childImageSharp.fluid;

                    return (
                        <Row xs={12}  key={id} className="project-list">
                            
                            <Col xs={12} md={6} lg={6} xl={3} className="project-info">
                                <Link to={`/portfolio/${slug}/`} title={slug} className="project-title">
                                    <Image fluid={imgLogo} alt={title}/>
                                    <div className="project-name">
                                        <span>{title}</span>
                                    </div>
                                </Link>
                                <p>{description}</p>
                            </Col>
                            <Col  lg={6} xl={6} className="project-desktop-img">
                                <Link to={`/portfolio/${slug}/`} title={slug} >
                                    <Image fluid={imgDesktop} alt={title}/>
                                </Link>
                            </Col>
                            <Col md={6} lg={6} xl={3} className="project-mobile-img">
                                <Link to={`/portfolio/${slug}/`} title={slug}>
                                    <Image fluid={imgMobile} alt={title}/>
                                </Link>
                            </Col>

                        </Row>
                    )
                })
            }

            <Container className="button-projects-list">
                <Link to={"/contact"} className="contact-me-button">
                    Contact Me
                </Link>
            </Container>

        </Container>
    )

}
export default ProjectList