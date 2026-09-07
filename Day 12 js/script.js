
class BankAccount {
    #balance = 0;
    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        if(amount>0){ 
            this.#balance += amount;
        }
       
    }

    withdraw(amount) {
        if (amount <= this.#balance && amount > 0) {

            this.#balance -= amount;
            console.log("Withdrawal successful");
        } else {
            console.log("Insufficient balance");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(2000);
account.deposit(500);
account.withdraw(300);
console.log(account.getBalance());


console.log("---------------------------------2-problem------------------------------");

class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new Error("Animal is an abstract class");
        }
        this.name = name;
    }

    speak() {
        throw new Error("Child class must implement speak()");
    }
}
class Dog extends Animal {
    speak() {
        console.log("Woof");
    }
}
const dog = new Dog("Max");
dog.speak();


console.log("---------------------------------3-problem------------------------------");

class Shape {
    area() {
        throw new Error("Child class must implement area()");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

const rectangle = new Rectangle(10, 5);
const circle = new Circle(7);

const shapes = [rectangle, circle];

console.log(rectangle.area());
console.log(circle.area());

console.log("---------------------------------4-problem------------------------------");

class Employee {
    #salary;

    constructor(salary) {
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }

    work() {
        throw new Error("Child class must implement work()");
    }
}

class Developer extends Employee {
    work() {
        console.log("Developer is writing code");
    }
}


class Designer extends Employee {
    work() {
        console.log("Designer is designing interfaces");
    }
}
const developer = new Developer(15000);
const designer = new Designer(12000);

developer.work();
console.log(developer.getSalary());

designer.work();
console.log(designer.getSalary());