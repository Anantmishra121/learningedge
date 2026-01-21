import React from "react"

import Footer from "../components/common/Footer"
import ContactDetails from "../components/core/ContactPage/ContactDetails"
import ContactForm from "../components/core/ContactPage/ContactForm"

const Contact = () => {
  return (
    <div className="min-h-screen bg-richblack-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-richblack-800 via-richblack-900 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-maxContent px-2 py-10 text-center text-white">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Get in <span className="text-blue-400">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-richblack-300 md:text-xl">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mx-auto mt-5 sm:mt-10 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  )
}

export default Contact