"use strict;"
console.log("Objects.keys, values, entries");

//Object method return "real" array objects, not just an iterable.

let user ={
    name:"John",
    age: 30
};
console.log(Object.keys(user));//(2) ['name', 'age']
console.log(Object.values(user));//(2) ['John', 30]
console.log(Object.entries(user));//[ ["name","John"], ["age",30] ]

//loop over keys
for(let key of Object.keys(user)){
    console.log(key);
}

//loop over values
for(let value of Object.values(user)){
    console.log(value);
}

//Transforming Objects
//Objects lack many method that exists for arrays, e.g. map, filter & others.
//If we'd like to apply them,then we can use Object.entries followed by Object.fromEntries

//1.Use Object.entries(obj) to get an array of key/value pairs from obj.
//2.Use array methods on that array, e.g. map, to transform the key/value pairs.
//3.use object.fromEntries(array) on the resulting array to turn it back into an object.

//For example, we have an object with prices, and would like to double them:
let prices = {
    mango: 4,
    banana: 1,
    litchi: 2,
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1]*2])
);
//entry[0] corresponds to the key (e.g., 'banana').
//entry[1] corresponds to the value (e.g., 1).

console.log(doublePrices.mango);//8
console.log(doublePrices.litchi);//4

//Tasks
//Write the function sumSalaries(salaries) that returns the sum of all salaries using
// Object.values and the for..of loop.

let salaries = {
    "John": 100,
    "Pete": 200,
    "Mary": 250,
};

function sumSalaries(){
    let totalSalary = 0;
    for(let value of Object.values(salaries) ){
        totalSalary +=value;
    }
    return totalSalary;
}

console.log(sumSalaries(salaries));

//Method 2 - Using reduce method

function sumSalaries2(salaries){
    return Object.values(salaries).reduce((a,b)=> a+b,0);
}
console.log(sumSalaries2(salaries));

//Count properties 
//Write a function count(obj) that returns the number of properties in the object:
let user2 = {
    name: 'John',
    age: 30
  };
//Using keys
 function count(obj){
    return Object.keys(obj).length;
 } 

 console.log(count(user2));//2

 //Self- Using values
 function count2(obj){
    return Object.values(obj).length;
 }
 console.log(count2(user2));

