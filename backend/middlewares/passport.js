import passport from "passport";
import passportJwt from "passport-jwt";
import dotenv from "dotenv";
import { query } from "../database/database.js";

dotenv.config();

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.ACCESS_TOKEN_SECRET
};

passport.use(
    new JwtStrategy(options, async (payload, done) => {
        const {id_pengguna} = payload
        const [getData] = await query("select id_pengguna, nama from pengguna where id_pengguna=?", [id_pengguna])
        console.log(id_pengguna);
        if (getData){
            return done(null, getData)
        }else{
            return done (null, false)
        }
    })
);