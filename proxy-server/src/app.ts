import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import Knex from "knex";
import { Model, knexSnakeCaseMappers } from "objection";

import { IPFS_URL, dbEnvConfig } from "./config";
import redisLogger from "./middlewares/redis-logger";

export const knex = Knex({
  ...dbEnvConfig,
  ...knexSnakeCaseMappers(),
});

Model.knex(knex);

const app = express();

app.use(redisLogger);

app.get("/health", (_req, res) => res.status(200).send());

const ipfsApiProxy = createProxyMiddleware({
  target: IPFS_URL,
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: "debug",
});

app.use(ipfsApiProxy);

export default app;
