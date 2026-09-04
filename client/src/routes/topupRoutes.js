import { Router } from "express";

import {
  health,
  account,
  games,
  categories,
  products,
  playerValidation,
  order,
  orderDetails,
  orders,
} from "../controllers/topupController.js";

const router = Router();

router.get("/health", health);

router.get("/account", account);

router.get("/games", games);

router.get("/categories", categories);

router.get("/products", products);

router.post(
  "/validate-player",
  playerValidation
);

router.post("/order", order);

router.get("/order/:id", orderDetails);

router.get("/orders", orders);

export default router;
