import { Router } from "express";
import { ProductController } from "../controllers/ProductController.js";

const router = Router();

router.get("/", ProductController.getAllProducts);

router.get("/:id", ProductController.getProduct);

router.post("/", ProductController.addProduct);

router.put("/:id", ProductController.editProduct);

router.delete("/:id", ProductController.deleteProduct);

export default router;
