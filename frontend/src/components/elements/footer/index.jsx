import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-lg-start bg-[#0B0D2C]  text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="lg:flex lg:justify-between text-white lg:mx-10 lg:mt-5 md:flex md:justify-between sm:mt-[-200px] me-5 d-lg-block">
            <div className="w-1/3 sm:mb-10">
              <p className="font-semibold text-md uppercase">Company</p>
              <ul className="lg:mt-5 sm:mt-5">
                <li className="lg:mb-3 hover:underline hover:text-blue-600">
                  <Link to="/Homepage">Home</Link>
                </li>
                <li className="lg:mb-3 hover:underline hover:text-blue-600">
                  <Link to="/About">About</Link>
                </li>
                <li className="hover:underline hover:text-blue-600">
                  <Link to="/Contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3 sm:mb-10">
              <p className="font-semibold text-md uppercase">Products</p>
              <ul className="lg:mt-5 sm:mt-5 ">
                <li className="lg:mb-3 hover:underline hover:text-blue-600">
                  <Link to="/Homepage">Home</Link>
                </li>
                <li className="lg:mb-3 hover:underline hover:text-blue-600">
                  <Link to="/SewaLapangan">Sewa Lapangan</Link>
                </li>
              </ul>
            </div>
            <div className="w-1/3 text-center">
              <p className="font-semibold text-md uppercase">Payments</p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:m-10 lg:mt-5">
                <li className="mr-3">
                  <img src="images/icons/bni-footer.png" alt="" className="w-[79px] h-[30px]" />
                </li>
                <li className="mr-3">
                  <img src="images/icons/dana-footer.png" alt="" className="w-[102px] h-[30px]" />
                </li>
                <li className="">
                  <img src="images/icons/gopay-footer.png" alt="" className="mt-[5px] w-[88px] h-[20px]"/>
                </li>
                <li className="">
                  <img src="images/icons/visa-footer.png" alt="" className="w-[74px] h-[30px]" />
                </li>
                <li className="">
                  <img src="images/icons/mandiri-footer.png" alt="" className="-mt-[25px] w-[93px] h-[70px]" />
                </li>
                <li className="">
                  <img src="images/icons/bca-footer.png" alt="" className="-mt-[23px] w-[99px] h-[74px]" />
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white m-2"></div>
          <div className="lg:flex lg:justify-between mx-10 lg:mt-5 sm:mt-5 text-white">
            <div>
              <p className="mb-2">
                (021) 366698 <br /> Kota Tangerang, Provinsi Banten
              </p>
            </div>
            <p className="mt-7 font-semibold">
              © Copyright Svarakama 2024 | All Right Reserved
            </p>
            <div>
              <ul className="flex lg:mt-5 sm:mt-5 sm:ms-[200px]">
                <li className="mr-3">
                  <img src="images/instagram.png" alt="" className="w-[40px] h-[40px]" />
                </li>
                <li className="mr-3">
                  <img src="images/icons/tiktok-footer.png" alt="" className="w-[40px] h-[40px]" />
                </li>
                <li className="mr-3">
                  <img src="images/whatsapp.png" alt="" className="w-[40px] h-[40px]" />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
