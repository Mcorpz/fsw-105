var fruit = ["banana", "apple", "orange", "watermelon"]
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]



// Remove the last item from the vegetable array.



console.log("fruit: ", fruit)
fruit.pop()
console.log("fruit: ", fruit)

console.log("vegetables: ", vegetables);
vegetables.pop()
console.log("vegetables: ", vegetables);
console.log('******')


// Remove the first item from the fruit array.

console.log("fruit: ", fruit)
fruit.shift()
console.log("fruit: ", fruit)

console.log("vegetables: ", vegetables);
vegetables.shift()
console.log("vegetables: ", vegetables);
console.log('******')



// Find the index of "orange."
var fruit = ["banana", "apple", "orange", "watermelon"]
fruit.indexOf("orange");
console.log(fruit.indexOf("orange"))
console.log('******')
// Add that number to the end of the fruit array.

// Use the length property to find the length of the vegetable array.
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]
vegetables.length;
console.log(vegetables.length)
console.log('******')
// Add that number to the end of the vegetable array.

// Put the two arrays together into one array. Fruit first. Call the new Array "food".

const food = fruit.concat(vegetables);

console.log(food)
console.log('******')
// Remove 2 elements from your new array starting at index 4 with one method.

// Reverse your array.


var fruit = ["banana", "apple", "orange", "watermelon"]

console.log(fruit.reverse());
console.log('******')

// Turn the array into a string and return it.


// ******** 1
var myName = "Mark Corpuz"

function capitalizeAndLowerCase(myName)  {
    value =  myName.toUpperCase() + myName.toLowerCase() ;
    return value;
}

console.log(capitalizeAndLowerCase(myName))
console.log('******')

// ***** 2

var thisWord = "Total world domination!"

function alpha(){
    var test = Math.floor(thisWord.length/2)
    console.log(test)
}

alpha()
console.log('******')
// ******* 3

var firstHalf = "This is the assignment for FSW-105";

function result(){
    var half = firstHalf.slice(0, firstHalf.length/2)
    console.log(half)
}



// ******** 4

var secondCapLocks = "This is a fake Hello World"

function numberFour(i){
    if(i.lenght % 2 ===0) {
        var firstHalf = i.slice(0, i.length/2);
        var secondHalf =firstHalf.toUpperCase();
        console.log(secondHalf)
    }

else {
    var theFirst = i.slice(0, i.length/2)
    var theSecond = i.slice(i.length/2);
    var firstUpper = theFirst.toUpperCase();
    var slowerCase = theSecond.toLowerCase();
    console.log(firstUpper.concat(slowerCase))
}
}
numberFour(secondCapLocks)
console.log('******')



