module.exports = {
  siteMetadata: {
    title: `Photos`,
    description: `A collection of my personal photography`,
    author: `Joe Langford`,
    subDomain: `photo.`,
    domainName: `joelangford`,
    topLevelDomain: `.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos`,
        path: process.env.npm_package_config_photosdir,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `photo.`,
        short_name: `photo.`,
        start_url: `/`,
        background_color: `#dddddd`,
        theme_color: `#4a4a4a`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
