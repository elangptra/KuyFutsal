import response from "../response.js";
import { query } from "../database/database.js";

export const getLapangan = async (req, res) => {
  try {
    const result = await query(`SELECT * FROM lapangan`);
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
};

export const getLapanganById = async (req, res) => {
  try {
    const { id_lapangan } = req.params;
    const result = await query(`SELECT * FROM lapangan WHERE id_lapangan = ?`, [
      id_lapangan,
    ]);
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
};

export const createLapangan = async (req, res) => {
  try {
    const {
      id_lapangan,
      nama_lapangan,
      alamat,
      jumlah_lapangan,
      harga,
      gambar,
      jam_buka,
      jam_tutup,
      rating,
      note,
      id_kecamatan,
      id_pengelola,
    } = req.body;
    const result = await query(
      `INSERT INTO lapangan (id_lapangan, nama_lapangan, alamat, jumlah_lapangan, harga, gambar, jam_buka, jam_tutup, rating, note, id_kecamatan, id_pengelola)
        VALUES (?, ?, ?, ?, ?, ?, ?,?,?, ?, ?, ?)`,[
        id_lapangan,
        nama_lapangan,
        alamat,
        jumlah_lapangan,
        harga,
        gambar,
        jam_buka,
        jam_tutup,
        rating,
        note,
        id_kecamatan,
        id_pengelola
      ]
    );
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
};
