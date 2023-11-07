"use strict;"
console.log("PROMISES DOCUMENTATION");

//Example of Promise getting resolve
let promise = new Promise(function(resolve, reject){
//The func. is executed automatcally when the promise is constructed

//afer 1 second signak that job is done with the result "done"
setTimeout(()=>resolve("done1"),1000);
});
console.log(promise);

//Example of Promise getting rejected
let promise2 = new Promise(function(resolve, reject){
    //setTimeout(()=> reject(new Error("Whoops!")),1000);
});
// console.log(promise2);

//There can only be a single result or an error
let promise3 = new Promise(function(resolve, reject){
    resolve("done3");
    
    reject(new Error("..."));//ignored
    setTimeout(()=> resolve(new Error("...")),1000);
});
console.log(promise3);//done3

//Consumers: then, catch - The first argument of .then is a function that runs when the 
//promise is resolved and receives the result. The second argument of .then is a function
//that runs when the promise is rejcted and receives the error.

let promise4 = new Promise(function(resolve, reject){
    setTimeout(()=>resolve("done4!"),1000);
});

promise4.then(
    result => console.log(result),//shows "done4!" as result
    error => console.log(error)//doesn't run
);

//If we are only interested in successful completions, then we can provide only one function 
//argument to .then
//promise4.then(alert);

//Catch - If we're only in errors, then we can use null as argument
let promise5 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject(new Error("Whoops!")),1000);
});

// .catch(f) is the same as promise.then(null, f)
promise5.catch(alert);//shows "Error: Whoops!" after 1 second

//Cleanup: finally - It has no arguments. In finally we don't know whether the promise is successful
//or not.

new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("value"),2000);
})
.finally(()=>console.log("Promise ready"))//triggers first
.then(result => console.log(result));// then shows result

//here’s an example of an error, for us to see how it’s passed through finally to catch:
new Promise((resolve, reject)=>{
    throw new Error("error");
})
.finally(()=>console.log("Promise ready"))//triggers first
.catch(err => console.log(err));

//Tasks

//Delay with a promise
//My approach
new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("runs after 3 seconds"),3000);
}).then(result => console.log(result));

//Doc
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
delay(3000).then(()=>console.log("runs after 3 seconds"));