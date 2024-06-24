import { query } from "../database/database.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import response from "../response.js";

dotenv.config();

const register = async (req, res) => {
  const { nama, password, confirmPassword, email, no_telp } = req.body;
  let foto = req.file ? req.file.filename : null;

  if (!nama || !password || !confirmPassword) {
    return res.status(400).json({ message: "Semuanya harus diisi" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Password tidak sama" });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(nama, hashedPassword, email, no_telp, foto);
    const result = await query(
      "INSERT INTO pengguna (nama, password, email, no_telp, foto) VALUES (?, ?, ? , ?, ?)",
      [nama, hashedPassword, email, no_telp, foto]
    );

    res.status(200).json({ message: "Success", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return response(400, null, "Semuanya harus diisi", res);
  }

  try {
    const [result] = await query("SELECT * FROM pengguna WHERE email = ?", [
      email,
    ]);
    if (result.length === 0) {
      return response(404, null, "User not found", res);
    }
    const validPassword = await bcrypt.compare(password, result.password);
    if (!validPassword) {
      return response(401, null, "Invalid password", res);
    }
    const token = jwt.sign(
      { user : result },
      process.env.ACCESS_TOKEN_SECRET
    );

    const bearerToken = `Bearer ${token}`;

    response(200, { ...result, bearerToken }, "Success", res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { register, login };
