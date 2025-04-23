export default class Account {
    constructor(id, userId, name, type, balance) {
      this.id = id;
      this.userId = userId;
      this.name = name;
      this.type = type; // 'checking', 'savings', 'credit', etc.
      this.balance = balance;
      this.createdAt = new Date();
    }
  }