import Goal from "../models/Goal.js";
export const createGoal = async (req, res) => {
  try {
    const goal = await Goal.create(req.body);
    res.status(201).json({ message: "Goal created successfully", goal });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
export const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.params.userId });
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateGoal = async (req, res) => {
  try {
    const updated = await Goal.findByIdAndUpdate(
      req.params.goalId,
      req.body,
      { new: true }
    );
    res.json(updated);
  }
  catch (error) {
    res.status(400).json({ error: error.message });
  }
}
export const deleteGoal = async (req, res) => {
  try {
    await Goal.findByIdAndDelete(req.params.goalId);
    res.json({ message: "Goal deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export const getGoalById = async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.goalId);
    if (!goal) {
      return res.status(404).json({ message: "Goal not found" });
    }
    res.json(goal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export const getGoalsByUserId = async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.params.userId });
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export const updateGoalById = async (req, res) => {
  try {
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.goalId, req.body, { new: true });   
    if (!updatedGoal) {
      return res.status(404).json({ message: "Goal not found" });
    }
    res.json(updatedGoal);
  }
  catch (error) {
    res.status(400).json({ error: error.message });
  } 
}
export const deleteGoalById = async (req, res) => {
  try {
    const deletedGoal = await Goal.findByIdAndDelete(req.params.goalId);
    if (!deletedGoal) {
      return res.status(404).json({ message: "Goal not found" });
    }
    res.json({ message: "Goal deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
} 
