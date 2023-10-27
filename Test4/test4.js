"use strict;"
console.log("Hello JavaScript")

//OBJECTS
console.log("Objects");

let user2 = new Object();//Syntax1
user2.name = 'Alex';
user2.age = 32;
console.log("Name 2: " + user2.name);
console.log("Age 2: " + user2.age);


let user={name:"John",
            age:30,
            "likes birds": true,
};

console.log("Name 1: " + user.name);
console.log("Age 1: " + user.age);
console.log(user["likes birds"]);//


console.log(user);
delete user["likes birds"];
console.log(user);// Print the object values after deleting the property "liked birds: true"

//Alternate way
let key2 = "Likes dogs"
user[key2] = true;
console.log(user[key2]);//true
console.log(user);

// let key3 = prompt("What do you want to know about the user?", "name");

// alert(user[key3]); //John


//Computed properties
let fruit = prompt("Which fruit to buy?", "mango");

let bag = {};
    bag[fruit]=5,

alert(bag.mango);// 5 if fruit="mango"

//We can use more complex expressions inside square brackets:
let bag2={
    [fruit+'Computers']:5
};

alert(bag2.mangoComputers);//5

//In real code, we often use existing variables as values for property names.

function makeUser(name, age){
    return{
        name:name,
        age:age,
    };
}

let user4 = makeUser("Anil", 31);
console.log("User 4 name: " + user4.name);
console.log("User 4 age: " + user4.age);

//Reading a non-existing property just returns undefined
let user5={};
console.log(user5.noSuchProperty === undefined);//true

//There's also a special operator "in" for that
let user6={name:"Mohan", age:26};
console.log("name" in user6);//true
console.log("gender" in user6);//false

//If we omit quotes, that means a variable should contain the actual name to be tested.


let key6="age";
console.log(key6 in user6);//true

//The "for..in" loop
//To walk over all the keys of an object, there exists a special form of loop: for..in

let user7 ={
    name: "Amit",
    age:28,
    isAdmin: true,
};

for (let key in user7){
    console.log(key + " : "+user7[key]);
    // console.log(user7[key]);
}

//If we loop over an object - integer properties are sorted,
// others appear in creation order

let codes = {
    "49":"Germany",
    "41":"Switzerland",
    "44":"Britain",
    "1":"USA",
};

for (let code in codes){
    console.log(code + " : "+ codes[code]);//1:USA, 41: Switzerland,...

   
}

//Integer property
console.log(String(Math.trunc(Number("49"))));// 49, same
console.log(String(Math.trunc(Number("+49"))))//49, not same as +49
console.log(String(Math.trunc("1.2")));//1, not same as 1.2

//Task
//Check for emptiness
//Write a function isEmpty(obj) which returns true if the object has no properties, false otherwise
let sample={};

function isEmpty(obj){
for(key in obj){

        return false;
    }

    return true;
}



console.log(isEmpty(sample));//true
sample["8:30"] = "get up";
console.log(isEmpty(sample));//false

//Sum object properties

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0;
for (value in salaries){
    sum += salaries[value];
}
console.log("Total salary:" + sum);

//Multiply numeric property values by 2
//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

//before the call
let menu = {
    width:200,
    height:300,
    title:"My menu"
};

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof(obj[key]==Number)){
            obj[key] *=2;
        }
    }
}

multiplyNumeric(menu);
//after the call
console.log(menu);

