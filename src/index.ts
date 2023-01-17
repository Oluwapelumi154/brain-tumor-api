// const enum Size {Small=1, Medium,Large};
// const result: Size= Size.Medium;
// console.log(result);

// const data: [number,string]= [1,"2"];
// console.log(data);

// function calculateTax(income: number,taxYear=2022): number{
//     if(taxYear < 2020) return income * 2;
//     return income * 1.3
// }

// type Employee = {
//     name: string
// }

// let employee: Employee = {name: "Oluwapelumi"}
// console.log(employee)

// function kgToLbs(weight: number | string){
//     // Narrowing
//  if(typeof weight === "number"){
//    return weight * 2.2;
//  }
//  else {
//     return parseInt(weight) * 2;
//  }

// }
// const d2= kgToLbs(10);
// console.log(d2);
// kgToLbs("20kg");


// // Literal Types
// let digit: 50= 50;
// console.log(digit);


// // Intersection
// type Dragable ={ 
//     drag: ()=> void
// }

// type ResizeAble= {
//     resize: ()=> void
// }

// type UIWidget= Dragable & ResizeAble;
// const navComponent: UIWidget = {
//      drag: ()=> {
//         console.log("Hello")
//      },
//      resize: ()=>{
//         console.log("Resize")
//      }
// }

// console.log(navComponent)


// function greet(name: string | null){
//  if(typeof name === "string"){
//     console.log(name.toUpperCase())
//  }else 
//  console.log("Holla!");
// }

// greet(null);

// type Customer= {
//     name: string
//     id: number
// }

// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : {name: "Oluwapelumi", id}
// }

// const customerDto= getCustomer(0);
// console.log(customerDto?.name)

// let log= null

// // let phone= <HTMLInputElement> document.getElementById("Phone")

// class Account {
//     readonly id: number;
//     holder: string;
//     private _balance: number;
//     constructor(id: number, holder: string, balance: number){
//         this.id= id;
//         this.holder= holder;
//         this._balance= balance;
//     }
//     deposit(amount: number): void {
//         if(amount < 0)  throw new Error('Invalid Amount');
//         this._balance+=amount;
//     }
//     get balance (){
//      return this._balance;
//     }
// }
// const account = new Account(0,"Orebayo Oluwapelumi",40000);
// account.deposit(1000);
// // console.log(account.balance);


// class seatAssignment {
//     [seatNumber: string]: string
// }
// const seats= new seatAssignment()
// seats.A2="pelumi";
// console.log(seats);

import tensor from "@tensorflow/tfjs-node";