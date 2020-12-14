import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"

import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"

const Project = ({project}) => {

    const { title, subtitle, description, url, technologies, documentation}  = project;
    const imgLogo = project.image.childImageSharp.fluid;
    const imgDesktop = project.image_desktop.childImageSharp.fluid;
    const imgMobile = project.image_mobile.childImageSharp.fluid;

    return (
        <Container fluid>
            
            <Container>
                <Jumbotron>
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                </Jumbotron>

                <Container>
                    <p>{description}</p>
                </Container>

                <Container>
                    {/* images fluid as it changes show mobile, desktop or both */}
                    <Image fluid={imgDesktop}/>
                    <Image fluid={imgMobile}/>


                </Container>
            </Container>

            <Container>
                <Button href={url}>View Website</Button>
                {/* show the technologies */}
                <ul>
                    {technologies.map(tech => <li key={tech}>{tech}</li>)}

                </ul>

            </Container>

            <Container>
                {
                    documentation.map(({element,text}) => {
                        console.log(element)
                        switch (element) {
                            case "h2":
                                return <h2>{text}</h2>
                            case "p":
                                return <p>{text}</p>
                            
                            
                        }
                })
                }
            </Container>

            
            
        </Container>
    )

}

export default Project