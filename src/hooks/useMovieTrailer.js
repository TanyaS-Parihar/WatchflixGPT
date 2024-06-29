import { addTrailerVideo } from "../utils/moviesSlice";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useMovieTrailer = ({ movieId }) => {
  //VERY IMPORTTANT -YE UPAR moviId KO CURLY BRACES KE ANDAR LIKHNA MAT BHULNA!!
  const dispatch = useDispatch();
  const fetchUrl = "https://api.themoviedb.org/3/movie/" + movieId + "/videos?";

  const getMovieVideo = async () => {
    const data = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjYwZWRkMGY1Mjk0NjNkZjU4NmNjMmJlZmEwNTYwMSIsIm5iZiI6MTcxOTQ2MjQ1Ni44NDIxMjUsInN1YiI6IjY2N2NlNTM0ZWVjNzQzOWQwY2I5YTQ2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JeQ5KDlbriDhMod0P5DrmR3JzCa0UVLvcJWsCdXi-N4",
      },
    });

    const json = await data.json();
    console.log("imJson", json.results);
    if (json.results) {
      const filterData = json?.results?.filter(
        (video) => video.type == "Trailer"
      );

      const trailer = filterData.length ? filterData[0] : json.results[0]; // const trailerId = trailer.key
      dispatch(addTrailerVideo(trailer));
      //dispatching an action to send trailer to redux store
    }
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
