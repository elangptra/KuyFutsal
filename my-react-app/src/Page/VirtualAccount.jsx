import React from "react";
import Navbar from "../components/elements/navbar/navbar";
import Footer from "../components/elements/footer";
import Button from "../components/elements/button/index";
import Modal from "../components/elements/modal";
import { useState, useEffect } from "react";

const VirtualAccount = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    // Check if the initial time is already stored in localStorage
    const storedTime = localStorage.getItem("initialTime");

    let initialTime;
    if (storedTime) {
      initialTime = new Date(storedTime);
    } else {
      initialTime = new Date();
      initialTime.setHours(initialTime.getHours() + 1);
      localStorage.setItem("initialTime", initialTime);
    }

    const hours = initialTime.getHours().toString().padStart(2, "0");
    const minutes = initialTime.getMinutes().toString().padStart(2, "0");
    setTime(`${hours}:${minutes}`);
  }, []);

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
        <div className="flex justify-center items-center py-24">
          <div className="text-white text-center">
            <h3 className="text-base m-1">Nomor Virtual Account</h3>
            <h1 className="font-semibold text-2xl m-1">
              Ini Nomor Virtual Account
            </h1>
            <h3 className="text-base m-1">Total Pembayaran:</h3>
            <h3 className="font-semibold text-lg m-1">Rp. 102.500</h3>
            <h3 className="text-base m-10">
              Silahkan untuk melakukan pembayaran sebelum pukul {time}
            </h3>
            <Button onClick={openModal("success-verif")} classname="w-[65%] text-base font-normal text-white bg-blue-500">
              Cek Status Pembayaran
            </Button>
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
export default VirtualAccount;
