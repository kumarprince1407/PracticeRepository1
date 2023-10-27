"use strict;"
console.log("Hello javascript");

//OBJECT METHODS, "THIS"
console.log("Object methods, this :")

let user = {
    name:"John",
    age:30,
};

user.sayHi= function(){
    console.log("Hello!");
};

user.sayHi();

//
let user2 = {
    name: "John",
    age: 30,
};

function sayHi(){
    console.log("Hello 2!");
}
user2.sayHi=sayHi;
user2.sayHi();

//"this" in methods
let user3 = {
    name:"Anand",
    age:28,
    sayHi(){
        console.log(this.name);
    }
};
user3.sayHi();

let user4 = {name:"John"};
let admin = {name:"Admin"};

function sayHi(){
    console.log(this.name);
}

user4.f = sayHi;
admin.f = sayHi;

user4.f();
admin.f();

//Tasks
//Create a calculator with 3 methods
//read()- prompts for two values and saves them as object properties with names a and b respectively.
//sum() - returns the sum of saved values.
//mul() - multiplies saved values and returns the result.

// prompt("Enter the value of a");
// prompt("Enter the value of b");
let calculator =
{
    
    sum: function(){
        return this.a + this.b;
    },
    mul: function(){
        return this.a * this.b;
    },
    read: function (){
       this.a = +prompt("Enter the value of a",0);
       this.b = +prompt("Enter the value of b",0);
    },
//The + sign before the prompt function is used to convert the input value from the user,
// which is received as a string, into a number.
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//Chaining

let ladder ={
    step:0,
    up(){
        this.step++;
        return this;
    },
     down(){
        this.step--;
        return this;
     },
     showStep: function(){
        alert(this.step);
        return this;
     }
//The purpose of using return this in object methods is to support method chaining,
// which allows you to call multiple methods on an object in a sequence.
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// ladder.up();
// ladder.showStep();

//To make the above function calls in a chainable manner
//add return this; in your functions and perform function chaining
ladder.up().up().down().showStep().down().showStep();

//CONSTRUCTOR, OPERATOR "new"

//Constructor functions are technically regular functions
// They are named with capital letter first and should be executed only with "new" operator

//Constructor function
function User(name){
    //1. this = {};  (implicitly)

    //2. add properties to this
    this.name = name;
    this. isAdmin = false;

    //3. return this;  (implicitly)
}
//When a function is executed with new, it does the following steps:
//1. A new empty object is created an assigned to this
//2. The func. body executes. usually it modifies this, adds new properties to it.
//3. The value of this is returned.


let user5 = new User("Jack");
// Gives the same result as:
// let user5 = {
//     name: "Jack",
//     isAdmin: false
//   };

console.log(user5.name);
console.log(user5.isAdmin);

//Return from constructors
//If return is called with an object, then the object is returned nstead of this.
//If return is called with a primitive, it's ignored.

//For instnce, here return overrides this by returning the object:
function BigUser(){
    this.name ="John";
    return {name: "Godzilla"};//return this object
}

console.log( new BigUser().name);//Godzilla

//And here's an example with an empty return
function SmallUser(){
    this.name ="Amar";
    return;//return this
}

console.log(new SmallUser().name);//Amar

//Method in constructor
//We can add to this not only properties, but methods as well

function User2(name){
    this.name = name;

    this.sayHi = function(){
        console.log("Hello! My name is, " + this.name);
    };
}

let prince = new User2("Prince");

prince.sayHi();

//Tasks

//Two functions - one object
//Is it possible to create functions A and B so that new A() == new B()?

let obj = {};
function A(){
    return obj;
}
function B(){
    return obj;
}
console.log(new A() == new B());//true
console.log(new A() === new B());//true

//Create a constructor function Calculator that creates objects with 3 methods same as previously:

function Calculator ()
{
    
    this.sum = function(){
        return this.a + this.b;
    };

    this.mul = function(){
        return this.a * this.b;
    };

    this.read = function (){
       this.a = +prompt("Enter the value of a",0);
       this.b = +prompt("Enter the value of b",0);
    };
    //Use semicolons to terminate statements or expressions.
    //Use commas to separate object properties within an object literal.
}

let calculator2 = new Calculator();
calculator2.read();
alert("Sum: "+ calculator2.sum());
alert("product: " + calculator2.mul());

//Creat a new Accumulator

function Accumulator(staringValue){
this.value = staringValue;

    this.read = function(){
        this.value += +prompt("How much to add", 0);
    };

}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();

alert(accumulator.value);
