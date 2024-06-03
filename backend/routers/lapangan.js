import { getLapangan, getLapanganById, createLapangan } from "../controllers/lapangan.js";
import express from "express";

const router = express.Router();

router.get("/lapangan", getLapangan);

router.get("/lapangan/:id_lapangan", getLapanganById);

router.post("/lapangan", createLapangan);

export default router
