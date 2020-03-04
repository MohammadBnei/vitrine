import React from "react"
import { rhythm } from "../utils/typography"

import { css } from '@emotion/core'

const firstCss = css`
  height: 100%;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  justify-self: center;
  scroll-snap-align: start;
` 

const LandingPostTemplate = ({ node }) => {
  return (
      <article css={firstCss}>
        <header>
        <h1 >
            {node.frontmatter.title}
          </h1>
        </header>
      <section css={css`
          margin: auto;
          padding: 5em;
          `} dangerouslySetInnerHTML={{ __html: node.html }} />
      </article>
  )
}

export default LandingPostTemplate