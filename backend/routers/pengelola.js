import express from "express";
import { getPengelola, getPengelolaById, createPengelola } from "../controllers/pengelola.js";


const router = express.Router();

router.get("/pengelola", getPengelola);

router.get("/pengelola/:id_pengelola", getPengelolaById);

router.post("/pengelola", createPengelola);


export default router