export default class Budget {
    constructor(id, userId, category, amount, period) {
      this.id = id;
      this.userId = userId;
      this.category = category;
      this.amount = amount;
      this.period = period; // 'monthly', 'weekly', etc.
      this.createdAt = new Date();
    }
  }