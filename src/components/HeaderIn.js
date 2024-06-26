import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
// import { removeUser } from "../utils/userSlice";
// import appStore from "../utils/appStore";
// import { useDispatch } from "react-redux";

const HeaderIn = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const user = useSelector((store) => store.auth.currentUser);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b w-screen from-black ">
      <img
        className="w-[150px]"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <div>
        <button
          className=" bg-red-950 p-2 m-12 text-white z-10"
          onClick={() => {
            signOut(auth)
              .then(() => {
                navigate("/");
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

        <img
          className="h-10 w-10 rounded-2xl"
          src="https://static.vecteezy.com/system/resources/previews/020/589/604/non_2x/simple-round-user-icon-flat-vector.jpg"
        />
      </div>
    </div>
  );
};

export default HeaderIn;
