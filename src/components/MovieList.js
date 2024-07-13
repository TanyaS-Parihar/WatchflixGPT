import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props;
  if (movies === null) return;

  return (
    <div>
      <div className=" mx-4 mt-3 font-bold text-[20px] ">
        {title}
        <div className="flex overflow-x-scroll no-scrollbar">
          {movies?.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                id={movie.id}
                posterPath={movie.poster_path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
