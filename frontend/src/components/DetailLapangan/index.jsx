import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Rating from "../elements/rekomendasi/rating";
import { format } from "date-fns";
import Button from "../elements/button";

const DetailLapangan = (props) => {
  const { id } = useParams(); // Mengambil parameter id dari URL
  const [lapanganDetail, setLapanganDetail] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [userId, setUserId] = useState(1); // ID pengguna yang sedang login, disesuaikan dengan aplikasi Anda
  const [selectedLapangan, setSelectedLapangan] = useState("Lapangan 1");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/lapangan/${id}`)
      .then((res) => {
        console.log("Response data:", res.data.payload);
        setLapanganDetail(res.data.payload[0]);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [id]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleLapanganChange = (event) => {
    setSelectedLapangan(event.target.value);
  };

  const calculateTotalPrice = () => {
    if (!selectedTime) return 0;

    const [start, end] = selectedTime.split(" - ").map((t) => t.split(":"));
    const startTime = new Date();
    startTime.setHours(start[0], start[1]);
    const endTime = new Date();
    endTime.setHours(end[0], end[1]);
    const durationInHours = (endTime - startTime) / (1000 * 60 * 60); // Duration in hours

    return lapanganDetail.harga * durationInHours;
  };

  const handleBooking = () => {
    const bookingData = {
      TanggalBooking: selectedDate,
      jam_booking: selectedTime.split(" - ")[0],
      durasi: "01:00:00", // Durasi bisa dihitung berdasarkan waktu yang dipilih, ini adalah contoh
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
        // Tambahkan logika setelah booking berhasil, misalnya navigasi ke halaman pembayaran
        // Redirect ke halaman utama
        window.location.href = "/pembayaran/" + response.data.payload.insertId;
      })
      .catch((error) => {
        console.error("There was an error booking the lapangan!", error);
      });
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Cek Ketersediaan
            </button>
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
        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-5">Booking Informasi</h2>
          <div className="grid grid-cols-4 gap-4">
            <label className="block">
              <span className="text-white">Tanggal</span>
              <input
                type="date"
                className="mt-1 block w-full h-10 rounded-md text-black px-4"
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
                {lapanganDetail.lapanganList ? (
                  lapanganDetail.lapanganList.map((lapangan, index) => (
                    <option key={index} value={lapangan}>
                      {lapangan}
                    </option>
                  ))
                ) : (
                  <option value="Lapangan 1">Lapangan 1</option>
                )}
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
                    selectedTime === time
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
              <p>{selectedTime || "-"}</p>
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
    </div>
  );
};

export default DetailLapangan;
