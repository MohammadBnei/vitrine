import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingPostTemplate from "../templates/landing"

import { css } from 'emotion'
import WhyAgentPostTemplate from "../templates/whyAgent"
import CasePostTemplate from "../templates/case"
import JoinUsPostTemplate from "../templates/joinUs"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const landingPosts = data.allMarkdownRemark.edges.filter(({ node }) => node?.frontmatter?.item === 'landing')
  const indexPost = data.allMarkdownRemark.edges.find(({ node }) => node.frontmatter.item === 'firstView')
  const whyAgentPost = data.allMarkdownRemark.edges.find(({ node }) => node.frontmatter.item === 'whyAgent')
  const casePost = data.allMarkdownRemark.edges.find(({ node }) => node.frontmatter.item === 'case')
  const joinUsPost = data.allMarkdownRemark.edges.find(({ node }) => node.frontmatter.item === 'joinUs')
  
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <LandingPostTemplate node={indexPost.node} />
      <WhyAgentPostTemplate node={whyAgentPost.node} />
      <CasePostTemplate node={casePost.node} />
      <JoinUsPostTemplate node={joinUsPost.node} />
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
