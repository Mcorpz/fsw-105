var movie = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name:"Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]

function alpha(movie){
for (i = 0; i < movie.length; i++){
    movie[i].age >= 18 ? console.log("is old enough") : console.log("is NOT old enough")
}
}
function bravo(movie){
for (i = 0; i <movie.length; i++){
    movie[i].age >= 18 ? console.log(`${movie[i].name} is old enough.`) : console.log(`${movie[i].name} is NOT old enough to see Mad Max Fury Road don't let`);
}
}       
function stuff(movie){
    for ( i = 0; i < movie.length; i++){
        if (movie[i].gender === "male" && movie[i].age >= 18){
        console.log(`${movie[i].name} is old enough to see Mad Max, let HIM in!`)
       } else if (movie[i].gender === "female" && movie[i].age >= 18){
        console.log(`${movie[i].name} is old enough to see Mad Max, let HER in`)
       } else if (movie[i].gender === "male" && movie[i].age < 18){
        console.log(`${movie[i].name} is not old enough to see Mad Max, do not let HIM in`)
       } else {
         console.log(`${movie[i].name} is not old enough to see Mad Max, to not let HER in!`)
       }
    }
}



console.log(stuff(movie))

for(var i = 0; i < 101; i++){
    /* if([i] % 2 !=0){
        console.log([i]  + "odd")
    } else {
            console.log([i] + "even")
        } */
    
    
console.log(([i] % 2 !=0 ) ? [i] + " " + "odd" : [i] + " " +"even");
    }