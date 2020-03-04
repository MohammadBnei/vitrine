import React from "react"
import { rhythm } from "../utils/typography"

import { css } from '@emotion/core'
import { Link } from "gatsby"

const joinUsCss = css`
  height: 100%;
  width: 100%;
  text-align: center;
  justify-self: center;
  scroll-snap-align: start;
`
const joinUsMdCss = css`
    padding-left: 4em;
    padding-right: 4em;
`

const JoinUsPostTemplate = ({ node }) => {
  return (
      <article css={joinUsCss}>
        <header>
        <h1 >
            {node.frontmatter.title}
          </h1>
          </header>
          <div css={css`
            height: 100%;
            position: relative;
          `}>

            <section css={joinUsMdCss} dangerouslySetInnerHTML={{ __html: node.html }} />
            <Link css={css`
                background-color: lightgrey;
                color: white;
                padding: 1em;
                position:absolute;
                bottom: 4em;
            `} to="/" >Nous rejoindre</Link>
          </div>
      </article>
  )
}

export default JoinUsPostTemplate