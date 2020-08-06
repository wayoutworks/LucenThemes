import React from "react"
import { useStaticQuery, grphql, graphql } from "gatsby"
import Img from "gatsby-image"

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bg.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section id="products" className="relative mt-40 mb-40">
      <div className="container">
        <div className="flex justify-center text-center">
          <div className="w-full">
            <p className="uppercase font-heading font-medium">
              From The Bucket of LucenThemes
            </p>
            <h1 className="text-5xl font-bold">Agility WP</h1>
            <p className="w-3/4 ml-auto mr-auto text-center mb-3">
              Agility WP Theme is a blazing fast theme for Bloggers, Business,
              WooCommerce, and Portfolio, etc. Build on the top of Bootstrap 5
              with some amazing customization options best suited for any
              business.
            </p>
            <a
              className="inline-block text-xl font-medium bg-secondary text-white px-10 py-3 rounded-full"
              href="#"
            >
              Download
            </a>
          </div>
        </div>
        <div className="w-4/6 ml-auto mr-auto mt-16">
          <div className="flex">
            <div className="w-1/2 border-r-2">
              <div className="p-5 border-b-2">
                <h5 className="uppercase font-bold font-body">Fast</h5>
                <p className="text-sm">
                  Serspiciatis unde omnis iste natus error sit doloremque
                  laudantium, totam rem aperiam.
                </p>
              </div>
              <div className="p-5">
                <h5 className="uppercase font-bold font-body">Easy To USE</h5>
                <p className="text-sm">
                  Serspiciatis unde omnis iste natus error sit doloremque
                  laudantium, totam rem aperiam.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div className="p-5 border-b-2">
                <h5 className="uppercase font-bold font-body">Fast</h5>
                <p className="text-sm">
                  Serspiciatis unde omnis iste natus error sit doloremque
                  laudantium, totam rem aperiam.
                </p>
              </div>
              <div className="p-5">
                <h5 className="uppercase font-bold font-body">Easy To USE</h5>
                <p className="text-sm">
                  Serspiciatis unde omnis iste natus error sit doloremque
                  laudantium, totam rem aperiam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-64 absolute right-0 top-0 lg:block hidden">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    </section>
  )
}

export default Products
