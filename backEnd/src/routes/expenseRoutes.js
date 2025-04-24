import e, { Router } from 'express';
import {
  getAllExpenses,
  getExpenseById,
  createExpense,
  updateExpense,
  deleteExpense,
} from '../controllers/expenseController.js'; 
const router = Router();
router.get('/getall', getAllExpenses); 
router.get('/:id', getExpenseById); 
router.post('/create', createExpense); 
router.put('/update/:id', updateExpense); 
router.delete('/delete/:id', deleteExpense); 
export default router;