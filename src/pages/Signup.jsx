// Signup Page Component
import signupImg from "../assets/Images/signup_img.png"
import Template from "../components/core/Auth/Template"

function Signup() {
  // Render signup form using reusable Template component
  return (
    <Template
      title="Your Edge Starts Here"
      description1="join a community of learners pushing boundaries and building futures"
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup