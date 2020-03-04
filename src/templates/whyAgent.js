import React from "react"
import { rhythm } from "../utils/typography"

import { css } from '@emotion/core'

const whyAgentCss = css`
  height: 100%;
  width: 100%;
  text-align: center;
  justify-self: center;
  scroll-snap-align: start;
`
const whyAgentMdCss = css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-column-gap: 3em;
    grid-auto-flow: column;
    padding-left: 4em;
    padding-right: 4em;
`

const WhyAgentPostTemplate = ({ node }) => {
  return (
      <article css={whyAgentCss}>
        <header>
        <h1 >
            {node.frontmatter.title}
          </h1>
        </header>
          <section css={whyAgentMdCss} dangerouslySetInnerHTML={{ __html: node.html }} />
      </article>
  )
}

export default WhyAgentPostTemplate