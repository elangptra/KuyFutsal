import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { testConnection } from "./database/database.js";
import router from "./routers/index.js";
import { fileDir } from "./utils/fileHandle.cjs";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.static(fileDir()))
app.use(bodyParser.json());

app.use(router);


app.listen(process.env.APP_PORT, () => {
    testConnection();
    console.log(`Server running on port http://localhost:${process.env.APP_PORT}`);
})