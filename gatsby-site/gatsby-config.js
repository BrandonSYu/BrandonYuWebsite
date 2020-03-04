module.exports = {
  siteMetadata: {
    title: `Brandon Yu's Website Portfolio`,
    author: `Brandon Yu`,
    headline: `Hello World. My name is Brandon Yu`,
    description: `I build website applications.`,
    about : 'I am a software engineer based in San Francisco, CA. I enjoy building clean, high-quality applications',
    siteUrl: `https://`,
    contactInfo : [{type : 'E-mail', data : "brandonyu415@gmail.com"}, {type: 'LinkedIn', data : 'https://www.linkedin.com/in/brandonyu415/'}],
    navLinks: [{name: 'About', link: 'http://'}, { name: 'Projects', link: '/page/1'}, {name: 'Contact', link: 'http://'}, {name: 'Resume', link : 'http://'}],
    mainProject : [{name: 'GastroGnome', desc : 'A restaurant review application', image: '', tags : ['React', 'Express', 'MongoDB', 'Docker', 'AWS']}, {name: 'Airtimize', desc : 'A lodging reservations marketplace. A back-end focused project aimed towards finding optimal server oriented architecture for high traffic loads', image: '', tags : []}, {name: 'Brandon Yu Website Portfolio', desc : 'A website portfolio built with Gatsby and MaterialUI to highlight my software projects.', image: '', tags : ['Gatsby', 'React', 'MaterialUI']}],
    otherProjects : [{name: 'Java Subset Compiler Debugger', desc: 'A project ',link : '', tags : ['Java', 'JVM', 'Lexer', 'Interpreter', 'Bytecodes', 'Abstract Syntax Tree', 'Recursive Decent Processing']}, {name : 'findFoodTruck iOS', desc : "An iOS mobile app", link : "http://", tags : ['Mobile', 'Swift', 'xCode', 'Alamofire', 'MapKit']}]
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
