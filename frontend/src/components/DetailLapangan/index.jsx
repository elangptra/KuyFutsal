import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Rating from "../elements/rekomendasi/rating";
import { format, addDays } from "date-fns";
import Button from "../elements/button";
import SimpleModal from "../elements/simplemodal";

const DetailLapangan = (props) => {
  const { id } = useParams(); // Mengambil parameter id dari URL
  const [lapanganDetail, setLapanganDetail] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimes, setSelectedTimes] = useState([]); // Array for selected times
  const [userId, setUserId] = useState(null); // ID pengguna yang sedang login
  const [selectedLapangan, setSelectedLapangan] = useState("");
  const [lapanganOptions, setLapanganOptions] = useState([]); // State for lapangan options
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [isLoginRequiredModalOpen, setIsLoginRequiredModalOpen] = useState(false);
  const [isValidationErrorModalOpen, setIsValidationErrorModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/lapangan/${id}`)
      .then((res) => {
        console.log("Response data:", res.data.payload);
        const detail = res.data.payload[0];
        setLapanganDetail(detail);
        setLapanganOptions(
          Array.from({ length: detail.jumlah_lapangan }, (_, i) => `Lapangan ${i + 1}`)
        );
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });

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
        setUserId(user.id_pengguna);
      } catch (error) {
        console.error("Invalid token");
      }
    }
  }, [id]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (time) => {
    setSelectedTimes((prevTimes) => {
      if (prevTimes.includes(time)) {
        return prevTimes.filter((t) => t !== time);
      } else {
        return [...prevTimes, time];
      }
    });
  };

  const handleLapanganChange = (event) => {
    setSelectedLapangan(event.target.value);
  };

  const calculateTotalPrice = () => {
    const durationInHours = selectedTimes.length;
    return lapanganDetail.harga * durationInHours;
  };

  const handleBooking = () => {
    if (!userId) {
      setIsLoginRequiredModalOpen(true);
      return;
    }

    if (!selectedDate || selectedTimes.length === 0) {
      setErrorMessage("Tanggal dan Jam harus diisi untuk melakukan booking.");
      setIsValidationErrorModalOpen(true);
      return;
    }

    const bookingData = {
      TanggalBooking: selectedDate,
      jam_booking: selectedTimes.join(", "),
      durasi: `${selectedTimes.length}:00`, // Duration based on selected time slots
      nomor_lapangan: parseInt(selectedLapangan.replace("Lapangan ", "")),
      harga: calculateTotalPrice(),
      id_lapangan: id,
      id_pengguna: userId,
    };

    console.log("Booking data to be sent:", bookingData);

    axios
      .post("http://localhost:3001/bookinglapangan", bookingData)
      .then((response) => {
        console.log("Booking successful:", response.data);
        // Redirect ke halaman pembayaran
        window.location.href = "/pembayaran/" + response.data.payload.insertId;
      })
      .catch((error) => {
        console.error("There was an error booking the lapangan!", error);
      });
  };

  const getTomorrowDate = () => {
    const tomorrow = addDays(new Date(), 1);
    return format(tomorrow, "yyyy-MM-dd");
  };

  if (!lapanganDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-5">
      <div className="container p-4 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full md:w-full lg:w-full">
            <h1 className="text-3xl mt-10 font-bold capitalize">
              {lapanganDetail.nama_lapangan}
            </h1>
            <p className="text-md my-4 capitalize">{lapanganDetail.alamat}</p>
            <p>
              Buka: {lapanganDetail.jam_buka} - {lapanganDetail.jam_tutup}
            </p>
            <p>{lapanganDetail.note}</p>
            <div className="flex items-center mb-4">
              <Rating rating={lapanganDetail.rating} />
              <span className="ml-2">{lapanganDetail.rating}</span>
            </div>
            <a href="#ketersediaan">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                Cek Ketersediaan
              </button>
            </a>
          </div>
          <div className="w-full flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 lg:mt-0">
              <div className="col-span-1">
                <img
                  src={`http://localhost:3001/${lapanganDetail.gambar}`}
                  alt={lapanganDetail.nama_lapangan}
                  className="w-full h-64 object-cover rounded"
                />
              </div>
              <div className="col-span-1 flex justify-between">
                <img
                  src={`http://localhost:3001/${lapanganDetail.gambar}`}
                  alt={lapanganDetail.nama_lapangan}
                  className="w-[49%] h-64 object-cover rounded"
                />
                <img
                  src={`http://localhost:3001/${lapanganDetail.gambar}`}
                  alt={lapanganDetail.nama_lapangan}
                  className="w-[49%] h-64 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Fasilitas</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-2 h-8 mb-3">
              <img src="/images/icons/minuman.png" alt="" />
              <p>Jual Minuman</p>
            </div>
            <div className="flex items-center gap-2 h-8">
              <img src="/images/icons/motor.png" alt="" />
              <p>Parkir Motor</p>
            </div>
            <div className="flex items-center gap-2 h-8">
              <img src="/images/icons/toilet.png" alt="" />
              <p>Toilet</p>
            </div>
            <div className="flex items-center gap-2 h-8">
              <img src="/images/icons/mobil.png" alt="" />
              <p>Mobil</p>
            </div>
          </div>
        </div>
        <div id="ketersediaan" className="mt-10">
          <h2 className="text-3xl font-bold mb-5">Booking Informasi</h2>
          <div className="grid grid-cols-4 gap-4">
            <label className="block">
              <span className="text-white">Tanggal</span>
              <input
                type="date"
                className="mt-1 block w-full h-10 rounded-md text-black px-4"
                min={getTomorrowDate()}
                onChange={handleDateChange}
              />
            </label>
            <label className="block">
              <span className="text-white">Lapangan</span>
              <select
                className="mt-1 block w-full h-10 rounded-md text-black px-4"
                value={selectedLapangan}
                onChange={handleLapanganChange}
              >
                {lapanganOptions.map((lapangan, index) => (
                  <option key={index} value={lapangan}>
                    {lapangan}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-4 mb-10 w-full">
          <div className="w-full md:w-2/3 bg-white rounded-lg p-4">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[
                "08:00 - 09:00",
                "09:00 - 10:00",
                "10:00 - 11:00",
                "11:00 - 12:00",
                "12:00 - 13:00",
                "13:00 - 14:00",
                "14:00 - 15:00",
                "15:00 - 16:00",
                "16:00 - 17:00",
                "17:00 - 18:00",
                "18:00 - 19:00",
                "19:00 - 20:00",
                "20:00 - 21:00",
                "21:00 - 22:00",
              ].map((time, index) => (
                <button
                  key={index}
                  onClick={() => handleTimeChange(time)}
                  className={`py-6 mt-2 px-4 text-sm rounded ${
                    selectedTimes.includes(time)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-black"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0 md:ml-4 p-4 text-black bg-white rounded-lg">
            <div className="flex border-b-2 w-full mb-5 justify-start border-black">
              <div className="mr-10 ">
                <p className="font-semibold text-lg">Tanggal</p>
                <p>
                  {selectedDate
                    ? format(new Date(selectedDate), "d MMM yyyy")
                    : "-"}
                </p>
              </div>
              <div className="border-l-2 border-black pl-2">
                <p className="font-semibold text-lg">Lapangan</p>
                <p>{selectedLapangan || "-"}</p>
              </div>
            </div>
            <div className="flex justify-between mb-7">
              <p>Durasi Waktu:</p>
              <p>{selectedTimes.length} jam</p>
            </div>
            <div className="flex justify-between mb-7">
              <p>Harga:</p>
              <p>
                {parseFloat(lapanganDetail.harga).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
                /sesi
              </p>
            </div>
            <div className="flex justify-between mb-7">
              <p>Total:</p>
              <p>
                {calculateTotalPrice().toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white w-full py-2 rounded mt-4"
              onClick={handleBooking}
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
      <SimpleModal
        isOpen={isLoginRequiredModalOpen}
        image="/images/icons/modal-alert.png"
        message="Anda harus login terlebih dahulu untuk melakukan booking."
        onClose={() => setIsLoginRequiredModalOpen(false)}
      />
      <SimpleModal
        isOpen={isValidationErrorModalOpen}
        image="/images/icons/modal-alert.png"
        message={errorMessage}
        onClose={() => setIsValidationErrorModalOpen(false)}
      />
    </div>
  );
};

export default DetailLapangan;
