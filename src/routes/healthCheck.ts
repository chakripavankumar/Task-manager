import { healthCheck } from "@/controllers/healthcheck";
import { Router } from "express";

export const router: Router = Router();

router.get("/", healthCheck);
