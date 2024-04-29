import React, { useState } from "react";
import {
  faBasketball,
  faFutbol,
  faShuttleVan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeadingText = (props) => {
  const { classname } = props;
  const [image, setImage] = useState("images/Gambar Heading1.png");

  const handleIconClick = (imageName) => {
    setImage(imageName);
  };
  const 

  return (
    <>
      <div
        className="flex justify-between absolute lg:bottom-0 md:bottom-0 sm:bottom-0 lg:left-10 md:left-10 sm:left-10 lg:right-0 md:right-0 sm:right-0 mt-20 mx-5"
        style={{ zIndex: "1" }}
      >
        <h1
          className={`lg:text-5xl md:text-4xl sm:text-3xl font-semi-bold italic text-white ${classname}`}
        >
          TEMUKAN VENUE <br /> OLAHRAGA <br />
          TERBAIK.
        </h1>
        <div className="flex items-center me-10 mt-20">
          <FontAwesomeIcon
            icon={faShuttleVan}
            className="mr-5 bg-gray-200 p-2 rounded-full text-black cursor-pointer transition-all duration-300 ease-in-out"
            style={{ fontSize: "36px" }}
            onClick={() => handleIconClick("images/Gambar Heading1.png")}
          />
          <FontAwesomeIcon
            icon={faFutbol}
            className="mr-5 bg-gray-200 p-2 rounded-full text-black cursor-pointer transition-all duration-300 ease-in-out"
            style={{ fontSize: "36px" }}
            onClick={() => handleIconClick("images/Gambar Heading2.png")}
          />
          <FontAwesomeIcon
            icon={faBasketball}
            className="bg-gray-200 p-2 rounded-full text-black cursor-pointer transition-all duration-300 ease-in-out"
            style={{ fontSize: "36px" }}
            onClick={() => handleIconClick("images/Gambar Heading3.png")}
          />
        </div>
      </div>
      <img
        src={image}
        alt="heading"
        className="w-full h-screen transition-all duration-300 ease-in-out"
      />

      <div>
        <div className="w-full h-screen mt-20">
          <div className="w-2/4">
            <h1 className="text-4xl mb-5 font-semibold">
              Temukan venue olahraga di Tangerang yang sesuai dengan anda.
            </h1>
            <p>
              Website ini hadir untuk memastikan pengalaman Anda dalam menyewa
              lapangan olahraga menjadi lebih menyenangkan dan efisien. Ayo
              mulai jelajahi opsi lapangan olahraga yang tersedia dan buat
              pengalaman olahraga Anda lebih memuaskan!
            </p>
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  );
};

export default HeadingText;
