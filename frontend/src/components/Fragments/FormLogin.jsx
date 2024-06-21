import React, { useState } from "react";
import Button from "../elements/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import axios from "axios";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      console.log(email, password);
      console.log("Login successful:", response.data.payload);
      window.location.href = "/homePage";
    } catch (err) {
      setError("Login failed. Please check your username and password.");
      console.error("Error logging in:", err);
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
              className="text-5xl mb-2 text-600 "
              style={{ fontWeight: "500" }}
            >
              Masuk
            </h1>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
              />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
              />

              <div className="flex justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="mr-2"
                  />
                  <label htmlFor="remember">Ingat saya</label>
                </div>
                <a href="#">Lupa sandi?</a>
              </div>
              {error && <p className="text-red-600">{error}</p>}
              <Button type="submit" classname="bg-black text-white w-full">
                Masuk
              </Button>
            </form>
            <div className="flex mt-2">
              <p className="text-md text-slate-600 mr-2">
                Belum memiliki akun?
              </p>
              <Link to="/register" className="text-blue-600 font-bold">
                Buat Akun
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/Login/login.png"
            className="w-[470px]"
            alt="login"
          />
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
