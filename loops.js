// 1 .  For Loop
// for(intialization;condition;update){
//   code to run 
// }
// for(i=0;i<10;i++){
//   // console.log('Gaurav')
// }
// 2. while and do...while loops
// while loop 
// // runs while conditions is true 
// let i= 9;
// while(i <= 5){
//   console.log(i)
//   i++
// }
// 3,. do while loop
// let i = 10;
// do{
//   console.log(i)
//   i++
// }while(i<=5)

// Looping through an array 
// const fal = ["apple", "Mango", "Banana"]
// for(let i = 0; i<fal.length;i++){
//   console.log(fal[i])
// }

// advance loop for..of and for..in
// 1. for..of use for array 
// const colors = ['red', 'yellow','green']
// for(let color of colors){
//   console.log(color)
// }
// 2 . for..in is used for object 
// const person = {name:"Gaurav", age:22,city:"Delhi"};
// for (const key in person){
//   console.log(key, ':', person[key])
// }

// 3. for Each loop 
// const numbers = [10,20,30];
// numbers.forEach((num)=>{
//   console.log(num)
// })

// A loop inside another loop 
// for (let i=1;i<=3;i++){
//  for(let j = 1; j<=2;j++){
//   console.log(`i=${i}, j=${j}`)
//  }
// }


// Questionss 
// 1 print numbers 1-10
// for(i=1;i<=10;i++){
//   console.log(i)
// }
// Print even numbers 1–20
// for(i=1;i<=20;i++){
//   if(i%2===0){
//     console.log(`Its a even number ${i}`)
//   }
// }
// Print a multiplication table of 5
// function table(num){
// for(i=1;i<=10;i++){
//   console.log(`${num*i}`)
// }
// }
// console.log(table(5))
// Find the sum of numbers in an array
// const numbers = [1,2,3,4,5];
// let sum = 0;


// i <= numbers.length when i do this condition return nan
//sum = 15 + undefined → NaN

// for(let i=0; i<numbers.length; i++){
//    sum = sum + numbers[i]; 
//   //  console.log(sum)
// }
// console.log(`Total, ${sum}`)
// console.log(sum)
// console.log(numbers)

const numbers= [1,2,3,4]
let sum = 0
for(num of numbers){
  sum = sum+num
}
console.log(sum)