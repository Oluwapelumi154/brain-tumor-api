"use strict";
;
const result = 2;
console.log(result);
const data = [1, "2"];
console.log(data);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2020)
        return income * 2;
    return income * 1.3;
}
let employee = { name: "Oluwapelumi" };
console.log(employee);
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2;
    }
}
const d2 = kgToLbs(10);
console.log(d2);
kgToLbs("20kg");
let digit = 50;
console.log(digit);
const navComponent = {
    drag: () => {
        console.log("Hello");
    },
    resize: () => {
        console.log("Resize");
    }
};
console.log(navComponent);
function greet(name) {
    if (typeof name === "string") {
        console.log(name.toUpperCase());
    }
    else
        console.log("Holla!");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { name: "Oluwapelumi", id };
}
const customerDto = getCustomer(0);
console.log(customerDto === null || customerDto === void 0 ? void 0 : customerDto.name);
let log = null;
class Account {
    constructor(id, holder, balance) {
        this.id = id;
        this.holder = holder;
        this._balance = balance;
    }
    deposit(amount) {
        if (amount < 0)
            throw new Error('Invalid Amount');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
const account = new Account(0, "Orebayo Oluwapelumi", 40000);
account.deposit(1000);
class seatAssignment {
}
const seats = new seatAssignment();
seats.A2 = "pelumi";
console.log(seats);
//# sourceMappingURL=index.js.map