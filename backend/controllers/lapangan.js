import response from "../response.js";
import { query } from "../database/database.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
      jam_buka,
      jam_tutup,
      rating,
      note,
      id_kecamatan,
      id_pengelola,
    } = req.body;

    const gambar = req.file ? req.file.filename : null;

    const result = await query(
      `INSERT INTO lapangan (id_lapangan, nama_lapangan, alamat, jumlah_lapangan, harga, gambar, jam_buka, jam_tutup, rating, note, id_kecamatan, id_pengelola)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
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
      ]
    );

    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
    response(500, null, "Internal Server Error", res);
  }
};


export const updateLapangan = async (req, res) => {
  try {
    const { id_lapangan } = req.params;
    const {
      nama_lapangan,
      alamat,
      jumlah_lapangan,
      harga,
      jam_buka,
      jam_tutup,
      rating,
      note,
      id_kecamatan,
      id_pengelola,
    } = req.body;

    // Check if a new image file was uploaded
    let gambar;
    if (req.file) {
      gambar = req.file.filename;

      // Optionally delete the old image file if needed
      const oldLapangan = await query(
        `SELECT gambar FROM lapangan WHERE id_lapangan = ?`,
        [id_lapangan]
      );
      if (oldLapangan.length > 0 && oldLapangan[0].gambar) {
        const oldImagePath = path.join(__dirname, '../assets/', oldLapangan[0].gambar);
        fs.unlink(oldImagePath, (err) => {
          if (err) {
            console.error("Failed to delete old image:", err);
          }
        });
      }
    } else {
      gambar = req.body.gambar; // Keep the existing image if no new image is uploaded
    }

    const result = await query(
      `UPDATE lapangan SET
         nama_lapangan = ?,
         alamat = ?,
         jumlah_lapangan = ?,
         harga = ?,
         gambar = ?,
         jam_buka = ?,
         jam_tutup = ?,
         rating = ?,
         note = ?,
         id_kecamatan = ?,
         id_pengelola = ?
         WHERE id_lapangan = ?`,
      [
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
        id_lapangan,
      ]
    );

    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
    response(500, null, "Internal Server Error", res);
  }
};