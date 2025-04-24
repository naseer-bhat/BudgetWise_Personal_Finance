import { Router } from "express";
import {
  createGoal,
  getGoals,
  updateGoal,
  getGoalsByUserId,
  deleteGoal,
  updateGoalById,
  deleteGoalById,
} from "../controllers/goalController.js";
const router = Router();
router.post("/create", createGoal);
router.get("/:userId", getGoals);
router.get("/user/:userId", getGoalsByUserId);
router.patch("/:goalId", updateGoal);
router.put("/:goalId", updateGoalById);
router.delete("/:goalId", deleteGoal);
router.delete("/delete/:goalId", deleteGoalById);

export default router;
