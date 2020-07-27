// ******** 1
var myName = "Mark Corpuz"

function capitalizeAndLowerCase(myName)  {
    value =  myName.toUpperCase() + myName.toLowerCase() ;
    return value;
}

console.log(capitalizeAndLowerCase(myName))


// ***** 2

var thisWord = "Total world domination!"

function alpha(){
    var test = Math.floor(thisWord.length/2)
    console.log(test)
}

alpha()

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




