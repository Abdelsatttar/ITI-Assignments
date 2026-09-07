import type { Student } from "./script.js";
const students: Student[] = [
    {
        id: 1,
        name: "Ahmed",
        age: 20,
        grade: "A"
    },
    {
        id: 2,
        name: "Omar",
        age: 21,
        grade: "B"
    },
    {
        id: 3,
        name: "Ali",
        grade: "A"
    }
];

students.forEach((student: Student) => {
    console.log(student.name);
});