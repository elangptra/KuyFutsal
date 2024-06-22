import React from "react";
import Navbar from "../components/elements/navbar/navbar";
import Footer from "../components/elements/footer";
import Button from "../components/elements/button/index";
import Input from "../components/elements/input";
import axios from "axios";
import { useEffect, useState } from "react";
import UploadPhotoButton from "../components/uploadPhotoButton";

const EditProfile = () => {
  const [user, setUser] = useState(null);
  const [nama, setName] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setPhoto] = useState(null);
  const [error, setError] = useState(null);
  const [no_telp, setTelp] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
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
        const userData = {
          id_pengguna: user.id_pengguna,
          nama: user.nama,
          email: user.email,
          fotoUrl: user.foto || "/images/profile/avatar.jpeg",
          no_telp: user.no_telp,
        };

        setUser(userData);
        setName(userData.nama);
        setEmail(userData.email);
        setTelp(user.no_telp);
      } catch (error) {
        console.error("Invalid token");
      }
    }
  }, []);

  const handleEditProfile = (event) => {
    event.preventDefault();

    axios
      .put("http://localhost:3001/pengguna/" + user.id_pengguna, {
        nama: nama,
        email: email,
        no_telp: no_telp,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="top-0 bg-[#171830]">
      {/* Navbar Start */}
      <Navbar />
      {/* Navbar End */}

      {/* Body Start */}
      <img
        src="/images/profile/edit-profile-banner.png"
        className="w-full"
        alt="edit-proifle-banner"
      />
      <div className="container">
        <form onSubmit={handleEditProfile}>
          <div className="w-full flex flex-wrap items-center -mt-24 justify-between">
            <div className="flex flex-wrap text-white items-center">
              <img
                src={user?.fotoUrl || "/images/profile/avatar.jpeg"}
                className="w-[130px] h-[130px] rounded-full mr-10"
                alt="avatar-icon"
              />
              <h3 className="font-semibold text-2xl m-1 mt-28">{nama}</h3>
            </div>
            <div className="flex flex-wrap mt-28">
              <Button
                classname="text-base font-normal text-white bg-blue-500"
                type="submit"
              >
                Simpan
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-start py-20">
            <div className="w-[48%]">
              <h3 className="font-normal text-lg text-white m-1 mb-5">
                Nama Lengkap
              </h3>
              <input
                type="text"
                name="nama"
                value={nama}
                onChange={(e) => setName(e.target.value)}
                className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
                placeholder="Masukkan Nama Anda"
              />
              <h3 className="font-normal text-lg text-white m-1 mb-5">Email</h3>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
                placeholder="Masukkan Email Anda"
              />
              <h3 className="font-normal text-lg text-white m-1 mb-5">
                Nomor Telepon
              </h3>
              <input
                type="text"
                name="no_telp"
                value={no_telp}
                onChange={(e) => setTelp(e.target.value)}
                className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
                placeholder="Masukkan Nomor Telepon Anda"
              />
            </div>
            {/* <div className="w-[48%]">
              <h3 className="font-normal text-lg text-white m-1 mb-5">
                Password
              </h3>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
                placeholder="Masukkan Password Anda"
              />
              <h3 className="font-normal text-lg text-white m-1 mb-5">
                Konfirmasi Password
              </h3>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
                placeholder="Masukkan Konfirmasi Password Anda"
              />
            </div> */}
          </div>
        </form>
      </div>
      {/* Body End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </div>
  );
};

export default EditProfile;
