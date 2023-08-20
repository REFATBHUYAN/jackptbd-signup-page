import { useState } from "react";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function App() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <>
      {/* Sign Up Page */}
      <div className="w-full md:w-[390px] mx-auto border bg-[#303030] overflow-hidden drop-shadow-lg">
        <div className="bg-[#FFFFFF] mt-32 p-6 rounded-tl-[48px] rounded-tr-[48px] drop-shadow-lg shadow-inner">
          {/* page header section */}
          <div className="flex gap-9 items-center mb-11">
            <FaArrowLeft className="w-6 h-6 mr-5"></FaArrowLeft>
            <h1 className="font-bold text-2xl text-center">Create Account</h1> 
          </div>
          {/* form data input section */}
          <form>
            <div className="mb-6">
              <label
                htmlFor="text"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="email"
                className="border border-[#DCF7C5] text-sm rounded-lg w-full p-2.5"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="border border-[#DCF7C5] text-sm rounded-lg w-full p-2.5"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mobile Number
              </label>
              <input
                type="tel"
                id="phone"
                className="border border-[#DCF7C5] text-sm rounded-lg w-full p-2.5"
                placeholder="Enter your mobile number"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <div className="flex w-full">
                <input
                  type={show ? "text" : "password"}
                  id="password"
                  className="border border-[#DCF7C5] text-sm rounded-lg w-full p-2.5"
                  placeholder="Enter the password"
                  required
                />
                <button onClick={() => setShow(!show)} type="button" className="-ml-8 text-[#0E9A0E]">
                {show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm Password
              </label>
              <div className="flex w-full">
                <input
                  type={show2 ? "text" : "password"}
                  id="password"
                  className="border border-[#DCF7C5] text-sm rounded-lg w-full p-2.5"
                  placeholder="Enter the password"
                  required
                />
                <button onClick={() => setShow2(!show2)} type="button" className="-ml-8 text-[#0E9A0E]">
                {show2 ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </button>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 accent-green-600"
                  required
                />
              </div>
              <label htmlFor="terms" className="ml-2 text-sm font-medium">
                I agree with the terms and conditions
              </label>
            </div>
            {/* google login button */}
            <button className="w-full p-2.5 bg-[#ECF6E3] flex gap-4 items-center rounded-md my-4">
              {" "}
              <FcGoogle className="w-6 h-6"></FcGoogle> Sign Up with Google
            </button>
            {/* sign up and input submit button */}
            <button
              type="submit"
              className="w-full bg-[#0E9A0E] py-3 font-bold text-white rounded-md mt-5 hover:text-[#ECF6E3]"
            >
              Sign Up
            </button>
            <p className="text-center mt-4">
              Already have an account ?
              <button className="text-[#0E9A0E] pl-1"> Login</button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
