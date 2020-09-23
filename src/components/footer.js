import React from "react"
import {Link} from "gatsby"

import { FaLinkedin,FaTwitterSquare,FaGithubSquare } from 'react-icons/fa';
import APLogo from "../images/AP-Logo.png"

const Footer = () =>(
    <footer>
        <div>
            <div className="details">
                <img src={APLogo} alt="ap logo"/>
                <p>I am a Full Stack Web Developer with experience in many <Link to="/about">languages and library's</Link>. I have created many Front end and Back end websites that are built with best practices.</p>
            </div>
            <div className="social">
                <a href="https://github.com/adrianbparra" target="_blank" rel="noreferrer">
                    <FaGithubSquare/>
                    <p>Github</p>
                </a>
                <a href="https://www.linkedin.com/in/adrian-parra/" target="_blank" rel="noreferrer">
                    <FaLinkedin/>
                    <p>Linkedin</p>
                </a>
                <a href="https://twitter.com/Adrian_B_Parra" target="_blank" rel="noreferrer">
                    <FaTwitterSquare/>
                    <p>Twitter</p>
                </a>
            </div>
            <dl className="pages">
                <div>
                    <dt><Link to="/portfolio">Portfolio</Link></dt>
                    <dl>Take a look at my projects</dl>
                </div>
                <div>
                    <dt><Link to="/about">About</Link></dt>
                    <dl>Learn all about me and what I do</dl>
                </div>
                <div>
                    <dt><Link to="/contact">Contact</Link></dt>
                    <dl>Send me a messsage</dl>
                </div>
            </dl>

        </div>
        <small>
            <p>Created by <Link to="/">Adrian Parra</Link>, © {new Date().getFullYear()}</p>
        </small>
    </footer>
)


export default Footer