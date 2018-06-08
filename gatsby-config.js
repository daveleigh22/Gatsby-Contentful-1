module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: 
  [
    { 
      resolve: 'gatsby-source-contentful', 
      options: {
        spaceId: 'c20vnmipwf84',
        accessToken: ''
      }
    },
    'gatsby-plugin-react-helmet'
  ],
}
