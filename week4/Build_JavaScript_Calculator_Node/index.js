var readlineSync = require('readline-sync');
 


function addition (){
    var num1 = readlineSync.question('Please enter your first number? ');
    var num2 = readlineSync.question('Please enter your second number? '); 
    console.log(Number(num1) + Number(num2))
}


function math() {
    var sum = readlineSync.question('Please enter the operation to perform: add, sub, mul, div:')
    if (sum === 'add'){
        addition() 
    }
    else if (sum === 'sub'){
        console.log('HELLOW WORLD')
    }
}


math()