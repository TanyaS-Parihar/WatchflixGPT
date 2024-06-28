import HeaderIn from "./HeaderIn";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.GPT.showGPTSearch);
  console.log("showGPTSearch", showGPTSearch);
  //the above value will be true or false
  //fetch api hook
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div className="-mt-3 bg-gray-700 ">
      <HeaderIn />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
