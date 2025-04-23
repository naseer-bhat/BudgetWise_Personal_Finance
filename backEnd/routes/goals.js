const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal');

// Create Goal
router.post('/', async (req, res) => {
    try {
        const goal = await Goal.create(req.body);
        res.status(201).json({ message: 'Goal created successfully', goal });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all goals for a user
router.get('/:userId', async (req, res) => {
    try {
        const goals = await Goal.find({ userId: req.params.userId });
        res.json(goals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update goal (currentAmount or others)
router.patch('/:goalId', async (req, res) => {
    try {
        const updated = await Goal.findByIdAndUpdate(
            req.params.goalId,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete goal
router.delete('/:goalId', async (req, res) => {
    try {
        await Goal.findByIdAndDelete(req.params.goalId);
        res.json({ message: 'Goal deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
