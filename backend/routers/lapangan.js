import express from 'express';
import { upload } from '../middlewares/uploads.js';
import { getLapangan, getLapanganById, createLapangan, updateLapanganImage } from '../controllers/lapangan.js';
    
const router = express.Router();

router.get('/lapangan', getLapangan);
router.get('/lapangan/:id_lapangan', getLapanganById);
router.post('/lapangan', upload.single('gambar'), createLapangan);
router.put('/lapangan/:id_lapangan', upload.single('gambar'), updateLapanganImage);

export default router;
