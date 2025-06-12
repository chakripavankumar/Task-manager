import express, { Express } from "express";
import cookieParser from "cookie-parser";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("src/public"));
app.use(cookieParser());

import { router as HealthCheckRouter } from "@/routes/healthCheck";
import { router as UserRouter } from "@/routes/auth";

app.use("/api/v1/healthcheck", HealthCheckRouter);
app.use("/api/v1/user", UserRouter);

export default app;
