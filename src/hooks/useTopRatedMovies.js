import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  // const addTopRatedMovies = useSelector(
  //   (store) => store.movies.addTopRatedMovies
  // );
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=9f60edd0f529463df586cc2befa05601&page=1",
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
    console.log("TopRated", json.results);
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
