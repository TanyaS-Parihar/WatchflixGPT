import { useNavigate } from "react-router";
import Login from "./Login";
const SecretButton = () => {
  const navigate = useNavigate();
  const input1 = document.getElementsByClassName("input1");
  const input2 = document.getElementsByClassName("input2");
  const name = document.getElementsByClassName("name");

  return (
    <div>
      <button
        className=" primary-btn absolute z-10 top-10 right-7 p-2 m-2  w-[12.5rem] rounded-sm text-white font-bold bg-gradient-to-l bg-red-800 "
        onClick={() => {
          // console.log("shahi");

          // let newEmail = input1[0].value;
          // console.log(newEmail);

          // newEmail = "userr@user.com";
          // console.log("2", newEmail);

          // let newPassword = input2[0].value;
          // console.log(newPassword);

          // newPassword = "Abc#12345";
          // console.log("2", newPassword);
          // document.querySelector("secondary-btn")[0].click();
          // // secBtn.click();
          navigate("/browse");
        }}
      >
        Shahi Darwaza
      </button>
    </div>
  );
};

export default SecretButton;
