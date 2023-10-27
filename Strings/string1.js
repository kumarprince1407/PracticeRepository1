"use strict;"
console.log("STRINGS");

//string using backticks

//An advantage of using backticks is that they allow a string to span multiple lines
let guestList = `Guests:
*Anand
*Aman
*Suman
`;
console.log(guestList);

//If the same has to be done inside double quotes, we do it by using a so-called
//"newline character" written as \n, which denotes a line break
let guestList1 = "Guests: \n * Anand\n * Aman\n * Suman";
console.log(guestList1);

//-  \', \", \`	Quotes

console.log(`The backslsh: \\`);//The backslsh: \
console.log(`I\'m the Walrus!`); //I'm the Walrus!
console.log("I'm the Walrus!");//I'm the Walrus

let str = "string";
//length is a property, so there is not need to add () after it 
console.log(str.length);

//Accessing chracters

console.log(str[1]);//t
console.log(str.at(1));//t
//last character
console.log(str[str.length-1]);//g
console.log(str.at(-1));//g
console.log(str.at(-2));//n

//Iterating over characters using for..of
for(let char of str){
    console.log(char);
}
//Strings are immutable
let str1 = 'Hi';
str1[0]='h';//does not work
console.log(str1);//Hi

str1 = 'h' + str1[1];
console.log(str1);//hi

//Searching for a substring
//Method 1: str.indexOf(substr, pos) - Case sensitive
let str2 = "Widget with id";
console.log(str2.indexOf("with"));//7
console.log(str2.indexOf("With"));//-1 (Not present)

//If we want to get all accurances, we can run indexOf in a loop
let str3 = "As sly as a fox, as strong as an ox."

let target = 'as';

let pos = 0;
while(true){
    let foundPos = str3.indexOf(target, pos);
    if(foundPos == -1)break;

    console.log(`Found at ${foundPos}`);
    pos = pos + 1; // continue the search from the next position
}

//str.lastIndexOf(substr, position)
//It searches from the end of the string to the beggining

let str4 = "Widget with id";
let target2 = "Widget";
if(str4.indexOf(target2)!= -1){
    console.log(`Found at index: ${str4.indexOf(target2)}`);
}

//includes, startsWith, endsWith

console.log(str4.includes("Widget"));//true
console.log(str4.includes("gadget"));//false
console.log(str4.startsWith("Widget"));//true
console.log(str4.endsWith("id"));//true
console.log(str4.endsWith("Widget"))//false

//Getting a substring
//3 methods to get a substring in JS: substring, substr and slice
let str5= "stringify";
console.log(str5.slice(0,5));//strin
console.log(str5.slice(2));//ringify

//Negative values for start/end are also possible. They mean the
// position is counted from the string end:
console.log(str5.slice(-4,-1));//gif

//substring method
console.log(str5.substring(0,5));//strin

//Observe:This is almost the same as slice, but it allows start to
// be greater than end (in this case it simply swaps start and end values).
// these are same for substring
 console.log(str5.substring(2,6));//ring
 console.log(str5.substring(6,2));//ring

 //str.substr(start [, length])
console.log(str5.substr(2,4));//'ring', from the second position, get 4 characters
console.log(str5.substr(-4,2));//'gi', from the 4th position at the end get 2 characters

//Comparing strings
//A lowercase is always greater than the uppercase
console.log('a'>'A');//true

//There are special methods that allow to get the character for the code and back:

//str.codePointAt(pos)

console.log("Z".codePointAt(0));//90
console.log("z".codePointAt(0));//122
console.log("z".codePointAt(0).toString(16));//7a(hexadecimal)

//String.fromCodePoint(code) - Creates a string by its numeric value
console.log(String.fromCodePoint(90));//Z

//let’s see the characters with codes 65..220

let str6='';
for(let i=65; i<=220; i++){
    str6 += String.fromCodePoint(i);
}
console.log(str6)
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

//Correct comparisions
//str.localeCompare(str2) 
// Returns a negative number if str is less than str2.
// Returns a positive number if str is greater than str2.
// Returns 0 if they are equivalent.
let str7 = "qwert";
let str8 = "qwerty";

console.log(str7.localeCompare(str8));//-1
console.log(str8.localeCompare(str7));//1
console.log(str8.localeCompare(str8));//0

//TASKS
//Write a function ucFirst(str) that returns the string str 
//with the uppercased first character

function ucFirst(str){
    return str.at(0).toUpperCase() + str.slice(1);
}

console.log(ucFirst("john"));

//Write a function checkSpam(str) that returns true if str contains
// ‘rabbit’ or ‘YYY’, otherwise false.

function checkSpam(str){
    let lowerCaseString = str.toLowerCase();

    return lowerCaseString.includes('rabbit') ||lowerCaseString.includes('yyy');

}

console.log(checkSpam('playing Rabbit'));//true
console.log(checkSpam('free YYyyY'));//true
console.log(checkSpam('buggs the bunny'));//false

//Truncate the text
//Create a function truncate(str, maxlength) that checks the length of the str and,
// if it exceeds maxlength – replaces the end of str with the ellipsis character "…",
// to make its length equal to maxlength.

function truncate(str, maxlength){

    return(str.length > maxlength)? str.slice(0,maxlength)+"...": str;
    
}
console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hello world",20));

//Extract the money
//Create a function extractCurrencyValue(str) that would extract the numeric
// value from such string and return it.
function extractCurrencyValue(str){
    return +str.slice(1);
}

console.log(extractCurrencyValue('$120'));