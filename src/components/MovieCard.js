import { CARD_IMG_URL } from "../utils/constants";

const MovieCard = (props) => {
  const { posterPath } = props;

  return (
    <div>
      <div className=" my-4 mx-2 w-32   hover:translate-z-4 hover:shadow-lg hover:scale-125 ease-out duration-300 delay-200">
        <img src={CARD_IMG_URL + posterPath} alt="movieCard" />
      </div>
    </div>
  );
};

export default MovieCard;
