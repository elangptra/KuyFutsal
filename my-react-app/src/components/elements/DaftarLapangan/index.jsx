import { Link } from "react-router-dom";
import Rating from "../rekomendasi/rating";
import React, { useEffect, useState } from "react";
import Api from "../../../api/lapangan-api";
import axios from "axios";

const DaftarLapangan = () => {
  const [lapangan, setLapangan] = useState([]);
  const [selectedKecamatan, setSelectedKecamatan] = useState("");

  useEffect(() => {
    fetchLapangan();
    // Api.get("/kecamatan")
    //   .then((res) => {
    //     setTimeout(() => {
    //       setLapangan(res.data);
    //     }, 2000);
    //   })
    //   .catch((err) => {
    //     console.error("Error fetching data:", err);
  }, []);
  const fetchLapangan = async () => {
    try {
      const response = await axios.get("http://localhost:8080/kecamatan");
      setLapangan(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const displayTempatFutsal = (kecamatan) => {
    if (kecamatan) {
      const selectedKecamatanData = lapangan.find(
        (item) => item.nama === kecamatan
      );
      return selectedKecamatanData ? selectedKecamatanData.tempat_futsal : [];
    }
    return lapangan
      .flatMap((kecamatan) => kecamatan.tempat_futsal)
      .filter((venue) => venue.rating > 4)
      .sort((a, b) => b.rating - a.rating);
  };

  const handleKecamatanChange = (event) => {
    setSelectedKecamatan(event.target.value);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <div className="w-full absolute top-[120px] left-20">
        <select
          className="border border-gray-300 rounded lg:mt-[230px] sm:mt-[40px] sm:mr-5 px-3 text-lg bg-gray-600 text-white lg:w-[350px] md:w-[250px] md:h-[40px] sm:w-[250px] sm:h-[40px] lg:h-[50px] py-1"
          value={selectedKecamatan}
          onChange={handleKecamatanChange}
        >
          <option value="">Pilih Kecamatan</option>
          {lapangan.map((data) => (
            <option key={data.id} value={data.nama}>
              {data.nama}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full text-center mt-10 text-white">
        <h1 className="text-3xl font-bold">Daftar Lapangan</h1>
        <div className="absolute left-[38%] mt-2 w-1/4 h-[2px] bg-white"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 m-10 lg:mb-[120px] md:mb-[230px] text-white">
        {displayTempatFutsal(selectedKecamatan).map((venue) => (
          <Link to={`/detail/${venue.nama}/${venue.id}`} key={venue.id}>
            <div className="rounded-xl overflow-hidden shadow-lg hover:scale-105 duration-300 cursor-pointer bg-gradient-to-br from-[#0057A8] to-[#002242]">
              <img src={venue.image} alt={venue.nama} className="w-full" />
              <div className="p-4">
                <h5 className="text-white text-sm font-semibold italic">
                  Venue
                </h5>
                <h2 className="text-md font-semibold mb-2">
                  {capitalizeFirstLetter(venue.nama)}
                </h2>
                <div className="flex justify-between items-center mb-2">
                  <Rating rating={venue.rating} />
                </div>
                <p className="text-sm mb-2 text-white">
                  Mulai{" "}
                  <span className="font-bold">
                    {venue.harga.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </span>
                  /Sesi
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default DaftarLapangan;
