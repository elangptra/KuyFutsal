import express from 'express';
import { upload } from '../middlewares/image.js';
import { login, register } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', upload, register);
router.post('/login', login);

export default router;
