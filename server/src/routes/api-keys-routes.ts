import express from "express";

import { create, modify, logs } from "../controllers/api-keys";

const router = express.Router();

router.post("/", create);
router.put("/", modify);
router.get("/:id/logs", logs);

export default router;
