import { Link } from "react-router-dom";
import Button from "../button";
const Navbar = (props) => {
  const { img = "images/logo.png" } = props;
  return (
    <>
      <div className="flex justify-between p-2 sticky top-0 z-10 bg-white w-full">
        <div className="flex items-start  ">
          <img src={img} alt="logo" className="w-10 h-10" />
          <p className="text-3xl font-bold">Sport Choice</p>
        </div>
        <div className="flex items-center justify-between">
          <ul className="flex justify-center items-center ">
            <li className="mr-5 hover:bg-blue-600 hover:text-white hover:p-1 hover:rounded-xl transition-all duration-300">
              Home
            </li>
            <li className="mr-5 hover:bg-blue-600 hover:text-white hover:p-1 hover:rounded-xl transition-all duration-300">
              Sewa Lapangan
            </li>
            <li className="mr-5 hover:bg-blue-600 hover:text-white hover:p-1 hover:rounded-xl transition-all duration-300">
              Vanue
            </li>
          </ul>
        </div>
        <div className="flex items-end">
          <Button
            type="button"
            classname=" bg-blue-600 text-white  hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_4px_18px_0_rgba(0,0,0,0.2),0_0_8px_rgba(0,0,0,0.2)] transition-all duration-300"
          >
            <Link to="/login">Masuk</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
