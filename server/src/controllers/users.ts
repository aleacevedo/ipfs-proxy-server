import { RequestHandler } from "express";

import { User } from "../models";
import { hash, match } from "../services/crypto";
import { encode } from "../services/jwt";

const sanitizeUserParams = (params: Record<string, any>) => ({
  email: params.email,
  username: params.username,
});

export const authenticate: RequestHandler = async (req, res) => {
  const user = await User.query()
    .where({ email: req.params.email })
    .orWhere({ username: req.params.username })
    .select(["id", "email", "username", "createdAt", "updatedAt"]);
  if (user.length !== 1) return res.status(400).send();
  if (!match(req.params.password, user[0].securedPassword))
    return res.status(401).send();
  const token = await encode({ user: user[0] });
  return res.status(200).send({ token });
};

export const create: RequestHandler = async (req, res) => {
  const userParams = sanitizeUserParams(req.params);
  const securedPassword = hash(req.params.password);
  await User.query().insert({ securedPassword, ...userParams });
  return res.status(201).send();
};
