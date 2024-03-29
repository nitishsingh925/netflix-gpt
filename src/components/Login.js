import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  const handleButtonClick = async () => {
    const message = isSignInForm
      ? checkValidData(email.current.value, password.current.value)
      : checkValidData(
          email.current.value,
          password.current.value,
          name.current.value
        );

    setErrorMessage(message);

    // if error message then return
    if (message) return;

    if (!isSignInForm) {
      // Sign Up
      try {
        await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );

        await updateProfile(auth.currentUser, {
          displayName: name.current.value,
          photoURL: USER_AVATAR,
        })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
      }
    } else {
      // Sign In
      try {
        await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        // Signed in successfully, continue with the logic...
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " - " + errorMessage);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="absolute">
          <img
            className="h-screen lg:h-auto object-cover"
            src={BACKGROUND}
            alt="background"
          />
        </div>
        <form
          className="relative p-12 bg-black bg-opacity-80 w-11/12 md:w-2/6  text-white "
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
