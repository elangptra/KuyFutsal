import React, { useState, useEffect } from 'react';

const LapanganModal = ({ isOpen, onClose, lapangan, onSave }) => {
    const [editedLapangan, setEditedLapangan] = useState(lapangan);

    useEffect(() => {
        setEditedLapangan(lapangan);
    }, [lapangan]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedLapangan({ ...editedLapangan, [name]: value });
    };

    const handleSave = () => {
        onSave(editedLapangan);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-1/2">
                <h2 className="text-xl font-bold mb-4">Edit Lapangan</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Nama Lapangan</label>
                    <input
                        type="text"
                        name="nama_lapangan"
                        value={editedLapangan.nama_lapangan || ''}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Harga Booking</label>
                    <input
                        type="text"
                        name="harga"
                        value={editedLapangan.harga || ''}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Jumlah Lapangan</label>
                    <input
                        type="text"
                        name="jumlah_lapangan"
                        value={editedLapangan.jumlah_lapangan || ''}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Alamat</label>
                    <input
                        type="text"
                        name="alamat"
                        value={editedLapangan.alamat || ''}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Jam Buka</label>
                    <input
                        type="text"
                        name="jam_buka"
                        value={editedLapangan.jam_buka || ''}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Jam Tutup</label>
                    <input
                        type="text"
                        name="jam_tutup"
                        value={editedLapangan.jam_tutup || ''}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 rounded-lg p-2 text-gray-700 mr-2"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-purple-600 rounded-lg p-2 text-white"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LapanganModal;