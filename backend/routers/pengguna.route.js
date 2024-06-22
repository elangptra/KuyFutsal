import express from "express";
import { getPenggunaById, updatePenggunaById } from "../controllers/pengguna.js";


const router = express.Router();

router.get("/pengguna/:id", getPenggunaById);

router.put("/pengguna/:id_pengguna", updatePenggunaById);

export default router
