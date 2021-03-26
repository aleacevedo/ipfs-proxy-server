import { RequestHandler, response } from "express";

import { User } from "../models";
import { hash, match } from "../services/crypto";
import { encode } from "../services/jwt";

const sanitizeUserParams = (body: Record<string, any>) => ({
  email: body.email,
  username: body.username,
});

export const authenticate: RequestHandler = async (req, res) => {
  const user = await User.query()
    .where({ email: req.body.email })
    .orWhere({ username: req.body.username })
    .skipUndefined();
  if (user.length !== 1) return res.status(400).send();
  if (!match(req.body.password, user[0].securedPassword))
    return res.status(401).send();
  const token = await encode({ user: user[0] });
  return res.status(200).send({ token });
};

export const create: RequestHandler = async (req, res) => {
  try {
    const userParams = sanitizeUserParams(req.body);
    const securedPassword = hash(req.body.password);
    const newUser = await User.query().insert({
      securedPassword,
      ...userParams,
    });
    return res.status(201).send({ newUser });
  } catch (error) {
    return res.status(500).send(error);
  }
};
