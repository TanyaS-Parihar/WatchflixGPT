import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";
import { useSelector } from "react-redux";
const GPTSearch = () => {
  const { movieName, movieResults } = useSelector((store) => store.GPT);

  return (
    <div>
      <div>
        <GPTSearchBar />
        <GPTSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
