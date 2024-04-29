import {Link} from "react-router-dom";
const AuthLayout = (props) => {
  const { children, title, type, img = "images/login.png" } = props;
  return (
    <div
      className="flex justify-center  min-h-screen items-center "
      style={{ backgroundColor: "#F5F5F5", fontFamily: "Roboto" }}
    >
      <div
        className="flex justify-center items-center ps-5 rounded-3xl "
        style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="w-full max-w-xs me-5">
          <p className="font-medium mb-4 text-slate-600">
            Selamat Datang di{" "}
            <span className="font-bold" style={{ color: "#104E26" }}>
              Sport
            </span>
          </p>
          <h1 className="text-7xl mb-2 text-600 " style={{ fontWeight: "500" }}>
            {title}
          </h1>
          {children}
          <Type type={type} />
          <p className="text-slate-600 text-center ">
            atau 
            <button className="text-slate-600 font-bold"></button>
          </p>
        </div>
        <div>
          <img src={`${img}`} className="" alt="login" />
        </div>
      </div>
    </div>
  );
};

const Type = ({ type }) => {
  if (type === "login") {
    return (
      <div className="flex mt-2">
        <p className="text-md text-slate-600 mr-2">Belum punya akun?</p>
        <Link to="/register" className="text-blue-600 font-bold">
          Daftar
        </Link>
      </div>
    );
  } else {
    return (
      <div className="flex mt-2">
        <p className="text-md text-slate-600 mr-2 ">Sudah punya akun?</p>
        <Link to="/login" className="text-blue-600  font-bold">
          Masuk
        </Link>
      </div>
    );
  }
};

export default AuthLayout;
