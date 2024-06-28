import { useEffect } from "react";

import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
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
    console.log("upcoming", json.results);
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
