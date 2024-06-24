import { Link, useNavigate } from "react-router-dom";
import { Menu, X, UserRound, LogOut, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import RiwayatPemesanan from "../riwayatPemesanan/riwayatPemesanan";
import Button from "../button";

const Links = () => {
  return (
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
  );
};

const Navlink = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    setUser(null);
    setIsAdmin(false);
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const adminStatus = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminStatus);

    if (token) {
      try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split("")
            .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
        );
        const user = JSON.parse(jsonPayload).user;
        fetchUserData(user.id_pengguna);
      } catch (error) {
        console.error("Invalid token");
      }
    }
  }, []);

  const fetchUserData = async (id_pengguna) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/pengguna/${id_pengguna}`
      );
      const userData = response.data.payload[0];
      const userDataWithDefaults = {
        ...userData,
        fotoUrl: userData.foto
          ? `/images/profile/${userData.foto}`
          : "/images/profile/avatar.jpeg",
      };

      setUser(userDataWithDefaults);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const displayUser = () => {
    if (user) {
      return (
        <div
          className="flex items-center cursor-pointer mt-2"
          onClick={toggleDropdown}
        >
          <img
            src={user.fotoUrl}
            alt="Foto Pengguna"
            className="w-12 h-12 rounded-full object-cover mr-3"
          />
          <span className="font-semibold text-white">{user.nama}</span>
        </div>
      );
    } else {
      return (
        <Button
          type="button"
          classname="bg-blue-600 mb-2 mt-3 text-white hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_4px_18px_0_rgba(0,0,0,0.2),0_0_8px_rgba(0,0,0,0.2)] transition-all duration-300"
        >
          <Link to="/login">Masuk</Link>
        </Button>
      );
    }
  };

  return (
    <>
      <nav className="w-full flex items-center justify-end">
        <div className="w-full items-center justify-between md:flex">
          <img
            src="/images/icons/logo.png"
            alt=""
            className="h-16 mt-3 block"
          />
          <div className="hidden md:block">
            <Links />
          </div>
          <div className="items-end relative me-5 hidden md:block">
            <div className="absolute top-[-90px] right-[180px]">
              <RiwayatPemesanan />
            </div>
            <div>
              {displayUser()}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-5 w-48 bg-white rounded-md shadow-lg py-2">
                  <div className="flex flex-wrap items-center font-semibold px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <UserRound />
                    <Link to="/editProfile" className="ml-5">
                      Edit Profile
                    </Link>
                  </div>
                  {isAdmin && (
                    <div className="flex flex-wrap items-center font-semibold px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Briefcase />
                      <Link to="/dashboardPengelola" className="ml-5">
                        Management
                      </Link>
                    </div>
                  )}
                  <div className="flex flex-wrap items-center font-semibold px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <LogOut />
                    <button onClick={handleLogout} className="ml-5">
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:hidden flex text-white justify-center items-center">
          <div className="absolute top-[-78px] right-[220px]">
            <RiwayatPemesanan />
          </div>
          <Button
            type="button"
            classname="bg-blue-600 mb-2 mt-5 text-white hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_4px_18px_0_rgba(0,0,0,0.2),0_0_8px_rgba(0,0,0,0.2)] 
                    transition-all duration-300 md:my-0 my-2 md:mx-0 mx-3"
          >
            {localStorage.getItem("token") ? (
              displayUser()
            ) : (
              <Link to="/login">Masuk</Link>
            )}
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
