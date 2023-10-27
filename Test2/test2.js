console.log("Hello");

//If - else
// let year = prompt ("In which year ECMAScript -2015 specification published?", " ");

// if(year < 2015){
//     alert("Too early");
// }else if(year > 2015){
//     alert("Too late")
// }else{
//     alert("Correct!")
// }

//Conditional operator


// let age = prompt('How old are you', '');

// let accessAllowed = (age >= 18) ? true: false;
// alert(accessAllowed)

// //Non traditional use
// let company = prompt("Which company created JavaScript?", "");
// (company =="Netscape") ? alert("Right!"): alert("Wrong");

//LOGICAL OPERATORS 
// || OR- Returns the first truthy value
console.log(1 || 0);//1
console.log(null|| 1);//1
console.log(null || 0 || 1);//1
console.log(undefined || null || 0);//0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log(firstName || lastName || nickName || "Anonymous");// SuperCoder

//Short Circuit evaluation: It means that || processes its arguments until the first truthy value is reached
 true || console.log("Not Printed");//nothing is printed
 false || console.log("printed");//printed

 // && (AND) : It finds the first falsy value
 // if the first operand is truthy,
// AND returns the second operand:
 console.log(1 && 0);//0
 console.log(1 && 5);//5

 // if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log(null && 5);//null
console.log( 0 && "Some other value");//0

//Nullish coalescing operator '??'
let user;
console.log(user ?? 'Anonymous');//Anonymous - User is undefined

let user1 = 'John';
console.log(user1 ?? "Anonymous");// John

//Differnce between || and && operator

let height = 0;
console.log(height || 100);//100 - First truthy value
console.log(height ?? 100);//0 - First defined value

//LOOPS
//Whike loop
console.log("While loop");
let i=0;
while (i<3){
    console.log(i + " ");
    i++;
}

//do while loop
console.log("Do while loop");
let a=0;
do{
    console.log(a);
    a++;
}while(a<3);


//Continue statement
console.log("Continue statement");
for(let i=0; i<10; i++){
    if(i%2 == 0){
        continue;
    }
    console.log(i);//1 3 5 7 9
}

//Break statement
console.log("Break statement")
for(let j=0; j<10; j++){
    
if(j==7){
    break;
}
console.log(j);

}

//Switch case

let b = 2+2;

switch(b){
case 3:
    console.log("Too small");
    break;
case 4:
    console.log("Exactly");
    break;
case 5:
    console.log("Too big");
    break;
default:
    console.log("Other value");
}

// let arg = prompt("enter a value?");
// switch(arg){
//     case '0':
//     case '1':
//         alert('One or Zero');
//         break;
    
//     case '2':
//         alert('Two');
//         break;

//     case '3':
//         alert('never executes!');
//         break;
//     default:
//         alert('Unknown value');
// }