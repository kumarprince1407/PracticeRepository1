//FUNCTIONS
function showMessage(){
    console.log("this is a sample function.");
}
showMessage();
showMessage();

let userName = 'John';

function printName(){
    userName='Bob';
    let message = 'Hello, ' + userName;
    console.log(message);
}
console.log(userName);//John - before the function call
printName();//Hello, Bob
console.log(userName);//Bob, the value was modified by the function

printName();//Hello, Bob

//Functions with parameters

function parameterFunction( from, text){
console.log(from + " : " + text);
}

parameterFunction('Ann', 'Hello');
parameterFunction('Prakash', "What's up?");

function defaultOld(from, text){
 if(text === undefined){
    text = 'no text given';
 }
 console.log(from + " : " + text);   
}
defaultOld();//Output - undefined : no text given


//assigning default value for a paremeter at a later stage
function defaultLater(text){
    if(text === undefined){
        text="Empty message";
    }
    console.log(text);
}

defaultLater();//Output - Empty message


//Nullish coalescing operator (usage in terms of parameteried function)
function showCount(count){
    //if the count is undefined or null, show "unknown"
    console.log(count ?? "unknown")
}
showCount(0);//0
showCount(null);//unknown
showCount();//unknown


//Returning a value
function sum(a,b){
    return a+b;
}
let result = sum(1,2);
console.log(`Sum : ${result}`);

//Multiple occurances of 'return' in a single function
/*
function checkAge(age){
    if(age>18){
        return true;
    }else{
        return confirm("Do you have permission from your parents?");
    }
}

let age = prompt("What is your age?", 18);//18 is passed a prefilled value in the prompt

if(checkAge(age)){
    alert("Access granted")
}else{
    alert ("Access denied");
}
*/
//It is possible to return without a value, it causes the function to exit immediately.
//For example:
/*
function showMovie(age){
    if(!checkAge(age)){
        return;
    }
    alert("Showing the movie");
}

showMovie(17);
*/
//A function with an empty return or without it returns undefined
console.log("Function with no/empty return")
function doNothing(){
    /*empty*/
}
console.log(doNothing() === undefined);//true

function doNothing2(){
    return;
}
console.log(doNothing2() === undefined);//true

//Generating prime nymbers: Using a label
console.log("Using lables")
function showPrimes(n){
    nextPrime: for(let i=2; i<n; i++){
        for(let j=2; j<i; j++){
            if(i % j == 0) continue nextPrime;
        }
        console.log(i);
    }
}
showPrimes(10);// 2 3 5 7

//Generating prime numbers : Without using a label
console.log("Without using lables")
function isPrime(n){
    for(let i=2; i<n ; i++){
       if(n%i == 0){
           return false;
       }
       
    }
    return true;
   }

function showPrimes2(n){
    for(let i=2; i<n; i++){
        if(!isPrime(i)) continue;
        console.log(i);
    }
}


 showPrimes2(10);

 //FUNCTION EXPRESSIONS

  function sayHi(){//1. Create
    console.log("Hello");
 }
 console.log(sayHi); // Prints the entire function above in console

 let func = sayHi;//2.Creating a copy
 func();//Hello - 3. Running the copy
 sayHi();//Hello -4. Running the function 


 //Callback functions
 function ask(question, yes, no){
    if(confirm(question)){
        yes();
    }
    else{
        no();
    }
 }
 function showOk(){
    alert("You agreed.");
 }
 function showCancel(){
    alert("You cancelled the execution.");
 }
 //usage: functions showOk, showcancel are passed as parameters
 ask("Do you agree ?", showOk, showCancel);

 //Function declaration
 console.log("Function declaration sum");
function sum(a,b){
return a+b;
}
console.log(sum(2,3));

 //Function Expression
 console.log("Function expression sum");
let sum2 = function (a,b){
    return a+b;
};
console.log(sum2(3,5));

let age = prompt("What is your age?", 18);
let welcome;

if(age<18){
    welcome = function(){
    alert("Hello!");
    }
}else{
    welcome = function(){
        alert("Greetings!")
    }
}
welcome();

//Alternate way using '?' operator
let age2 = prompt("What is your age?", 18);
let welcome2 = (age<18)?
function(){alert("Hello2");}:
function(){alert("Greetings2");};

welcome2();

//ARROW FUNCTION BASICS
console.log("Arrow function");
let sum3 =(a,b)=>{
    return a+b;
}
console.log(sum3(4,5));

let double = n => n*2;
console.log(double(8));

let age3 = prompt("What is your age ?", 18);
let welcome3 = (age3<18) ?
()=>alert("Hello 3"):()=>alert("Greetings 3");
welcome3();

//Multiline arrow functions
console.log("Multiline arrow function");
let sum4 = (a,b) =>{
    let result = a+b;
    return result;
}
console.log(sum4(2,6));

//JAVASCRIPT SPECIALS

//Interaction
let userName2 = prompt("Your name?", "Shivam");
let isCoffeeWanted = confirm("Do you want some coffee?");

alert("Visitor name: " + userName2);
alert("Coffee wanted: " + isCoffeeWanted);