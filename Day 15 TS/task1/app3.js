const students = [
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
students.forEach((student) => {
    console.log(student.name);
});
export {};
