import React, { useState, useEffect } from "react";
import Navbar from "../components/elements/navbar/navbar";
import Footer from "../components/elements/footer";
import Button from "../components/elements/button";
import Input from "../components/elements/input";
import Modal from "../components/elements/modal";
import axios from "axios";
import SimpleModal from "../components/elements/simplemodal";

const DetailPembayaran = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [user, setUser] = useState(null);
  const [inputNama, setInputNama] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputNoTelp, setInputNoTelp] = useState("");
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mitraCode, setMitraCode] = useState("");

  const [idBooking, setIdBooking] = useState(""); // State untuk id_booking
  const [idPengguna, setIdPengguna] = useState(""); // State untuk id_pengguna
  const [hargaLapangan, setHargaLapangan] = useState(0); // State untuk harga lapangan

  const mitraCodes = {
    bca: "12345",
    bni: "67890",
    mandiri: "11223",
    gopay: "44556",
    dana: "77889",
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setMitraCode(mitraCodes[option]);
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
        fetchUserData(user.id_pengguna);
        fetchBookingData(user.id_pengguna); // Fetch booking data based on id_pengguna
      } catch (error) {
        console.error("Invalid token");
      }
    }
  }, []);

  const fetchUserData = async (id_pengguna) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/pengguna/${id_pengguna}`
      );
      const userData = response.data.payload[0];
      setUser(userData);
      setInputNama(userData.nama);
      setInputEmail(userData.email);
      setInputNoTelp(userData.no_telp);
      const userDataWithDefaults = {
        ...userData,
        fotoUrl:
          "/images/profile/" + userData.foto || "/images/profile/avatar.jpeg",
      };
      setUser(userDataWithDefaults);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setError("Failed to fetch user data");
    }
  };

  const handleEditProfile = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:3001/pengguna/${user.id_pengguna}`, {
        nama: inputNama,
        email: inputEmail,
        no_telp: inputNoTelp,
      })
      .then((response) => {
        setUser({
          ...user,
          nama: inputNama,
          email: inputEmail,
          no_telp: inputNoTelp,
        });
        setIsModalOpen(true);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchBookingData = async (id_pengguna) => {
    try {
      const response = await axios.get(`http://localhost:3001/booking/pengguna/${id_pengguna}`);
      const bookingData = response.data.payload[0];
      setIdBooking(bookingData.id_booking);
      setHargaLapangan(bookingData.harga);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    window.location.reload(); // Refresh the website
  };

  const handlePayment = () => {
    const adminFee = 2500;
    const total = hargaLapangan + adminFee;

    const paymentData = {
      metode_bayar: selectedOption,
      virtual_account: mitraCode + inputNoTelp,
      total: total,
      id_booking: idBooking,
      id_pengguna: idPengguna,
    };

    axios
      .post(`http://localhost:3001/pembayaran`, paymentData)
      .then((response) => {
        console.log("Payment data saved:", response.data);
        console.log("Booking successful:", response.data);
        // Redirect ke halaman pembayaran
        window.location.href = "/virtualAccount/" + response.data.payload.insertId;
        setModalType("success"); // Set modal type to success
        setModalVisible(true); // Show the modal
      })
      .catch((error) => {
        console.error("Error saving payment data:", error);
        // Bisa tambahkan logika untuk notifikasi error
        setModalType("error"); // Set modal type to error
        setModalVisible(true); // Show the modal
      });
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
                <form onSubmit={handleEditProfile}>
                  <div className="flex flex-wrap justify-between">
                    <div className="w-[49%]">
                      <input
                        type="text"
                        name="nama"
                        value={inputNama}
                        onChange={(e) => setInputNama(e.target.value)}
                        className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
                        placeholder="Masukkan Nama Anda"
                      />
                      <input
                        type="text"
                        name="no_telp"
                        value={inputNoTelp}
                        onChange={(e) => setInputNoTelp(e.target.value)}
                        placeholder="Nomor Telepon"
                        className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
                      />
                      <div className="flex flex-col text-center items-center justify-center border p-10 border-black rounded-md bg-slate-400">
                        <img
                          src={user?.fotoUrl || "/images/profile/avatar.jpeg"}
                          className="m-10"
                          alt="avatar-icon"
                        />
                      </div>
                      <div className="border border-black rounded-md bg-transparent mt-5">
                        <p className="text-base p-2">
                          <span>•</span> Disarankan untuk mendaftar agar
                          mendapat pengalaman yang lebih mudah !
                        </p>
                      </div>
                    </div>
                    <div className="w-[49%]">
                      <input
                        type="email"
                        name="email"
                        value={inputEmail}
                        onChange={(e) => setInputEmail(e.target.value)}
                        placeholder="Email"
                        className="text-sm border rounded w-full py-2 px-3 text-black-700 opacity-90 mb-6 bg-none border-black"
                      />
                      <div className="border border-black rounded-md bg-transparent">
                        <p className="text-base p-2">
                          <span>•</span> Silahkan foto wajah anda sebagai
                          kebijakan dari kami terimakasih.{" "}
                        </p>
                      </div>
                      <Button
                        type="submit"
                        classname="w-full text-base font-normal text-white my-5 bg-blue-500"
                      >
                        Edit Profile
                      </Button>
                      <SimpleModal
                        isOpen={isModalOpen}
                        image="/images/icons/success-icon.png"
                        message="Profile updated successfully."
                        buttonText="Close"
                        onClose={handleCloseModal}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 mt-6">
              <div>
                <h3 className="font-semibold text-2xl m-2">Detail Pembayaran</h3>
              </div>
              <div className="border-t-2 border-dashed border-black m-2"></div>
              <div className="py-1">
                <p className="font-semibold text-lg">Metode Pembayaran</p>
                <div className="relative inline-block w-full text-gray-700">
                  <select
                    value={selectedOption}
                    onChange={(e) => handleOptionChange(e.target.value)}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Pilih Metode Pembayaran</option>
                    <option value="bca">BCA Virtual Account</option>
                    <option value="bni">BNI Virtual Account</option>
                    <option value="mandiri">Mandiri Virtual Account</option>
                    <option value="gopay">GoPay</option>
                    <option value="dana">DANA</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </div>
                </div>
                <Button
                  type="button"
                  classname="w-full text-base font-normal text-white my-5 bg-blue-500"
                  onClick={handlePayment}
                >
                  Lakukan Pembayaran
                </Button>
                {isModalVisible && (
                  <Modal
                    type={modalType}
                    message={
                      modalType === "success"
                        ? "Pembayaran berhasil dilakukan!"
                        : "Terjadi kesalahan saat melakukan pembayaran."
                    }
                    onClose={closeModal}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="w-3/12">
            <div className="bg-white rounded-lg p-5">
              <h3 className="font-semibold text-2xl">Data Lapangan</h3>
              <div className="border-t-2 border-dashed border-black m-2"></div>
              <div className="py-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-700 font-semibold">Jam Main</p>
                    <p className="text-gray-500">08:00 - 09:00 WIB</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">Harga</p>
                    <p className="text-gray-500">Rp. {hargaLapangan}</p>
                  </div>
                </div>
                <div className="border-t-2 border-dashed border-black m-2"></div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-700 font-semibold">Lama Sewa</p>
                    <p className="text-gray-500">1 Jam</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">Total</p>
                    <p className="text-gray-500">Rp. {hargaLapangan + 2500}</p>
                  </div>
                </div>
                <div className="border-t-2 border-dashed border-black m-2"></div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-700 font-semibold">Lokasi</p>
                    <p className="text-gray-500">Lapangan A</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold">Tanggal</p>
                    <p className="text-gray-500">25 Juni 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-5 mt-6">
              <h3 className="font-semibold text-2xl">Informasi</h3>
              <div className="border-t-2 border-dashed border-black m-2"></div>
              <div className="py-1">
                <p className="text-gray-700 font-semibold">
                  Silakan lakukan pembayaran dalam waktu 1 jam setelah
                  pemesanan. Jika tidak, pemesanan akan otomatis dibatalkan.
                </p>
                <p className="text-gray-500 mt-3">
                  Untuk pertanyaan lebih lanjut, hubungi kami di support@lapangan.com
                </p>
              </div>
            </div>
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

export default DetailPembayaran;
