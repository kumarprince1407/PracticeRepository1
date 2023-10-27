"use strict;"
console.log("Maps and Sets");

//Map is a collection of keyed data items, just like an Object. But the main difference
//is that map allows keys of any type

let map = new Map();
map.set('1','str1');//a string key
map.set(1,'num1');//a numeric key
map.set(true,'bool1');//a boolean key

console.log(map.get(1));//num1
console.log(map.get('1'));//str1
console.log(map.get(true));//bool1

console.log(map.size);//3

//Although it works, map[key] isn’t the right way to use a Map.

//Maps can also use objects as keys.
let john = {name: "John"};
//for every user, let's store their visit count
let visutCountMap = new Map();
//john is the key for the map
visutCountMap.set(john,123);
console.log(visutCountMap.get(john));//123

//Using object as keys is one of the most notable & important Map features. The same
//does not count for Object. String as a key in Object is fine, but we can't use 
//another Object as a key in Object.
let john1 = {name:"John"};
let ben = {name: "Ben"};

let visutCountObj = {}//trying to use an object
visutCountObj[ben]=234;// try to use ben object as the key
visutCountObj[john1]=123;// try to use john object as the key, ben object will get replaced

console.log(visutCountObj["[object Object]"])//123
//As visitsCountObj is an object, it converts all Object keys, such as john and
// ben. Definitely not what we want.

//Chaining - Every map.set call returns the map itself, so we can "chain" the calls.
map.set('1',"str1")
    .set(1, 'num1')
    .set(true,'bool1');

console.log(map);//Map(3) {'1' => 'str1', 1 => 'num1', true => 'bool1'}

//Iteration over Map
let recipeMap = new Map([
    ['cucumber',500],
    ['tomatoes',350],
    ['onoin',50]
]);

//iterate over keys(vegetables)
for(let vegetable of recipeMap.keys()){
    console.log(vegetable);
}

//iterate over values(amounts)
for(let amount of recipeMap.values()){
    console.log(amount);
}

//iterate over [key, value] entries
for(let entry of recipeMap){
    console.log(entry);
}

//Map also has a built-in forEach method, similar to Array:
recipeMap.forEach((value, key, map)=>{
    console.log(`${key} : ${value}`);
});

//Object.entries: Map from Object - When a Map is created, we can pass an array(or another iterable)
//with key/value pairs for initialization, like:
//array of [key,value] pairs
let map2 = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
]) ;
console.log(map.get('1')); //str1

//Now, if we have a plain object, and we'd like to create a Map from it, then we can use the built-in
//method Object.entries(obj) that returns an array of key/value pairs for an obj. exactly in that format.
let obj ={
    name:"John",
    age:30
};
let map3 = new Map(Object.entries(obj));
console.log(map3.get('name'));//John

//Object.fromEntries: Object from Map - There's Object.fromEntries method that does the reverse: given an
//array of [key, value] pairs, it creates an object from them.

let prices = Object.fromEntries([
    ['banana',1],
    ['orange',2],
    ['mango',4]
]);
// now prices = { banana: 1, orange: 2, meat: 4 }
console.log(prices.orange);//2
console.log(prices.mango);//4


//We can use Object.fromEntries to get a plain object from Map
//E.g. We store the data in a Map, but we need to pass it to a 3rd party code that
//expects a plain object
let map4 = new Map();
map4.set('banana', 1);
map4.set('orange', 2);
map4.set('mango', 4);

let obj2 = Object.fromEntries(map4.entries());//make a plain object
//A call to map.entries() returns an iterable of key/value pairs, exactly
//in the right format for Object.fromEntries
// done!
// obj2 = { banana: 1, orange: 2, mango: 4 }
console.log(obj2.banana);//1


//Set
console.log("SET");
//A Set is a type collection - "set of values"(without keys), where each value
//may occur exactly once.

let set = new Set();

let john2 = {name:"John"};
let pete = {name:"Pete"};
let mary = {name:"Mary"};

set.add(john2);
set.add(pete);
set.add(mary);
set.add(john2);
set.add(mary);

console.log(set.size);
//Iteration over Set - We can loop over set with either with for..of or using forEach:
for(let user of set){
    console.log(user);
}

set.forEach((value,valueAgain, set) => {
    console.log(value);
})
//In the context of arrays, the forEach method also takes three arguments in its callback
// function, where the first two represent the current element and the index. 
//value: This argument represents the current element being iterated.
//valueAgain: This argument is the same as value and represents the current element again.
//set: This argument represents the set itself.


//Tasks
//Q1.Create a function unique(arr) that should return an array with unique items of arr.


let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];


function unique(arr){
return Array.from(new Set(arr));
}
console.log(unique(values));//['Hare', 'Krishna', ':-O']

//Q2.Write a function aclean(arr) that returns an array cleaned from anagrams.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//My approach
//Create a new array with sorted elements
// function customSort(a,b){
//     const sortedA = a.split('').sort().join('').toLowerCase();
//     const sortedB = b.split('').sort().join('').toLowerCase();

//     if(sortedA < sortedB){
//         return -1;
//     }
//     if(sortedA > sortedB){
//         return 1;
//     }
//     return 0;
// }
// // Sort the array while preserving the original order
// let sortedArray = arr.sort(customSort);
// // Create a Set to store unique values
// let uniqueSet = new Set(sortedArray);

// // Convert the Set back to an array
// let uniqueArray = Array.from(uniqueSet);
// console.log(uniqueSet);//['anp', 'aceehrst', 'ANP', 'aer']


//Module approach
function aclean(arr){

let map5 = new Map();

for(let word of arr){
    //split the words by letters, sort them and join back
    let sorted = word.toLowerCase().split('').sort().join('');
    map5.set(sorted, word);
    }
    return Array.from(map5.values());
}
console.log(aclean(arr));//(3) ['PAN', 'hectares', 'era']

//Alternate approach - Here we can also use a plain object instead 
//of a Map, because keys are strings.
function aclean2(arr){
    let obj ={};

    for(let i=0; i<arr.length; i++){
        let sorted = arr[i].toLowerCase().split('').sort()
        obj[sorted]=arr[i];
    }
    return Object.values(obj);
}
console.log(aclean2(arr));//(3) ['PAN', 'hectares', 'era']

//Q3.We’d like to get an array of map.keys() in a variable and then apply 
//array-specific methods to it, e.g. .push.

let map6 = new Map();

map6.set("name", "John");

// let keys = map.keys();

// Error: keys.push is not a function
//keys.push("more");

//That’s because map.keys() returns an iterable, but not an array.
//We can convert it into an array using Array.from:

let keys = Array.from(map6.keys());

keys.push("more");
console.log(keys);//[name, more]