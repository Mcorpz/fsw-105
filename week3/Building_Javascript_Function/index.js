function sum(num1 , num2){
    return num1 + num2
}

console.log(sum(10 ,10)); 

function highest_of_three(num1, num2, num3)
{
    return Math.max(num1, num2, num3);  
}

console.log(highest_of_three(12,-40,18));


function isEven(value) {
    if (value%2 == 0){
        console.log('even');
    }
    else{
        console.log('odd');
    }
}
console.log(isEven(3)) 

//parameters string***
 

function words(string) {
    if (string.length <= 20){
        console.log(string + string);
    }
    else if (string.length > 20){
        var res = string.slice(0, string.length/2);
        console.log(res)
    }
        }

console.log(words('transformerRRRRfdghfghdfghdgfnRRRRR'))
console.log(words('Odyssey'))