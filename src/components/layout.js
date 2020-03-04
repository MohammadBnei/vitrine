import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import Image from "gatsby-image"

import { css } from "@emotion/core"
import Footer from "./footer"

const layoutCss = css`
  scroll-snap-type: y mandatory;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 100vh);
  justify-items: center;
  align-items: center;
`


const Layout = ({ location, title, children }) => {  
  return (
    <div>
      <main css={layoutCss}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
