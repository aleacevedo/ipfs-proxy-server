import express from "express";
import { checkSchema } from "express-validator";

import { authenticate, create, me } from "../controllers/users";
import { authentication } from "../middleware/authentication";

const router = express.Router();

router.get("/me", authentication, me);

router.post("/authenticate", authenticate);
router.post("/", create);

export default router;
