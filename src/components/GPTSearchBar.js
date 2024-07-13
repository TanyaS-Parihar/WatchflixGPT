import React, { useEffect } from "react";
import { MOVIE_IMGS } from "../utils/constants";
import { useSelector } from "react-redux";
import language from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { useDispatch } from "react-redux";
import { addGPTMoviesResult } from "../utils/GPTSlice";
import { genAI } from "../utils/openai";
import { model } from "../utils/openai";

const GPTSearchBar = () => {
  const showGPTSearch = useSelector((store) => store.GPT.showGPTSearch);
  const languageKey = useSelector((store) => store.config.language);
  const dispatch = useDispatch();
  const GPTsearchText = useRef(null);

  //movie search in tmdb

  const handleGPTSearchClick = () => {
    // console.log(GPTsearchText.current.value);
    //now call api call using this input value
    const GPTquery =
      "Act as a Movie Recommendation Sytem and suggest some movies for the query :" +
      GPTsearchText.current.value +
      ".Give me only the names of 6 movies,comma separated like the example result given ahead. Example Result:Gadar,Rockstar,Sholay,Golmaal,Lootera,Murder";

    const GPTresult = async () => {
      const prompt = GPTquery;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      // console.log(text);
      const GPTmovies = text?.split(",");
      // console.log(GPTmovies);
      //will return an array of movie

      const promiseArray = GPTmovies.map(async (movie) => {
        const data = await fetch(
          "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjYwZWRkMGY1Mjk0NjNkZjU4NmNjMmJlZmEwNTYwMSIsIm5iZiI6MTcxOTQ2MjQ1Ni44NDIxMjUsInN1YiI6IjY2N2NlNTM0ZWVjNzQzOWQwY2I5YTQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JeQ5KDlbriDhMod0P5DrmR3JzCa0UVLvcJWsCdXi-N4",
            },
          }
        );

        const json = await data.json();

        return json;
        //console mat kro return kro
      });
      //will return 5 promises
      //to access
      const tmdbResults = await Promise.all(promiseArray);
      // console.log(tmdbResults);

      dispatch(
        addGPTMoviesResult({ movieName: GPTmovies, movieResults: tmdbResults })
      );
    };

    GPTresult();

    if (!GPTresult) return;

    //will return an array of movie

    // const promiseArray = GPTmovies.map((movie) => {
    //   searchMovieTMDB(movie);
    // });
    //will return 5 promises
    //to access
    //   const tmdbResults = await Promise.all(promiseArray);
    //   dispatch(
    //     addGPTMoviesResult({ movieName: GPTmovies, movieResults: tmdbResults })
    //   );
    // };
  };
  return (
    <div className="w-screen h-screen  bg-gradient-to-b from-purple-950 bg-gradient-to-r from-black bg-gradient-to-bl from-purple-950">
      <img className="opacity-15" src={MOVIE_IMGS} alt="shows-img" />

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute pt-[20px] flex justify-center items-center  top-36 left-1/3 rounded-md"
      >
        <input
          ref={GPTsearchText}
          className="w-[20rem] p-3 bg-black text-white rounded-md mr-2 border-red border-2 shadow-xl "
          type="text"
          placeholder={language[languageKey].GPTplaceholder}
        />

        <button
          onClick={handleGPTSearchClick}
          className=" lg:w-28 p-3 bg-orange-600 border-black border-2 shadow-xl font-extrabold rounded-md"
        >
          {language[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
