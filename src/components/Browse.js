import HeaderIn from "./HeaderIn";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //fetch api hook
  useNowPlayingMovies();

  return (
    <div className="flex justify-between">
      <HeaderIn />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
export default Browse;
