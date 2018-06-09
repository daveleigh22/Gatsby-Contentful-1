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
        accessToken: '623b9a2888e8a2662e1967b1b589adecec75173b0efd408ad9b27981a462541a'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet'
  ],
}
