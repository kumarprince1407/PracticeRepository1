"use strict;"
console.log("FUNCTION OBJECT, NFE");

//A function's name is accessible as the "name" property.
function sayHi(){
    console.log("Hi");
}

console.log(sayHi.name);//sayHi

//It also assigns the corect name to a function even if it's created without one, and then
// immediately assigned.
let sayHi2 = function(){
    console.log("Hi");
};
console.log(sayHi2.name);//sayHi2

//It also works if the assignment is done via a default value
function f(sayHi3 = function(){}){
    console.log(sayHi3.name);
}
f();//sayHi3

//Object methods have name too

let user = {
    sayHi4(){
        //...
    },
    sayBye(){
        //...
    }
}
console.log(user.sayHi4.name);//sayhi4
console.log(user.sayBye.name);//sayBye

//Case when there's no way to figure out the name. In such cases the name property is empty
let arr=[function(){}];
console.log(arr[0].name);//Output: empty string


//The "length" property - returns the number of function parameters
function f1(a){};
function f2(a,b){};
function many(a,b, ...more){};

console.log(f1.length);//1
console.log(f2.length);//2
console.log(many.length);//2 - Rest parameters are not counted


//Doubt
// function ask(question, ...handlers) {
//     let isYes = confirm(question);
  
//     for(let handler of handlers) {
//       if (handler.length == 0) {
//         if (isYes) handler();
//       } else {
//         handler(isYes);
//       }
//     }
  
//   }
  
//   // for positive answer, both handlers are called
//   // for negative answer, only the second one
//   ask("Question?", () => alert('You said yes'), result => alert(result));
  //doubt

//Custom properties : We can also add properties of our own
//hhere we add the 'counter' propert to track the total calls count

function sayHi5(){
    console.log("Hi");

    //let's count how many times we run
    sayHi5.counter++;
}
sayHi5.counter = 0;
sayHi5();
sayHi5();
console.log(`Called ${sayHi5.counter} times.`)//Called 2 times

function makeCounter() {
    //instead of:
    //let count = 0

    function counter(){
        return counter.count++;
    };
    counter.count = 0;
    return counter;
  }
  
  //We can think of the counter variable as a reference to the counter function created within makeCounter.
  let counter = makeCounter();
  console.log(counter());//0
  console.log(counter());//1
  //The count is now stored in the function directly, not in its outer Lexical Environment.

//Is it better or worse than using a closure? The main difference is that if the value of count lives in
//an outer variable, then external code is unable to access it. Only nested functions may modify it.
// And if it’s bound to a function, then such a thing is possible:
  counter.count = 10;
  console.log(counter());//10

  //named Function expression

  let sayHi6 = function func(who){
    console.log(`Hello, ${who}`)
  };
  sayHi6("John"); //Hello, John

  //There are two special things about the name func, that are reasons for it
  //1.It allows the function to reference itself immediately
  //2.It is not visible to other functions.

//For instance, the function sayHi below calls itself again with "Guest" if no who is provided:

let sayHi7 = function func(who){
    if(who){
        console.log(`Hello, ${who}`);
    }
    else{
        func("Guest"); //use func to re-call itself
    }
};

sayHi7();//Hello, Guest
sayHi7("Chandler");//Hello, Chandler
// func();//Reference error

let sayHi8 = function (who) {
    if (who) {
      console.log(`Hello, ${who}`);
    } else {
      sayHi8("Guest"); 
    }
  };
  
  let welcome = sayHi8;
  sayHi8 = null;
  //welcome();//TypeError: sayHi8 is not a function

  //That happens because the function takes sayHi from its outer lexical environment.
  // There’s no local sayHi, so the outer variable is used. And at the moment of the call
  // that outer sayHi is null. The optional name which we can put into the Function
  // Expression is meant to solve exactly these kinds of problems.
//Fixing the code
let sayHi9 = function func(who) {
    if (who) {
      console.log(`Hello, ${who}`);
    } else {
      func("Guest"); // Now all fine
    }
  };
  
  let welcome2 = sayHi9;
  sayHi9 = null;
  
  welcome2(); // Hello, Guest (nested call works)

  //Next module
  //THE "NEW function" SYNTAX
//Function is created literally from a string, that is passed at run time.
  //Syntax - let func = new Function ([arg1, arg2, ...argN], functionBody);
let sum = new Function('a','b', 'return a+b');
console.log(sum(1,2));//3

//Here there's a function without arguments, with only the function body.

let sayHi10 = new Function('console.log("Hello")');
sayHi10();//Hello

//Closure - When a function is created using new Function, its [[Environment]] is set to
//reference not the current Lexical Environment, but the global one.

//Such function doesn’t have access to outer variables, only to the global ones.
function getFunc(){
    let value ="test";
    let func = new Function('console.log(value)');
    return func;
}
//getFunc()();//ReferenceError: value is not defined

//Compare it with regular behaviour
function getFunc2(){
    let value = "test";
    let func = function(){
        console.log(value);
    }
    return func;
}
getFunc2()();//test - From the Lexical Environment of getFunc2