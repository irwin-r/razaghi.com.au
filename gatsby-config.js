module.exports = {
  siteMetadata: {
    title: "Irwin Razaghi",
    description: "Irwin Razaghi",
    author: "Irwin Razaghi <irwin@razaghi.com.au>",
  },
  plugins: [
    "gatsby-plugin-eslint",
    "gatsby-plugin-transition-link",
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Karla",
          },
          {
            family: "Source Sans Pro",
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "razaghi.com.au",
        short_name: "razaghi.com.au",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-offline",
  ],
};
