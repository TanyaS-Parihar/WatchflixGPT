import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    // console.log(isSignInForm)
  };

  return (
    <div>
      <Header />
      <div className="w-50 h-30">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="shows-img"
        />
        <form className=" form">
          <h1 className="font-bold text-white ml-2 my-3">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder=" Full Name"
              className="p-2 m-2 w-[12.5rem] bg-gray-800 text-xs"
            />
          )}
          <input
            type="text"
            placeholder=" Email Address"
            className="p-2 m-2 w-[12.5rem] bg-gray-800 text-xs"
          />
          <input
            type="text"
            placeholder=" Password"
            className="p-2 m-2 w-[12.5rem] bg-gray-800 text-xs"
          />
          <button className="p-2 m-2  w-[12.5rem] rounded-sm text-white font-bold bg-gradient-to-l bg-red-800 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            onClick={toggleSignInForm}
            className="text-white text-xs m-3 cursor-pointer"
          >
            Are you new to Watchflix? Sign Up Now
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
//-Header(lets make a diff heaer comp altogether)
//-Sign in component
