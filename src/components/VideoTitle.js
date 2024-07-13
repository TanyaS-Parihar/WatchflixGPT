import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovieVideo } from "../utils/moviesSlice";
import { addMovieDetails } from "../utils/moviesSlice";

const VideoTitle = ({ title, overview, id }) => {
  const dispatch = useDispatch();
  const handleClickMovieDetails = () => {
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

  return (
    <div className="absolute text-gray-100 aspect-video bg-gradient-to-r from-black pt-36 px-6">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <Link to="/movie">
          <button
            className="bg-gray-200 opacity-8
         text-black px-14 py-3  mx-3 rounded-md font-bold  hover:bg-opacity-50"
          >
            Play
          </button>
        </Link>
        <Link to="/movie">
          <button
            onClick={handleClickMovieDetails}
            className="bg-gray-700 opacity-8 text-white  px-11 py-3   rounded-md font-bold  hover:bg-opacity-70"
          >
            More Info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;
