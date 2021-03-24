"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const config_1 = require("./config");
const app = express_1.default();
app.use(async function (req, res, next) {
    next();
});
app.get("/health", (_req, res) => res.status(200).send());
const ipfsApiProxy = http_proxy_middleware_1.createProxyMiddleware({
    target: config_1.IPFS_URL,
    changeOrigin: false,
    logLevel: "debug",
});
app.use(ipfsApiProxy);
exports.default = app;
