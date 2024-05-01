import React from "react";
import Rating from "../../elements/rekomendasi/rating";
const CardRekomendasi = (props) => {
    const  { img1 = "images/Rekomendasi Venue1.png",
            img2 = "images/Rekomendasi Venue2.png",
            img3 = "images/Rekomendasi Venue3.png"} = props;
    return (
      <div>
        <img1 src={img1} />
      </div>
  )
};

export default CardRekomendasi;
