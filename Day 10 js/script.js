 let itemCount = 2;
 const storeName = "Ahmed Store"
 itemCount++;
 itemCount++
 console.log("Final Item Count:", itemCount);
 console.log("Store Name:", storeName);


 console.log("-----------------Q2-----------------------")

// console.log(a); //undefined
// var a = 10;
// console.log(b);//error
// let b = 20;

var a = 10;
let b = 20;
console.log(a); 
console.log(b);
console.log("-----------------Q3-----------------------")


function calculateFinalPrice(productPrice, discount = 0) {
    return productPrice - discount;
}

console.log(calculateFinalPrice(100, 20));
console.log(calculateFinalPrice(100));

console.log("-----------------Q4-----------------------")



const student = {
    name: "Ahmed",
    age: 20,
    track: "Frontend",
   

    printInfo() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Track:", this.track);
        console.log("Email:", this.email);
    }
};

student.age = 21;
student.city = "Cairo";

console.log(student);

student.printInfo();


console.log("-----------------Q5-----------------------")




const internalID = Symbol("internalID");

const user = {
    name: "Ahmed",
    [internalID]: 12345
};

console.log(user[internalID]);

const secondID = Symbol("internalID");

console.log(internalID === secondID);


console.log("-----------------Q6-----------------------")



const number1 = 135124531241242n;
const number2 = 2000000000000000n;

const result = number1 + number2;

console.log("Result:", result);

const isEven = number => number % 2 === 0;

console.log(isEven(10));
console.log(isEven(7));
console.log(isEven(24));