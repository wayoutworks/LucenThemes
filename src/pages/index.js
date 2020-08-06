import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// Front Page Component
import Hero from "../components/frontpage/hero"
import Features from "../components/frontpage/features"
import About from "../components/frontpage/about"
import Products from "../components/frontpage/products"
import FAQ from "../components/frontpage/faq"
import SecondaryFooter from "../components/frontpage/SecondaryFooter"
import GetStart from "../components/frontpage/GetStart"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/> 
    <Features />
    <About />
    <Products />
    <FAQ />
    <SecondaryFooter />
    <GetStart />
  </Layout>
)

export default IndexPage
