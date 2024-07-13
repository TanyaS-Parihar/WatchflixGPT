import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSuggestions = () => {
  const { movieName, movieResults } = useSelector((store) => store?.GPT);

  const mResult = movieResults?.map((mresult) => mresult.results);
  if (!movieName) return null;
  if (!movieResults) return null;

  return (
    <div className="flex justify-center relative top-[-15rem] ">
      <div className="font-bold py-5 w-[86%] bg-white bg-opacity-99 text-2xl text-red-950 mt-2">
        {movieName?.map((mname, index) => (
          <>
            <MovieList title={mname} movies={mResult[index]} />
          </>
        ))}
      </div>
    </div>
  );
};

export default GPTSuggestions;
