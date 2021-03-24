import express from "express";

import { authenticate, create } from "../controllers/users";

const router = express.Router();

router.post("/authenticate", authenticate);
router.post("/", create);

export default router;
