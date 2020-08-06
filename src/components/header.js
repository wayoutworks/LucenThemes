import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <header className="bg-white mb-4 b-2">
      <div className="container">
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-bold text-4xl tracking-tight text-gray-900 w-56">
              <img src="https://user-images.githubusercontent.com/37496983/88413968-c0000900-cdf9-11ea-8d93-017b54823510.png" />
            </span>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => toggleExpansion(!isExpanded)}
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } w-full block lg:flex-grow-0 flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-sm font-medium">
              <Link
                to={`/page-2`}
                href="#responsive-header"
                className="block lg:inline-block lg:mt-0 mr-4 text-gray-600 hover:text-gray-800"
              >
                WordPress Themes
              </Link>
              <Link
                to={`/page-2`}
                className="block lg:inline-block lg:mt-0 mr-4 text-gray-600 hover:text-gray-800"
              >
                Blog
              </Link>
              <Link
                to={`/page-2`}
                className="block lg:inline-block lg:mt-0 mr-4 text-gray-600 hover:text-gray-800"
              >
                About us
              </Link>
              <Link
                to={`/page-2`}
                className="block lg:inline-block lg:mt-0 mr-4 text-gray-600 hover:text-gray-800"
              >
                Support
              </Link>
            </div>
            <div>
              <a
                href="#"
                className="inline-block text-sm px-6 py-4 leading-none rounded-full text-gray-100 font-bold font-heading bg-gray-800"
              >
                Check Themes
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
