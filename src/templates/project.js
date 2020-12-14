import React from "react"
import {graphql} from "gatsby"


import Layout from "../components/layout"
import Project from "../components/project"
import SEO from "../components/seo"


export const query = graphql`
    query ( $slug: String!) {
    projectsJson(slug: { eq: $slug}) {
        title
        subtitle
        description
        technologies
        url
        credits
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

`

const ProjectTemplate = ({data}) => {
    const project = data.projectsJson;
    const {title} = project

    return (
        <Layout>
            <SEO title={`Portfolio ${title}`}/>

            <Project
                project={project}
            />
        </Layout>
    )
}

export default ProjectTemplate