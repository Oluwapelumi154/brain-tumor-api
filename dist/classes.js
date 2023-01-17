"use strict";
class Account {
    constructor(id, holder, balance) {
        this.id = id;
        this.holder = holder;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount < 0)
            throw new Error('Invalid Amount');
        this.balance += amount;
    }
}
const account = new Account(0, "Orebayo Oluwapelumi", 40000);
account.deposit(1000);
console.log(account.balance);
//# sourceMappingURL=classes.js.map