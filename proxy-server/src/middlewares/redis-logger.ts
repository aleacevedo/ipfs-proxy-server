import { RequestHandler } from "express";

import { ApiKey } from "../models";

const redisLogger: RequestHandler = async (req, res, next) => {
  const { apiKey } = req.headers;
  if (!apiKey) return res.status(401).send();
  const apiKeyInstance = await ApiKey.query().findById(apiKey);
  if (!apiKeyInstance) return res.status(404).send();

  next();
};
export default redisLogger;
