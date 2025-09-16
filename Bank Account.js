class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(amount, "deposited. New balance:", this.balance);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance ❌");
    } else {
      this.balance -= amount;
      console.log(amount, "withdrawn. New balance:", this.balance);
    }
  }
}

let account = new BankAccount("Gowda", 1000);
account.deposit(500);
account.withdraw(300);
account.withdraw(1500);

// OUTPUT ---
500 deposited. New balance: 1500
300 withdrawn. New balance: 1200
Insufficient balance ❌
