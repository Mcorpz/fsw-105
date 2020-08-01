// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const numbers = [1,2,3,4,5,6,7,8,9]

const filtered = numbers.filter(function(value) {
    return value >= 5
});

console.log(filtered)
console.log('********')

// 2) Given an array of numbers, return a new array that only includes the even numbers.


let num = [1, 2, 3, 4, 5, 6]
let evenNumbers =num.filter(function (n) {
    return (n %2 ==0 )
    
});

console.log(evenNumbers)
console.log('********')    


// Extra Credit) Make a filtered list of all the people who are old enough to see The Matrix (17+).


// 1) Make an array of numbers that are doubles of the first array

var  collectionNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] 
 var answer =  collectionNumbers.map(function (n) { return n * 2; })



console.log(answer)
console.log('********')
// 2) Take an array of numbers and make them strings

var a = "1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4";

var b = a.split(',').map(function(item) {
    return parseInt(item, 10);
});

console.log(b)
console.log('********')
// 3) Capitalize each of an array of names
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (let day of days) {
    day = day.charAt(0).toUpperCase() + day.substr(1);
    console.log(day);
    
}


console.log('********')




// Extra Credit 1) Make an array of strings of the names





// Extra Credit 2) Make an array of strings of the names saying whether or not they can go to The Matrix





// 1) Turn an array of numbers into a total of all the numbers
console.log(
    [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4].reduce((a, b) => a + b, 0)
  )
 
  console.log('********')





// 2) Turn an array of numbers into a long string of all those numbers.

var num1 = [11, 12, 13],
    num2 = [14, 15, 16],
    num3 = [17, 18, 19];
console.log(num1.concat(num2, num3));
console.log('********')

// 3) Turn an array of voter objects into a count of how many people voted


var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name:'Mary', age: 31, voted: false},
  {name:'Becky', age: 43, voted: false},
  {name:'Joey', age: 41, voted: true},
  {name:'Jeff', age: 30, voted: true},
  {name:'Zack', age: 19, voted: false}
];









// Extra Credit 1) Given an array of all your wishlist items, return the total cost of all items





// Extra Credit 2) Given an array of arrays, flatten them into a single array






// 1) Sort an array from smallest number to largest
var numArray = [678,2435,345,,234,8790,];
numArray.sort(function(a, b) {
  return a - b;
});

console.log(numArray);
console.log('********')





// 2) Sort an array from largest number to smallest

var points = [40, 100, 1, 5, 25, 10];

function myFunction() {
    points.sort(function(a, b){return b - a});
}

myFunction()
 
// 3) Sort an array from shortest string to longest






