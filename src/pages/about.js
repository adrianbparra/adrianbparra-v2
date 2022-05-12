import React from "react"
import { Container } from "react-bootstrap"
import { Link } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
    <Layout page="about">
        <SEO title="About"/>

        <Container fluid className="header">
            <h1>About Adrian</h1>
        </Container>

        <Container className="info">

            <p>
                I am a Full Stack Web Developer creating website that make a positive change.
                I create website that are reliable, easy to use, and with best practices.
                I love to learn new technology to achieve my dreams and even yours when completing your project.
            </p>

            <p>
                I love to create websites that I am proud of and that successfully complete the requirements.
                I work with your specific business requirements to complete the project to your needs.
            </p>

            <p>
                My main experiance is in Front End development but I have a  passion for Back End data management as well. 
                With the love for Full Stack Web Development I can create applicatons that not only look appealing but handle data for your business.
                There is so many areas in Development it is always best to know little bit of everything to better understand client needs and requirements.
            </p>

            <p>
                I take pride in completing client needs and offer solutions that resolve problems we encounter. 
                I will work until the project is 100% completed and operational.
            </p>

            <h2>
                Front End
            </h2>

            <p>
                I use HTML, CSS, JavaScript and C# to create responsive websites that provide best practice and clean code.
            </p>

            <p>
                I can follow UI/UX designs if provided or I can design to your liking in Figma.
                I can match wireframes and mock-ups as close to your specifications and requirements.
            </p>

            <p>
                I am also familiar with other tools and frameworks that fall under the categories above.
                If you have questions about my knowledge <Link to={"/contact"} className="contact-link">Contact Me</Link> to find out how I can help you with your website.
            </p>

            <h2>
                Back End
            </h2>

            <p>
                I use JavaScript, C#, SQL, NoSQL, to handle your important data with care.
            </p>

            <p>
                I can create a wide variety types of servers to handle your important data that is easily accessible and safe.
                I use technology that better suites your business needs.
                I am capable of learning new technology if it comes to making your site even better.
            </p>

        </Container>

        <Container className="button-container">
            <Link to={"/contact"} className="contact-me-button">
                Contact Me
            </Link>
        </Container>

    </Layout>
)

export default About