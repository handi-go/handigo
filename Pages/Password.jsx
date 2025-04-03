import React from "react";
import Signup from "./Signup";

export default function Password() {
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
          <p className="text-white text-center mt-5 w-full text-2xl">
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
            <h1 className="text-3xl font-bold mb-5 text-center">
              Reset your password
            </h1>
            <p className="opacity-30 w-80 text-md">
              Enter the email address associated with your account, and we'll
              send you a code to reset your password.
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
              </form>

              <button className="w-full bg-[#124096] mt-3 p-3 rounded-md hover:bg-[#0E3378] text-sm text-white">
                Send Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
