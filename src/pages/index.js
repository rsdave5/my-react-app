import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Reetu's portfolio.</h1>
    <p>Reetu is a Chicago-based developer who sometimes dabbles in design.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Watch the video</Link>
  </Layout>
)

export default IndexPage
