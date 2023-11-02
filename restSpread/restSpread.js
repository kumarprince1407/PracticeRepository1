"use strict;"
console.log("REST PARAMETERS AND SPREAD SYNTAX");

//Rest Parameters - The rest parameter can be included in the function definition by using 
// 3 dots(...) followed by the name of the array that will contain them

function sumAll(... args){
    let sum = 0;
    for(arg of args){
        sum+=arg;
    }
    return sum;
}
 console.log(sumAll(1));
 console.log(sumAll(1,4));
 console.log(sumAll(1,2,3,4));

 //We can choose to get the first parameters as variables, and gather only the rest.

function showName(firstName, lastName , ...titles){
    console.log(firstName + ' '+ lastName);
    console.log(titles[0]);
    console.log(titles[1]);
    console.log(titles.length);
}

showName("Julius", "Caesar", "Consul", "Imperator");

//argument variable - depricated(Not much in use today)
function showName2() {
    console.log( arguments.length );
    console.log( arguments[0] );
    console.log( arguments[1] );
  
    // it's iterable
    // for(let arg of arguments) console.log(arg);
  }
  
  // shows: 2, Julius, Caesar
  showName2("Julius", "Caesar");//2, Julius, Caesar
  
  // shows: 1, Ilya, undefined (no second argument)
  showName2("Ilya"); //1, Ilya, undefined

  //Spread syntax - To generate an array from list of parameters
  let arr = [3,5,1];

  //console.log(Math.max(arr));//NaN

  console.log(Math.max(...arr));//5

  //We can also pass multiple iterables in the array
  let arr1 = [1,-2, 4, -6];
  let arr2 = [8,3, -8, 1];

  console.log(Math.max(...arr1, ...arr2));//8

  //We can even combine the spread syntax with normal values:

  console.log(Math.max(5, 2, ...arr1, ...arr2));//8

  //Spread syntax can also be used to merge arrays
let arr3 = [3,5,1];
let arr4 = [8,9,15];

let merged = [0, ...arr3, 5, ...arr4];
console.log(merged);

//We can use spread synax to turn a string into array of characters
let str = "Hello";
console.log(str);//Hello
console.log(...str); //H e l l o

//Copy an array/object
let arr5 = [2,1,3];
let arrCopy = [...arr5];

//Check  if the arrays have the same contents?
console.log(JSON.stringify(arr5)===JSON.stringify(arrCopy));//true

//Check if the arrays are equal
console.log(arr5 === arrCopy);//false

//modifying our initial array does not modify the copied array
arr5.push(4);
console.log(arr5);//(4) [2, 1, 3, 4]
console.log(arrCopy);//(3) [2, 1, 3]

//It is possible to do the same thing to make a copy of an object
let obj = {a:1, b:2, c:3};
let objCopy = {...obj};

// Check if the objects have the same contents
console.log(JSON.stringify(obj)===JSON.stringify(objCopy));//true

//Are the objects equal
console.log(obj === objCopy);//false

// modifying our initial object does not modify the copy:
obj.d = 4;
console.log(JSON.stringify(obj));// {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}
