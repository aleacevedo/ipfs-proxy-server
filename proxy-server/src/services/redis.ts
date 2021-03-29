import redis from "redis";

import { REDIS_URL, REDIS_PORT } from "../config";

const redisClient = redis.createClient({
  url: REDIS_URL,
  port: Number(REDIS_PORT),
});

export const append = (id: string, message: any) => {
  return redisClient.lpush(id, message);
};
