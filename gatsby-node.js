const path = require('path');

exports.createPages = ({graphql, boundActionCreators}) => {
    const {createPage} = boundActionCreators;

    return new Promise((resolve, reject) => {
        resolve(
            graphql(`
            {
                allContentfulPost (limit:100) {
                    edges {
                        node {
                            id
                            slug
                        }
                    }
                }
            }
        `).then((result) => {
                if (result.errors) {
                    reject(result.errors)
                }
                result.data.allContentfulPost.edges.forEach((edge) => {
                    createPage({
                        path: edge.node.slug,
                        component:  path.resolve('src/templates/blog-post.js'),
                        context: {
                            slug: edge.node.slug
                        }
                    })
                })
                return
            })
        )

    })
}