"use strict;"
console.log("RECURSION AND STACK");

//calculating x^n using recursion
function pow(x,n){
    if(n==0){
        return 1;
    }
    if(n==1){
        return x;
    }
    return x *pow(x,n-1);
}

console.log(pow(4,4));//256
console.log(pow(5,0));//1
console.log(pow(8,1));//8

//Recursion using conditional operator
 function pow2(x,n){
    if (n === 0) {
        return 1;
      }
    return (n==1) ? x :( x*pow(x,n-1));
 }

console.log(pow2(4,4));//256
console.log(pow2(5,0));//1
console.log(pow2(8,1));//8

//Recursive traversals
let company = {
    sales :[{
        name: "John",
        salary: 1000
    },{
        name:"Alice",
        salary:1600
    }],
    development :{
        sites:[{
            name: "Peter",
            salary: 2000,
        },{
            name : "Alex",
            salary : 1800
        }],
        internals:[{
            name : "Jack",
            salary: 1300
        }]
    }
};

//Function to calculate cumalative salary using recursion

function sumSalaries(department){
    if(Array.isArray(department)){
        return department.reduce((prev, current)=>prev + current.salary,0);
    }else{
        let sum = 0;
        for(let subdept of Object.values(department)){
            sum += sumSalaries(subdept);
        }
        return sum;
    }
}

console.log(`Total salary : ${sumSalaries(company)}`);

//Linked list

//TASKS
//Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

function sumTo(n){
    if(n==0){
        return 0;
    }
    return n + sumTo(n-1);
}

console.log(sumTo(5));

//Calculate factorial
function factorialN(n){
    if(n==0 || n==1){
        return 1;
    }
    return n * factorialN(n-1);//15
}
console.log(factorialN(6));//720

//Fibonacci numbers
