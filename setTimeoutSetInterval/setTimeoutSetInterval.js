"use strict;"
console.log("SCHEDULING: setTimeout and setInterval");

//setTimeout: Allows us to run a function once after the given interval of time.
function sayHi(){
    console.log("Hello");
}
setTimeout(sayHi,2000);

//With arguments
function sayHi2(phrase, who){
    console.log(phrase +' , ' +who);
}
setTimeout(sayHi2, 2000,"Hello", "World");

//If the first argument is a string, then Javascript creates a function from it.
setTimeout("console.log('First Argument String')",2000);

//Use of strings is not recommended, use arrow functions instead 
setTimeout(() => console.log("Hello3"),3000);

//setInterval - Runs the function after every given interval of time.
//repeat with the interval of 2 seconds
let timerId = setInterval(()=>console.log("tick"),2000);
//stop after 5 seconds
setTimeout(()=>{clearInterval(timerId);console.log("stop");},5000);

//Nested setTimeout - Nested setTimeout allows us set delay between the executions 
//precisely than setInterval


//Tasks
//Write a function printNumbers(from, to) that outputs a number every second,
// starting from from and ending with to.
function printNumbers(from, to){
    for(let i=from; i<= to; i++){
        setTimeout(()=>console.log(i),i*1000);
    }
}
 printNumbers(5,10);

 function printNumbers2(from, to){
    let current = from;
    const intervalId = setInterval(function(){
        console.log(current);
        current++;
        if(current > to){
            clearInterval(intervalId);
        }
    },1000);
}
 printNumbers2(11,15);