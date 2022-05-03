import React from "react"
import { Container, Form, Button } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () =>(
    <Layout page={"contact"}>
        <SEO title="Contact"/>

        <Container fluid className="header">
            <h1>Get in Touch</h1>
            <p>Send me a message or details of the project you would like me to be a part of.</p>
        </Container>

        <Container fluid className="form">
            <Form method="POST" action="https://getform.io/f/ecf09f8c-aaf4-473a-a0aa-0b7b2d4eecbe">
                <Form.Group className="fields">
                    <Form.Label>
                        Your Name
                        <span className="req">*</span>
                    </Form.Label>
                    <Form.Control required type="text" name="name" placeholder="Name"/>
                    
                    <Form.Label>
                        Your Email
                        <span className="req">*</span>
                    </Form.Label>
                    <Form.Control required type="email" name="email" placeholder="name@example.com" />

                    <Form.Label>Your Website</Form.Label>
                    <Form.Control type="url" placeholder="adrianbparra.com"/>

                    <Form.Label>
                        Your Message
                        <span className="req">*</span>
                    </Form.Label>
                    <Form.Control required as="textarea" name="message" rows={4} />
                </Form.Group>

                <Button type="submit"> Submit </Button>
            </Form>
        </Container>

    </Layout>
)

export default Contact