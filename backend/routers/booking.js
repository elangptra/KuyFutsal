import express from 'express';
import { createBooking, getBooking, getBookingById } from '../controllers/booking.js';
const router = express.Router();


router.get('/booking', getBooking);
router.post('/bookinglapangan', createBooking);
router.get('/booking/:id_booking', getBookingById);

export default router