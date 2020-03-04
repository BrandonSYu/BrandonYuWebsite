/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Desc from "./desc"
import About from "./about"
import Project from "./project"
import MiddleDividers from "./otherproj"
import Contact from "./contact"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteNavLinkQuery {
      site {
        siteMetadata {
          navLinks {
            name
            link
          },
          headline,
          description,
          about,
          contactInfo{
            type
            data
          },
          mainProject{
            name
            desc
            image
            tags
          },
          otherProjects{
            name
            desc
            link
            tags
          }
        }
      }
    }
  `)

  return (
    <div style = {{backgroundColor : "#00003f", color : "lightgray "}}>
      <Header navLinks={data.site.siteMetadata.navLinks} />
      <div>
  <h1>{data.site.siteMetadata.headline}</h1>
  <Desc siteDesc = {data.site.siteMetadata.description}/>
    <About about={data.site.siteMetadata.about}/>
    </div>
    <div>
  <Project projects={data.site.siteMetadata.mainProject}/>
    </div>
    <div>
          <MiddleDividers otherProj = {data.site.siteMetadata.otherProjects} />
        </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
<div>
  <Contact contactInfo = {data.site.siteMetadata.contactInfo}/>
</div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
