import express from 'express';
import { getKecamatan } from '../controllers/kecamatan.js';

const router = express.Router();

router.get('/kecamatan', getKecamatan);


export default router