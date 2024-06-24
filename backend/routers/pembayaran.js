import express from 'express';
import { getPembayaran, getPembayaranById, createPembayaran, getPembayaranByIdPengguna } from '../controllers/pembayaran.js';
const router = express.Router();


router.get('/pembayaran', getPembayaran);
router.get('/pembayaran/:id_pembayaran', getPembayaranById);
router.post('/pembayaran', createPembayaran);
router.get('/pembayaran/:id_pengguna', getPembayaranByIdPengguna);

export default router