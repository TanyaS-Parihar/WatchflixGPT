import HeaderIn from "./HeaderIn";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";

import SecondContainer from "./SecondContainer";
import usePopularMovies from "../hooks/usePopularMovies";
const Browse = () => {
  //fetch api hook
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div className="-mt-3 bg-gray-700 ">
      <HeaderIn />
      <div>
        <MainContainer />
        <SecondContainer />
      </div>
    </div>
  );
};
export default Browse;
