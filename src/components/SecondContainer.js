import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  console.log("heyo", movies.addPopularMovies);

  return (
    movies && (
      <div className="bg-gray-800 text-gray-50">
        <div className="mt-72 relative top-10 z-10  ">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Top-Rated"} movies={movies?.addTopRatedMovies} />
          <MovieList title={"Popular"} movies={movies?.addPopularMovies} />

          <MovieList title={"Upcoming"} movies={movies?.addUpcomingMovies} />

          <MovieList
            title={"Recommmended For You"}
            movies={movies?.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondContainer;
