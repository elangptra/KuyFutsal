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