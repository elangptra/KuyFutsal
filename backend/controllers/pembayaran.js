import response from "../response.js";
import { query } from "../database/database.js";

export const getPembayaran = async (req, res) => {
  try {
    const result = await query(`SELECT * FROM pembayaran`);
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
    response(500, null, "Internal Server Error", res);
  }
};

export const getPembayaranById = async (req, res) => {
  try {
    const { id_pembayaran } = req.params;
    const result = await query(
      `SELECT virtual_account, total FROM pembayaran WHERE id_pembayaran = ?`,
      [id_pembayaran]
    );
    if (result.length === 0) {
      return response(404, null, "Pembayaran not found", res);
    }
    response(200, result, "Success", res);
  } catch (error) {
    response(500, null, "Internal Server Error", res);
  }
};

export const createPembayaran = async (req, res) => {
  try {
    const { metode_bayar, virtual_account, total, id_pengguna, id_booking } =
      req.body;
    const result = await query(
      `INSERT INTO pembayaran (metode_bayar,virtual_account,total,id_pengguna, id_booking) VALUES (?,?,?,?,?)`,
      [metode_bayar, virtual_account, total, id_pengguna, id_booking]
    );
    response(200, result, "Success", res);
  } catch (error) {
    response(500, null, "Internal Server Error", res);
  }
};

export const getPembayaranByIdPengguna = async (req, res) => {
  try {
    const { id_pengguna } = req.params;
    const result = await query(
      `SELECT
        b.jam_booking,
        b.TanggalBooking,
        b.nomor_lapangan,
        b.harga,
        b.durasi
      FROM
        pembayaran pm
      INNER JOIN pengguna p ON pm.id_pengguna = p.id_pengguna
      INNER JOIN booking b ON pm.id_pengguna = b.id_pengguna
      WHERE
        pm.id_pengguna = ?`,
      [id_pengguna]
    );
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
};
