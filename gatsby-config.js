module.exports = {
  siteMetadata: {
    title: `peoplefinderfree`,
    description: `peoplefinderfree`,
    author: `@peoplefinderfree`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-less',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ["auto", "webp", "avif"],
          placeholder: `tracedSVG`,
          quality: 80,
          backgroundColor: `transparent`
        }
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `peoplefinderfree`,
        short_name: `peoplefinderfree`,
        start_url: `/`,
        background_color: `#0A40CE`,
        theme_color: `#0A40CE`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        prettier: true,          // use prettier to format JS code output (default)
        svgo: true,              // use svgo to optimize SVGs (default)
        svgoConfig: {
          plugins: [
            { removeViewBox: true }, // remove viewBox when possible (default)
            { cleanupIDs: true },    // remove unused IDs and minify remaining IDs (default)
          ],
        },
        include:/images/
        // exclude: /some_special_folder/,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
