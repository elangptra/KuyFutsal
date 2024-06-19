import { Link } from "react-router-dom";
import { X } from "lucide-react";




const AuthLayout = (props) => {
  const { children, title, type, img = "images/Login/login.png" } = props;
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
              <span className="font-bold" style={{ color: "#104E26" }}>
                KuyFutsal
              </span>
            </p>
            <h1
              className="text-5xl mb-2 text-600 "
              style={{ fontWeight: "500" }}
            >
              {title}
            </h1>
            {children}
            <Type type={type} />
            <p className="text-slate-600 text-center ">
              <button className="text-slate-600 font-bold"></button>
            </p>
          </div>
        </div>
        <div>
          <img src={`${img}`} className="w-[450px]" alt="login" />
        </div>
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
        <div>
        <img src="/images/Login/logo.png" alt="" />
      </div>
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

export default AuthLayout;
