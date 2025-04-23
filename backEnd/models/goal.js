const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    targetAmount: {
        type: mongoose.Types.Decimal128,
        required: true
    },
    currentAmount: {
        type: mongoose.Types.Decimal128,
        default: 0.0
    },
    targetDate: {
        type: Date,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Goal', goalSchema);
