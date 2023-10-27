"use strict;"
console.log("ARRAY METHODS");

//splice - Used to delete an element from the array
let arr = ["I","study","Javascript"];
arr.splice(1,1);
console.log(arr);//['I', 'Javascript']

//In this example, we remove 3 elements and replace them with another
let arr2 = ["I", "study", "Javascript","right", "now"];
arr2.splice(0,3, "Let's", "code");
console.log(arr2); //"Let's", 'code', 'right', 'now']

//Splice method returns the array of rrmoved elements.
let arr3 = ["I", "study","Javascript","right","now"];
//remove the first 2 elements
let removed = arr3.splice(0,2);
console.log(removed);//['I', 'study']

//The splice method is also able to insert the elements without any removals.
//For that we need to set deleteCount to 0.
let arr4 = ["I","study","Javascript"];

//from index 2 delete 0, then insert "complex" and language.
arr4.splice(2,0,"complex","language");
console.log(arr4);//['I', 'study', 'complex', 'language', 'Javascript']

//Negative indexes specify the position from the end of an array
let arr5 = [1,2,5];
//from index -1 delete 0 elements, and then insert 3,4
arr5.splice(-1,0,3,4);
console.log(arr5);

//slice - arr.slice([start],[end])
//It returns a new array copying to it all items from start to end(excluding it).
let arr6 = ["t","e","s","t"];
console.log(arr6.slice(1,3));//['e', 's']
console.log(arr6.splice(-2));//['s', 't'](copy from -2 till the end)

//concat : arr.concat creates a new array that includes values from other arrays 
//and additional items.
let arr7 = [1,2];

//// create an array from: arr7 and add [3,4]
console.log(arr7.concat([3,4]));//[1, 2, 3, 4]

console.log(arr7.concat([5,6], [7,8]));//[1, 2, 5, 6, 7, 8]

//It normally only copies elements from arrays. Other objects, even if they look like 
//arrays, are added as a whole.
let arr8=[1,2];

let arrayLike = {
    0:"something",
    length:1
};
console.log(arr8.concat(arrayLike));//[1, 2, {…}]

//Iterate: forEach
//The arr.foreach method allows to run a func. for every element in the array
let names = ["Bilbo","Gandalf","Nazgul"];
//names.forEach(alert);
names.forEach(function(name){
    console.log(name);
});

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index,array)=>{
    console.log(`${item} is at ${index} in ${array}`);
});

//Searching in array
//indexOf/lastIndexOf and includes

let arr9= [1,0, false];
console.log(arr9.indexOf(0));//1
console.log(arr9.indexOf(false));//2
console.log(arr9.indexOf(null));//-1(not present)

console.log(arr9.includes(2));//false
console.log(arr9.includes(1));//true

//lastIndexOf
let fruits = ["Apple","Orange","Apple"];
console.log(fruits.indexOf("Apple"));//0
console.log(fruits.lastIndexOf("Apple"));//2

//The include method handles NaN correctly
const arr10 =[NaN];
console.log(arr10.indexOf(NaN));//-1 (wrong, should be 0)
console.log(arr10.includes(NaN));//true (correct)

//find and findIndex/findLastIndex
//arr.find(fn) helps us find an object with the specific condition.

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id:4, name: "John"}
];

let user1 = users.find(item => item.id == 1);
console.log(user1.name);//John

let user3 = users.find(item => item.id == 3);
console.log(user3.name);//Mary

console.log(users.findIndex(user=>user.name ==="John"));//0

console.log(users.findLastIndex(user => user.name === "John"));//3


//filter - similar to find, but filter returns an array of matching elements

//return an array of the first two users
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers);//2) [{…}, {…}] - 1st 2 objects
console.log(someUsers.length);//2

//Transform an array
//map: The arr.map method calls the function for each element of the array
//and returns the array of results

let lengths2 = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths2); // 5,7,6

//sort(fn) : The call to arr.sort() sorts the array in place, changing its element order
let arr11 = [1,2,15];
arr11.sort();
console.log(arr11);//[1, 15, 2] - Because the items are stored aas string as default. 

//In order to get the desired sorted order we should create a 
//custom comparision function

function compareNumbers(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}

arr11.sort(compareNumbers);
console.log(arr11); //(3) [1, 2, 15]

//Alternate way
let arr12 = [15,2,1];
console.log(arr11.sort((a,b) => a-b ));// [1, 2, 15]

//Use localeCompare for Strings
let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort((a,b)=> a.localeCompare(b))); // ['Andorra', 'Österreich', 'Vietnam']

//reverse : The method arr.reverese reverses the order of elements in arr

let arr13 = [1,2,3,4,5];
arr13.reverse();
console.log(arr13); //[5, 4, 3, 2, 1]

//split and join
//The str.split(delim) method splits the string into an arry by the given delimeter delim

let names2 = "Bilbo, Gandalf, Nazgul";
let arr14 = names2.split(",");

for(let name of arr14){
    console.log(`A message to ${name}.`);
}

//The split method has an optional second numeric argument a limit on the array length.
let arr15 = "Bilbo, Gandalf, Nazgul".split(",",2);
console.log(arr15);//(2) ['Bilbo', ' Gandalf']

//Split into letters
//The call to split(s) with an empty s would split the string into an array of letters
let str = "test";
console.log(str.split(''));// ['t', 'e', 's', 't']

//The arr.join(glue) does the reverse to split. It creates a string of arr items
//joined by glue between them

let arr16 = ["Bilbo", "Gandalf", "Nazgul"];
let str2 = arr16.join(";");// glue the array into a string using ;
console.log(str2);//Bilbo;Gandalf;Nazgul


//reduce/reduceRight. The methods arr.reduce and arr.reduceRight are used to calculate
// a single value based on the array.
let arr17 = [1,2,3,4,5];
let result = arr17.reduce((sum, current)=> sum + current, 0);
console.log(result);//15

//Array.isArray
//Array do not for a separate language type. They are bassed on objects.
//So typeof does not distinguish a plain object from an array.
console.log(typeof {});//object
console.log(typeof []);//object

console.log(Array.isArray({}));//false
console.log(Array.isArray([]));//true

//Almost all array methods (except sort) accept an optional parameter thisArg.
//The value of thisArg parameter becomes this for func.

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user){
        return user.age >= this.minAge && user.age <= this.maxAge;
    }
};

let users2 = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];

// find users, for who army.canJoin returns true
let soldiers = users2.filter(army.canJoin, army);

console.log(soldiers);//(2) [{…}, {…}]
console.log(soldiers.length);//2
console.log(soldiers[0].age);//20
console.log(soldiers[1].age);//23
