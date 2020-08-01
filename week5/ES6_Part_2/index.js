// Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John", but instead "spot" is returned). You only need to delete var and insert let and const.

// John is the pet owner, and his name should be stored differently than the other names.
let name = "John"
let age = 101

function runForLoop (pets) {
    let petObjects = []
    for (let i =0; i < pets.length; i++) {
        let pet = { type: pets [i] }
        name;
        if (pet[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop (["cat", "dog"])
console.log("********")

/* Re-write this .map() using an arrow function:
Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol. */

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return {type: "carrot", name: carrot} 
    })
}


console.log("********")


// Re-write this .filter() using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    }, 
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "bowser",
        friendly: false
    }
]

filterForFriendly = (arr =>arr.filter(person=>people.friendly));{
    return person.friendly
}

console.log(filterForFriendly)


// Re-write the following functions to be arrow functions:

let doMathSum = (a, b) =>  a + b
let produceProduct = (a, b) => a * b

console.log(doMathSum(5, 5))
console.log(produceProduct(5, 5))

/* Re-write the following functions to be arrow functions:
firstName should default to "Jane"
lastName should default to "Doe"
age should default to 100
'Hi Kate, how does it feel to be 40? */


// Use template literals to build the string from #5


// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals =[
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

// let filterForDogs(arr) = arr.filter(animal => if (animal.type === "dog") {
//             return true
//         } else {
//             return false
//         }
//     })

// console.log(filterForDogs)



