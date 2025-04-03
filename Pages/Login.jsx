import React from "react";
import { FcGoogle } from "react-icons/fc";
import Signup from "./Signup";

export default function Login() {
  return (
    <div>
      <div className="display flex">
        <div className="bg-[#124096] h-screen w-1/2 overflow-hidden">
          <img
            className="w-40 mt-16 ml-24"
            src="src\assets\Images\HANDIGO LOGO.png"
            alt=""
          />

          <h1 className="text-white text-center mt-16 text-3xl font-bold">
            Handigo.
          </h1>

          <p className="text-white text-center mt-5  text-2xl">
            Welcome Back! Your Next <br /> Connection Awaits
          </p>

          <img
            className="h-full w-4/6 ml-96 mt-20"
            src="src\assets\Images\[Mockup] iPhone 15.png"
            alt=""
          />
        </div>

        <div>
          <div className="mt-20 ml-20 w-11/12">
            <h1 className="text-2xl font-semibold mb-5">Welcome</h1>
            <p className="opacity-30 w-80 text-md">
              Log in now and get back to enjoying seamless sevice connection
              tailored to your needs.
            </p>

            <div className="w-full max-w-sm">
              <form>
                <div className="mb-4 mt-5">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    for="email">
                    Email
                  </label>
                  <input
                    className="border rounded-md w-full opacity-50 py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Email address"
                    required></input>
                </div>
                <div className="mb-1">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    for="password">
                    Password
                  </label>
                  <input
                    className="border rounded-md w-full opacity-50 py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Password"
                    required></input>
                </div>

                <button>
                  <a
                    href="password"
                    id="password"
                    className="text-xs text-gray-700 mb-4 hover:text-[#124096] opacity-50">
                    Forgot Password?
                  </a>
                </button>
              </form>

              <button className="w-full bg-[#124096] mt-3 p-3 rounded-md hover:bg-[#0E3378] text-sm text-white">
                Login
              </button>

              <button className="border-2 border-solid bg-white w-full display flex mt-3 p-3 hover:bg-[#E7ECF5] rounded-md text-sm ">
                <span className="display flex text-[#124096] items-center gap-3 font-bold ml-24">
                  <FcGoogle /> Login With Google
                </span>
              </button>

              <div className="mt-5 text-center">
                Already have an account?{" "}
                <a
                  href="Signup"
                  id="Signup"
                  className="text-[#124096] hover:underline text-[#0E3378]">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
