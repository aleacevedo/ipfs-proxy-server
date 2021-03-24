import express from "express";

import usersRoutes from "./routes/users-routes";
import apiKeysRoutes from "./routes/api-keys-routes";

const app = express();

app.use(async function (req, res, next) {
  next();
});

app.get("/health", (_req, res) => res.status(200).send());
app.use("/users", usersRoutes);
app.use("/api-keys", apiKeysRoutes);

export default app;
