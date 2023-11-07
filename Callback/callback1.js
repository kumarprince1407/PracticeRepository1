"use strict;"
console.log("CALLBACK");
//Callbacks are an efficient way of handling async operation in Javascriot
console.log("Hello");

setTimeout(function(){
    console.log("Javascript");
}, 4000);

console.log("Season 2");

//Callback Hell
const cart = ["shoes", "shirts","kurta"];

// api.createOrder(cart, function (){
//     api.proceedToPayment(function() {
//         api.showOrderSummary(function(){
//             api.updateWallet()
//             })
//    });

// }
// );
//Too many api dependendent on one another- An example of Callback hell

//Inversion Of Control - We loose the control of our code, when we are using Callbacks e.g.
//when function(){api.proceedTopayment...} is passed as a callback func. to api.createOrder

