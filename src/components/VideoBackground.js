// import { API_OPTIONS } from "../utils/constants";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = (movieId) => {
  console.log("movieId", movieId);

  const trailerVideo = useSelector((store) => store?.movies.addTrailerVideo);

  //it will fetch the video api,call it using useeffect,and dispatch the json.result to trailer and ddispatch trailer to redux store
  useMovieTrailer(movieId);

  return (
    <div className="h-36">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?si=mA_uEBK5Ot7tSq2n?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
