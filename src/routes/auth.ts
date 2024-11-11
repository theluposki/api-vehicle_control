import { Router } from "express";
import { auth } from "../controllers/auth.ts";

const router = Router();

router.post('/', auth);

export default router;