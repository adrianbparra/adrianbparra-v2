const path = require("path")

exports.createPages = async ({actions, graphql, reporter}) => {
    const result = await graphql(`
        {
            allProjectsJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    if (result.error) {
        reporter.panic("There was a problem loading projects");
        return;
    }

    const projects = result.data.allProjectsJson.edges;
    
    const projectComponent = path.resolve(`src/templates/project.js`)

    projects.forEach(({node: project}) => {
        const slug = project.slug


        actions.createPage({
            path: `/portfolio/${slug}/`,
            component: projectComponent,
            context: {slug}
        });
    });

}