import { Link } from "react-router-dom";
import { X, Camera } from "lucide-react";
import Button from "../elements/button/index";

const AuthLayout = (props) => {
  const { children, title, type } = props;
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
          <div className="mt-10">
            <p className="font-medium mb-4 text-slate-600">
              Selamat Datang di{" "}
              <span className="font-bold" style={{ color: "#171830" }}>
                KuyFutsal
              </span>
            </p>
            <h1
              className="text-7xl mb-2 text-600 "
              style={{ fontWeight: "500" }}
            >
              {title}
            </h1>
            {children}
            <Type type={type} />
          </div>
        </div>
        < Imbanner type={type} />
      </div>
    </div>
  );
};

const Type = ({ type }) => {
  if (type === "login") {
    return (
      <div className="flex mt-2">
        <p className="text-md text-slate-600 mr-2">Belum memiliki akun?</p>
        <Link to="/register" className="text-blue-600 font-bold">
          Buat Akun
        </Link>
      </div>
    );
  } else {
    return (
      <div className="flex mt-2">
        <p className="text-md text-slate-600 mr-2 ">Sudah memiliki akun?</p>
        <Link to="/login" className="text-blue-600  font-bold">
          Masuk
        </Link>
      </div>
    );
  }
};

const Imbanner = ({ type }) => {
  if (type === "login") {
    return (
      <div>
          <img src="/images/Login/login.png" className="w-[470px]" alt="login" />
      </div>
    );
  } else {
    return (
      <div className="w-[470px] h-[570px] flex flex-col items-center justify-center p-5">
          <div className="w-full flex border-2 border-slate-500 items-center justify-center p-36 mb-5">
            <Camera className="size-20" />
          </div>
          <Button classname="text-base font-normal text-white bg-blue-500 mr-5">Upload Foto</Button>
      </div>
    );
  }
};

export default AuthLayout;
