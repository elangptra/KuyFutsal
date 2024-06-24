import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RiwayatPemesanan = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [user, setUser] = useState(null);
  const [riwayat, setRiwayat] = useState([]); // State untuk menyimpan data riwayat
  const [idPengguna, setIdPengguna] = useState(""); // State untuk id_pengguna

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split("")
            .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
        );
        const user = JSON.parse(jsonPayload).user;
        setIdPengguna(user.id_pengguna); // Set id_pengguna
        fetchRiwayatData(user.id_pengguna); // Fetch riwayat data based on id_pengguna
      } catch (error) {
        console.error("Invalid token");
      }
    }
  }, []);

  const fetchRiwayatData = async (id_pengguna) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/pembayaran/pengguna/${id_pengguna}`
      );
      setRiwayat(response.data.payload);
    } catch (error) {
      console.error("Error fetching riwayat data:", error);
    }
  };

  const handleClickSchedule = () => {
    setShowNotification(!showNotification);
  };

  return (
    <div className="lg:w-[100px] md:w-[200px] bg-blue sm:w-[200px] max-h-0 absolute top-[110px] right-[-70px] ">
      {showNotification && (
        <div className="bg-white border border-black-200 p-5 rounded-md absolute top-9 right-10 ">
          <div className="">
            <h1 className="text-center w-[300px] border-b-2 text-lg font-semibold">
              Riwayat Pemesanan
            </h1>
            
            <div className="flex justify-center">
              <div className="max-h-80 overflow-y-auto">
                {riwayat.length > 0 ? (
                  riwayat.map((item, index) => (
                    <div
                      key={index}
                      className="w-full flex justify-center border-gray-400 my-3"
                    >
                      <div className="w-[300px] border-2 rounded-md ms-3 border-black-200">
                        <div className="flex border-b-2 border-black m-3">
                          <div className="me-3">
                            <p className="font-semibold text-sm">
                              Tanggal Booking <br />
                            </p>
                            <p className="text-[14px]">
                              {new Date(item.TanggalBooking).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="border-l-2 border-black">
                            <p className="text-sm font-semibold ms-2">
                              Lapangan <br />
                            </p>
                            <p className="ms-2 text-[14px]">
                              {item.nomor_lapangan}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between m-3">
                          <p className="text-sm font-semibold">
                            Jam Booking <br />
                          </p>
                          <p className="text-[14px]">{item.jam_booking}</p>
                        </div>
                        <div className="flex justify-between m-3">
                          <p className="text-sm font-semibold">
                            Harga <br />
                          </p>
                          <p className="text-[14px]">
                            Rp. {new Intl.NumberFormat("id-ID").format(item.harga)}
                          </p>
                        </div>
                        <div className="flex justify-between m-3">
                          <p className="text-sm font-semibold">
                            Durasi <br />
                          </p>
                          <p className="text-[14px]">
                            {parseInt(item.durasi)} jam
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center">Belum ada riwayat pemesanan.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Icon */}
      <div>
        <img
          src="/images/schedule.png"
          alt=""
          className="w-6 mb-2 me-3 cursor-pointer"
          onClick={handleClickSchedule}
        />
      </div>
    </div>
  );
};

export default RiwayatPemesanan;
