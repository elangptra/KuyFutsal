import express from 'express';
import { getKecamatan, createKecamatan, getKecamatanById, updateKecamatan } from '../controllers/kecamatan.js';

const router = express.Router();

router.get('/kecamatan', getKecamatan);
router.get('/kecamatan/:id_kecamatan/:id_lapangan', getKecamatanById);
router.post('/kecamatan', createKecamatan);
router.put('/kecamatan/:id_kecamatan', updateKecamatan);


export default router