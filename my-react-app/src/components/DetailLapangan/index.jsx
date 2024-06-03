import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Api from "../../api/lapangan-api";
import Rating from "../elements/rekomendasi/rating";
import { format } from "date-fns";
import Button from "../elements/button";
import { Link } from "react-router-dom";

const DetailLapangan = (props) => {
  const { nama, id } = useParams();
  const [lapanganDetail, setLapanganDetail] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedLapangan, setSelectedLapangan] = useState("Lapangan 1");
  const { img = "images/temukan venue 1.png" } = props;

  useEffect(() => {
    Api.get(`/kecamatan`)
      .then((res) => {
        console.log("Response data:", res.data);
        const allTempatFutsal = res.data.flatMap(
          (kecamatan) => kecamatan.tempat_futsal
        );
        const lapangan = allTempatFutsal.find(
          (item) => item.id === parseInt(id)
        );
        if (lapangan) {
          console.log("Found lapangan:", lapangan);
          setLapanganDetail(lapangan);
        } else {
          console.error("Lapangan not found");
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [nama, id]);

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

  if (!lapanganDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-5">
      <div className="container p-4 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h1 className="text-3xl font-bold">{lapanganDetail.nama}</h1>
            <p>{lapanganDetail.alamat}</p>
            <p>
              Buka: {lapanganDetail.jam_buka} - {lapanganDetail.jam_tutup}
            </p>
            <p>{lapanganDetail.note}</p>
            <div className="flex items-center">
              <Rating rating={lapanganDetail.rating} />
              <span className="ml-2">{lapanganDetail.rating}</span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Cek Ketersediaan
            </button>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <img
              src={img}
              alt={lapanganDetail.nama}
              className="w-full h-64 object-cover rounded"
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Fasilitas</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>Jual Minuman</div>
            <div>Parkir Motor</div>
            <div>Toilet</div>
            <div>Parkir Mobil</div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold">Booking Informasi</h2>
          <div className="grid grid-cols-4 ">
            <label className="block">
              <span className="text-white">Tanggal</span>
              <input
                type="date"
                className="mt-1 block w-[250px] h-[40px] rounded-md text-black px-4 "
                onChange={handleDateChange}
              />
            </label>
            <label className="block">
              <span className="text-white">Lapangan</span>
              <select
                className="mt-1 block w-[250px] h-[40px] rounded-md text-black px-4"
                value={selectedLapangan}
                onChange={handleLapanganChange}
              >
                <option>Lapangan 1</option>
                <option>Lapangan 2</option>
              </select>
            </label>
          </div>
        </div>
        <div className="flex h-auto">
          <div className="grid-cols-2 md:grid-cols-2 mt-4 bg-white rounded-lg">
            <div className="grid grid-cols-6  gap-4 p-4">
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
          <div className="ms-5 ">
            <div className="w-[300px] mt-4 p-4 text-black h-[250px] bg-white rounded-lg">
              <div className="flex border-b-2 w-full mb-5 justify-start border-black">
                <div className="me-10 ">
                  <p className="font-semibold text-lg">
                    {" "}
                    Tanggal <br />
                  </p>
                  <p>
                    {selectedDate
                      ? format(new Date(selectedDate), "d MMM yyyy")
                      : "-"}
                  </p>
                </div>
                <div className="border-l-2 border-black ">
                  <p className="font-semibold text-lg ms-2">
                    {" "}
                    Lapangan <br />
                  </p>
                  <p className="ms-2">{selectedLapangan || "-"}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="mb-7 ">Durasi Waktu:</p>{" "}
                <p>{selectedTime || "-"}</p>
              </div>
              <div className="flex justify-between">
                <p className="mb-7">Harga: </p>
                <p>
                  {lapanganDetail.harga.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                  /sesi
                </p>
              </div>
              <div className="flex justify-between">
                <p className="mb-7">Total: </p>
                <p>
                  {calculateTotalPrice().toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            </div>
            <Button
              type="submit"
              classname="bg-blue-500 mt-4 text-white w-full"
            >
              <Link to="/Pembayaran">Pesan Sekarang</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLapangan;
