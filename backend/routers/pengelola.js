import express from "express";
import { getPengelola, getPengelolaById, getPengelolaByIdPengguna, getPengelolaLapanganByIdPengguna } from "../controllers/pengelola.js";


const router = express.Router();

router.get("/pengelola/pengguna/:id_pengguna", getPengelolaByIdPengguna);

router.get("/pengelola/lapangan/:id_pengguna", getPengelolaLapanganByIdPengguna);

router.get("/pengelola", getPengelola);

router.get("/pengelola/:id_pengelola", getPengelolaById);

export default router