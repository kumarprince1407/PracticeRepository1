"use strict;"

console.log("Hello JavaScript");

//OPTIONAL CHAINING
// The optional chaining ? is a safe way to access nested object properties,
// even if an intermediate property doesn't exist.

let user = {};// a user without "address" property

// alert(user.address.street);//Error!

//The soln is to check ythe value using if or the conditional operator ?,
//before accessing its properties, like this:

console.log(user.address ? user.street.address : undefined);//undefined
//Alt
console.log(user.address && user.address.street);//undefined

//Here's how the same would look for  document.querySelector
let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;
console.log(html);//null

//The Optional Chaining ?. stops the evaluation if the value before ? is undefined or
//null and returns undefined.
//The variable before ?. must be defined
//In other words, value?.prop :
// works as value.prop, if value exists,
// otherwise (when value is undefined/ null) it returns undefined

let user2 = {};
console.log(user2?. address?. street);//undefined

let html2 = document.querySelector('.elem')?.innerHTML;
console.log(html2);//undefined

//Short-circuiting

//if there are any further function calls or operations to the right of ?., they won’t be made.
//For instance:

let user3 = null;
let x = 0;
 user3?.sayHi(x++); //no user3, so the execution doesn't reach sayHi and call x++
 console.log(x);//0

 //Other variants 
 // ?.() is used to call a function that may not exist

 let userAdmin = {
    admin(){
        console.log("I am admin.")
    }
 };

 let userGuest={};

 userAdmin.admin?.();// I am admin
 userGuest.admin?.();//nothing happens

 // The ?.[] syntax also works, if we'd like to use brackets [] to access properties instead of dot .

 let key = "firstName";

 let user4={
    firstName:"John",
 };

 let user5= null;

 console.log(user4?.[key]);//John
 console.log(user5?.[key]);//undefined

 //We can also use ?. with delete

//  delete user?.name; //delete user.name if user exists

//SYMBOL - A "primitive unique value" with optional description
//A symbol represents a unique identifier.

//id is a symbol with the description "id"
let id = Symbol("id");

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 == id2); //false - Even though they have same description

//Symbols don't auto convert to a string
//alert(id); // TypeError: Cannot convert a Symbol value to a String
console.log(id.toString()); //Symbol(id), now it works

//To get description only
console.log(id.description);//id

//"Hidden" properties
//Symbols allow us to create "hidden" properties of an object, that no other
//part of code can accidently access or overwrite

let user6 = {//belongs to another codebase
    name:"John"
};

let id3 = Symbol("id");
user6[id3]=1;
console.log(user6[id3]);//1 - We can access the data using the  symbol as key

//Symbols in an object literal
//If we want to use symbol in an object literal {...}, we need square brackets arount it

let id4 = Symbol("id");

let user7 ={
    name:"John",
    [id4]:123// not "id":123
}
console.log(id4.description);//id
console.log(user7[id4]);//123

//Symbols are skipped by for...in
//returns a symbol by name
let id5 = Symbol("id");
let user8 ={
    name:"John",
    age:30,
    [id5]:123,
};
for(let key in user8){
    console.log(key); //name, age (no symbols)
}

//In contrast, Object.assign copies both string and symbol properties:
let clone = Object.assign({}, user8);

console.log(clone[id5]);//123

//Global Symbols
//When we want same-named symbols to be same entities

//read from the global registry
let id6 = Symbol.for("id");//if the symbol does not exist, it is created

//reading it again(maybe for another part of the code)
let id6Again = Symbol.for("id");

console.log(id6 === id6Again);//true - the same symbol

//Symbol.keyFor
// Symbol.keyFor(sym) - To return a symbol by name

//get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

//desription property allows us to retrive the description that was provided 
//when creating the symbol using Symbol() or Symbol.for()
console.log(sym.description);//name
console.log(sym2.description);//id

//get name by symbol
//Symbol.keyFor() is used to retrieve the global symbol key associated with a
//symbol that was created using Symbol.for()
console.log(Symbol.keyFor(sym));//name
console.log(Symbol.keyFor(sym2));//id

//Symbol.keyFor() is typically used with symbols that have been registered in 
//the global symbol registry using a specific key. It allows you to look up the
// key associated with a global symbol.

//All symbols have description property*
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log(Symbol.keyFor(globalSymbol));//name - global symbol
console.log(Symbol.keyFor(localSymbol));//undefined, not global 

console.log(localSymbol.description);//name*