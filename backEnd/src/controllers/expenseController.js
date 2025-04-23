
import Expense from "../models/expense.js";

export const createExpense = async (req, res) => {
  try {
    const { amount, category, date, note } = req.body;
    const userId = req.user.id;

    if (!amount || !category || !date) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const expense = await Expense.create({
      userId,
      amount,
      category,
      date,
      note,
    });

    res.status(201).json({ message: "Expense added", expense });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getExpenseById = async (req, res) => { 
  try {
    const { id } = req.params;
    const expense = await Expense.findById(id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    if (expense.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.id }).sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount, category, date, note } = req.body;

    const expense = await Expense.findById(id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    if (expense.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    expense.amount = amount || expense.amount;
    expense.category = category || expense.category;
    expense.date = date || expense.date;
    expense.note = note || expense.note;

    await expense.save();

    res.status(200).json({ message: "Expense updated", expense });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await Expense.findById(id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    if (expense.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    await expense.remove();

    res.status(200).json({ message: "Expense deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
}