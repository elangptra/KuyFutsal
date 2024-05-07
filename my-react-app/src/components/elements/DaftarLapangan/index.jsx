import { Link } from "react-router-dom";
import Rating from "../rekomendasi/rating";
import React, { useState } from "react";

const DaftarLapangan = () => {
  const [lapangan, setLapangan] = useState([
    {
      kecamatan: "Batuceper",
      tempat_futsal: [
        {
          id: 1,
          title: "Garuda Futsal Center",
          image: "images/Rekomendasi Venue 1.png",
          harga: 100000,
          rating: 4,
          lokasi:
            "Jl. Garuda No.66B, RT.006/RW.004, Batuceper, Kec. Batuceper, Kota Tangerang, Banten",
          jamBuka: "08.00",
          jamTutup: "22.00",
          note: "Dilarang membawa makanan dan minuman dari luar",
        },
        {
          id: 2,
          title: "Poris Futsal",
          image: "images/Rekomendasi Venue 1.png",
          harga: 50000,
          rating: 4,
          lokasi:
            "RMGH+M82, Jl. Maulana Hasanudin, RT.007/RW.005, Poris Jaya, Kec. Batuceper, Kota Tangerang, Banten 15122",
          jamBuka: "07.00",
          jamTutup: "23.59",
          note: "Dilarang membawa makanan dan minuman dari luar",
        },
        {
          id: 3,
          title: "Futsal simprug",
          image: "images/Rekomendasi Venue 1.png",
          harga: 50000,
          rating: 4,
          lokasi:
            "Jl. Kenari Raya Blk. G No.1 Blok G1, RT.003/RW.013, Poris Jaya, Kec. Batuceper, Kota Tangerang, Banten 15122",
          jamBuka: "08.00",
          jamTutup: "22.00",
          note: "Dilarang membawa makanan dan minuman dari luar",
        },
        {
          id: 4,
          title: "Saujana Futsal",
          image: "images/Rekomendasi Venue 1.png",
          harga: 100000,
          rating: 4,
          lokasi:
            "RT.003/RW.001, Poris Plawad Utara, Kec. Cipondoh, Kota Tangerang, Banten 15141",
          jamBuka: "08.00",
          jamTutup: "23.00",
          note: "Dilarang membawa makanan dan minuman dari luar",
        },
        {
          id: 5,
          title: "KAO Futsal",
          image: "images/Rekomendasi Venue 1.png",
          harga: 100000,
          rating: 4,
          lokasi:
            "Jl. Sawah Darat, RT.001/RW.006, Ketapang, Kec. Cipondoh, Kota Tangerang, Banten 15148",
          jamBuka: "00.00",
          jamTutup: "23.59",
          note: "Dilarang membawa makanan dan minuman dari luar",
        },
        {
          id: 6,
          title: "Futsal Puri Dewata Indah",
          image: "images/Rekomendasi Venue 1.png",
          harga: 100000,
          rating: 4,
          lokasi: "Poris Plawad Utara, Kec. Cipondoh, Kota Tangerang, Banten",
          jamBuka: "08.30",
          jamTutup: "22.30",
          note: "Dilarang membawa makanan dan minuman dari luar",
        },
        {
          id: 7,
          title: "Cipta Panorama Futsal",
          image: "images/Rekomendasi Venue 1.png",
          harga: 100000,
          rating: 4,
          lokasi:
            "Jl. H. Risan No.31, RT.005/RW.010, Cipondoh Makmur, Kec. Cipondoh, Kota Tangerang, Banten 15148",
          jamBuka: "10.00",
          jamTutup: "00.00",
          note: "Dilarang membawa makanan dan minuman dari luar",
        },
        {
          id: 8,
          title: "Futsal aditia pandanu",
          image: "images/Rekomendasi Venue 1.png",
          harga: 100000,
          rating: 4,
          lokasi:
            "belakang kasimura, Jl. Mandor Muhi Kampung Bulak Sembolo, RT.001/RW.010, Cipondoh Indah, Kec. Tangerang, Kota Tangerang, Banten 15148",
          jamBuka: "07.00",
          jamTutup: "00.00",
          note: "Dilarang membawa makanan dan minuman dari luar",
        },
      ],
    },
    {
      kecamatan: "Benda",
      tempat_futsal: [
        {
          id: 1,
          title: "Futsal Taman Mini",
          image: "images/Rekomendasi Venue 1.png",
          harga: 100000,
          rating: 4,
          lokasi:
            "Jl. Batuceper, RT.001/RW.001, Cipondoh, Kec. Cipondoh, Kota Tangerang, Banten 15148",
          jamBuka: "08.00",
          jamTutup: "22.00",
          note: "Dilarang membawa makanan dan minuman dari luar",
        },
      ],
    },
    // Tambahkan data kecamatan dan tempat futsal lainnya di sini
  ]);

  const [selectedKecamatan, setSelectedKecamatan] = useState("");

  // Fungsi untuk menampilkan tempat futsal berdasarkan kecamatan yang dipilih
  const displayTempatFutsal = (kecamatan) => {
    const selectedKecamatanData = lapangan.find(
      (item) => item.kecamatan === kecamatan
    );
    return selectedKecamatanData ? selectedKecamatanData.tempat_futsal : [];
  };

  // Mengatur nilai selectedKecamatan saat dropdown dipilih
  const handleKecamatanChange = (event) => {
    setSelectedKecamatan(event.target.value);
  };

  return (
    <>
      <div className="w-full absolute top-[120px] left-20 ">
        <select
          className="border border-gray-300 rounded mt-[230px]  px-3 text-lg bg-gray-600 text-white w-[350px] h-[50px] py-1"
          value={selectedKecamatan}
          onChange={handleKecamatanChange}
        >
          <option value=""className="" >Pilih Kecamatan</option>
          {lapangan.map((data) => (
            <option key={data.kecamatan} value={data.kecamatan}>
              {data.kecamatan}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full text-center mt-10 text-white">
        <h1 className="text-3xl font-bold">Daftar Lapangan</h1>
        <div className="absolute left-[38%] mt-2 w-1/4 h-[2px] bg-white"></div>
      </div>

      {/* Dropdown untuk memilih kecamatan */}

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 m-10 lg:mb-[-120px] md:mb-[230px] text-white ">
        {/* Render list tempat futsal berdasarkan kecamatan yang dipilih */}
        {displayTempatFutsal(selectedKecamatan).map((venue) => (
          <Link to={`/detail/${venue.id}`} key={venue.id}>
            <div
              key={venue.id}
              className="rounded-lg overflow-hidden  shadow-lg hover:scale-105 duration-300 cursor-pointer"
            >
              <img src={venue.image} alt={venue.title} className="w-full" />
              <div className="p-4">
                <h5 className="text-white text-sm font-semibold italic">
                  Venue
                </h5>
                <h2 className="text-md font-semibold mb-2">{venue.title}</h2>
                <div className="flex justify-between items-center mb-2">
                  <Rating rating={venue.rating} />
                </div>
                <p className="text-sm mb-2 text-white">
                  Mulai <span className="font-bold">{venue.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
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
