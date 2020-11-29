import React from "react"
import {Link} from "gatsby"

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

// import "../styles/components/footer.sass"

import { FaLinkedin,FaTwitterSquare,FaGithubSquare } from 'react-icons/fa';
import APLogo from "../images/AP-Logo.png"

const Footer = () =>(
    <Container as="footer" fluid className="footer">
        <Row xs={1} sm={2} xl={3}>

            <Col sm={12} md={8} xl={6} className="d-flex align-items-center">
                <div className="footer-img">
                    <img src={APLogo}  alt="ap logo" className="ap-footer-logo"/>
                </div>
                <div className="footer-about-me"><p>I am a Full Stack Web Developer with experience in many <Link to="/about">languages and library's</Link>. I have created many Front end and Back end websites that are built with best practices.</p></div>
            </Col>

            <Col sm={6}  md={4} xl={3} as="dl">

                <div>
                    <dt><Link to="/portfolio">Portfolio</Link></dt>
                    <dd>Take a look at my projects</dd>
                </div>
                <div>
                    <dt><Link to="/about">About</Link></dt>
                    <dd>Learn all about me and what I do</dd>
                </div>
                <div>
                    <dt><Link to="/contact">Contact</Link></dt>
                    <dd>Send me a messsage</dd>
                </div>
            
                
            </Col>
            <Col sm={6} md={12} xl={3} as="dl" className="footer-social">
                <div>
                    <dt>
                        <a href="https://github.com/adrianbparra" target="_blank" rel="noreferrer">
                            <FaGithubSquare/>
                            <span>Github</span>
                        </a>
                    </dt>
                    <dd>
                        See what Im working on
                    </dd>
                </div>
                <div>
                    <dt>
                        <a href="https://www.linkedin.com/in/adrian-parra/" target="_blank" rel="noreferrer">
                            <FaLinkedin/>
                            <span>Linkedin</span>
                        </a>
                    </dt>
                    <dd>
                        Connect with me
                    </dd>
                </div>
                <div>
                    <dt>
                        <a href="https://twitter.com/Adrian_B_Parra" target="_blank" rel="noreferrer">
                            <FaTwitterSquare/>
                            <span>Twitter</span>
                        </a>
                    </dt>
                    <dd>
                        Follow me
                    </dd>
                </div>
            </Col>

        </Row>
        <Row xs={1} className="text-center">
        <small>
            Created by <Link to="/">Adrian Parra</Link>, © {new Date().getFullYear()}
        </small>
        </Row>
    </Container>
)


export default Footer