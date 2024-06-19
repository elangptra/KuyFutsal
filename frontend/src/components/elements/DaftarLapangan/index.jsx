import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../rekomendasi/rating";
import axios from "axios";
import Button from "../button";

const DaftarLapangan = () => {
  const [lapangan, setLapangan] = useState([]);
  const [kecamatan, setKecamatan] = useState([]);
  const [selectedKecamatan, setSelectedKecamatan] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/kecamatan")
      .then((res) => {
        setKecamatan(res.data.payload);
      })
      .catch((err) => {
        console.error("Error fetching kecamatan data:", err);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/lapangan")
      .then((res) => {
        setLapangan(res.data.payload);
      })
      .catch((err) => {
        console.error("Error fetching lapangan data:", err);
      });
  }, []);

  const displayTempatFutsal = (selectedKecamatan) => {
    if (selectedKecamatan) {
      const selectedKecamatanData = kecamatan.find(
        (item) => item.nama_kecamatan === selectedKecamatan
      );
      if (selectedKecamatanData) {
        return lapangan.filter(
          (item) => item.id_kecamatan === selectedKecamatanData.id_kecamatan
        );
      }
      return [];
    }
    return lapangan
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
    <div className="w-full absolute top-[120px]">
        <select
          className="border border-gray-300 rounded lg:mt-[230px] ms-10 sm:mt-[40px] sm:mr-5 px-3 text-lg bg-gray-600 text-white lg:w-[350px] md:w-[250px] md:h-[40px] sm:w-[250px] sm:h-[40px] lg:h-[50px] py-1"
          value={selectedKecamatan}
          onChange={handleKecamatanChange}
        >
          <option value="" >Pilih Kecamatan</option>
          {kecamatan.map((data) => (
            <option key={data.id_kecamatan} value={data.nama_kecamatan} style={{ color: 'white' }}>
              {data.nama_kecamatan}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-10 text-center text-white">

        <h1 className="text-3xl font-bold mb-4">Daftar Lapangan</h1>
        <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 m-10 lg:mb-[120px] md:mb-[230px] text-white">
        {displayTempatFutsal(selectedKecamatan).length > 0 ? (
          displayTempatFutsal(selectedKecamatan).map((venue) => (
            <Link to={`/detailLapangan/${venue.nama_lapangan}/${venue.id_lapangan}`} key={venue.id_lapangan}>
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 cursor-pointer bg-gradient-to-br from-[#0057A8] to-[#002242]">
                <img src={`http://localhost:3001/${venue.gambar}`} alt={venue.nama_lapangan} className="w-full" />
                <div className="p-4">
                  <h2 className="text-md font-semibold mb-2">
                    {capitalizeFirstLetter(venue.nama_lapangan)}
                  </h2>
                  <div className="flex justify-between items-center mb-2">
                    <Rating rating={venue.rating} />
                  </div>
                  <p className="text-sm mb-2 text-white">
                    Mulai{" "}
                    <span className="font-bold">
                      {parseInt(venue.harga).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </span>
                    /Sesi
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-white">Tidak ada lapangan tersedia</p>
        )}
      </div>
    </>
  );
};

export default DaftarLapangan;
