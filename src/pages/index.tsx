import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import 'bulma/css/bulma.css'

const IndexPage = () => (
  <Layout>
    <SEO title="H2STORY" keywords={[`prayeo`, `blog`, `h2story`]} />
    <h1>Hi people</h1>
    <p>My name is <a href="https://github.com/prayeo" target="_blank">pray</a>!</p>
    <p>Welcome to my blog.</p>
  </Layout>
)

export default IndexPage