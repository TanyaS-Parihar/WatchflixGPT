import { useEffect } from "react";

import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  // const addpopularMovies = useSelector(
  //   (store) => store.movies.addPopularMovies
  // );
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en&page=1",
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
    // console.log("popular", json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
