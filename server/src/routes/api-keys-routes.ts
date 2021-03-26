import express from "express";

import { create, modify, logs } from "../controllers/api-keys";
import { authentication } from "../middleware/authentication";

const router = express.Router();

router.post("/", authentication, create);
router.put("/:id", authentication, modify);
router.get("/:id/logs", authentication, logs);

export default router;
