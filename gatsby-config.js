module.exports = {
  siteMetadata: {
    title: "Irwin Razaghi",
    description: "Irwin Razaghi",
    author: "Irwin Razaghi <irwin@razaghi.com.au>",
  },
  plugins: [
    // "gatsby-plugin-eslint",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `razaghi.com.au`,
        short_name: `razaghi.com.au`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
