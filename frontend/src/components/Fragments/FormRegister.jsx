import Button from "../elements/button";
import Input from "../elements/input";
import { Link } from "react-router-dom";
import { X, Camera } from "lucide-react";
import React, { useState } from "react";

const FormRegister = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-[url('images/Login/login-bg.png')] bg-cover">
      <div
        className="flex justify-center ps-5 rounded-3xl bg-white bg-opacity-75"
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="w-full max-w-xs me-5">
          <div className="flex flex-wrap items-center justify-between">
            <img
              src="images/icons/logo.png"
              alt=""
              className="h-16 mt-3 block"
            />
            <button>
              <Link to="/homePage">
                <X />
              </Link>
            </button>
          </div>
          <div className="mt-3">
            <p className="font-medium mb-4 text-slate-600">
              Selamat Datang di{" "}
              <span className="font-bold" style={{ color: "#171830" }}>
                KuyFutsal
              </span>
            </p>
            <h1
              className="text-5xl mb-5 text-600 "
              style={{ fontWeight: "500" }}
            >
              Register
            </h1>
            <form>
              <Input type="email" placeholder="Email" name="email" />

              <Input type="password" placeholder="Password" name="password" />
              <Input
                type="password"
                placeholder="Konfirmasi Password"
                name="password"
              />

              <Button type="submit" classname="bg-black text-white w-full">
                Daftar
              </Button>
            </form>
            <div className="flex mt-2">
              <p className="text-md text-slate-600 mr-2 ">
                Sudah memiliki akun?
              </p>
              <Link to="/login" className="text-blue-600 font-bold">
                Masuk
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[470px] h-[570px] flex flex-col items-center justify-center p-5">
          <div className="w-full flex border-2 border-slate-500 items-center justify-center p-36 mb-5 relative">
            {photo ? (
              <img
                src={photo}
                alt="Preview"
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Camera className="size-20" />
            )}
          </div>
          <div className="relative">
            <input
              type="file"
              name="photo"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handlePhotoChange}
            />
            <Button classname="text-base font-normal text-white bg-blue-500">
              {photo ? "Ganti Foto" : "Upload Foto"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormRegister;
