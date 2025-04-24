import { Router } from "express";
import { createBudget, getBudgets, getBudgetById, updateBudget, deleteBudget } from "../controllers/budgetController.js";
const router = Router();
router.post("/create", createBudget);
router.get("/getbudget", getBudgets);  
router.get("/getbudget/:id", getBudgetById);
router.put("/updatebudget/:id", updateBudget);
router.delete("/deletebudget/:id", deleteBudget);
export default router;