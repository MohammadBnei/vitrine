/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import { css } from "@emotion/core"

const footerCss = css`
  background-color: black;
  height: 15em;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query ImagesQuery {
      logo: file(absolutePath: { regex: "/LOGO.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
    
  const logo = data.logo.childImageSharp.fixed

  return (
    <footer css={footerCss}>
        <Image
        fixed={logo}
        alt={'logo'}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      </footer>
  )
}

export default Footer
