import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  const handleButtonClick = () => {
    const message = isSignInForm
      ? checkValidData(email.current.value, password.current.value)
      : checkValidData(
          email.current.value,
          password.current.value,
          name.current.value
        );

    setErrorMessage(message);
    console.log(message);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="background"
          />
        </div>
        <form
          className="relative p-12 bg-black bg-opacity-80 w-3/12  text-white "
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              ref={name}
              placeholder="Full Name"
              className="p-2 m-2 w-full border border-white rounded-sm  bg-black bg-opacity-0  "
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email Address"
            className="p-2 m-2 w-full border border-white rounded-sm  bg-black bg-opacity-0  "
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            autoComplete="off"
            className="p-2 m-2 w-full border border-white rounded-sm  bg-black bg-opacity-0"
          />
          <p className="text-red-700 font-bold text-lg ">{errorMessage}</p>
          <button
            className="p-2 m-2 bg-red-700 w-full"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already a member? Sign in now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
