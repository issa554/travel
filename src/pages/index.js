import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from  "../components/banner"
import Features from "../components/Features"
import FirstC from "../components/FirstCountry"
import Journey from "../components/Journey"
import AllCon from "../components/AllCon"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <Features />
    <FirstC />
    <Journey />
    <AllCon />
  </Layout>
)

export default IndexPage
