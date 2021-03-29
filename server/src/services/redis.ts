import redis from "redis";

import { REDIS_URL, REDIS_PORT } from "../config";

const redisClient = redis.createClient({
  url: REDIS_URL,
  port: Number(REDIS_PORT),
});

export const get = (
  id: string,
  callback: (error: any, message: string | null) => void
) => {
  return redisClient.get(id, callback);
};
