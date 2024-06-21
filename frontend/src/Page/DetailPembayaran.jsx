import React from "react";
import Navbar from "../components/elements/navbar/navbar";
import Footer from "../components/elements/footer";
import Button from "../components/elements/button";
import Input from "../components/elements/input";
import { Link } from "react-router-dom";
import { Camera } from "lucide-react";
import { useState } from "react";
import Modal from "../components/elements/modal";
import UploadPhotoButton from "../components/uploadPhotoButton";

const DetailPembayaran = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");

  const openModal = (type) => (event) => {
    event.preventDefault();
    setModalType(type);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="top-0 bg-[#171830]">
      {/* Navbar Start */}
      <Navbar />
      {/* Navbar End */}

      {/* Body Start */}
      <div className="container">
        <div className="flex flex-wrap justify-between items-start py-24">
          <div className="w-8/12">
            <div className="bg-white rounded-lg p-5">
              <div>
                <img
                  src="images/icons/logo.png"
                  alt=""
                  className="h-16 mt-3 block"
                />
                <h3 className="font-semibold text-2xl m-2">Data Penyewa</h3>
              </div>
              <div className="border-t-2 border-dashed border-black m-2"></div>
              <div className="py-1">
                <p className="text-base mb-3">
                  Sudah punya akun?
                  <Link to="/Login" className="text-blue-500 hover:opacity-70">
                    Masuk disini
                  </Link>
                </p>

                <form>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Nama Lengkap"
                  ></Input>
                  <div className="flex flex-wrap justify-between">
                    <div className="w-[49%]">
                      <Input
                        type="tel"
                        name="no_telp"
                        placeholder="Nomor Telepon"
                      ></Input>
                      <div className="flex flex-col text-center items-center justify-center border p-10 border-black rounded-md bg-slate-400">
                        <UploadPhotoButton />
                        
                      </div>
                      <div className="border border-black rounded-md bg-transparent mt-5">
                        <p className="text-base p-2">
                          <span>•</span> Disarankan untuk mendaftar agar
                          mendapat pengalaman yang lebih mudah !
                        </p>
                      </div>
                    </div>
                    <div className="w-[49%]">
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                      ></Input>
                      <div className="border border-black rounded-md bg-transparent">
                        <p className="text-base p-2">
                          <span>•</span> Silahkan foto wajah anda sebagai
                          kebijakan dari kami terimakasih.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 mt-10">
              <div>
                <h3 className="font-semibold text-2xl m-2">
                  Metode Pembayaran
                </h3>
              </div>
              <div className="border border-black rounded-md mb-4 p-4">
                <div className="cursor-pointer" onClick={toggleDropdown}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src="images/icons/virtual-account.png"
                        alt="Virtual Account"
                        className="w-16 mr-4 border rounded-lg"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">
                          Transfer Virtual Account
                        </h3>
                        <div className="flex space-x-2 mt-1">
                          <img src="images/icons/bca-payment.png" alt="BCA" />
                          <img src="images/icons/bni-payment.png" alt="BNI" />
                          <img
                            src="images/icons/mandiri-payment.png"
                            alt="Mandiri"
                          />
                        </div>
                      </div>
                    </div>
                    <svg
                      className={`w-6 h-6 transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>

                {isDropdownOpen && (
                  <div className="mt-4">
                    <label
                      className={`flex items-center justify-between cursor-pointer mb-2 ${
                        selectedOption === "bca" ? "bg-gray-100" : ""
                      }`}
                      onClick={() => handleOptionChange("bca")}
                    >
                      <div className="flex items-center">
                        <img
                          src="images/icons/bca-payment.png"
                          alt="BCA"
                          className="w-16 mr-4"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">BCA</h3>
                          <p className="text-sm text-gray-500">
                            Virtual Account
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">Rp 2.500</span>
                        <input
                          type="radio"
                          name="payment"
                          checked={selectedOption === "bca"}
                          onChange={(e) => {
                            e.stopPropagation();
                            handleOptionChange("bca");
                          }}
                          className="form-radio text-blue-600"
                        />
                      </div>
                    </label>
                    <label
                      className={`flex items-center justify-between cursor-pointer mb-2 ${
                        selectedOption === "bni" ? "bg-gray-100" : ""
                      }`}
                      onClick={() => handleOptionChange("bni")}
                    >
                      <div className="flex items-center">
                        <img
                          src="images/icons/bni-payment.png"
                          alt="BNI"
                          className="w-16 mr-4"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">BNI</h3>
                          <p className="text-sm text-gray-500">
                            Virtual Account
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">Rp 2.500</span>
                        <input
                          type="radio"
                          name="payment"
                          checked={selectedOption === "bni"}
                          onChange={(e) => {
                            e.stopPropagation();
                            handleOptionChange("bni");
                          }}
                          className="form-radio text-blue-600"
                        />
                      </div>
                    </label>
                    <label
                      className={`flex items-center justify-between cursor-pointer mb-2 ${
                        selectedOption === "mandiri" ? "bg-gray-100" : ""
                      }`}
                      onClick={() => handleOptionChange("mandiri")}
                    >
                      <div className="flex items-center">
                        <img
                          src="images/icons/mandiri-payment.png"
                          alt="Mandiri"
                          className="w-16 mr-4"
                        />
                        <div>
                          <h3 className="text-lg font-semibold">Mandiri</h3>
                          <p className="text-sm text-gray-500">
                            Virtual Account
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">Rp 2.500</span>
                        <input
                          type="radio"
                          name="payment"
                          checked={selectedOption === "mandiri"}
                          onChange={(e) => {
                            e.stopPropagation();
                            handleOptionChange("mandiri");
                          }}
                          className="form-radio text-blue-600"
                        />
                      </div>
                    </label>
                  </div>
                )}
              </div>

              <label
                className={`border border-black rounded-md mb-4 p-4 flex items-center justify-between ${
                  selectedOption === "gopay" ? "bg-gray-100" : ""
                }`}
              >
                <div className="flex items-center">
                  <img
                    src="images/icons/gopay-payment.png"
                    alt="GoPay"
                    className="w-16 mr-4"
                  />
                  <h3 className="text-lg font-semibold">GoPay</h3>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">Rp 2.500</span>
                  <input
                    type="radio"
                    name="payment"
                    checked={selectedOption === "gopay"}
                    onChange={() => handleOptionChange("gopay")}
                    className="form-radio text-blue-600"
                  />
                </div>
              </label>
              <label
                className={`border border-black rounded-md mb-4 p-4 flex items-center justify-between ${
                  selectedOption === "dana" ? "bg-gray-100" : ""
                }`}
              >
                <div className="flex items-center">
                  <img
                    src="images/icons/dana-payment.png"
                    alt="Dana"
                    className="w-16 mr-4"
                  />
                  <h3 className="text-lg font-semibold">Dana</h3>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">Rp 2.500</span>
                  <input
                    type="radio"
                    name="payment"
                    checked={selectedOption === "dana"}
                    onChange={() => handleOptionChange("dana")}
                    className="form-radio text-blue-600"
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="w-[32%]">
            <div className="bg-white rounded-lg p-4">
              <div>
                <h3 className="font-semibold text-2xl m-2">Rincian Biaya</h3>
              </div>
              <div className="border-t-2 border-dashed border-black m-2"></div>
              <div className="py-4">
                <div className="flex flex-wrap justify-between">
                  <p className="text-base m-2">Biaya Sewa</p>
                  <p className="text-base m-2">Rp. 100.000</p>
                </div>
                <div className="flex flex-wrap justify-between">
                  <p className="text-base m-2">Biaya Produk Tambahan</p>
                  <p className="text-base m-2">Rp. 0</p>
                </div>
                <div className="flex flex-wrap justify-between">
                  <p className="text-base m-2">Biaya Admin</p>
                  <p className="text-base m-2">Rp. 2.500</p>
                </div>
              </div>
              <div className="border-t-2 border-dashed border-black m-2"></div>
              <div>
                <div className="flex flex-wrap justify-between">
                  <p className="text-base m-2">Total</p>
                  <p className="text-base m-2">Rp. 102.500</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Button
                onClick={openModal("membayar")}
                classname="w-full text-base font-normal text-white my-5 bg-blue-500"
              >
                Lakukan Pembayaran
              </Button>
            </div>
          </div>
          <Modal
            isVisible={isModalVisible}
            onClose={closeModal}
            type={modalType}
          />
        </div>
      </div>
      {/* Body End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </div>
  );
};

export default DetailPembayaran;
