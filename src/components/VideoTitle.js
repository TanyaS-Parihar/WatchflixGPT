const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-gray-100 aspect-video bg-gradient-to-r from-black pt-36 px-6">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div>
        <button
          className="bg-gray-200 opacity-8
         text-black px-14 py-3  mx-3 rounded-md font-bold  hover:bg-opacity-50"
        >
          Play
        </button>
        <button className="bg-gray-700 opacity-8 text-white  px-11 py-3   rounded-md font-bold  hover:bg-opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
