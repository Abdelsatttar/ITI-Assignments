"use strict";
function greetStudent(student, showAge) {
    console.log("Name: " + student.name);
    if (showAge === true && student.age !== undefined) {
        console.log("Age: " + student.age);
    }
}
