import { useState, useRef } from "react";
import HeaderIn from "./HeaderIn";
import { checkValidData } from "../utils/validate";
// import SecretButton from "./SecretButton";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { MOVIE_IMGS } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    // console.log(isSignInForm)
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //first Validate the form data
    //for that we'll make validate .js in utils

    //now to read what is in input box - on way state variable ,anothr- u can give reference of the hook
    //here useRef comes into play
    //it gives us reference of those input box
    console.log(email);
    console.log(password);

    //now we have got our email and password
    //now lets just validate the data
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);
    //if its valid then we cn sign up or sign in
    if (message) return; //if message is something return
    //if its null go on to sign up or sign in

    //sign in or sign up
    if (!isSignInForm) {
      //means ki sign up form

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      let emailValue = email.current.value;
      let passwordValue = password.current.value || "Abcd#12345";
      //sign in logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential?.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error?.code;
          const errorMessage = error?.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSecretButton = () => {
    signInWithEmailAndPassword(auth, "user11@user.com", "Abcd#12345")
      .then((userCredential) => {
        // Signed in
        const user = userCredential?.user;

        // ...
      })
      .catch((error) => {
        const errorCode = error?.code;
        const errorMessage = error?.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
  };

  return (
    <div>
      <HeaderIn />
      {/* <SecretButton /> */}
      <div className="w-50 h-30">
        <img src={MOVIE_IMGS} alt="shows-img" />
        <form onSubmit={(e) => e.preventDefault()} className=" form">
          <h1 className="font-bold text-white ml-2 my-3">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div className="form-input">
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder=" Full Name"
                className="name p-2 m-2 w-[12.5rem] bg-gray-800 text-xs text-white"
              />
            )}

            <input
              ref={email} //this email is a reference to this input box
              type="text"
              placeholder=" Email Address"
              className="input1 p-2 m-2 w-[12.5rem] bg-gray-800 text-xs text-white"
            />
            <input
              ref={password}
              type="password" //text=password krne se browser ko pta chlta h ki secure krna h
              placeholder=" Password"
              className="input2 p-2 m-2 w-[12.5rem] bg-gray-800 text-xs text-white"
            />
          </div>
          <p className="text-red-800 font-bold">{errorMessage}</p>
          <button
            //this will prevent it from submitting right away
            onClick={handleButtonClick}
            className=" secondary-btn p-2 m-2  w-[12.5rem] rounded-sm text-white font-bold bg-gradient-to-l bg-red-800 "
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            onClick={toggleSignInForm}
            className="text-white text-xs m-3 cursor-pointer underline"
          >
            {isSignInForm
              ? "Are you new to Watchflix? Sign Up Now"
              : " Already a User? Sign In "}
          </p>
        </form>
        <div>
          <p className=" absolute w-1/5 top-36 right-8 text-white text-sm font-bold bg-black bg-opacity-75 ">
            {" "}
            Special Entrance ONLY for Recruiters!
          </p>
          <button
            className=" primary-btn absolute z-10 top-10 right-7 p-2 m-2  w-[12.5rem] rounded-sm text-white font-bold bg-gradient-to-l bg-red-800 "
            onClick={handleSecretButton}
          >
            Shahi Darwaza
          </button>
          <div>
            <img
              src="https://www.freeiconspng.com/uploads/white-curved-arrow-transparent-11.png"
              className=" z-10 w-20 absolute right-56 top-10 rotate-45"
            />
            <p className=" absolute w-1/5 top-48 right-8 text-white text-sm  bg-black bg-opacity-75">
              Are you a recruiter? Avoid the sign up process and enter the site
              directly with this special Shahi Darwaza curated only for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
//-Header(lets make a diff heaer comp altogether)
//-Sign in component
