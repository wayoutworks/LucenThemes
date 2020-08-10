import React from "react"

const GetStart = () => {
  return (
    <section id="get-start" className="my-32">
      <div className="container">
        <div className="flex justify-between items-center flex-wrap lg:flex-no-wrap">
          <div className="w-full px-5 lg:w-1/2 lg:px-0">
            <h1 className="text-4xl font-bold">Ready to get started?</h1>
            <p className="text-lg font-normal text-gray-500">
              Get in touch or create an account.
            </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="flex justify-end">
              <a
                className="border-2 border-secondary bg-white hover:bg-secondary px-8 py-5 leading-none rounded-full mr-4 uppercase font-heading font-bold text-xs text-gray-900 hover:text-gray-100"
                href="#"
              >
                contact support
              </a>
              <a
                className="border-2 border-secondary bg-white hover:bg-secondary px-8 py-5 leading-none rounded-full mr-4 uppercase font-heading font-bold text-xs text-gray-900 hover:text-gray-100"
                href="#"
              >
                download theme
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStart
