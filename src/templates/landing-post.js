import React from "react"

import { rhythm } from "../utils/typography"

const LandingPostTemplate = ({ node }) => {
  return (
      <article>
        <section dangerouslySetInnerHTML={{ __html: node.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>
  )
}

export default LandingPostTemplate
