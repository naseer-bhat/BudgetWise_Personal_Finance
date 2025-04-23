import { Router } from "express";
import { createBudget, getBudgets, getBudgetById, updateBudget, deleteBudget } from "../controllers/budgetController.js";
const router = Router();
router.post("/budget/", createBudget);
router.get("/budget/", getBudgets);  
router.get("/budget/:id", getBudgetById);
router.put("/budget/:id", updateBudget);
router.delete("/budget/:id", deleteBudget);
export default router;