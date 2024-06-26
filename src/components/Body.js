import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Header from "./Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { removeUser } from "../utils/userSlice";
const Body = () => {
  const dispatch = useDispatch();
  console.log("i am ", dispatch);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const { uid, email, displayName } = user;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
          // ...
        } else {
          // User is signed out
          dispatch(removeUser());
        }
      },
      []
    ); //<--useeffect and inside Api is for getting information and keeping an eye on sign out  everything. Isse profile me pic aur name ko use kr paynge
  });
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
