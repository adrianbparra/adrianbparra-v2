import React from "react"
import PropTypes from "prop-types"
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

    // console.log(projects)

    return ( 
        <Container className="index-portfolio" fluid>
            {
                projects.map(project => {
                    const {id, title, slug, description} = project;
                    const imgLogo = project.image.childImageSharp.fluid;
                    const imgDesktop = project.image_desktop.childImageSharp.fluid;
                    const imgMobile = project.image_mobile.childImageSharp.fluid;
                    console.log(project)

                    return (
                        <Row xs={12}  key={id}>
                            
                            <Col xs={12} md={6} lg={6} xl={3} className="project-main">
                                <Link to={`/portfolio/${slug}/`} title={slug} className="project-title">
                                    <Image fluid={imgLogo} alt={title}/>
                                    <div><span>{title}</span></div>
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

        </Container>
    )

}
export default ProjectList