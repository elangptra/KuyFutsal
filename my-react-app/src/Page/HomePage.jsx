import Navbar from "../components/elements/navbar/navbar";
import React, { useState } from "react";
import Rating from "../components/elements/rekomendasi/rating";
import Footer from "../components/elements/footer";
import {
  faBasketball,
  faBookmark,
  faFutbol,
  faRunning,
  faSearch,
  faShuttleVan
} from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";

const HomePage = (props) => {
  const { classname } = props;
  const [image, setImage] = useState("images/Gambar Heading1.png");

  const handleIconClick = (imageName) => {
    setImage(imageName);
  };

  const {
    img = "images/temukan venue 1.png",
    img2 = "images/temukan venue 2.png",
    img3 = "images/temukan venue 3.png",
  } = props;

  const rekomendasi = [
    {
      id: 1,
      img: "images/Rekomendasi Venue 1.png",
      title: "Jala Futsal",
      rating: 4,
    },
    {
      id: 2,
      img: "images/Rekomendasi Venue 2.png",
      title: "Lapangan Basket Blok C Sekneg",
      rating: 5,
    },
    {
      id: 3,
      img: "images/Rekomendasi Venue 3.png",
      title: "Agape Badminton Club Hall",
      rating: 4,
    },
    {
      id: 4,
      img: "images/Rekomendasi Venue 4.png",
      title: "Rajawali Futsal",
      rating: 4,
    },
    {
      id: 5,
      img: "images/Rekomendasi Venue 5.png",
      title: "Lapangan Tennis & Basket Puspita Loka",
      rating: 4,
    },
    {
      id: 6,
      img: "images/Rekomendasi Venue 6.png",
      title: "Guna Badminton",
      rating: 4,
    },
  ];
  const kebahagian = [
    {
      id: 1,
      icon: faSearch,
      title: "Cari",
      desc: "Temukan Lapangan Olahraga Yang Anda Inginkan.",
    },
    {
      id: 2,
      icon: faBookmark,
      title: "Sewa",
      desc: "Pilih Kategori Lapangan Dan Atur Jadwal Anda.",
    },
    {
      id: 3,
      icon: faRunning,
      title: "Nikmati",
      desc: "Nikmati Kesenangan Anda Saat Bermain.",
    },
  ];

 

  return (
    <>
      <Navbar />
      <div className=" mx-5">
        <div
          className="flex justify-between absolute md:bottom-0 sm:bottom-0 lg:left-10  md:left-10 sm:left-10 lg:right-0 md:right-0 sm:right-0 mx-5"
          style={{ zIndex: "1" }}
        >
          <h1
            className={`lg:text-5xl md:text-4xl sm:text-3xl md:mt-[-200px] sm:mt-[-330px] font-semi-bold italic text-white ${classname}`}
          >
            TEMUKAN VENUE <br /> OLAHRAGA <br />
            TERBAIK.
          </h1>
          <div className="flex items-center lg:me-10 md:mt-[-200px] sm:me-10 sm:mt-[-480px]">
            <FontAwesomeIcon
              icon={faShuttleVan}
              className="mr-5 bg-gray-200 lg:size-10 md:size-8 sm:size-5 p-2 rounded-full text-black cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => handleIconClick("images/Gambar Heading1.png")}
            />
            <FontAwesomeIcon
              icon={faFutbol}
              className="mr-5 bg-gray-200 lg:size-10 md:size-8 sm:size-5 p-2 rounded-full text-black cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => handleIconClick("images/Gambar Heading2.png")}
            />
            <FontAwesomeIcon
              icon={faBasketball}
              className="bg-gray-200 p-2 lg:size-10 md:size-8 sm:size-5 rounded-full text-black cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => handleIconClick("images/Gambar Heading3.png")}
            />
          </div>
        </div>

        <img
          src={image}
          alt="heading"
          className="w-full lg:h-lvh  transition-all duration-300 ease-in-out"
        />
        {/* Temukan Vanue Olahraga */}
        <div>
          <div className="lg:w-full mt-20 mx-5 lg:flex md:w-full   justify-between">
            <div className="lg:w-2/4 sm:w-full md:w-full">
              <h1 className="lg:text-5xl md:text-4xl sm:text-3xl mb-5 font-semibold">
                Temukan venue olahraga di Tangerang yang sesuai dengan anda.
              </h1>
              <p className="lg:text-lg md:text-lg sm:text-md">
                Website ini hadir untuk memastikan pengalaman Anda dalam menyewa
                lapangan olahraga menjadi lebih menyenangkan dan efisien. Ayo
                mulai jelajahi opsi lapangan olahraga yang tersedia dan buat
                pengalaman olahraga Anda lebih memuaskan!
              </p>
            </div>
            <div className="lg:w-2/4 md:w-2/4  sm:mb-5 sm:ms-[10%] md:ms-[28%] sm:mt-[180px] lg:mt-20 lg:ms-10 md:mt-[130px] lg:size-[70%] md:size-[70%] sm:size-[40%] flex ">
              <img
                src={img}
                alt="heading"
                className="lg:w-[40%] md:w-[40%] sm:w-[100%] lg:h-1/2 md:h-full sm:h-full  "
                style={{ position: "relative", top: "30px" }}
              />
              <img
                src={img2}
                alt="heading"
                className="lg:w-[40%] md:w-[40%] sm:w-[100%] lg:h-1/2 md:h-full sm:h-full  "
                style={{ position: "relative", top: "-60px", right: "120px" }}
              />
              <img
                src={img3}
                alt="heading"
                className="lg:w-[40%] md:w-[40%] sm:w-[100%] lg:h-1/2 md:h-full sm:h-full  "
                style={{ position: "relative", top: "-120px", right: "200px" }}
              />
            </div>
          </div>
          <div></div>
        </div>

        {/* Rekomendasi Vanue */}

        <div className="lg:mt-[20px] md:mt-[50px] sm:mt-[20px] mx-5 mt-[-50px]">
          <div className="">
            <h1 className="text-center lg:text-5xl md:text-4xl sm:text-3xl mb-10 font-semibold">
              Rekomendasi Venue
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {rekomendasi.map((venue) => (
                <div key={venue.id} className="mx-5">
                  <img
                    src={venue.img}
                    alt={venue.title}
                    className="mb-5 max-w-full max-h-64 rounded-lg"
                  />
                  <h2 className="h-10 text-md font-semibold w-64 relative top-[-80px] left-3 text-white">
                    {venue.title}
                  </h2>
                  <p className="text-center mt-[-40px]">
                    <Rating rating={venue.rating} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Temukan Kebahagian Dengan Berolahraga */}

        <div className=" lg:mt[-100px] md:mt-[100px] sm:mt-[50px]   mx-5 ">
          <div className="  mx-20">
            <h1 className="text-center lg:mt-[150px] max-w-full lg:text-2xl md:text-4xl sm:text-3xl mb-10 font-semibold">
              Temukan Kebahagian <br /> Dengan Berolahraga
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {kebahagian.map((kebahagian) => (
                <div
                  key={kebahagian.id}
                  className="mx-5 border-2 p-5 rounded-xl"
                >
                  {kebahagian.icon && (
                    <FontAwesomeIcon
                      icon={kebahagian.icon}
                      size="2x"
                      color="white"
                      className="mb-5 bg-[#00B7DB] p-3 rounded-2xl mx-[50%] translate-x-[-50%] "
                    />
                  )}
                  <h1 className="text-xl mt-[-10px] font-bold text-center ">
                    {kebahagian.title}
                  </h1>
                  <p className="text-center mt-5 ">{kebahagian.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
              <div className="lg:mt-[-100px] md:mt-[150px] sm:mt-[300px]">
                <Footer />
              </div>
      </div>
    </>
  );
};

export default HomePage;
