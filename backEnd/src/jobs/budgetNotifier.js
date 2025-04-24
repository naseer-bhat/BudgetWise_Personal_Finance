// jobs/budgetNotifier.js
import Budget from "../models/Budget.js";
import Expense from "../models/Expense.js";
import Notification from "../models/Notification.js";
import { io, connectedUsers } from "../../app.js"; // use exported values

export const checkBudgetLimits = async () => {
    const budgets = await Budget.find();

    for (const budget of budgets) {
        const expenses = await Expense.aggregate([
            {
                $match: {
                    userId: budget.userId,
                    category: budget.category,
                    date: { $gte: budget.startDate, $lte: budget.endDate },
                },
            },
            {
                $group: {
                    _id: null,
                    totalSpent: { $sum: "$amount" },
                },
            },
        ]);

        const totalSpent = parseFloat(expenses[0]?.totalSpent || 0);
        const limit = parseFloat(budget.amount);

        const threshold = 0.9;
        if (totalSpent >= limit * threshold) {
            const message = `You are nearing your budget for "${budget.category}".`;

            const existing = await Notification.findOne({
                userId: budget.userId,
                message,
                isRead: false,
            });

            if (!existing) {
                const notification = await Notification.create({
                    userId: budget.userId,
                    message,
                });

                const socketId = connectedUsers.get(budget.userId.toString());
                if (socketId) {
                    io.to(socketId).emit("new-notification", notification);
                    console.log(" Pushed real-time notification to user", budget.userId);
                } else {
                    console.log("Saved notification for offline user", budget.userId);
                }
            }
        }
    }
};
