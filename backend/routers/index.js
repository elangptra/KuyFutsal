import express from "express";
import lapangan_router from "./lapangan.js";
import kecamatan_router from "./kecamatan.js";
import pengelola_router from "./pengelola.js";
import booking_router from "./booking.js";

const route = express();

route.use(booking_router);
route.use(kecamatan_router);
route.use(lapangan_router);
route.use(pengelola_router);

export default route
