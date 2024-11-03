import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import config from "./config.ts";
import morgan from "morgan";
import { errorSync } from "./middlewares/errorSync.ts";
import { errorHandlerJSON } from "./middlewares/errorHandlerJSON.ts";

const app = express();

app.use(cors(config.cors));
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));
app.use(errorSync);
app.use(errorHandlerJSON);

export { app };
