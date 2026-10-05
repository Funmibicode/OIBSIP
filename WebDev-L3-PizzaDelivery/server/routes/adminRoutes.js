import express from "express";

import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import { getAdminTest } from "../controllers/adminController.js";

const router = express.Router();

router.get(
  "/test",
  protect,
  authorizeRoles("admin"),
  getAdminTest
);

export default router;