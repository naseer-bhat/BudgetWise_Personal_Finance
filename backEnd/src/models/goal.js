import mongoose, { Schema, model } from 'mongoose';

const GoalSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
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
  },
  { timestamps: true }
);

export default model('Goal', GoalSchema);
