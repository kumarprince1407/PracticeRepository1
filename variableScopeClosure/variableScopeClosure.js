"use strict;"
console.log("VARIBLE SCOPE, CLOSURE");

//A variable declared inside a code block {...}, is only visible inside that block.
{
    let message = "Hello!"
    console.log(message);//Hello!
}
//console.log(message);//Error: Uncaught ReferenceError: message is not defined

//We can isolate a piece of code that does it own task, with variables that only belong to it.
{
    let message = "Goodbye!";
    console.log(message);//Goodbye!
}

//Nested Functions

function sayHiBye(firstName, lastName){

    function getFullName(){
        return firstName + " " + lastName;
    }
    console.log("Hello," + " "+ getFullName());
    console.log("Bye," + " " + getFullName());
}

sayHiBye("Harry", "Potter");//Hello, Harry Potter , Bye, Harry Potter
sayHiBye("Sheldon", "Cooper");//Hello, Sheldon Cooper , Bye, Sheldon Cooper

//A nested function can be returned: either as a property of a new object or as a result
//by itself. It can then be used somewhere else. No matter where, it still has access to 
//outer variables.

//Below, makeCounter creates the “counter” function that returns the next number on 
//each invocation:

function makeCounter(){
    let count = 0;

    return function(){
        return count++;
    };
}

let counter = makeCounter();
console.log(counter());//0
console.log(counter());//1
console.log(counter());//2.. and so on

//Lexical Environment : Lexical Environment is the local memory along with the lexical  
//environment of its parent. It is created whenever an 'Execution Context' is created.

//Step 1: Variables- A 'variable' is just a property of the special internal object, Environment Record.
//"To get or change a variable" means "to get or change a property of that object".

//Execution start:    phrase: <uninitialized>
let phrase; //phrase: undefined
phrase = "Hello";//phrase: "Hello"
phrase = "Bye";//phrase: "Bye"

//Step 2: Function Declarations
//A function declaration is also a value, like a variable. The difference is that 
//a Function Declaration is instantly fully initialized.

//Execution start:    phrase2: <uninitialized>
let phrase2 = "Hello";
function say(name){
    console.log(`${phrase2}, ${name}`);
}


//Step 3. Inner and Outer Lexical Environment
say("Anand");//Hello, Anand

//Step 4: Returning a function


//Closure - Function along with its Lexical Scope, forms a closure. Closure allows functions to
//"remember" and access the variables and parameters of their containing scope, even if they are 
//not in use. They are a key mechanism for maintaining state, data encapsulation, and create 
//private variables in Javascript.

function outer(){
    let outerVar = "I am from the outer function.";

    function inner(){
       console.log(outerVar)// Accesses outerVar from the enclosing scope
  }
  return inner;

    }

const closureFunc = outer(); //closureFunc is a closure
closureFunc(); // Output:"I am from the outer function" even though outer() has finished executing


//Garbage Collection - Garbage collection is the automatic process by which JavaScript's runtime
//environment manages memory. It automatically reclaims memory that is no longer in use by 
//identifying and cleaning up unused objects.

let someVar = {name:"John"};//creating an object - someVar now references the object { name: "John" }
console.log(someVar);//{name: 'John'}

someVar = null;// Reassigning someVar to null
//The object { name: "John" } is no longer reachable and will be garbage collected
console.log(someVar);//null


