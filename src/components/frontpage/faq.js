import React from "react"

const FAQ = () => {
  return (
    <section id="faq" className="mt-40">
      <div className="container">
        <div className="w-4/5 ml-auto mr-auto">
          <div className="flex justify-center text-center mb-16">
            <div className="w-full">
              <h1 className="text-4xl font-extrabold">
                Frequently Asked Questions
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-no-wrap">
            <div className="w-full lg:w-1/2 mb-20 p-5">
              <h4 className="mb-1 font-bold">
                Why your all products are Open Source?
              </h4>
              <p className="text-gray-700">
                We get alot from Open Source Community and that's our way of
                giving back.
              </p>
            </div>
            <div className="w-full lg:w-1/2 mb-20 p-5">
              <h4 className="mb-1 font-bold">
                Where can I get documentation of Agility WP Theme?
              </h4>
              <p className="text-gray-700">
                Yes, you can check all Themes and
                <a href="https://doc.lucenthemes.com">doc.lucenthemes.com</a>.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-no-wrap">
            <div className="w-full lg:w-1/2 mb-20 p-5">
              <h4 className="mb-1 font-bold">
                Where to look for custom development task?
              </h4>
              <p className="text-gray-700">
                You can contact <a href="wayoutworks.in">Way Out Works</a> for
                all custom developemnt or designing works.
              </p>
            </div>
            <div className="w-full lg:w-1/2 mb-20 p-5">
              <h4 className="mb-1 font-bold">
                Do you offer support for Free themes?
              </h4>
              <p className="text-gray-700">
                Yes, We do out team provide support for all of our products
                25x7, although we provide some proporty support if you choose
                any premium theme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
