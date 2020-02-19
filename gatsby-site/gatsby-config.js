module.exports = {
  siteMetadata: {
    title: `Brandon Yu's Website Portfolio`,
    description: `Brandon Yu's Website Portfolio`,
    author: `Brandon Yu`,
    headline: `Hello World! I'm Brandon Yu`,
    focusArea: `I'm a Full Stack Website Developer`,
    linkedInId: `brandonyu415`,
    siteUrl: `https://`,
    keywords: [`Technology Blog`],
    email: `brandonyu415@gmail.com`,
    navLinks: [{name: 'Projects', link: '/page/1'}, {name: 'About', link: 'http://'}, {name: 'Contact', link: 'http://'}],
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
