export default class Transaction {
    constructor(id, userId, amount, type, category, description, date) {
      this.id = id;
      this.userId = userId;
      this.amount = amount;
      this.type = type; // 'income' or 'expense'
      this.category = category;
      this.description = description;
      this.date = date || new Date();
    }
  }