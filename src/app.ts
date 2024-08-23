import express from "express";
import cors from "cors";
import "reflect-metadata";
import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { juniorRoutes } from "./routes/junior-routes";
import { plenoRoutes } from "./routes/pleno-routes";

const app = express();

app.use(cors);
app.use(express.json());

app.use("/teste-junior", juniorRoutes);
app.use("/teste-pleno", plenoRoutes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof ZodError) {
      return response.status(400).json({
        message: err.message,
      });
    }

    if (err instanceof ZodError) {
      return response.status(400).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal server error.",
    });
  }
);

export { app };
