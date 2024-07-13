import { Link } from "react-router-dom";
import { CARD_IMG_URL } from "../utils/constants";
import { addMovieVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../utils/moviesSlice";

const MovieCard = ({ posterPath, id }) => {
  const dispatch = useDispatch();
  const handleImageClick = () => {
    console.log("key id", id);

    const fetchMovieVideoDetails = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos?",
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
      console.log("ho gyi api call", json);
      if (json.results) {
        const filterData = json?.results?.filter(
          (video) => video.type == "Trailer"
        );
        const video = filterData.length ? filterData[0] : json.results[0];
        dispatch(addMovieVideo(video));
      }
    };
    const fetchDetails = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
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
      console.log("ho gyi api call", json);

      dispatch(addMovieDetails(json));
    };
    fetchDetails();
    fetchMovieVideoDetails();
  };

  if (!posterPath) return null;
  return (
    <div>
      <div className=" my-4 mx-2 w-32   hover:translate-z-4 hover:shadow-lg hover:scale-125 ease-out duration-300 delay-200">
        <Link to="/movie">
          <img
            onClick={handleImageClick}
            className="hover:cursor-pointer"
            src={CARD_IMG_URL + posterPath}
            alt="movieCard"
          />
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
