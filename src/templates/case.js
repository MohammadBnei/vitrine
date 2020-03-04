import React from "react"

import { css } from '@emotion/core'

const caseCss = css`
  height: 100%;
  width: 100%;
  background-color: black;
  text-align: center;
  justify-self: center;
  scroll-snap-align: start;
`
const caseMdCss = css`
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3em;
    padding-left: 4em;
    padding-right: 4em;
    justify-items: center;	
    align-items: center;	

    h1 {
        height: 100%;
        width: 100%;
        text-justify: center;
        background-color: white;
        margin: auto;
    }
`

const CasePostTemplate = ({ node }) => {
  return (
      <article css={caseCss}>
        <header>
        <h1 >
            {node.frontmatter.title}
          </h1>
        </header>
          <section css={caseMdCss} dangerouslySetInnerHTML={{ __html: node.html }} />
      </article>
  )
}

export default CasePostTemplate