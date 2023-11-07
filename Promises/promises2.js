"use strict;"
console.log("PROMISES Namaste JS 2");
//Code for understanding purposes only. Will give errors when executed
const cart = ["shoes", "shirts","pants "];

createOrder(cart, function(orderId){
    proceedtoPayment(orderId, function(paymentInfo){
        showOrderSummary(paymentInfo, function(){
            updateWalletBalance();
        });
    });
});

//The above approach will create a 'Inversion of Control' problem

//We make use of Promise to resolve this issue

const promise = createOrder(cart);//It no longer creates a callback func.{data:undefined}(initially empty object)
//and at the same time returns a promise.
//As soon as the code is exexcued it will return us {data: orderDetails}

//Once we have the orderDetails, we will attach a callback function to the promise object.
promise.then(function(orderId){
    proceedtoPayment(orderId);
});

//Promise Chaining
createOrder(cart)
.then(function(orderId){
    return proceedtoPayment(orderId);
})
.then(paymentInfo => showOrderSummary(paymentInfo))//can be written in arrow func. manner also
.then(function(paymentInfo){
    return updateWalletBalance(paymentInfo);
});