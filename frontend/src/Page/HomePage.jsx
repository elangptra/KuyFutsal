import Navbar from "../components/elements/navbar/navbar";
import React, { useState } from "react";
import Footer from "../components/elements/footer";
import ChatSection from "../components/elements/chatsection";
import {
  faBookmark,
  faRunning,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = (props) => {
  const { classname } = props;
  const [image, setImage] = useState(
    "images/Gambar Heading1.png"
  );

  const {
    img = "images/temukan venue 1.png",
    img2 = "images/temukan venue 2.png",
    img3 = "images/temukan venue 3.png",
  } = props;

  const kebahagian = [
    {
      id: 1,
      icon: "/images/icons/homepage-cari.png",
      title: "Cari",
      desc: "Temukan Lapangan Olahraga Yang Anda Inginkan.",
    },
    {
      id: 2,
      icon: "/images/icons/homepage-lapangan.png",
      title: "Sewa",
      desc: "Pilih Kategori Lapangan Dan Atur Jadwal Anda.",
    },
    {
      id: 3,
      icon: "/images/icons/homepage-lari.png",
      title: "Nikmati",
      desc: "Nikmati Kesenangan Anda Saat Bermain.",
    },
  ];

  const [isChatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setChatVisible(!isChatVisible);
  };

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, user: true }]);
  };


  return (
    <>
      <Navbar />
      <div className="md:mt-[-80px] top-0 bg-[#171830]">
        <div
          className="flex justify-between absolute md:bottom-0 sm:bottom-0 lg:left-10 md:left-10 sm:left-10 lg:right-0 md:right-0 sm:right-0 mx-5"
          style={{ zIndex: "1" }}
        >
          <h1
            className={`lg:text-5xl md:text-4xl sm:text-3xl md:mt-[-200px] sm:mt-[-330px] font-semi-bold italic text-white ${classname}`}
          >
            TEMUKAN VENUE <br /> OLAHRAGA <br />
            TERBAIK.
          </h1>
          <div
            className="flex items-center lg:me-10 md:mt-[-200px] sm:me-10 sm:mt-[-480px]"
            style={{ position: "fixed", bottom: "70px", right: "20px" }}
            onClick={toggleChat}
          >
            <img
              src="images/chatBot.png"
              alt=""
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        {isChatVisible && <ChatSection messages={messages} onSendMessage={handleSendMessage} />}

        <img src={image} alt="heading" className="w-full h-vh object-cover" />

        <div className="container">
          <div className="flex flex-col items-center justify-center text-white mb-32">
              <h1 className="text-center lg:mt-[100px] max-w-full lg:text-3xl md:text-4xl sm:text-3xl mb-10 font-semibold">
                Temukan Kebahagian <br /> Dengan Berolahraga
              </h1>
              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {kebahagian.map((kebahagian) => (
                  <div
                    key={kebahagian.id}
                    className={`mx-5 bg-[#1F1F1F] border-2 p-5 rounded-xl ${
                      kebahagian.id === 2
                        ? "lg:w-[300px] md:w-[300px] lg:h-[290px] pt-10 "
                        : "lg:w-[300px] lg:h-[250px] mt-5 "
                    }`}
                  >
                    {kebahagian.icon && (
                      <img
                      src={kebahagian.icon}
                      className="mb-5 bg-[#002242] p-3 rounded-2xl mx-[50%] translate-x-[-50%]"
                      />
                    )}
                    <h1 className="text-3xl mt-[-10px] font-bold text-center">
                      {kebahagian.title}
                    </h1>
                    <p className="text-center mt-5 ">{kebahagian.desc}</p>
                  </div>
                ))}
              </div>
          </div>

          <div>
            <div className="lg:w mt-20  lg:flex md:w-full text-white justify-between">
              <div className="lg:w-2/4  sm:w-full md:w-full mx-5">
                <h1 className="lg:text-4xl md:text-4xl sm:text-3xl mb-5 ms-5 font-semibold">
                  Temukan venue olahraga di Tangerang yang sesuai dengan anda.
                </h1>
                <p className="lg:text-lg md:text-lg sm:text-md ms-5">
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
                  style={{ position: "relative" }}
                />
                <img
                  src={img2}
                  alt="heading"
                  className="lg:w-[35%] md:w-[35%] sm:w-[100%] lg:h-1/2 md:h-full sm:h-full  "
                  style={{ position: "relative", top: "-80px", right: "140px" }}
                />
                <img
                  src={img3}
                  alt="heading"
                  className="lg:w-[35%] md:w-[35%] sm:w-[100%] lg:h-1/2 md:h-full sm:h-full  "
                  style={{ position: "relative", top: "-120px", right: "240px" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="md:mt-[150px] sm:mt-[300px]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
