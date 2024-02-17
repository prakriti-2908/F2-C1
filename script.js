/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(student => {
        if (student.marks > 50) {
            console.log(student.name);
        }
    });
}
// PrintStudentswithMap(arr);

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(student => {
    if (student.marks > 50) {
      console.log(student.name);
    }
  });
}
// PrintStudentsbyForEach(arr);


function addData() {
  //Write your code here, just console.log
 let newObj = {id:4,name:"susan",age:"20",marks:45};
 arr.push(newObj);
 console.log(arr);
}
// addData(arr);

function removeFailedStudent() {
  //Write your code here, just console.log
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].marks < 50) {
      arr.splice(i, 1);
    }
  }
  console.log(arr);
}
// removeFailedStudent(arr);

function concatenateArray() {
  //Write your code here, just console.log
  
let arr2 = [
    ...arr,
  { id: 4, name: "priya", age: "12", marks: 90 },
  { id: 5, name: "malvi", age: "25", marks: 13 },
  { id: 6, name: "sushmita", age: "20", marks: 99 },
];
console.log(arr2);
}
// concatenateArray(arr);
