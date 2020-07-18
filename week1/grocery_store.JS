var shopper = {
    fruit: "mango",
    amount: 10,
    vegetable: false,
    groceryCart: [
        "milk",
        "salt",
        "mango",
        "beans"
    ],

    description: function() {
        document.write();
    }
}


var person =  {
    firstName: "Mark",
    lastName: "Corpuz",
    age: 31,
    haircolor: "black",
    fullname: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.markCorpuz)