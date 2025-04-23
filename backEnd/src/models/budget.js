import mongoose, { Schema, model } from 'mongoose';

const BudgetSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    category: {
      type: String,
      required: true,
      trim: true
    },
    amount: {
      type: mongoose.Types.Decimal128,
      required: true
    },
    startDate: {
      type: Date,
      required: true
    },
    endDate: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
);

export default model('Budget', BudgetSchema);
