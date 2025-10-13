// 1.
function check(num){
 if(num %2 === 0){
  // console.log(`${num} is even`)
 }else{
  // console.log(`${num} is odd`)
 }
}
// check(8)
// Q2: Find the sum of all numbers in an array using functions.
// Q3: Count the number of vowels in a string using functions.
// Q4: Reverse a string without using built-in methods.
// Q5: Find the largest numb

2.
function Sum(arr){
  let sum = 0
  for(let i=0; i<arr.length;i++){
    sum += arr[i]
  }
   return sum
}
// console.log(Sum([1,2,3,4,5]))

//  Q3: Count the number of vowels in a string using functions.
function count(str){
  let vowels = ['a',"i","o",'e','u',"A","E","I","O","U"]
  let count = 0
  for(let i = 0; i<str.length;i++){
    if(vowels.includes(str[i])){
      count++
    }
  }
  return count
}
// console.log(count("String"))

// Q4: Reverse a string without using built-in methods.

// function reverse(str){
//   for(let i=0; i<str.length;i++){
//     let reverse = 
//   }
// }
function prime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) 
      return false;
  }
  return true;
}
console.log(prime(4))
