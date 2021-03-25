import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const hash = (password: string) =>
  bcrypt.hashSync(password, SALT_ROUNDS);

export const match = (password: string, hash: string) =>
  bcrypt.compareSync(password, hash);
