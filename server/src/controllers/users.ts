import { RequestHandler } from "express";

export const authenticate: RequestHandler = async (req, res) => {
  return res.status(200).send();
};

export const create: RequestHandler = async (req, res) => {
  return res.status(201).send();
};
