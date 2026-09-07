console.log ("--------------------------Q1--------------------");

function uppe(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr.at(i).at(0).toUpperCase() + arr.at(i).slice(1));
    }
}
let arra=["ahmed","mohamed","abdelsatter"];
uppe(arra)



console.log ("--------------------------Q2--------------------");
function numOFE(word){
    let count=0;
    for(let i=0;i<word.length;i++){
         if(word[i]==='e'){
        count++;
        
    }
    }console.log(`count of e ${count}`);
   
}
let words=prompt("Enter Word");
numOFE(words);


console.log ("--------------------------Q3--------------------");



let library = {
    books: [
        {
            title: "JavaScript Basics",
            author: "Ahmed",
            year: 2026
        },
        {
            title: "Learn C#",
            author: "Mohamed",
            year: 2026
        },
        {
            title: "Web Development",
            author: "ِabdelsattar",
            year: 2026
        }
    ]
};

function printTitles() {
    for (let i = 0; i < library.books.length; i++) {
        console.log(library.books[i].title);
    }
}
printTitles();

console.log ("--------------------------Q4--------------------");

function processArray(numbers) {
    let square = [];

    for (let i = 0; i < numbers.length; i++) {
        square.push(numbers[i] ** 2);
    }

    console.log(square);
}

let x = [2, 3, 4];
processArray(x);

console.log ("--------------------------Q5--------------------");

let names = ["Ahmed", "Ali", "Mohamed", "Omar", "Hassan"];
let randomNames = [];

while (randomNames.length < 3) {
    let randomIndex = Math.floor(Math.random() * names.length);
    let name = names[randomIndex];

    if (!randomNames.includes(name)) {
        randomNames.push(name);
    }
}

console.log(randomNames);