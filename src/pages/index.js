import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby','application','react']} />
    <h1>Hi people</h1>
    <p>Welcome youssef failoul</p>
    
  </Layout>
);

export default IndexPage;
