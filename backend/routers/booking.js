import express from 'express';
import { createBooking, getBooking, getBookingById, getBookingByIdLapangan, getBookingByIdPengguna} from '../controllers/booking.js';
const router = express.Router();


router.get('/booking', getBooking);
router.post('/bookinglapangan', createBooking);
router.get('/booking/:id_booking', getBookingById);
router.get('/booking/lapangan/:id_lapangan', getBookingByIdLapangan);
router.get('/booking/pengguna/:id_pengguna', getBookingByIdPengguna);

export default router