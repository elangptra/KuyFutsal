import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, Camera } from "lucide-react";
import axios from "axios";
import Button from "../elements/button";

const FormRegister = () => {
  const [foto, setFoto] = useState(null);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [no_telp, setTelp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = (event) => {
    event.preventDefault();

    if (!nama || !email || !password || !confirmPassword || !no_telp) {
      setError("Semua field harus diisi");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok");
      return;
    }

    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword); // Pastikan ini ditambahkan
    formData.append("no_telp", no_telp);
    formData.append("foto", foto);

    axios
      .post("http://localhost:3001/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);

        window.location.href = "/login";
        alert("Registrasi Berhasil");
      })
      .catch((error) => {
        console.error("There was an error with the request:", error);
        setError("Terjadi kesalahan saat registrasi");
      });
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFoto(file);
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-[url('images/Login/login-bg.png')] bg-cover">
      <div
        className="flex justify-center ps-5 rounded-3xl bg-white bg-opacity-75"
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)" }}
      >
        <form onSubmit={handleRegister}>
          <div className="flex flex-wrap">
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

                <input
                  type="text"
                  name="nama"
                  placeholder="Masukkan Nama"
                  value={nama}
                  onChange={(event) => setNama(event.target.value)}
                  className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Masukkan Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
                />
                <input
                  type="text"
                  name="no_telp"
                  placeholder="Masukkan No. Telepon"
                  value={no_telp}
                  onChange={(event) => setTelp(event.target.value)}
                  className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Masukkan Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Konfirmasi Password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
                />
                {error && <p className="text-red-500">{error}</p>}
                <Button type="submit" classname="bg-black text-white w-full">
                  Daftar
                </Button>
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
                {foto ? (
                  <img
                    src={URL.createObjectURL(foto)}
                    alt="Preview"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <Camera className="size-20" />
                    <span>Upload Foto</span>
                  </div>
                )}
              </div>
              <div className="relative">
                <input
                  type="file"
                  name="foto"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handlePhotoChange}
                />
                <Button classname="text-base font-normal text-white bg-blue-500">
                  {foto ? "Ganti Foto" : "Upload Foto"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
