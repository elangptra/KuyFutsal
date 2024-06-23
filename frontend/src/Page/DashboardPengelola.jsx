import React, { useState, useEffect } from 'react';
import Navbar from "../components/elements/navbar/navbar";
import Footer from "../components/elements/footer";
import { NotebookPen, Pencil } from "lucide-react";
import axios from "axios";
import LapanganModal from '../components/elements/lapanganmodal';

const DashboardPengelola = () => {
    const [namaLapangan, setNamaLapangan] = useState('');
    const [namaPengguna, setNamaPengguna] = useState('');
    const [jumlahLapangan, setJumlahLapangan] = useState(0);
    const [idLapangan, setIdLapangan] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lapanganData, setLapanganData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLapangan, setSelectedLapangan] = useState({
        nama_lapangan: '',
        harga: '',
        jumlah_lapangan: '',
        alamat: '',
        jam_buka: '',
        jam_tutup: '',
    });
    const itemsPerPage = 10;

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const jsonPayload = decodeURIComponent(
                    atob(base64)
                        .split('')
                        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                        .join('')
                );
                const user = JSON.parse(jsonPayload).user;
                fetchUserData(user.id_pengguna);
            } catch (error) {
                console.error("Invalid token");
            }
        }
    }, []);

    const fetchUserData = async (id_pengguna) => {
        try {
            const response = await axios.get(`http://localhost:3001/pengelola/lapangan/${id_pengguna}`);
            const data = response.data.payload;
            if (data && data.length > 0) {
                setNamaLapangan(data[0].nama_lapangan);
                setNamaPengguna(data[0].nama_pengguna);
                setJumlahLapangan(data[0].jumlah_lapangan);
                setIdLapangan(data[0].id_lapangan);
                fetchBookings(data[0].id_lapangan);
                fetchLapanganData(data[0].id_lapangan);
            }
        } catch (error) {
            console.error("Error fetching user data", error);
        }
    };

    const fetchBookings = async (id_lapangan) => {
        try {
            const response = await axios.get(`http://localhost:3001/booking/lapangan/${id_lapangan}`);
            const data = response.data.payload;
            setBookings(data);
        } catch (error) {
            console.error("Error fetching bookings", error);
        }
    };

    const fetchLapanganData = async (id_lapangan) => {
        try {
            const response = await axios.get(`http://localhost:3001/lapangan/dashboard/${id_lapangan}`);
            const data = response.data.payload;
            setLapanganData(data);
        } catch (error) {
            console.error("Error fetching lapangan data", error);
        }
    };

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };

    const renderTableData = () => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = bookings.slice(indexOfFirstItem, indexOfLastItem);

        return currentItems.map((booking, index) => (
            <tr key={index}>
                <td className="p-2">{booking.nama_pengguna}</td>
                <td className="p-2">{new Date(booking.TanggalBooking).toLocaleDateString()}</td>
                <td className="p-2">{booking.jam_booking}</td>
            </tr>
        ));
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(bookings.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }

        return pageNumbers.map(number => (
            <li
                key={number}
                id={number}
                onClick={handleClick}
                className={`inline-block px-3 py-1 mx-1 cursor-pointer ${currentPage === number ? 'bg-purple-600 text-white' : 'bg-white text-black'}`}
            >
                {number}
            </li>
        ));
    };

    const dummyUsers = [
        { name: 'Manuk Satoru', imageUrl: '/images/profile/avatar.jpeg' },
        { name: 'Satoru Manuk', imageUrl: '/images/profile/avatar2.jpg' },
        { name: 'El Manuk Satoru', imageUrl: '/images/profile/avatar.jpeg' },
        { name: 'El Satoru Manuk', imageUrl: '/images/profile/avatar2.jpg' },
    ];

    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const [searchUsername, setSearchUsername] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setImagePreviewUrl(URL.createObjectURL(file));
    };

    const handleUsernameSearch = (event) => {
        const username = event.target.value;
        setSearchUsername(username);

        const user = dummyUsers.find((user) => user.name.toLowerCase() === username.toLowerCase());
        setSearchResult(user ? user.imageUrl : null);
    };

    const handleEditClick = (lapangan) => {
        setSelectedLapangan(lapangan || {
            nama_lapangan: '',
            harga: '',
            jumlah_lapangan: '',
            alamat: '',
            jam_buka: '',
            jam_tutup: '',
        });
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleSaveLapangan = (editedLapangan) => {
        // Save the edited lapangan (make API call here)
        setIsModalOpen(false);
        // Refresh the lapangan data after saving
        fetchLapanganData(idLapangan);
    };

    return (
        <div className="top-0 bg-[#171830]">
            <Navbar />
            <div className="container">
                <div className="py-16">
                    <div className="flex flex-wrap justify-between">
                        <div className="flex flex-col">
                            <div className="text-white">
                                <h1 className="font-bold text-2xl mb-5">{namaLapangan}</h1>
                                <h3 className="text-md">Welcome Back, <span className="font-bold">{namaPengguna}</span>!</h3>
                            </div>
                            <div className="flex flex-wrap gap-10 mt-16">
                                <div className="relative flex flex-wrap w-64 h-32 p-4 bg-purple-600 text-white rounded-xl shadow-lg items-center justify-center">
                                    <div className="flex flex-wrap w-16 h-16 rounded-full border-2 items-center justify-center mr-5">
                                        <img src="/images/icons/homepage-lapangan.png" className="w-10" alt="icon lapangan" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold text-2xl text-center">{jumlahLapangan}</h3>
                                        <h4 className="text-sm text-center">Jumlah Lapangan</h4>
                                    </div>
                                </div>
                                <div className="relative flex flex-wrap w-64 h-32 p-4 bg-purple-600 text-white rounded-xl shadow-lg items-center justify-center">
                                    <div className="flex flex-wrap w-16 h-16 rounded-full border-2 items-center justify-center mr-5">
                                        <NotebookPen className="w-10" alt="icon-booking" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold text-2xl text-center">{bookings.length}</h3>
                                        <h4 className="text-sm text-center">Jumlah Booking</h4>
                                    </div>
                                </div>
                            </div>
                            <table className="w-full table-auto text-white mt-16 rounded-lg overflow-hidden">
                                <thead className="bg-purple-600">
                                    <tr>
                                        <th className="p-4">Nama Penyewa</th>
                                        <th className="p-4">Tanggal Booking</th>
                                        <th className="p-4">Jam Booking</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white text-black text-center">
                                    {renderTableData()}
                                </tbody>
                            </table>
                            <ul className="flex justify-center mt-4">
                                {renderPageNumbers()}
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col lg:ml-10">
                            <div className="w-full bg-white p-4 rounded shadow-lg">
                                <h2 className="text-gray-700 text-lg font-semibold mb-2">Face Recognition</h2>
                                <h2 className="text-gray-700 font-medium mb-2">Pilih Penyewa</h2>
                                <select
                                    value={searchUsername}
                                    onChange={handleUsernameSearch}
                                    className="block w-full p-2 border border-gray-300 rounded mb-4"
                                >
                                    <option value="">Pilih Pengguna</option>
                                    {dummyUsers.map((user, index) => (
                                        <option key={index} value={user.name}>{user.name}</option>
                                    ))}
                                </select>
                                {searchResult && (
                                    <div className="mt-4">
                                        <h3 className="text-gray-700 font-medium">Search Result:</h3>
                                        <img
                                            src={searchResult}
                                            alt="Search Result"
                                            className="mt-4 w-full h-64 object-cover rounded"
                                        />
                                    </div>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-300 mt-5"
                                />
                                {selectedFile && (
                                    <div className="mt-4">
                                        <h3 className="text-gray-700 font-medium">Selected File:</h3>
                                        <p className="text-gray-500 text-sm">{selectedFile.name}</p>
                                        <img
                                            src={imagePreviewUrl}
                                            alt="Selected"
                                            className="mt-4 w-full h-64 object-cover rounded"
                                        />
                                    </div>
                                )}
                                <button className="bg-purple-600 rounded-lg p-2 text-white mt-4 hover:bg-purple-300">Compare Faces</button>
                            </div>
                        </div>
                    </div>

                    <table className="w-full table-auto text-white mt-16 rounded-lg overflow-hidden">
                        <thead className="bg-purple-600">
                            <tr>
                                <th className="p-4">Nama Lapangan</th>
                                <th className="p-4">Harga Booking</th>
                                <th className="p-4">Jumlah Lapangan</th>
                                <th className="p-4">Alamat</th>
                                <th className="p-4">Jam Buka</th>
                                <th className="p-4">Jam Tutup</th>
                                <th className="p-4">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-black text-center">
                            {lapanganData.map((lapangan, index) => (
                                <tr key={index}>
                                    <td className="p-2">{lapangan.nama_lapangan}</td>
                                    <td className="p-2">Rp. {lapangan.harga}<span>/sesi</span></td>
                                    <td className="p-2">{lapangan.jumlah_lapangan}</td>
                                    <td className="p-2">{lapangan.alamat}</td>
                                    <td className="p-2">{lapangan.jam_buka}</td>
                                    <td className="p-2">{lapangan.jam_tutup}</td>
                                    <td className="p-2">
                                        <button
                                            className="bg-yellow-500 rounded-lg p-2 hover:bg-yellow-300"
                                            onClick={() => handleEditClick(lapangan)}
                                        >
                                            <Pencil />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
            <LapanganModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                lapangan={selectedLapangan}
                onSave={handleSaveLapangan}
            />
        </div>
    );
};

export default DashboardPengelola;
