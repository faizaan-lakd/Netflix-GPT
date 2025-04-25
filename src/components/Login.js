import React, { useState } from "react";
import { Header } from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="w-4/12 absolute p-12 my-28 bg-black bg-opacity-80 mx-auto right-0 left-0 text-white rounded-xl">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-700 bg-opacity-60"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-3 my-4 w-full bg-gray-700 bg-opacity-60"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-700 bg-opacity-60"
        />
        <button className="p-3 my-6 bg-red-700 w-full rounded-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
