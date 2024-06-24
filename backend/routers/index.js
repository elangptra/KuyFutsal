import express from "express";
import lapangan_router from "./lapangan.js";
import kecamatan_router from "./kecamatan.js";
import pengelola_router from "./pengelola.js";
import booking_router from "./booking.js";
import auth_router from "./auth.route.js";
import passport from "passport";
import "../middlewares/passport.js";
import pengguna_router from "./pengguna.route.js";
import pembayaran_router from "./pembayaran.js";


const route = express();
route.use(auth_router);
route.use(booking_router);
// route.use(passport.authenticate("jwt", { session: false }), kecamatan_router);
route.use(kecamatan_router);
route.use(lapangan_router);
route.use(pengelola_router);
route.use(pengguna_router);
route.use(pembayaran_router);

export default route
