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

export const createPengelola = async (req, res) => {
  try {
    const { id_pengelola, nama, alamat, phone } = req.body;
    const result = await query(
      `INSERT INTO pengelola (id_pengelola,nama,alamat, phone) VALUES (?,?, ?, ?)`,
      [id_pengelola, nama, alamat, phone]
    );
    response(200, result, "Success", res);
  } catch (error) {
    console.log(error);
  }
};
