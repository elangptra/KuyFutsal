import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating = 0, totalStars = 5 }) => {
  // Render bintang sesuai peringkat
  const renderStars = () => {
    return [...Array(totalStars)].map((_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={index < rating ? "text-yellow-500" : "text-gray-500"}
      />
    ));
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between">{renderStars()}</div>
      <p>{`${parseFloat(rating).toFixed(1)}/${totalStars}`}</p>
    </div>
  );
};

export default Rating;
