import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.GPT);

  if (!movieNames) return null;

  //we'll reuse the movieList component
  return (
    <div className="p-4 m-[200px] text-48 bg-black text-red">
      <h1>{movieNames[0]}</h1>
      <div>
        <MovieList title={movieNames[0]} movies={movieResults[0]} />
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
