import { CARD_IMG_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import HeaderIn from "./HeaderIn";
import { useEffect } from "react";
import VideoFull from "./VideoFull";
const MovieDetails = () => {
  const movies = useSelector((store) => store?.movies?.addMovieDetails);

  const MovieVideo = useSelector((store) => store?.movies?.addMovieVideo);

  console.log(movies);
  console.log("MovieVideo", MovieVideo);
  if (!movies) return null;
  if (!MovieVideo) return null;
  // const movieDetails = movies.map((movie) => movie.backdrop_path);
  // console.log("mdeet", movieDetails);

  return (
    <div className="flex justify-center bg-black opacity-90 ">
      <div>
        <button
          onClick={() => {
            window.location.href =
              "https://www.youtube.com/watch?v=" + MovieVideo?.key;
          }}
          className="absolute right-4 top-5 text-sm bg-gray-200 opacity-8
         text-black px-6 py-2 h-9   mx-3 rounded-md font-bold  hover:bg-opacity-80"
        >
          Watch Trailer in Youtube
        </button>
        <div className="h-36">
          <iframe
            className="w-screen aspect-video "
            src={
              "https://www.youtube.com/embed/" +
              MovieVideo?.key +
              "?si=mA_uEBK5Ot7tSq2n?&autoplay=1&mute=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        {/* <img
          className="bg-gradient-to-r from black w-[90vw] m-6 h-[70vh] opacity-70 text-white"
          src={CARD_IMG_URL + movies?.backdrop_path}
          alt="backdrop img"
        /> */}
        <img
          className="relative top-[85px] left-[50px] w-[15rem] shadow-md shadow-gray-200"
          src={CARD_IMG_URL + movies?.poster_path}
          alt="poster img"
        />
        <div className="pl-4 text-white w-[50rem] bg-black opacity-90  relative -top-[40vh] left-[27%]">
          <div className="text-5xl font-bold py-4">
            {movies?.original_title !== movies?.title ? (
              <h1>
                {movies?.title} | {movies?.original_title}
              </h1>
            ) : (
              <h1 className="text-5xl ">{movies?.title}</h1>
            )}

            <h3 className="text-3xl my-5 font-bold pb-3">{movies?.tagline}</h3>
            <div className="flex">
              <div>
                <p className="text-xl pb-2 pl-2 bg-gray-600 text-gray-50 w-11 rounded-md ">
                  {movies?.original_language}
                </p>
                <p className="text-2xl pb-2">{movies?.status}</p>
                <p className="text-xl py-2 font-normal">
                  {"Duration:" + movies?.runtime + "mins"}
                </p>
              </div>
              <div className="flex">
                <button
                  className="text-sm bg-gray-200 opacity-8
         text-black px-6 py-2 h-9 w-20  mx-3 rounded-md font-bold  hover:bg-opacity-50"
                >
                  Play
                </button>
                <button
                  onClick={() => {
                    window.location.href = "#section2";
                  }}
                  href="#section2"
                  className="text-sm bg-gray-700 opacity-8 text-white  px-6 py-2 h-9 w-[150px] mr-3 rounded-md font-bold  hover:bg-opacity-70"
                >
                  More Info
                </button>
                <button className="text-sm bg-gray-700 opacity-8 text-white  px-6 py-2 h-9 w-[150px]  rounded-md font-bold  hover:bg-opacity-70">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="section2" className="text-white -m-40 mx-5 mb-2 ">
          <div>
            <div className="text-4xl font-bold py-5">
              {movies?.original_title !== movies?.title ? (
                <h1>
                  {movies?.title} | {movies?.original_title}
                </h1>
              ) : (
                <h1 className="text-3xl ">{movies?.title}</h1>
              )}
            </div>
            <p className="text-3xl font-medium mb-2"> Overview</p>
            <p className="text-2xl pb-2">{movies?.overview}</p>
          </div>

          <p className="text-3xl mt-3">
            <em>Wanna watch??</em>
          </p>
          <button className="mt-4 py-2 px-3 bg-yellow-600 text-2xl font-bold ">
            Buy subscription Now
          </button>
        </div>
        {/* <div>
          <VideoFull />
        </div> */}
      </div>
    </div>
  );
};

export default MovieDetails;
