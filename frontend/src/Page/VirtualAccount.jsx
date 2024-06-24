import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/elements/navbar/navbar";
import Footer from "../components/elements/footer";
import Button from "../components/elements/button";
import Modal from "../components/elements/modal";

const VirtualAccount = () => {
  const { id_pembayaran } = useParams();
  const [time, setTime] = useState("");
  const [paymentData, setPaymentData] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");

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

  const openModal = (type) => (event) => {
    event.preventDefault();
    setModalType(type);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/pembayaran/${id_pembayaran}`)
      .then((response) => {
        console.log("API Response:", response.data.payload); // Debugging
        setPaymentData(response.data.payload);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [id_pembayaran]);

  return (
    <div className="top-0 bg-[#171830]">
      {/* Navbar Start */}
      <Navbar />
      {/* Navbar End */}

      {/* Body Start */}
      <div className="container">
        <div className="flex justify-center items-center py-24">
          <div className="text-white text-center">
            {paymentData ? (
              <>
                <h3 className="text-base m-1">Nomor Virtual Account</h3>
                <h1 className="font-semibold text-2xl m-1">
                  {paymentData.virtual_account}
                </h1>
                <h3 className="text-base m-1">Total Pembayaran:</h3>
                <h3 className="font-semibold text-lg m-1">
                  Rp {paymentData.total}
                </h3>
                <h3 className="text-base m-10">
                  Silahkan untuk melakukan pembayaran sebelum pukul {time}
                </h3>
                <Button
                  onClick={openModal("success-verif")}
                  classname="w-[65%] text-base font-normal text-white bg-blue-500"
                >
                  Cek Status Pembayaran
                </Button>
              </>
            ) : (
              <p>Loading...</p>
            )}
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
