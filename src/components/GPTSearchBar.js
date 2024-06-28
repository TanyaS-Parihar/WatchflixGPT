import React from "react";
import { MOVIE_IMGS } from "../utils/constants";
import { useSelector } from "react-redux";
import language from "../utils/languageConstants";

const GPTSearchBar = () => {
  const showGPTSearch = useSelector((store) => store.GPT.showGPTSearch);
  const languageKey = useSelector((store) => store.config.language);

  return (
    <div className="w-screen h-screen  bg-gradient-to-b from-purple-950 bg-gradient-to-r from-black bg-gradient-to-bl from-purple-950">
      <img className="opacity-15" src={MOVIE_IMGS} alt="shows-img" />
      <form className="pt-[20px] flex justify-center items-center absolute top-36 right-[25rem] rounded-md">
        <input
          className="w-[20rem] p-3 bg-black text-white rounded-md mr-2 border-red border-2 shadow-xl "
          type="text"
          placeholder={language[languageKey].GPTplaceholder}
        />

        <button className=" w-28 p-3 bg-orange-600 border-black border-2 shadow-xl font-extrabold rounded-md">
          {language[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
