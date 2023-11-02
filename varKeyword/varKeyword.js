"use strict;"
console.log("VAR Keyword");

//"var" has no block scope : Variables declared with var are either function-scoped or
//global-scoped.

if(true){
    var test = true;
}
console.log(test);

if(true){
    let test1 = true;
}
//console.log(test1);//Error -Uncaught ReferenceError: test1 is not defined
//The same is true for loops - 'var' cannot be loop scoped as well
for(var i=0; i<5; i++){
    var one = 1;
}
console.log(i);//5
console.log(one);//1

//If a code block is inside a function, then var becomes function-level variable
function sayHi(){
    if(true){
        var phrase = "Hello";
    }
    console.log(phrase);
}
sayHi();//Hello
// console.log(phrase);//Reference error: Phrase is not defined

//Unlike 'let', var tolerates redeclaration
var user = "Pete";
var user = "John";

console.log(user);//John

//var variables are defined from the beggining of the function, no maater where the
//definition is(assuming that the definition is not in the nested function)

function sayHi2(){
    phrase2 = "Hello";
     console.log(phrase2);

     var phrase2;
}
sayHi2();//Hello

//The above code block is same as this (moved var phrase above) - HOISTING concept
//
/*
function sayHi() {
    var phrase2;
  
    phrase2 = "Hello";
  
    console.log(phrase2);
  }
  sayHi();
  */

//GLOBAL OBJECT - Provides variables and functions that are available anywhere.
//By default, those are built into the language or the environment. 

window.console.log("Hello Global");//Hello Global (same as console.log("Hello Global"))

var gVar = 5;
console.log(window.gVar);// Becomes a property of global object

let gLet = 5;
console.log(window.gLet);//undefined (doesn't become a property of the global object)

//If the value is important such that we would like to make it avaiable globally,
//we write it directly as a property.
window.currentUser = {
    name:"John",
};

console.log(currentUser.name);//John

//get it from window wxplicitly(safe)
console.log(window.currentUser.name);//John
