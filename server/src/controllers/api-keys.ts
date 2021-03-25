import { RequestHandler } from "express";

import { ApiKey, User } from "models";

export const create: RequestHandler = async ({ user, ...req }, res) => {
  if (!user) return res.status(400).send();
  ApiKey.query().insert({ userId: user.id });
  return res.status(201).send();
};

export const modify: RequestHandler = async ({ user, ...req }, res) => {
  if (!user) return res.status(400).send();
  const apiKey = ApiKey.query().where({ id: req.query.id, userId: user.id });
  apiKey.patch(req.params);
  return res.status(200).send();
};

export const logs: RequestHandler = async (req, res) => {
  return res.status(200).send();
};
