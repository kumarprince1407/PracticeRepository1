"use strict;"
console.log("Hello JavaScript");

//OBJECT REFERENCE AND COPYING
console.log("OBJECT REFERENCE AND COPYING");
//A variable assigned to an object stores not the object itself, but its "address in memory"
//-  in other words "a reference" to it.

let user = {
    name:"John",
};

//When an object variable is copied, the reference is copied, but the object itself is not duplicated.

let admin = user;// copy the reference
console.log("Before changing name: " + admin.name);
admin.name= 'Pete';// Will change the name value for both: admin as well as user 
console.log("After changing name: " + admin.name);

//Comparision by reference
//Two objects are equal only if they are the same object.
let a= {};
let b = a;
console.log( a == b);//true
console.log( a === b);//true

//Two independent objects are not equal, even if they look alike
let c={};
let d={};

console.log(c == d);//false

//Const objects can be modified
//It will give an error only if we try to modify the user2 as a whole
const user2 = {
    name:"Aman",
};

user2.name = "Rajat";

console.log(user2.name);//Rajat

//Cloning angd merging, Object.assign
//We can create a new object and replicate the structure of the existing one, by 
//iterating over its properties and copying them on the primitive level.


let user3 = {
    name: "Atul",
    age:30,
};
console.log("User 3: ");
console.log( user3);
let clone={};//Empty new object

//copy all the properties of user3 in it

for(let key in user3){
    clone[key] = user3[key];
}

 console.log("Clone: ");
 console.log(clone);

 clone.name = 'Peter';// It will have no effect on user3 name
 console.log("Updated clone: ");
 console.log(clone);

 //We can also use the method Object.assign
 //Syntax : Object.assign(dest, ...sources)
 //The first argument 'dest' is a target object. Further arguments are a list of source objects

 let user4 = { name: "John"};

 let permission1 = {canView: true};
 let permission2 = {canEdit: true};

 Object.assign(user4,permission1, permission2);
 console.log(user4);

 //If the copied property name already exists, it gets overwritten

 Object.assign(user4, {name:"Peter"});
 console.log(user4);

 //We can also use Object.assign to perform a simple object cloning

 let user5 = {
    name:"John",
    age:24,
 }
  let clone2 = Object.assign({},user5);
  console.log(clone2);

//Nested Cloning

let user6 = {
    name:"John",
    sizes:{
        height:182,
        width:50,
    }
};

let clone3 = Object.assign({}, user6);
console.log(user6.sizes === clone3.sizes);//true, same object
user6.sizes.width = 60;
console.log(clone3.sizes.width);

//structuredClone
//The call structuredClone(object) clones object with all nested properties.
//The structuredClone method can clone most data types, such as objects, arrays, primitive values.


let user7 ={

    name:"Amar",
    sizes:{
        height: 182,
        width: 50,
    },
};

let clone4 = structuredClone(user7);

console.log(user7.sizes == clone4.sizes);//false
console.log(user7.sizes === clone4.sizes);//false
user7.sizes.width = 60;
console.log(user7.sizes.width);//60
console.log(clone4.sizes.width);//50

//structuredClone also supports circular references, when an object property references the object itself
//(directly or via a chain or references)

let user8 = {};
//Creating a circular reference
//user8.me references the user8 itself
user8.me = user8;

let clone5 = structuredClone(user8);
console.log(clone5.me === clone5);//true