"use strict;"
console.log("PROMISES Namaste JS 1");

//Promise- A Promise is an object representing the eventual completion or failure of an
//asyncronous operation.There can be 3 states in a Promise- pending, fulfilled, rejected
//Promise objects are resoved only once and are immutable


/*
const cart = ["shoes", "shirts","pants "];

createOrder(cart, function(orderId){
    proceedtoPayment(orderId);
});
*/
//The above approach will create a 'Inversion of Control' problem

//We make use of Promise to resolve this issue
/*
const promise = createOrder(cart);//It no longer creates a callback func.{data:undefined}(initially empty object)
//and at the same time returns a promise.
//As soon as the code is exexcued it will return us {data: orderDetails}

//Once we have the orderDetails, we will attach a callback function to the promise object.
promise.then(function(orderId){
    proceedtoPayment(orderId);
});
*/

const GITHUB_API = "https://api.github.com/users/akshaymarch7"
const user = fetch(GITHUB_API);//This fetch function will return us a Promise
//Promise state :
//Promise result: Will store the data that the fetch method returns
console.log(user);

//Attaching callback to promise object
// user.then(function(data){
//     console.log(data);
// });


