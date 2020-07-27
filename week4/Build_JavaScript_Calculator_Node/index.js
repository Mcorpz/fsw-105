var readlineSync = require('readline-sync');
 


function addition (){
    var num1 = readlineSync.question('Please enter your first number? ');
    var num2 = readlineSync.question('Please enter your second number? '); 
    console.log("The result is"  + " " + Number(num1) + Number(num2))
}
function subtraction(){
    var num1 = readlineSync.question('Please enter your first number? ');
    var num2 = readlineSync.question('Please enter your second number? '); 
    console.log("The result is"  + " " +  Number(num1) - Number(num2))
}
function multiplication(){
    var num1 = readlineSync.question('Please enter your first number? ');
    var num2 = readlineSync.question('Please enter your second number? '); 
    console.log("The result is"  + " " + Number(num1) * Number(num2))
}
function division(){
    var num1 = readlineSync.question('Please enter your first number? ');
    var num2 = readlineSync.question('Please enter your second number? '); 
    console.log("The result is"  + " " + Number(num1) / Number(num2))
}


function math() {
    var sum = readlineSync.question('Please enter the operation to perform: add, sub, mul, div:')
    if (sum === 'add'){
        addition() 
    }
    else if (sum === 'sub'){
        subtraction()
    }
    else if (sum === 'mul'){
        multiplication()
    }
    else if (sum === 'div'){
        division()
    }
    else {
        console.log('Not an input')
    }
}


math()
