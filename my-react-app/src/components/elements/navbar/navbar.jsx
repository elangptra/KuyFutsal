import { Link } from "react-router-dom";
import Button from "../button";
import RiwayatPemesanan from "../riwayatPemesanan/riwayatPemesanan";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const shouldBeScrolled = scrollTop > 400;
      setIsScrolled(shouldBeScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`flex justify-between p-2 sticky top-0 z-10 w-full ${
          isScrolled ? "bg-white bg-opacity-20  shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex items-start ms-5 ">
          <img src="images/logo.png" alt="" className="w-14 h-14" />
        </div>
        <div className="flex items-center justify-between font-semibold text-lg">
          <ul className="flex justify-center items-center ">
            <Link to="/homePage">
              <li className="mr-5 text-white hover:underline hover:p-1 hover:rounded-xl transition-all duration-300">
                Home
              </li>
            </Link>
            <Link to="/sewaLapangan">
              <li className="mr-5 text-white hover:p-1 hover:underline hover:rounded-xl transition-all duration-300">
                Sewa Lapangan
              </li>
            </Link>
            <Link to="/about">
              <li className="mr-5 text-white hover:p-1 hover:underline hover:rounded-xl transition-all duration-300">
                About Us
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex items-end relative me-5">
          <div className="absolute top-[-90px] right-[150px]">
            <RiwayatPemesanan />
          </div>
          <div>
            <Button
              type="button"
              classname=" bg-blue-600 mb-2 text-white hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_4px_18px_0_rgba(0,0,0,0.2),0_0_8px_rgba(0,0,0,0.2)] transition-all duration-300"
            >
              <Link to="/login">Masuk</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
