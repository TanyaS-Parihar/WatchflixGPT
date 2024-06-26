import { useNavigate } from "react-router";

const SecretButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/browse");
        }}
        className=" absolute top-10 right-7 p-2 m-2  w-[12.5rem] rounded-sm text-white font-bold bg-gradient-to-l bg-red-800 "
      >
        Shahi Darwaza
      </button>
    </div>
  );
};

export default SecretButton;
