import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import { errorHandler } from "./errors";
import { clientRouter } from "./routes";

//INSTANCIA EXPRESS
const app = express();
app.use(json());

//ROTAS
app.use("/client", clientRouter);

app.use(errorHandler);

export default app;
