import express from 'express';
import { upload } from '../middlewares/unggah.js';
import { login, register } from '../controllers/auth.controller.js';

const router = express.Router();


router.post('/register', upload.single('foto'), register);
router.post('/login', login);

export default router