let number = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

console.log("----------------------------------Q2-------------------------------")
let password = prompt("Enter password:");

while (password !== "1234") {
    password = prompt("Wrong password. Enter password again:");
}

console.log("Login Successful");


console.log("----------------------------------Q3-------------------------------")


function calculateTotal(price, quantity) {
    return price * quantity;
}

let price = Number(prompt("Enter price:"));
let quantity = Number(prompt("Enter quantity:"));

let total = calculateTotal(price, quantity);

console.log("Total: " + total);

console.log("----------------------------------Q4-------------------------------")

let sum = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        sum +=i;
    }
}

console.log(sum);


console.log("----------------------------------Q5-------------------------------")

function calculateFinalPrice(price, discount = 10) {
    let finalPrice = price - (price * discount / 100);
    return finalPrice;
}

let prices = 1000;

let result1 = calculateFinalPrice(prices, 20);
console.log("Final Price: " + result1);
let result2 = calculateFinalPrice(price);
console.log("Final Price: " + result2);



