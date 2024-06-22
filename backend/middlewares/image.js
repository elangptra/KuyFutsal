// unggah.js
import multer from "multer";
import path from "path";

// Konfigurasi penyimpanan
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'frontend/public/images/profile'); // Sesuaikan dengan lokasi penyimpanan gambar
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Menambahkan timestamp ke nama file
  }
});

// Filter jenis file
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
};

// Konfigurasi multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1000000 } // Batas ukuran file 1MB
}).single('foto'); // Nama field input file di frontend

export { upload };
