import React from "react"
import { useStaticQuery, grphql, graphql } from "gatsby"
import Img from "gatsby-image"

const Footer = () => {
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
    <footer className="pb-32">
      <div className="container">
        <div className="flex mb-4">
          <div className="w-2/5">
            <div className="flex flex-col pr-32">
              <h1 className="text-gray-900 uppercase font-bold mb-4 hidden">
                Contact Us
              </h1>
              <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </div>
          </div>
          <div className="w-3/5">
            <div className="flex mb-4">
              <div className="w-1/3">
                <h3 className="uppercase font-bold text-xl mb-4">Pages</h3>
                <ul>
                  <li className="mb-2 font-heading flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <a href="#" className="ml-0 hover:ml-2 hover:text-secondary">
                      About
                    </a>
                  </li>
                  <li className="mb-2 font-heading flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <a href="#" className="ml-0 hover:ml-2 hover:text-secondary">
                      Themes
                    </a>
                  </li>
                  <li className="mb-2 font-heading flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <a href="#" className="ml-0 hover:ml-2 hover:text-secondary">
                      Faq
                    </a>
                  </li>
                  <li className="mb-2 font-heading flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <a href="#" className="ml-0 hover:ml-2 hover:text-secondary">
                      Blogs
                    </a>
                  </li>
                  <li className="mb-2 font-heading flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <a href="#" className="ml-0 hover:ml-2 hover:text-secondary">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/3">
                <h3 className="uppercase font-bold text-xl mb-4">Service</h3>
                <ul>
                  <li className="mb-2 font-heading flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <a href="#" className="ml-0 hover:ml-2 hover:text-secondary">
                      WordPress Custom Theme Development
                    </a>
                  </li>
                  <li className="mb-2 font-heading flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <a href="#" className="ml-0 hover:ml-2 hover:text-secondary">
                      Gatsby Development
                    </a>
                  </li>
                  <li className="mb-2 font-heading flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <a href="#" className="ml-0 hover:ml-2 hover:text-secondary">
                      Web Development
                    </a>
                  </li>
                  <li className="mb-2 font-heading flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <a href="#" className="ml-0 hover:ml-2 hover:text-secondary">
                      Open Source
                    </a>
                  </li>
                  <li className="mb-2 font-heading flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <a href="#" className="ml-0 hover:ml-2 hover:text-secondary">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/3">
                <h3 className="uppercase font-bold text-xl mb-4">Legal</h3>
                <ul>
                  <li className="mb-2 font-heading flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <a href="#" className="ml-0 hover:ml-2 hover:text-secondary">
                      Term Of Themes
                    </a>
                  </li>
                  <li className="mb-2 font-heading flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <a href="#" className="ml-0 hover:ml-2 hover:text-secondary">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-2 font-heading flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <a href="#" className="ml-0 hover:ml-2 hover:text-secondary">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2">
                <div>
                  <h3>Logo</h3>
                  <div className="hidden">
                    <Img
                      className="w-3/4"
                      fluid={data.placeholderImage.childImageSharp.fluid}
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <h3 className="uppercase font-bold text-xl mb-4 inline-block border-b border-secondary">
                  Connect With Us
                </h3>
                <ul className="flex">
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-facebook mr-4"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-twitter mr-4"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-instagram"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
