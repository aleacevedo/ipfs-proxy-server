import express from "express";
import Knex from "knex";
import { Model, knexSnakeCaseMappers } from "objection";
import cors from "cors";

import usersRoutes from "./routes/users-routes";
import apiKeysRoutes from "./routes/api-keys-routes";
import { dbEnvConfig, CORS_ORIGIN } from "./config";

export const knex = Knex({
  ...dbEnvConfig,
  ...knexSnakeCaseMappers(),
});

export const corsOptions = {
  origin: CORS_ORIGIN.split(", "),
  credentials: true,
  allowedHeaders: ["Content-Type", "authorization"],
};

Model.knex(knex);

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use(async function (req, res, next) {
  next();
});

app.get("/health", (_req, res) => res.status(200).send());
app.use("/users", usersRoutes);
app.use("/api-keys", apiKeysRoutes);

export default app;
