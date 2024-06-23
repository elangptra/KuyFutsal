import express from 'express';
import { upload } from '../middlewares/unggah.js';
import { getLapangan, getLapanganById, getLapanganDashboardById, createLapangan, updateLapanganImage } from '../controllers/lapangan.js';
    
const router = express.Router();

router.get('/lapangan', getLapangan);
router.get('/lapangan/:id_lapangan', getLapanganById);
router.get('/lapangan/dashboard/:id_lapangan', getLapanganDashboardById);
router.post('/lapangan', upload.single('gambar'), createLapangan);
router.put('/lapangan/:id_lapangan', upload.single('gambar'), updateLapanganImage);

export default router;
