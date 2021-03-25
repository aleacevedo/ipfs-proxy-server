import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../config";

export const encode = (payload: any) => {
  if (!JWT_SECRET) throw "JWT_SECRET not defined";
  return jwt.sign(payload, JWT_SECRET);
};

export const decode = (token: string) => {
  if (!JWT_SECRET) throw "JWT_SECRET not defined";
  return jwt.verify(token, JWT_SECRET);
};
