import express from 'express';
import { createBooking, getBooking } from '../controllers/booking.js';
const router = express.Router();


router.get('/booking', getBooking);
router.post('/bookinglapangan', createBooking);

export default router