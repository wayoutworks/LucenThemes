import React from "react"
import { useStaticQuery, grphql, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
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
    <section id="about" className="px-5">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 w-full">
            <h4 className="inline-block text-accent font-semibold border-solid border-b-2 border-accent">
              About Lucent Themes
            </h4>
            <h1 className="font-bold text-5xl mb-1">A Creative landing Page</h1>
            <p className="text-gray-600 text-lg lg:mb-16 mb-4">
              We use the latest technologies it voluptatem accusantium
              doloremque.
            </p>
            <ul>
              <li className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-check text-primary p-2 pl-0"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                We use the latest technologies it voluptatem accusantium
                doloremqu
              </li>
              <li className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-check text-primary p-2 pl-0"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Bootsland Landing Page Build With Static Bootstarp Code
              </li>
              <li className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-check text-primary p-2 pl-0"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                All types of businesses need access to development
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
