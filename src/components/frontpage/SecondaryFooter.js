import React from "react"
import { useStaticQuery, grphql, graphql } from "gatsby"
import Img from "gatsby-image"

const SecondaryFooter = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "team.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section
      id="secondary-footer"
      className="bg-indigo-100 py-24 mb-64 relative px-5"
    >
      <div id="team" className="container mb-12">
        <div className="flex flex-wrap">
          <div className="lg:w-3/5 w-full flex flex-col items-center justify-center">
            <div className="pr-10">
              <h1 className="text-4xl font-bold mb-5 text-gray-800">
                <span className="font-extrabold text-secondary">
                  LucenThemes
                </span>{" "}
                is for users by users
              </h1>
              <p className="mb-2 leading-7 text-gray-600">
                We are a team of designers and developers we build websites with
                some of the popular technologies available in the market like
                GatsbyJS, WordPress, Shopify, etc.
              </p>
              <p className="mb-2 leading-7 text-gray-600">
                What we felt in our experience is that themes available for all
                these latest technologies are having some problems like some are
                too buggy, some are not SEO Friendly and some have like
                performance.
              </p>
              <p className="mb-2 leading-7 text-gray-600">
                To solve this we craft LucenThemes and plan to build themes with
                some amazing features to solve the issue that we face in our
                daily work. As we are building it from our daily work all these
                themes will be a perfect fit for any type business.
              </p>
              <p className="mb-2 leading-7 text-gray-600">
                We also plan to take Features Request and Bug Reporting where
                users can submit there issue or request and track that issue and
                we will implement or Improve it.
              </p>
            </div>
          </div>
          <div className="lg:w-2/5 w-full">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
        </div>
      </div>
      <div id="cta" className="lg:absolute static left-0 right-0">
        <div className="flex flex-wrap lg:w-6/12 w-full mx-auto card bg-white">
          <div className="lg:w-1/2 w-full flex justify-end text-right">
            <div className="px-12 py-10">
              <div className="bg-secondary inline-block rounded-full p-6 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-layout text-white"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h4 className="font-semibold text-xl mb-2">
                Work smarter, not harder
              </h4>
              <p className="text-gray-600">
                Learn more about how our product can save you time and effort in
                a long run.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full border-l flex justify-start text-left">
            <div className="px-12 py-10">
              <div className="bg-secondary inline-block rounded-full p-6 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-code text-white"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h4 className="font-semibold text-xl mb-2">
                Built for Developers
              </h4>
              <p className="text-gray-600">
                Our Components, utilities, and layouts are bui;lt with
                developers in mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondaryFooter
