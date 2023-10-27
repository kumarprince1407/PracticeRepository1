"use strict;"
console.log("DESTRUCTURING");
//Destructuring assignment is a special syntax that allows us to "unpack" arrays or objects
//objects into a bunch of variables.

//Array destructuring
let arr = ["John", "Smith"];

//destructuring assignment
//sets firstName = arr[0], surname = arr[1]
let [firstName, lastName] = arr;
console.log(firstName);
console.log(lastName);

//Destructuring combined with other array-methods(e.g. split)
let [fName, lName] = "Harry Potter". split(' ');
console.log(fName);
console.log(lName);

//Ignoring elements using commas - Unwanted elements of array can also be thrown away
//via extra comma.
let [fName1, ,title] = ["Julius", "Caesar","Consul","of the Roman republic."];
console.log(title);//Consul
//In the code above, the 2nd element is skipped, the 3rd one is assigned to title,
//and the rest of the arry items is also skipped(as there are no variables for them)

//We can use it with iterables, not only arrays
let [a,b,c] = "abc";
console.log(a);//a
console.log(b);//b
console.log(c);//c

let [one, two, three] = new Set([1,2,3]);
console.log(one);
console.log(two);
console.log(three);

//Assign to anytjhing on the left side - We can use any "assignables" on the left side.
//For instance an object property:
let user={};
[user.name, user.surname] = "Ron Weasley".split(' ');
console.log(user.name);//Ron
console.log(user.surname);//Weasley

//Looping with .entries() - We can use Ojbect.entries(obj) method with destructuring to 
//loop over keys-and-values of an object

let user1 = {
    name: "Albus",
    age:"120"
};

//loop over keys and values
for (let [key, value] of Object.entries(user1)){
    console.log(`${key} : ${value} `);
}//name : Albus , age : 120 

//Similar code for a map is simpler, as it's iterable.
let user2 = new Map();
user2.set("name","Hagrid");
user2.set("age", 30);

for (let [key, value] of user2){
    console.log(`${key} : ${value}`);
}// name : Hagrid, age : 30

//Swapping variables using destructuring assignment
let guest = "Jane";
let admin ="Pete";

[guest,admin] =[admin,guest];
console.log(`${guest} ${admin}`);//Pete Jane


//The rest '...'
let [name1, name2, ...rest]= ["Julius", "Ceasar", "Consul", "of the Roman Republic"];
console.log(rest[0]);//Consul
console.log(rest[1]);//of the Roman Republic
console.log(rest[2]);//undefined - since there only 2 elements
console.log(rest);//2) ['Consul', 'of the Roman Republic']
console.log(rest.length);//2

//We can make use of any other variable name in place of rest, just make sure it has 
//3 dots before it and goes last in the destructuring assignment.

//Default Values
let [name3 = "Guest", surname3 = "Anonymous"] = ['Julius'];
console.log(name3);
console.log(surname3);
//Default values can be more complex expressions or even function calls.
// They are evaluated only if the value is not provided.

//Object destructuring
let options ={
    title2 : "Menu",
    width: 100,
    height: 200,
};

let {title2, width, height} = options;
console.log(title2);
console.log(width);
console.log(height);

//We can assign a property to a variable with another name, for instance, make 
//options.width go into the variable named w, then we can set the variable name
//using a colon.

let options2 ={
    title3 : "MenuItem",
    width: 100,
    height: 200,
};

let{width:w, height:h, title3}= options2;
console.log(title3);//MenuItem
console.log(w);//100
console.log(h);//200

//For potentially missing properties we can set default values using "=", like:
let options3 ={
    title4: "Menu"
};

let {width2 =100, height2 = 200, title4} = options3;
console.log(height2);//200
console.log(width2);//100
console.log(title4);//Menu

//Just like with arrays or function parameters, default values can be any expressions
// or even function calls. They will be evaluated if the value is not provided.

//In the code below prompt asks for width, but not for title:
let options4 ={
    title5: "Menu"
};

//let {width3 = prompt("width?"), title5 = ("title")} = options4;
// alert(title5);//Menu
// alert(width3);// (whatever the result of prompt is)

//We can also combine colon both colon and equality:
let options5 ={
    title6: "Menu"
};

let { width4: w4 = 100, height3 : h3 = 200, title6} = options5;
console.log(title6);//Menu
console.log(w4);//100
console.log(h3);//200

//The rest pattern "..."
let options6 = {
    title7: "Menu",
    height4: 200,
    width5: 100
}
let {title7, ...rest2} = options6;
console.log(rest2.height4);//200
console.log(rest2.width5);//100

//Nested Destructuring
let options7 ={
    size:{
        width6: 120,
        height5: 220
    },
    items: ["Cake", "Donut"],
    extra: true
};
//destructuring assignment split in multiple lines for clarity
let {
    size:{
        width6,
        height5
    },
    items: [item1, item2],
    title8 = "Dish"
} = options7;

console.log(title8);//Dish
console.log(width6);//110
console.log(height5);//220
console.log(item1);//Cake
console.log(item2);//Donut


//Smart function parameters
//There are times when a function has many parameters, most of which are optional.
// Another problem is how to call a function when most parameters are ok by default.

//We can solve these issues using Destructuring. We can pass parameters as an object,
//and the function immediately destructurizes them into variables.

//we pass the object to function
let options8 = {
    title9:"My menu",
    items2: ["Item1", "Item2"]
};
// ...and it immediately expands it to variables

function showMenu({title9 = "Untitled", width7 = 240, height6 = 140, items2=[]}){
      // title, items – taken from options,
      // width, height – defaults used
    console.log(`${title9} ${width7} ${height6}`);
    console.log(items2);
}
showMenu(options8);//My menu 240 140, (2) ['Item1', 'Item2']

//We can also use more complex destructuring with nested objects and colon mappings:
let options9 = {
    title10:"My menu",
    items3: ["Item5", "Item6"]
};

function showMenu2({title10 = "Untitled", width7:w7 = 240, height6:h6 = 140, items3: [item5, item6]}){
console.log(`${title10} ${w7} ${h6}`)//My menu 240 140
console.log(item5);//Item5
console.log(item6);//Item6
}
showMenu2(options9);