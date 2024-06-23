import response from "../response.js";
import { query } from "../database/database.js";

export const getPengelola = async (req, res) => {
  try {
    const result = await query(`SELECT * FROM pengelola`);
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
};

export const getPengelolaById = async (req, res) => {
  try {
    const { id_pengelola } = req.params;
    const result = await query(
      `SELECT * FROM pengelola WHERE id_pengelola = ?`,
      [id_pengelola]
    );
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
};

export const getPengelolaByIdPengguna = async (req, res) => {
  try {
    const { id_pengguna } = req.params;
    const result = await query(
      `SELECT id_pengelola FROM pengelola WHERE id_pengguna = ?`,
      [id_pengguna]
    );
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
};

export const getPengelolaLapanganByIdPengguna = async (req, res) => {
  try {
    const { id_pengguna } = req.params;
    const result = await query(
      `SELECT l.id_lapangan, l.nama_lapangan, u.nama AS nama_pengguna, l.jumlah_lapangan
      FROM pengelola p
      JOIN lapangan l ON p.id_lapangan = l.id_lapangan
      JOIN pengguna u ON p.id_pengguna = u.id_pengguna
      WHERE p.id_pengguna = ?`,
      [id_pengguna]
    );
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
};