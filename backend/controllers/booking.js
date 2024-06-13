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
      `INSERT INTO booking (id_booking, TanggalBooking, jam_booking, durasi, nomor_lapangan, harga, id_lapangan, id_pengguna)
       VALUES (null, ?, ?, ?, ?, ?, ?, ?)`,
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