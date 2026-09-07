import type { Student } from "./script.js";
function greetStudent(student: Student, showAge?: boolean): void {
    console.log("Name: " + student.name);

    if (showAge === true && student.age !== undefined) {
        console.log("Age: " + student.age);
    }
}