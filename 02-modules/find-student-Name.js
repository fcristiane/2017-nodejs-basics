const students = require('./students.json')

let studentName = process.argv[2]

function findStudentByName(studentName){
    var count = 0
    return function(student){
        if(studentName == student.name){
            count++;
        }
    }
}

const student = students.find(findStudentByName(studentName))
let output = count

console.log(output)