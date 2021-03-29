import { RequestHandler } from "express";

import { User } from "../models";
import { decode } from "../services/jwt";

export const authentication: RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send();
  try {
    const decoded = await decode(authorization);
    if (typeof decode === "string") return res.status(500).send();
    const user = await User.query()
      .findById(Object(decoded).user.id)
      .select("id", "email", "username", "createdAt");
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).send();
  }
};
