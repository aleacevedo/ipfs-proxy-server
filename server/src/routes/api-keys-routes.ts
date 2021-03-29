import express from "express";

import { create, modify, logs, index, active } from "../controllers/api-keys";
import { authentication } from "../middleware/authentication";

const router = express.Router();

router.get("/", authentication, index);
router.get("/active", authentication, active);
router.get("/:id/logs", authentication, logs);
router.post("/", authentication, create);
router.put("/:id", authentication, modify);

export default router;
