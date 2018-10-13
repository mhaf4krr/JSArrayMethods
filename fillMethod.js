/*Replaces all elements with one single element*/
let numbers = [1,2,3,4,5,6];

numbers.fill(10);

console.log(numbers);


let STUDENTS = [];

class student {
    constructor(name,sem){
        this.name = name ;
        this.sem = sem;
    }
}

function addStudent(name,sem) {
    STUDENTS.push(new student(name,sem));
    console.log('Student has been Added');
}

addStudent('Hyder',6);
addStudent('Boss',5);
addStudent('Amir',6);

console.log(STUDENTS);

STUDENTS.fill({CGPA:8});

console.log(STUDENTS);