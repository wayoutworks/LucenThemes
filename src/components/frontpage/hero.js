import React from "react"
import { useStaticQuery, grphql, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq:"header.png" }){
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`)
  return (
    <section id="hero" className="lg:p-0 px-5">
      <div className="container">
        <div className="flex flex-col justify-between items-center text-center">
          <div className="my-20">
            <h3 className="mb-4">Created For Awesomeness</h3>
            <h1 className="lg:text-5xl text-4xl font-extrabold mb-4">
              Creative WordPress Themes for Everyone.
            </h1>
            <p className="text-lg font-medium text-gray-600">
              We Build a Beautiful, Clean & Modern Design Themes with SEO and
              Blezzing Fast.
            </p>
            <div className="bg-secondary text-white inline-flex justify-between items-center px-5 py-3 rounded-full mt-5">
              <a className="ml-2 mr-10 lg:text-xl text-lg font-medium" href="#">
                Download
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-zap"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <a className="mr-2 ml-12 lg:text-xl text-lg font-medium" href="#">
                Demo
              </a>
            </div>
          </div>
          <Img
            className="lg:w-2/4 w-3/4"
            fluid={data.placeholderImage.childImageSharp.fluid}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
