import { Router } from "express";
import { SalesController } from "../controllers/SalesController.js";

const router = Router();

router.get("/", SalesController.getSales);

router.post("/", SalesController.makeSale);

export default router;
