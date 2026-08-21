//  Student Profile Card

let name=prompt("(problem 1)Enter your name");
let age= Number(prompt("(problem 1)Enter your age"));
let city=prompt("Enter your city");
console.log(`My name is ${name} and I am ${age} years old. I live in ${city}.`);

//  Problem 2 
console.log("---------------------problem 2-----------------")

let price =Number(prompt("(problem 2)Enter the price of the  item:"));
let quantity = Number(prompt("(problem 2)Enter the quantity of the item:"));
let total = price * quantity;
console.log(`Total cost: ${total}`);

// // Problem 3 
console.log("---------------------problem 3-----------------")

let employeeName=prompt("(problem 3)Enter name employee");
let employeetitle=prompt("(problem 3)Enter your title employee");
let employeeCity=prompt(" (problem 3)Enter your city employee");
console.log(`Welcome ${employeeName} you are a ${employeetitle} and live in ${employeeCity}.`);

// Problem 4
console.log("---------------------problem 4-----------------")
let priceItem= Number(prompt("(problem 4)Enter the price of the item:"));
let quantityItem=Number(prompt(" (problem 4)Enter the quantity of the item:"));
let subtotal = priceItem * quantityItem;
console.log(`Subtotal: ${subtotal}`);
let serviceFee=30;
let Totle=subtotal+serviceFee
console.log(`Total : ${Totle}`)

// Problem 5
console.log("---------------------problem 5-----------------")
let monthlySalary =Number(prompt("(problem 5)enter Salary"));
let Increase= monthlySalary *.05;
let afterSalary= Number(monthlySalary + Increase)
console.log(`Welcome ${employeeName} you are a ${employeetitle} and live in ${employeeCity} and current monthly salary:${monthlySalary} and current monthly salary:${afterSalary}`);

