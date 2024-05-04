import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = (props) => {
  const { rating = 0, totalStars = 5 } = props;

  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          {[...Array(totalStars)].map((star, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              className={i < rating ? "text-yellow-500" : "text-gray-500"}
            />
          ))}
        </div>
        <p>{`${parseFloat(rating).toFixed(1)}/${totalStars}`}</p>
      </div>
    </>
  );
};

export default Rating;
