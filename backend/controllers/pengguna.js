import response from "../response.js";
import { query } from "../database/database.js";

export const register = async (req, res) => {
    const { nama, password, confirmPassword, email, no_telp, foto } = req.body;

    if (nama === "" || password === "" || confirmPassword === "") {
        return response(400, null, "Semuanya harus diisi", res);
    }

    if (password !== confirmPassword) {
        return response(400, null, "Password tidak sama", res);
    }

    try {
        const salt = await bcypt.genSalt(10);
        const hashedPassword = await bcypt.hash(password, salt);
        const result = await query(
            "INSERT INTO pengguna (nama, password, email, no_telp, foto) VALUES (?, ?, ? , ?, null)",
            [nama, hashedPassword, email, no_telp, foto]
        );
        response(200, result, "Success", res);
    } catch (error) {
        console.log(error);
    }
}

export const login = async (req, res) => {
    const { nama, password } = req.body;

    if (nama === "" || password === "") {
        return response(400, null, "Semuanya harus diisi", res);
    }

    try {
        const [result] = await query("SELECT * FROM pengguna WHERE nama = ?", [
            nama,
        ]);
        if (result.length === 0) {
            return response(404, null, "User not found", res);
        }
        const validPassword = await bcypt.compare(password, result[0].password);
        if (!validPassword) {
            return response(401, null, "Invalid password", res);
        }
        const token = jwt.sign(
            { id: result[0].id_pengguna },
            process.env.ACCESS_TOKEN_SECRET
        );
        response(200, { ...result[0], token }, "Success", res);
    } catch (error) {
        console.log(error);
    }
}

