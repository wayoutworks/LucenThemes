import React from "react"
import { useStaticQuery, grphql, graphql } from "gatsby"
import Img from "gatsby-image"

const Features = () => {
  return (
    <section id="features" className="mt-40 mb-40 lg:p-0 px-5">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center mb-4">
          <div className="lg:w-1/3 w-full">
            <div className="lg:max-w-sm max-w-full  overflow-hidden bg-white hover:bg-gray-100 card hover:shadow-none hover:rounded-none px-6 py-4 lg:mb-0 mb-10 flex flex-col cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-heart text-blue-400 mt-5 p-2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <h3 className="font-bold mt-5">Creative UI/UX</h3>
              <p className="text-gray-600 mt-5 mb-5">
                Serspiciatis unde omnis iste natus error sit doloremque
                laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            <div className="lg:max-w-sm max-w-full overflow-hidden bg-white hover:bg-gray-100 card hover:shadow-none hover:rounded-none px-6 py-4 lg:mb-0 mb-10 flex flex-col cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-maximize-2 text-blue-400 mt-5 p-2"
              >
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
              <h3 className="font-bold mt-5">Flexibility</h3>
              <p className="text-gray-600 mt-5 mb-5">
                Serspiciatis unde omnis iste natus error sit doloremque
                laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            <div className="lg:max-w-sm max-w-full overflow-hidden bg-white hover:bg-gray-100 card hover:shadow-none hover:rounded-none px-6 py-4 lg:mb-0 mb-10 flex flex-col cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-git-branch text-blue-400 mt-5 p-2"
              >
                <line x1="6" y1="3" x2="6" y2="15"></line>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
              </svg>
              <h3 className="font-bold mt-5">Easy Code</h3>
              <p className="text-gray-600 mt-5 mb-5">
                Serspiciatis unde omnis iste natus error sit doloremque
                laudantium, totam rem aperiam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
