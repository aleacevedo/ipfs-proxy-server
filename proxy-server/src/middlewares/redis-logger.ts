import { RequestHandler } from "express";

import { ApiKey } from "../models";
import { append } from "../services/redis";

const redisLogger: RequestHandler = async (req, res, next) => {
  const { "api-key": apiKey } = req.headers;
  if (!apiKey) return res.status(401).send();
  if (typeof apiKey !== "string") return res.status(400).send();

  const apiKeyInstance = await ApiKey.query().findById(apiKey);
  if (!apiKeyInstance) return res.status(404).send();
  if (!apiKeyInstance.active) return res.status(401).send();
  const request = {
    headers: req.headers,
    url: req.url,
    method: req.method,
    timestamp: new Date(),
  };
  await append(apiKey, JSON.stringify(request));
  next();
};

export default redisLogger;
