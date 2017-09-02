const students = require('./students.json')


let studentId = process.argv[2]
// let studentName = 'Student not found'

// for (var i = 0; i  < students.length;i++) {
//     var student = students[i];
//     if (student.id == studentId) {
//         studentName = student.name
//         break
        
//     }
    
// }

// console.log(studentName)

function findStudentById(student){
    return studentId == studentId
}

// const studentFound = students.find(student => student.id == studentId)
// let studentName = studentFound ? studentFound.name : 'Student not found'

const studentFound = students.find(findStudentById)
let output = student ? student.name : 'Student not found'

console.log(output)

// if (studentFound) {
//     console.log(studentFound.name)
// }else{
//     console.log("Student not found")
// }





// function getStudentId(){
//     process.argv[2]
// }


// var student = students[i];


//  const printNamebyID = (student) => {
//  }

//  students.forEach(printNamebyID){
//      if(i<=17){
//         student[]
//      }
     
//  }