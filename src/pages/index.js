import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPostTemplate from "../templates/landing-post"


const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const landingPosts = data.allMarkdownRemark.edges.filter(({node}) => node?.frontmatter?.item === 'landing')

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {landingPosts.map(({ node }) => (
        <LandingPostTemplate node={node} key={node.id}/>
      ))}
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            item
          }
          html
          id
        }
      }
    }
  }
`
