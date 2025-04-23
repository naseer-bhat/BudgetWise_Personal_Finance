// const express = require('express');
// const mongoose = require('mongoose');

import express from 'express'
import mongoose from 'mongoose'
const app = express();
// const {rateLimit}=require('express-rate-limit')
import rateLimit from 'express-rate-limit'
// const helmet = require('helmet');
import helmet from 'helmet'

const limiter= rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-8',
    legacyHeaders: false,

});
app.use(limiter)

app.use(helmet())
app.use(express.json());

// const budgetRoutes = require('./routes/budgets');
import budgetRoutes from './routes/budgets';
// const goalRoutes = require('./routes/goals');
import goalRoutes from './routes/goals';

app.use('/api/budgets', budgetRoutes);
app.use('/api/goals', goalRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/finance-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected!');
})

app.listen(3000, () => console.log('Server running on port 3000'));
