"use strict";
console.log("Hello World!")
//alert("Hello World alert!")

let isGreater = 4 > 1;
console.log(isGreater)

//null
let age=null;
console.log(age);

//undefined
let height;
console.log(height);

//Prompt

//The function prompt accepts two arguments:

//result = prompt(title, [default]);
//It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

//title
//The text to show the visitor.
//default
//An optional second parameter, the initial value for the input field.

let person = prompt("What is your age?",28);
alert(`My age is ${person}`);

//Confirm

let isBoss = confirm("Are you the boss?");
alert(isBoss);

//TYPE CONVERSION

//String conversion

console.log("String conversions");
let value=true;
console.log(typeof value)//boolean

value = String(value)
console.log(typeof value) //string

//Numeric conversion

let str="123";
console.log(typeof str);//string

let num = Number(str);
console.log(typeof num);//number

//Boolean conversions
console.log("Boolean conversions");

console.log(Boolean(1));//true
console.log(Boolean(0));//false
console.log(Boolean("hello"));//true
console.log(Boolean(""));//false

console.log((Boolean("0"))); //NOTE: '0' inside a string is 'true'
console.log((Boolean(" ")));// Empty string with a space(" ") is true

//OPERATORS

//Exponential operators
let power1 = 2 ** 3;
console.log(`2 power 3 is: ${power1}`)

//String concatenation with binary +
let x = 2 + 2 +'1';
console.log(x); // "41" and not "221"

let y = '1'+2+2;
console.log(y);// "122" and not "14"

console.log(6-'2');//4
console.log('8'/'4');//2

console.log(8 +'4');//84
console.log(8-'4');//4

console.log('2'+4);//24

//Numeric conversion, unary + : Converts non-numbers
let z = -2;
console.log(+z);//-2 

let apples = "2";
let oranges ="3";

console.log(apples + oranges);//23:String
console.log(+apples + +oranges);//5:Number

//COMPARISON

console.log(0 == false);//true: Checks with Type Conversion
console.log(0 === false);//false: Checks without type conversion

console.log('' == false);//true: Checks with Type Conversion
console.log('' === false);//false: Checks without type conversion

//Comparision with null and undefined(observe this special case)

console.log(null == undefined)//true
console.log(null === undefined)//false
