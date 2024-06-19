import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// Mendefinisikan __filename dan __dirname untuk ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../assets')); // Pastikan path ke folder assets sudah benar
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

export const upload = multer({ storage });
