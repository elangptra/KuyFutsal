import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="lg:flex lg:justify-between lg:mx-10 lg:mt-[200px] md:flex md:justify-between sm:mt-[-200px] me-5  d-lg-block">
            <div className="sm:mb-10">
              <p>Company</p>
              <ul className="lg:mt-5 sm:mt-5">
                <li className="lg:mb-3 hover:underline hover:text-blue-600">
                  <Link to="/#">Home</Link>
                </li>
                <li className="lg:mb-3 hover:underline hover:text-blue-600">
                  <Link to="/#">About</Link>
                </li>
                <li className="hover:underline hover:text-blue-600">
                  <Link to="/#">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="lg:ms-[70px] sm:mb-10">
              <p>Product</p>
              <ul className="lg:mt-5 sm:mt-5 ">
                <li className="lg:mb-3 hover:underline hover:text-blue-600">
                  <Link to="/#">Home</Link>
                </li>
                <li className="lg:mb-3 hover:underline hover:text-blue-600">
                  <Link to="/#">Sewa Lapangan</Link>
                </li>
                <li className="lg:mb-3 hover:underline hover:text-blue-600">
                  <Link to="/#">Venue</Link>
                </li>
              </ul>
            </div>
            <div className="sm:ms-[70px]">
              <p className="sm:me-[70px]">Payment</p>
              <ul className="flex sm:m-10  lg:mt-5">
                <li className="mr-3">
                  <img src="images/bni.png" alt="" />
                </li>
                <li className="mr-3">
                  <img src="images/dana.png" alt="" />
                </li>
                <li className="">
                  <img src="images/gopay.png" alt="" className="mt-[-30px]" />
                </li>
                <li className="">
                  <img src="images/visa.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:flex lg:justify-between mx-10 lg:mt-10 sm:mt-10">
            <div>
              <p className="mb-2">(021) 366698 <br /> Kota Tangerang, Provinsi Banten</p>
            </div>
            <p className="mt-7 font-semibold">© Copyright  Svarakama 2024 | All Right Reserved</p>
            <div>
              <ul className="flex lg:mt-5 sm:mt-5 sm:ms-[200px]">
                <li className="mr-3">
                  <img src="images/instagram.png" alt="" className="h-[30px]"/>
                </li>
                <li className="mr-3">
                  <img src="images/tiktok.png" alt="" className="h-[30px]"/>
                </li>
                <li className="mr-3">
                  <img src="images/whatsapp.png" alt="" className="h-[30px]"/>
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
