import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlogPost extends Component {
    render() {

        const {
            title
        } = this.props.data.contentfulPost

        return (
            <div>
                <h1>{title}</h1>
            </div>
        )
    }
}

BlogPost.PropTypes = {
    data: PropTypes.object.isRequired
}

export default BlogPost

export const PageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulPost(slug: {eq: $slug}) {
            title
            slug
        }
    }
`