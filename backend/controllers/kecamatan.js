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