import express from "express";
import cors from "cors";
import morgan from "morgan";
import { routes } from "./routes/index.ts";
import config from "./config.ts";
import { errorSync } from "./middlewares/errorSync.ts";
import { errorHandlerJSON } from "./middlewares/errorHandlerJSON.ts";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors(config.cors));
app.use(cookieParser());
app.use(express.json());
app.use(errorSync);
app.use(errorHandlerJSON);
app.use(morgan('dev'));
routes(app);

export { app }