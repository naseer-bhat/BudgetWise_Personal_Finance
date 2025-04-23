const express = require('express');
const router = express.Router();
const Budget = require('../models/Budget');

// Create Budget
router.post('/', async (req, res) => {
    try {
        const budget = await Budget.create(req.body);
        res.status(201).json({ message: 'Budget created successfully', budget });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all budgets for a user
router.get('/:userId', async (req, res) => {
    try {
        const budgets = await Budget.find({ userId: req.params.userId });
        res.json(budgets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a budget
router.put('/:budgetId', async (req, res) => {
    try {
        const updated = await Budget.findByIdAndUpdate(
            req.params.budgetId,
            req.body,
            { new: true }
        );
        res.json(updated);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a budget
router.delete('/:budgetId', async (req, res) => {
    try {
        await Budget.findByIdAndDelete(req.params.budgetId);
        res.json({ message: 'Budget deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
