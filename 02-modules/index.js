const students = require('./students.json')

// for (var i = 0; i < students.length; i++) {
//     var student = students[i];
//     console.log(student.name) 
// }

//air function
const printName = (student) => {
    console.log(student.name)
}

students.forEach(printName)

