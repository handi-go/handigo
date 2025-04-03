import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Signup() {
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
          <p className="text-white text-center w-full mt-5 text-2xl">
            Join the Community of Trusted <br /> Professionals and Satisfied
            Customers
          </p>

          <img
            className="h-full w-4/6 ml-96 mt-20"
            src="src\assets\Images\[Mockup] iPhone 15.png"
            alt=""
          />
        </div>

        <div>
          <div className="mt-20 ml-20 w-11/12">
            <h1 className="text-2xl font-semibold mb-5">Create an Account</h1>
            <p className="opacity-30 w-80 text-md">
              Become Handigo member, you'll get exlusive experiences from us.
            </p>

            <div className="w-full max-w-sm">
              <form>
                <div className="mb-4 mt-5">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    for="username">
                    Full Name
                  </label>
                  <input
                    className="border rounded-md w-full opacity-50 py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Full name"
                    required></input>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    for="email">
                    Email
                  </label>
                  <input
                    className="border rounded-md w-full opacity-50 py-2 px-3 text-gray-700 leading-light focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    required></input>
                </div>
                <div className="mb-4">
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
              </form>

              <button className="w-full bg-[#124096] mt-3 p-3 rounded-md hover:bg-[#0E3378] text-sm text-white">
                Create an account
              </button>

              <button className="border-2 text-[#124096] border-solid bg-white w-full display flex mt-3 p-3 hover:bg-[#E7ECF5] rounded-md text-sm ">
                <span className="display flex items-center gap-3 font-bold ml-24">
                  <FcGoogle /> Sign Up With Google
                </span>
              </button>

              <div className="mt-5 text-center">
                Already have an account?{" "}
                <a
                  href="login"
                  id="Login"
                  className="text-[#124096] hover:underline text-[#0E3378]">
                  log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
