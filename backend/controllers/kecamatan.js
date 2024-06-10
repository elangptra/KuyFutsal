import response from "../response.js";
import { query } from "../database/database.js";


export const getKecamatan = async (req, res) => {
    try {
        const result = await query(`SELECT * FROM kecamatan`);
        response(200, result, "Success", res);
    } catch (error) {
        console.log(error);
    }
}

export const getKecamatanById = async (req, res) => {
    try {
        const { id_kecamatan } = req.params;
        const result = await query(`SELECT * FROM kecamatan WHERE id_kecamatan = ?`, [id_kecamatan]);
        response(200, result, "Success", res);
    } catch (error) {
        console.log(error);
    }
}

export const createKecamatan = async (req, res) => {
    try {
        const { id_kecamatan, nama_kecamatan } = req.body;
        const result = await query(`INSERT INTO kecamatan (id_kecamatan, nama_kecamatan) VALUES (?, ?)`, [id_kecamatan, nama_kecamatan]);
        response(200, result, "Success", res);
    } catch (error) {
        console.log(error);
    }
}

export const updateKecamatan = async (req, res) => {
    try {
        const { id_kecamatan, nama_kecamatan } = req.body;
        const result = await query(`UPDATE kecamatan SET nama_kecamatan = ? WHERE id_kecamatan = ?`, [nama_kecamatan, id_kecamatan]);
        response(200, result, "Success", res);
    } catch (error) {
        console.log(error);
    }
}