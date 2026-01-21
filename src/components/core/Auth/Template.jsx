
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import Img from './../../common/Img';


function Template({ title, description1, description2, image, formType }) {

  return (
    <div className="min-h-screen bg-richblack-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-richblack-800/60 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-richblack-700/50 hover:border-richblack-600/70 transition-all duration-300 hover:shadow-yellow-400/10">
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-richblack-5 mb-4 bg-gradient-to-r from-richblack-5 to-richblack-100 bg-clip-text">
                {title}
              </h1>
              <p className="text-lg leading-relaxed text-richblack-100 mb-8">
                <span>{description1}</span>{" "}
                <span className="font-edu-sa font-bold italic text-blue-100">
                  {description2}
                </span>
              </p>

              {formType === "signup" ? <SignupForm /> : <LoginForm />}
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <Img
                src={image}
                alt={formType}
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Template