import React, { useState, useEffect } from "react";
import Navbar from "../components/elements/navbar/navbar";
import Footer from "../components/elements/footer";
import Button from "../components/elements/button/index";
import Modal from "../components/elements/modal";
import { ArrowLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Pembayaran = () => {
  const { id_booking } = useParams();
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState("");
  const [pembayaran, setPembayaran] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/booking/${id_booking}`)
      .then((res) => {
        console.log("Response data:", res.data.payload);
        if (res.data.payload.length > 0) {
          setPembayaran(res.data.payload[0]);
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [id_booking]);

  const openModal = (type) => (event) => {
    event.preventDefault();
    setModalType(type);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  if (!pembayaran) {
    return <div>Loading...</div>;
  }

  return (
    <div className="top-0 bg-[#171830]">
      {/* Navbar Start */}
      <Navbar />
      {/* Navbar End */}

      {/* Body Start */}
      <div className="container">
        <div className="flex flex-wrap justify-between items-start py-24">
          <div className="w-8/12 bg-white rounded-lg p-5">
            <div>
              <h3 className="font-semibold text-2xl m-2">
                {pembayaran.nama_lapangan}
              </h3>
              <p className="text-base m-2">
                <span>⭐</span> {pembayaran.rating} • Kota Tangerang
              </p>
            </div>
            <div className="border-t-2 border-dashed border-black m-2"></div>
            <div className="py-4">
              <h3 className="font-semibold text-2xl m-2">
                Lapangan {pembayaran.nomor_lapangan}
              </h3>
              <p className="text-base m-2">
                • {formatDate(pembayaran.TanggalBooking)}
              </p>{" "}
              <div className=" w-[119px] text-center border border-black rounded-md bg-transparent m-2">
                <p className="text-base">{pembayaran.jam_booking}</p>
              </div>
            </div>
            <div className="border-t-2 border-dashed border-black m-2"></div>
            <div className="mt-5">
              <div className="flex flex-wrap">
                <a href="#" className="flex flex-wrap">
                  <ArrowLeft />
                  <h5 className="font-semibold text-base">Tambah Jadwal</h5>
                </a>
              </div>
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
                  <p className="text-base m-2">{formatCurrency(pembayaran.harga)}</p>
                </div>
                <div className="flex flex-wrap justify-between">
                  <p className="text-base m-2">Biaya Produk Tambahan</p>
                  <p className="text-base m-2">Rp. 0</p>
                </div>
              </div>
              <div className="border-t-2 border-dashed border-black m-2"></div>
              <div>
                <div className="flex flex-wrap justify-between">
                  <p className="text-base m-2">Total</p>
                  <p className="text-base m-2">{formatCurrency(pembayaran.harga)}</p>
                </div>
              </div>
            </div>
            <a href="#" onClick={openModal("reschedule")}>
              <div className="flex flex-wrap justify-between bg-white rounded-lg p-4 my-5">
                <h5 className="text-base">Detail Reschedule & Pembatalan</h5>
                <ChevronRight />
              </div>
            </a>
            <div className="w-full">
              <Button
                onClick={openModal("pembayaran")}
                classname="w-full text-base font-normal text-white bg-blue-500"
              >
                Lanjutkan Ke Pembayaran
              </Button>
            </div>
            <Modal
              isVisible={isModalVisible}
              onClose={closeModal}
              type={modalType}
            />
          </div>
        </div>
      </div>
      {/* Body End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </div>
  );
};

export default Pembayaran;
