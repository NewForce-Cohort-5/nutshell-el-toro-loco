const activeUser = sessionStorage.getItem("activeUser")

console.log(activeUser)

//how to sort by a value
let students = [
    { name: "Alex",   grade: 15 },
    { name: "Devlin", grade: 12 },
    { name: "Eagle",  grade: 13 },
    { name: "Sam",    grade: 14 },
  ];
  
console.log(students.sort(function (a, b){return b.grade - a.grade;}))

let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => b - a);
console.log(numbers);
//


const d = new Date();
console.log(d, d.getDate(), d.getMonth())

//this is how to sort out date
// let articlesArraySortedbyDate = articlesArray.sort((a,b) => { return new Date(b.date) - new Date(a.date )})
