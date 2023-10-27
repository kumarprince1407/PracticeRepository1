"use strict;"
console.log("Test 8");

let str = "Hello";
console.log(str.toUpperCase());

//toFixed(n)
let n = 1.23456;
console.log(n.toFixed(2));//1.23

let zero = Number("0");
console.log(typeof zero);//number

let zero1 = new Number(0);
console.log(typeof zero1);//object

//NUMBERS
console.log("NUMBERS");
let billion = 1000000000;
let billion1 = 1_000_000_000;

console.log(billion === billion1);//true

let billion2 = 1e9;
console.log(billion2);//1000000000

console.log(7.3e9);//7300000000

let mcs = 0.000001
let mcs2=1e-6;
console.log(mcs === mcs2);//true

//Hex, Binary and Octal Numbers
console.log(0xff);//255
console.log(0xFF);//255 - Both are same

let a = 0b11111111;//binary form of 255
let b = 0o377;// octal form of 255
console.log(a === b);//true

//toString(base) - The method num.toString(base) returns a string representaion of num in the 
//numeral system with the given base.

let num = 255;
console.log(num.toString(16));//ff
console.log(num.toString(2));//11111111

//Rounding
let num2 = 3.1;
let num3 = -3.1;
let num4 = -3.6;

console.log(Math.floor(num2));//3
console.log(Math.floor(num3));//-4

console.log(Math.ceil(num2));//4
console.log(Math.ceil(num3));//-3

console.log(Math.round(num2));//3
console.log(Math.round(num3));//-3
console.log(Math.round(num4));//-4

console.log(Math.trunc(num2));//3
console.log(Math.trunc(num3));//-3

let num5 = 1.23456;
console.log(Math.round(num5*100)/100);//1.23456 -> 123.456 -> 123 ->1.23
//method 2 (preferred)
let num6 = 12.34;
console.log(num6.toFixed(1));//12.3

let num7 = 12.36;
console.log(num7.toFixed(1));//12.4

//Note that the result of toFixed is a string. If the decimal part is shorter
//than required, zeroes are appended to the end;
console.log(num7.toFixed(5));//12.36000

//Imprecise calculations
console.log(0.1 + 0.2 == 0.3);//false
console.log(0.1 + 0.2);//0.30000000000000004
console.log((0.1+0.2).toFixed(1));//0.3

//Tests: isFinite and isNaN
console.log(isNaN(NaN));//true
console.log(isNaN("str"));//true

//The value of NaN is unique and does not equal anything, including itself
console.log(NaN === NaN);//false

//isFinite(value) converts its argument to a number and returns true if it's a 
//regular number, otherwise false (not NaN/Infinity/-Infinity)
console.log(isFinite("15"));//true
console.log(isFinite("str"));//false
console.log(isFinite(Infinity));//false

//Number.isNaN and Number.isFinite
//These are more "strict" versions of isNaN and isFinite functions.
//They do not auto auto convert their argument into a number, but check 
//if it belongs to the number type instead.

console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN("str"/2));//true

//Note the differences
console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN("str"));//false, because "str" is a string(not number)
//Number.isNaN(), checks if the given value is the NaN (Not-a-Number) value, 
//and it performs a strict check. It returns true if the provided value is 
//exactly NaN, and false otherwise.
console.log(isNaN("str"));//true, because isNaN converts string "str" into a number 
//and gets NaN as a result of this conversion.

console.log(Number.isFinite(123));//true
console.log(Number.isFinite(Infinity));//false
console.log(Number.isFinite(2/0));//false

//Note the difference
console.log(Number.isFinite("123"));//false
console.log(isFinite("123"));//true

//parseInt and parseFloat - The function parseInt returns an integer, whilst parseFloat
// will return a floating-point integer

console.log(parseInt('100px'));//100
console.log(parseFloat('12.5em'));//12.5

console.log(parseInt('12.3'));//12
console.log(parseFloat('12.3.4'));//12.3 the second point(.) stops the reading
console.log(parseInt('a123'));//NaN

//The second argument of parseInt(str, radix)
console.log(parseInt('0xff', 16));//255
console.log(parseInt('ff',16));//255 - works fine without 0x
console.log(parseInt('2n9c',36));//123456


