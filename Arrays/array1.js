"use strict;"
console.log("ARRAYS");

//Declaration - two ways
let fruits = new Array("Apples", "Oranges", "Bananas","Mango");
console.log(fruits);
console.log(fruits.toString());

let fruits2 = ["Apples", "Oranges", "Bananas","Mango"];
console.log(fruits2);
console.log(fruits2.toString());
console.log(fruits[2]);//Bananas
console.log(fruits2.length);//4

//An array can store elements of any type.
//mix of values
let arr = ["Apple", {name:"John"}, true, function(){console.log("Hello")}];

console.log(arr[0]);//Apple
console.log(arr[1]);//{name: 'John'}
console.log(arr[1].name);//John
arr[3]();//Hello

//Accessing last element arr.at(i)
console.log(fruits[fruits.length-1]);//Mango - Normal way

//Accessing ith element arr.at(i), -i to access from end
console.log(fruits.at(0));//Apples
console.log(fruits.at(-1));//Mango
console.log(fruits.at(-2));//Bananas

//Methods pop/push, shift/unshift

//pop takes an element from the end
fruits.pop();
console.log(fruits);//['Apples', 'Oranges', 'Bananas']

//push appends an element to the end
fruits.push("Pear");
console.log(fruits);//(4) ['Apples', 'Oranges', 'Bananas', 'Pear']

//shift get an element from the beginning, advancing the queue, so that the 2nd
//element becomes the first
fruits.shift();
console.log(fruits);//['Oranges', 'Bananas', 'Pear']

//unshift - Add element to the beginning of the array
fruits.unshift("Apple");
console.log(fruits);//['Apple', 'Oranges', 'Bananas', 'Pear']

//Methods push and unshift can add multiple eelements at once

let fruits3 = ["Apple"];
fruits3.push("Orange","Peach");
fruits3.unshift("Pineapple","Lemon");
console.log(fruits3);//['Pineapple', 'Lemon', 'Apple', 'Orange', 'Peach']

//Arrayy is copied by reference
let fruits4 = ["Banana"];
let arr2 = fruits4;// copy by reference (two variables reference the same array)
console.log(arr2 === fruits4);//true
arr2.push("Pear");
console.log(fruits4);// ['Banana', 'Pear']

//Methods push/pop are faster than shift/unshift

//Looping in an array
let arr3 =["Apple", "Orange", "Plum"];

for(let i=0; i<arr3.length; i++){
    console.log(arr3[i]);
}

//Using for..of method
let fruits5 =["Apple", "Orange", "Pear"];
for(let fruit of fruits5){
    console.log(fruit);
}
//The for..of doesn’t give access to the number of the current element, just its value, 
//but in most cases that’s enough.

//Using for..in method
for(let key in arr3){
    console.log(arr3[key]);
}

//The length property is writable
let arr4 = [1,2,3,4,5];
console.log(arr4);// [1, 2, 3, 4, 5]
arr4.length = 2; //truncate to 2 elements
console.log(arr4);//[1, 2]

//Multidimensuional arrays
let matrix =[[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix[1][1]);//5
console.log(matrix[0][1]);//2

//toString -a method that returns a comma-separated list of elements.
let arr5 = [1,2,3,4,5];
console.log(arr5);//1, 2, 3, 4, 5]
console.log(String(arr5)==='1,2,3,4,5');//true

//Check it
console.log([]+"1");//1
console.log([1]+"1");//11
console.log([1,2]+"1");//1,21

