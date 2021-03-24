"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbEnvConfig = exports.dbConfig = exports.DATABASE_URL = exports.IPFS_URL = exports.SERVER_PORT = void 0;
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
let path;
if (process.env.NODE_ENV === "test") {
    path = path_1.default.resolve(process.cwd(), ".env.test");
}
dotenv_1.default.config({ path });
exports.SERVER_PORT = process.env.SERVER_PORT || 3000;
exports.IPFS_URL = process.env.IPFS_URL;
exports.DATABASE_URL = process.env.DATABASE_URL;
const baseDbConfig = {
    client: "postgresql",
    connection: exports.DATABASE_URL,
    migrations: {
        tableName: "backend_migrations",
    },
};
exports.dbConfig = {
    development: { ...baseDbConfig },
    test: { ...baseDbConfig },
    staging: {
        ...baseDbConfig,
        pool: {
            min: 2,
            max: 10,
        },
    },
    production: {
        ...baseDbConfig,
        pool: {
            min: 2,
            max: 10,
        },
    },
};
exports.dbEnvConfig = exports.dbConfig[process.env.NODE_ENV || "development"];
