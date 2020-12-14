import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectList from "../components/projectsList"

import Jumbotron from "react-bootstrap/Jumbotron"


const Portfolio = () =>(
    <Layout>
        <SEO title="Portfolio"/>
        <Jumbotron fluid className="text-center index-title">
            <h1>Full Stack Portfolio</h1>
            <p>Website created with best practice and continuing further development.</p>
        </Jumbotron>

        <ProjectList/>

    </Layout>
)

export default Portfolio