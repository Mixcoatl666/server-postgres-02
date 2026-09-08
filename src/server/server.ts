import express, { Application } from "express";
import morgan from "morgan";
import dotenv from "dotenv";

import { clienteRoutes } from "../routes/cliente.routes";

const app: Application = express();
app.disable("x-powered-by");
dotenv.config();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/clientes", clienteRoutes);

export const server = app;