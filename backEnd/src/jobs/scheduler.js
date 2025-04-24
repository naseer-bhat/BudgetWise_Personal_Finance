// src/jobs/scheduler.js
import cron from "node-cron";
import { checkBudgetLimits } from "./budgetNotifier.js";

// Run every 10 minutes
cron.schedule("*/10 * * * *", async () => {
    console.log(" Running budget limit check...");
    await checkBudgetLimits();
});
