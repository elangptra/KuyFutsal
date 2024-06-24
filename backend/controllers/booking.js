import response from "../response.js";
import { query } from "../database/database.js";

export const getBooking = async (req, res) => {
  try {
    const result = await query(`SELECT * FROM booking`);
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
    response(500, null, "Internal Server Error", res);
  }
};

export const getBookingById = async (req, res) => {
  try {
    const { id_booking } = req.params;
    const result = await query(
      `SELECT lapangan.nama_lapangan, lapangan.rating, booking.*
       FROM booking
       JOIN lapangan ON booking.id_lapangan = lapangan.id_lapangan
       WHERE booking.id_booking = ?`,
      [id_booking]
    );
    if (result.length === 0) {
      return response(404, null, "Booking not found", res);
    }
    response(200, result, "Success", res);
  } catch (error) {
    response(500, null, "Internal Server Error", res);
  }
};

export const getBookingByIdLapangan = async (req, res) => {
  try {
    const { id_lapangan } = req.params;
    const result = await query(
      `SELECT
        p.nama AS nama_pengguna,
        b.TanggalBooking,
        b.jam_booking
    FROM
        booking b
    INNER JOIN pengguna p ON b.id_pengguna = p.id_pengguna
    INNER JOIN lapangan l ON b.id_lapangan = l.id_lapangan
    WHERE
        b.id_lapangan = ?
    ORDER BY
      b.TanggalBooking DESC`,
      [id_lapangan]
    );
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
};


export const createBooking = async (req, res) => {
  try {
    const {
      TanggalBooking,
      jam_booking,
      durasi,
      nomor_lapangan,
      harga,
      id_lapangan,
      id_pengguna,
    } = req.body;

    console.log("Received booking data:", req.body); // Log data yang diterima untuk debugging

    const result = await query(
      `INSERT INTO booking ( TanggalBooking, jam_booking, durasi, nomor_lapangan, harga, id_lapangan, id_pengguna)
       VALUES ( ?, ?, ?, ?, ?, ?, ?)`,
      [
        TanggalBooking,
        jam_booking,
        durasi,
        nomor_lapangan,
        harga,
        id_lapangan,
        id_pengguna,
      ]
    );

    console.log("Booking insert result:", result); // Log hasil query untuk debugging

    response(200, result, "Success", res);
  } catch (error) {
    console.log("Error creating booking:", error); // Log error untuk debugging
    response(500, null, "Internal Server Error", res);
  }
};

export const getBookingByIdPengguna = async (req, res)=>{
  try {
    const { id_pengguna } = req.params;
    const result = await query(
      `SELECT *
      FROM
        booking
      WHERE
        id_pengguna = ?`,
      [id_pengguna]
    );
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
}

export const getBookingByIdPenggunaDesc = async (req, res)=>{
  try {
    const { id_pengguna } = req.params;
    const result = await query(
      `SELECT *
      FROM
        booking
      WHERE
        id_pengguna = ? ORDER BY id_booking DESC`,
      [id_pengguna]
    );
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
}