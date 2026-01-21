import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sendOtp } from "../../../services/operations/authAPI"
import { setSignupData } from "../../../slices/authSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"
import Tab from "../../common/Tab"



function SignupForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // student or instructor
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.STUDENT);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));

  };

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match. Please try again.")
      return;
    }
    const signupData = {
      ...formData,
      accountType,
    };

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData));
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate));

    // Reset form data
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setAccountType(ACCOUNT_TYPE.STUDENT);
  };

  // data to pass to Tab component
  const tabData = [
    {
      id: 1,
      tabName: "Student",
      type: ACCOUNT_TYPE.STUDENT,
    },
    {
      id: 2,
      tabName: "Instructor",
      type: ACCOUNT_TYPE.INSTRUCTOR,
    },
  ];

  return (
    <div className="mt-4">
      {/* Tab */}
      <Tab tabData={tabData} field={accountType} setField={setAccountType} />

      {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div className="flex flex-col">
            <label className="text-richblack-5 text-sm font-medium mb-2">
              First Name <span className="text-pink-200">*</span>
            </label>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"
              className="w-full rounded-lg bg-richblack-800 p-3 text-richblack-5 outline-none border border-richblack-700 focus:border-yellow-50 focus:ring-2 focus:ring-yellow-50/20 transition-all duration-200 placeholder:text-richblack-400"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="text-richblack-5 text-sm font-medium mb-2">
              Last Name <span className="text-pink-200">*</span>
            </label>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"
              className="w-full rounded-lg bg-richblack-800 p-3 text-richblack-5 outline-none border border-richblack-700 focus:border-yellow-50 focus:ring-2 focus:ring-yellow-50/20 transition-all duration-200 placeholder:text-richblack-400"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="flex flex-col">
          <label className="text-richblack-5 text-sm font-medium mb-2">
            Email Address <span className="text-pink-200">*</span>
          </label>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="w-full rounded-lg bg-richblack-800 p-3 text-richblack-5 outline-none border border-richblack-700 focus:border-yellow-50 focus:ring-2 focus:ring-yellow-50/20 transition-all duration-200 placeholder:text-richblack-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Create Password */}
          <div className="flex flex-col relative">
            <label className="text-richblack-5 text-sm font-medium mb-2">
              Create Password <span className="text-pink-200">*</span>
            </label>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="w-full rounded-lg bg-richblack-800 p-3 pr-12 text-richblack-5 outline-none border border-richblack-700 focus:border-yellow-50 focus:ring-2 focus:ring-yellow-50/20 transition-all duration-200 placeholder:text-richblack-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-10 text-richblack-400 hover:text-richblack-200 transition-colors duration-200"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col relative">
            <label className="text-richblack-5 text-sm font-medium mb-2">
              Confirm Password <span className="text-pink-200">*</span>
            </label>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="w-full rounded-lg bg-richblack-800 p-3 pr-12 text-richblack-5 outline-none border border-richblack-700 focus:border-yellow-50 focus:ring-2 focus:ring-yellow-50/20 transition-all duration-200 placeholder:text-richblack-400"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-10 text-richblack-400 hover:text-richblack-200 transition-colors duration-200"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 mx-auto block rounded-lg bg-yellow-50 py-2 px-4 font-semibold text-richblack-900 hover:bg-yellow-100 focus:bg-yellow-100 focus:ring-2 focus:ring-yellow-50/50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm