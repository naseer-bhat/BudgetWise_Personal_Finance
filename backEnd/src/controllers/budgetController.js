import Budget from "../models/Budget.js";

export const createBudget = async (req, res) => {
  try {
    const userId = req.user.id;
    const { category, amount, startDate, endDate } = req.body;

    if (!category || !amount || !startDate || !endDate) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const budget = await Budget.create({
      userId,
      category,
      amount,
      startDate,
      endDate,
    });

    res.status(201).json({ message: "Budget created", budget });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBudgets = async (req, res) => {
  try {
    const userId = req.user.id;
    const budgets = await Budget.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(budgets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getBudgetById = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const budget = await Budget.findOne({ _id: id, userId });

    if (!budget) {
      return res.status(404).json({ message: "Budget not found" });
    }

    res.status(200).json(budget);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBudget = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const updatedBudget = await Budget.findOneAndUpdate(
      { _id: id, userId },
      req.body,
      { new: true }
    );

    if (!updatedBudget) {
      return res.status(404).json({ message: "Budget not found or unauthorized" });
    }

    res.status(200).json({ message: "Budget updated", updatedBudget });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBudget = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const deleted = await Budget.findOneAndDelete({ _id: id, userId });

    if (!deleted) {
      return res.status(404).json({ message: "Budget not found or unauthorized" });
    }

    res.status(200).json({ message: "Budget deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
