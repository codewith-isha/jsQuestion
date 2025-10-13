// 1. Object Basics(Foundation)

// What is an object?
// Creating objects (3 ways)
// Accessing object properties
// Updating, adding, and deleting properties
// Looping through objects
// Nested objects

// 2. Object Deep Concepts
// this keyword
// Object references & copying (shallow vs deep copy)
// Object.keys(), Object.values(), Object.entries()
// Object.assign() and spread {...obj}
// Freezing and sealing objects

// 3 . Functions + Objects
// Functions inside objects (methods)
// this behavior in arrow vs normal functions
// Constructor functions
// Factory functions
// new keyword

//4 . Prototypes and Classes
// Prototype chain
// __proto__ and prototype
// Inheritance
// ES6 Classes and extends
// Static methods



// what is an object 
// An object stores data in ket-value pairs.
// ex:-a
const person = {
  name:"Gaurav",
  age:22,
  city:"New Delhi"
}
// keys:- name,age,city
// value:-Gaurav,22,New Delhi
// b.
const human = new Object()
human.name= "Gaurav"
human.age = 22,
human.personality="Best person in the world.."
// console.log(human)

// accessing properties
// console.log(human.name) //Dot notation
// console.log(human['name'])  // Bracket notation 

// adding key and value in obj 
person.look = "Smartest"
// update in existing obj 
person.age=23
// delete in obj 
delete person.age
// console.log(person)

// looping through Object 
// for in loop 
1.
for(let key in person){
  // console.log(key , person[key])
}
// 2.Object.keys 
const res = Object.keys(person)
// console.log(typeof res)
// console.log(res)

for(let i = 0; i<res.length;i++){
  const key = res[i]
  // console.log(key)
  // console.log(person[key])
  console.log(`${key} : ${person[key]}`)
}








// nested Objects   
const student = {
  name:"Gaurav",
  rollno:8,
  marks:{
    math:90,
    science:89
  }
}
// console.log(student)
// console.log(student.marks.math)
// console.log(student.length)