import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { removeUser } from "../utils/userSlice";
// import appStore from "../utils/appStore";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import SecretButton from "./SecretButton";
import { LOGO, LOGO2, USER_AVATAR } from "../utils/constants";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
const HeaderIn = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dyvkxkecp",
    },
  });
  const myImage = cld.image("docs/models");
  myImage.resize(fill().height(60));

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []); //<--useeffect and inside Api is for getting information and keeping an eye on sign out  everything. Isse profile me pic aur name ko use kr paynge

  const user = useSelector((store) => store.user);

  return (
    <div>
      <div className="flex justify-between">
        <div className="absolute z-[10] mx-[-35px] py-3 pt-4  bg-gradient-to-b w-screen from-black ">
          <AdvancedImage cldImg={myImage} />
          {/* <img className="w-[200px] " src={LOGO} alt="logo" /> */}
        </div>
        {user !== null && (
          <div className=" absolute top-4 right-[40px] z-[99] px-1 py-1 mt-2 flex gap-2">
            <button
              className=" bg-red-800 p-2 rounded-md  text-white z-10"
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    console.log("sign in/up");

                    // Sign-out successful.
                  })
                  .catch((error) => {
                    // An error happened.
                    console.log(error.message);
                  });
              }}
            >
              Sign Out
            </button>

            <img className="h-10 w-10 rounded-2xl" src={USER_AVATAR} />
          </div>
        )}
      </div>
    </div>
  );
};
export default HeaderIn;
