import React from "react";
import Navbar from "../components/elements/navbar/navbar";
import Footer from "../components/elements/footer";
import {
  faGlobe,
  faLocationCrosshairs,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutPage = () => {
  return (
    <div className="md:mt-[-80px] top-0 bg-[#171830]">
      {/* Navbar Start */}
      <Navbar />
      {/* Navbar End */}

      {/* Mini Image Header Start */}
      <div className="w-full py-2">
        <div className="flex flex-wrap relative items-center justify-center">
          <img
            src="images/Contact/contact-banner.png"
            alt="Mini-About-banner"
            className="w-full top-0 -ml-2 object-cover"
          />
          <h1 className="text-3xl font-semibold absolute text-white">
            Tentang KuyFutsal
          </h1>
        </div>
      </div>
      {/* Mini Image Header End */}

      {/* Body Start */}
      <div className="container">
        <div className="w-full py-10">
          <p className="font-semibold text-md text-white text-center">
            KuyFutsal mempermudah pemesanan lapangan futsal secara praktis dan
            cepat melalui platform online. Dengan navigasi intuitif, pengguna
            dapat dengan mudah mencari dan memilih lapangan sesuai preferensi
            mereka. Setelah memilih lapangan, pembayaran dilakukan secara online
            dengan beragam metode pembayaran yang tersedia. Fitur melihat jadwal
            lapangan juga disediakan untuk merencanakan aktivitas olahraga
            dengan mudah. Dengan layanan yang efisien, KuyFutsal menjadi pilihan
            utama bagi pencinta futsal yang ingin memesan lapangan secara
            online.
          </p>
        </div>

        <div className="w-full py-5">
          <h1 className=" font-bold text-3xl text-white text-center mb-5">
            Mengapa Memilih Kami?
          </h1>
          <div className="flex flex-wrap w-full justify-center items-center mt-10">
            <div className="flex-1 flex flex-col items-center justify-center py-5 px-10 rounded border bg-[#1F1F1F] m-2">
              <div className="w-[4rem] h-[4rem] rounded-full flex justify-center items-center mt-5 bg-blue-300 hover:text-white transition">
                <FontAwesomeIcon icon={faGlobe} className="size-10" />
              </div>
              <p className="text-base text-center text-white py-5">
                Web Olahraga Terbaik di <br /> Kota Tangerang
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-5 px-10 rounded border bg-[#1F1F1F] m-2">
              <div className="w-[4rem] h-[4rem] rounded-full flex justify-center items-center mt-5 bg-blue-300 hover:text-white transition">
                <FontAwesomeIcon
                  icon={faLocationCrosshairs}
                  className="size-10"
                />
              </div>
              <p className="text-base text-center text-white py-5">
                Mudah Mencari Lokasi <br />
                Lapangan Futsal
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center py-5 px-10 rounded border bg-[#1F1F1F] m-2">
              <div className="w-[4rem] h-[4rem] rounded-full flex justify-center items-center mt-5 bg-blue-300 hover:text-white transition">
                <FontAwesomeIcon icon={faCheck} className="size-10" />
              </div>
              <p className="text-base text-center text-white py-5">
                Informasi Lapangan Yang <br /> Lengkap
              </p>
            </div>
          </div>
        </div>

        <div className="w-full py-5">
          <div className="flex flex-col items-center justify-center">
            <h1 className=" font-bold text-3xl text-white text-center">Visi</h1>
            <h3 className="font-semibold text-md text-white text-center my-5">
              Menjadi platform terkemuka dalam menyediakan layanan pemesanan
              lapangan futsal online yang inovatif dan terpercaya, membawa
              pengalaman yang mudah, nyaman, dan menyenangkan bagi setiap
              pengguna.
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center mb-10 mt-10">
            <h1 className=" font-bold text-3xl text-white text-center">Misi</h1>
            <h3 className="font-semibold text-md text-white text-center mt-5">
              Akses mudah dan cepat pesan lapangan futsal online, antarmuka
              intuitif, kemitraan luas, inovasi terus-menerus, kepuasan pengguna
              terutama.
            </h3>
          </div>
        </div>
      </div>
      {/* Body End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </div>
  );
};

export default AboutPage;
