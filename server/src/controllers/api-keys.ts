import { RequestHandler, response } from "express";

import { ApiKey, User } from "../models";
import { get } from "../services/redis";

export const create: RequestHandler = async ({ user, ...req }, res) => {
  if (!user) return res.status(400).send();
  const apiKey = await ApiKey.query().insert({ userId: user.id });
  return res.status(201).send({ apiKey });
};

export const modify: RequestHandler = async ({ user, ...req }, res) => {
  if (!req.params.id || typeof req.params.id !== "string")
    return res.status(400).send();
  const apiKey = await ApiKey.query().where({
    id: req.params.id,
    userId: user.id,
  });
  if (!apiKey.length) return res.status(404).send();
  const updated = await ApiKey.query().findById(req.params.id).patch(req.body);
  return res.status(200).send({ updated });
};

export const logs: RequestHandler = async ({ user, ...req }, res) => {
  const apiKey = await ApiKey.query()
    .where({ userId: user.id })
    .findOne({ id: req.params.id });
  if (!apiKey) return res.status(404).send();
  return get(apiKey.id, (error, message) => {
    if (error) return res.status(500).send(error);

    return res
      .status(200)
      .send({ logs: message?.map((log) => JSON.parse(log)) });
  });
};

export const index: RequestHandler = async ({ user, ...req }, res) => {
  const apiKeys = await ApiKey.query()
    .where({ userId: user.id })
    .orderBy([{ column: "createdAt", order: "desc" }]);

  return res.status(200).send({ apiKeys });
};

export const active: RequestHandler = async ({ user, ...req }, res) => {
  const activeApiKey = await ApiKey.query().findOne({
    userId: user.id,
    active: true,
  });

  return res.status(200).send({ activeApiKey });
};
