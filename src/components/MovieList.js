import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props;
  if (movies === null) return;

  return (
    <div className="overflow-x-scroll no-scrollbar">
      <div className=" mx-4 mt-3 font-bold text-[20px] ">
        {title}
        <div className="flex ">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
