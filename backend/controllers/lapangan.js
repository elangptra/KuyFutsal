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

export const getLapanganDashboardById = async (req, res) => {
  try {
    const { id_lapangan } = req.params;
    const result = await query(
      `SELECT
        nama_lapangan,
        harga,
        jumlah_lapangan,
        alamat,
        jam_buka,
        jam_tutup
      FROM
        lapangan
      WHERE
        id_lapangan = ?`, [id_lapangan,]);
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
};

export const createLapangan = async (req, res) => {
  try {
    const {
      nama_lapangan,
      alamat,
      jumlah_lapangan,
      harga,
      jam_buka,
      jam_tutup,
      rating,
      note,
      id_kecamatan
    } = req.body;

    const gambar = req.file ? req.file.filename : null;

    const result = await query(
      `INSERT INTO lapangan ( nama_lapangan, alamat, jumlah_lapangan, harga, gambar, jam_buka, jam_tutup, rating, note, id_kecamatan)
       VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
      ]
    );

    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
    response(500, null, "Internal Server Error", res);
  }
};

export const updateLapanganImage = async (req, res) => {
  try {
    const { id_lapangan } = req.params;

    if (!req.file) {
      return response(400, null, "No image file uploaded", res);
    }

    const gambar = req.file.filename;

    // Get the current image to delete the old one
    const oldLapangan = await query(`SELECT gambar FROM lapangan WHERE id_lapangan = ?`, [id_lapangan]);
    if (oldLapangan.length > 0 && oldLapangan[0].gambar) {
      const oldImagePath = path.join(__dirname, '../assets/', oldLapangan[0].gambar);
      fs.unlink(oldImagePath, (err) => {
        if (err) {
          console.error("Failed to delete old image:", err);
        }
      });
    }

    const result = await query(
      `UPDATE lapangan SET gambar = ? WHERE id_lapangan = ?`,
      [gambar, id_lapangan]
    );

    response(200, result, "Image updated successfully", res);
  } catch (error) {
    console.log(error);
    response(500, null, "Internal Server Error", res);
  }
};