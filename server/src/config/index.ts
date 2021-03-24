import pathjs from "path";
import dotenv from "dotenv";

let path;

if (process.env.NODE_ENV === "test") {
  path = pathjs.resolve(process.cwd(), ".env.test");
}

dotenv.config({ path });

export const SERVER_PORT = process.env.SERVER_PORT || 3000;
export const IPFS_URL = process.env.IPFS_URL;
export const DATABASE_URL = process.env.DATABASE_URL;

const baseDbConfig = {
  client: "postgresql",
  connection: DATABASE_URL,
  migrations: {
    tableName: "backend_migrations",
  },
};

export const dbConfig: any = {
  development: { ...baseDbConfig },
  test: { ...baseDbConfig },
};

export const dbEnvConfig = dbConfig[process.env.NODE_ENV || "development"];
