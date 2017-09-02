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

// function findStudentById(student){
//     return studentId == studentId
// }

function findStudentById(studentId){
    // console.log('Student ID: '+ studentId) //1x
    return function(student){
        // console.count('Time it was called') //nx
        // console.log ('received id: '+ student.id)
        return studentId == student.id
        
    }
}

// const studentFound = students.find(student => student.id == studentId)
// let studentName = studentFound ? studentFound.name : 'Student not found'

//  const callback = findStudentById(studentId)
// const student = students.find(callback)
const student = students.find(findStudentById(studentId))
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