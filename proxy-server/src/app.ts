import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

import { IPFS_URL } from "./config";
import redisLogger from "./middlewares/redis-logger";

const app = express();

app.use();

app.get("/health", (_req, res) => res.status(200).send());

const ipfsApiProxy = createProxyMiddleware({
  target: IPFS_URL,
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: "debug",
});

app.use(ipfsApiProxy);

export default app;
