"use strict;"
//Important video - Watch it again
console.log("Creating a Promise, Chaining & Error Handling - Namaste Javascript.");

//Consumer part
const cart = ["shoes","pants","kurta"];

//async operation createOrder api that returns a promise
//attaching a callback func. to this promise object & that func. will call proceedToPayment

createOrder(cart)//returns orderId

// console.log(promise);//Promise {<pending>}

.then(function(orderId){//success part
    console.log(orderId);
    return orderId;
})
.then(function(orderId){//Promise chaining
    return proceedToPayment(orderId);//returning promise
})
.then(function(paymentInfo){//When we return a promise from above,this .then method
                            //gets attached to the above promise
    console.log(paymentInfo);
})
.catch(function (err){//failure part - If the promise is rejected.
    console.log(err.message);
//This catch will handle error in any part of the chain.

//Any method after the catch will definitely run, no matter what happens 
})
.then(function(orderId){
        console.log("No matter what happens, this then will defintely be called.");
    
});

//Producer part - creating our own promise

function createOrder(cart){

    const pr = new Promise(function(resolve,reject){
        
        //createOrder
        //validateCart
        //success- return an orderId, failure - throw an error
        if(!validateCart(cart)){
            const err= new Error("Cart is not valid");
            reject(err);
        }
        //logic for creating order
        const orderId = "12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000);
            
        }
    });
    return pr;
}

function proceedToPayment(orderId){
    //
    return new Promise(function(resolve,reject){
        resolve("Payment Successful");
    });
}

function validateCart(cart){
    return true;//to resolve the promise
    //return false;//to reject the promise
}

//Homework : Just like createOrder, write similar promise
// chain for proceedToPayment, showOrderSummary, updateWallet