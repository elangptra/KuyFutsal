import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import RiwayatPemesanan from "../riwayatPemesanan/riwayatPemesanan";
import Button from "../button";

const Links = () => {
  return (
    <>
      <div className="flex items-center justify-between font-semibold text-lg">
        <ul className="md:flex justify-center items-center">
          <Link to="/homePage">
            <li className="mr-5 text-white hover:underline hover:p-1 hover:rounded-xl transition-all duration-300 md:my-0 my-3">
              Home
            </li>
          </Link>
          <Link to="/sewaLapangan">
            <li className="mr-5 text-white hover:p-1 hover:underline hover:rounded-xl transition-all duration-300 md:my-0 my-3">
              Sewa Lapangan
            </li>
          </Link>
          <Link to="/about">
            <li className="mr-5 text-white hover:p-1 hover:underline hover:rounded-xl transition-all duration-300 md:my-0 my-3">
              About Us
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

const Navlink = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="w-full flex items-center justify-end">
        <div className="w-full items-center justify-between md:flex">
          <img src="/images/icons/logo.png" alt="" className="h-16 mt-3 block" />
          <div className="hidden md:block">
            <Links />
          </div>
          <div className="items-end relative me-5 hidden md:block">
            <div className="absolute top-[-90px] right-[150px]">
              <RiwayatPemesanan />
            </div>
            <div>
              <Button
                type="button"
                classname=" bg-blue-600 mb-2 mt-3 text-white hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_4px_18px_0_rgba(0,0,0,0.2),0_0_8px_rgba(0,0,0,0.2)] transition-all duration-300"
              >
                <Link to="/login">Masuk</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="md:hidden flex text-white justify-center items-center">
          <div className="absolute top-[-78px] right-[220px]">
            <RiwayatPemesanan />
          </div>
          <Button
            type="button"
            classname=" bg-blue-600 mb-2 mt-5 text-white hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_4px_18px_0_rgba(0,0,0,0.2),0_0_8px_rgba(0,0,0,0.2)] 
                    transition-all duration-300 md:my-0 my-2 md:mx-0 mx-3"
          >
            <Link to="/login">Masuk</Link>
          </Button>
          <button onClick={toggleNavbar} className="mt-3">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
          <Links />
        </div>
      )}
    </>
  );
};

export default Navlink;
