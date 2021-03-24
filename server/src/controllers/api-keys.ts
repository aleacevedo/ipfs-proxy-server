import { RequestHandler } from "express";

export const create: RequestHandler = async (req, res) => {
  return res.status(201).send();
};

export const modify: RequestHandler = async (req, res) => {
  return res.status(200).send();
};

export const logs: RequestHandler = async (req, res) => {
  return res.status(200).send();
};
