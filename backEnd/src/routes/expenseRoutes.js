import e, { Router } from 'express';
import {
  getAllExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
} from '../controllers/expenseController.js'; 
const router = Router();
router.get('/', getAllExpenses); 
router.get('/:id', getExpenseById); 
router.post('/', createExpense); 
router.put('/:id', updateExpense); 
router.delete('/:id', deleteExpense); 
export default router;