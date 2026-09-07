//task1


let students = ["Ahmed", "Mona", "Ahmed", "Ali", "Mona"];
let uniqueStudents = [...new Set(students)];

console.log(uniqueStudents);

console.log("------------------task2------------------");


//task2

function calculateTotal(...prices) {

    let total = 0;

    for (let price of prices) {
        total += price;
    }

    return total;
}

console.log(calculateTotal(10, 50, 25));
console.log("------------------task3------------------");

//task3

let studentMap = new Map();

studentMap.set(1, "Ahmed");
studentMap.set(2, "Mona");
studentMap.set(3, "Ali");

for (let [id, name] of studentMap) {
    console.log(id, name);
}
console.log("------------------task4------------------");


//task4


function* numberGenerator() {

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;

}

for (let number of numberGenerator()) {
    console.log(number);
}

console.log("------------------task5------------------");

//task5

let products = new Map();

products.set(101, "pc");
products.set(102, "Mouse");
products.set(103, "labtop");


function* productsGenerator() {

    for (let [id, name] of products) {
        yield [id, name];
    }

}


for (let [id, name] of productsGenerator()) {
    console.log(id, name);
}