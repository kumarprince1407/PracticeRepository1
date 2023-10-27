"use strict;"
console.log("JSON METHODS, to JSON");
//The JSON(JavaScript Object Notation) is a general format to represent values and objects.
//JSON.stringify converts objects into JSON
//JSON.parse convert JSON back into an object

//Here we stringify a student
let student = {
    name: "John",
    age: 30,
    isAdmin:false,
    courses:["html","css","javascript"],
    spouse: null,
};
console.log(typeof(student));//object

let json = JSON.stringify(student);
console.log(typeof(json));//string
console.log(json);
//{"name":"John","age":30,"isAdmin":false,"courses":["html","css","javascript"],"spouse":null}

//JSON supports following data types: Objects {...}, Arrays [...], 
//Primitives: strings, numbers, boolean values(true/false), null

console.log(JSON.stringify(1));//1
console.log(JSON.stringify("test"));//"test"
console.log(JSON.stringify(true));//true
console.log(JSON.stringify([1,2,3]));//[1,2,3]

//JSON is data-only language-independent specification, so some JavaScript-specific object
//properties are skipped by JSON.stringify. Namely: Functional properties(methods),
//Symbol keys and values, Properties that store undefined.

let user = {
    sayHi(){//ignored
        console.log("Hello");
    },
    [Symbol("id")]: 123,//ignored
    something: undefined,//ignored

};

console.log(JSON.stringify(user));//{} (empty object)

// Nested objects are supported and converted automatically.
let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
  };
console.log(JSON.stringify(meetup));
//{"title":"Conference","room":{"number":23,"participants":["john","ann"]}}

//LIMITATION: There shouldn't be any circular references
let room = {
    number: 23
  };

  let meetup2 = {
    title: "Conference",
    participants: ["john", "ann"]
  };

  meetup2.location = room;// meetup references room
  room.ocupiedBy = meetup2;// room references meetup
//   JSON.stringify(meetup2);// Error: Converting circular structure to JSON

//Excluding and transforming: replacer
//The full syntax of JSON.stringify is: let json = JSON.stringify(value[, replacer, space])
//value: A value to encode.|replacer: array of properties to encode or a mapping 
//function(key, value) | space- Amount of space used for formatting

//The second argument is used to fune-tune the replacement process, like filtering out
//circular references.

let room2 = {
    number : 23
};

let meetup3 = {
    title:"Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room2 //meetup3 references room
};
room.occupiedBy = meetup3; //room refernces meetup3

console.log(JSON.stringify(meetup3,['title','participants']));
//{"title":"Conference","participants":[{},{}]} - The property list is applied to the whole 
//object structure. So the objects in participants are empty, because name is not in the list.

console.log(JSON.stringify(meetup3,['title','participants','place', 'name', 'number']));
//{"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}

//Now everything except occupiedBy is serialized. We can use a function instead of an array as
//the replacer. The functiin will be called for every (key, value) pair and should return the
//"replaced" value,which will be then used instead of orig. one(undef.. if the val to be skipped).

console.log(JSON.stringify(meetup3, function replacer(key, value){
    console.log(`${key} : ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
}));

//Formatting: space - The third argument of JSON.stringify(value, replacer, space) is the number 
//of spaces to use for pretty formatting.

let user2 = {
    name: "John",
    age: 25,
    roles:{
        isAdmin:false,
        isEditor: true
    }
};

console.log(JSON.stringify(user2, null, 2));//space = 2 
console.log(JSON.stringify(user2, null, 4));//space = 4

//Custom "toJSON" - An object may provide toJSON for
// to-JSON conversion. JSON.stringify automatically 
//calls it if available.

let room4 = {
    number: 24,
    toJSON(){
        return this.number;
    }
};

let meetup4 = {
    title: "Conference",
    room4
};
console.log(JSON.stringify(room4));//24
console.log(JSON.stringify(meetup4));//{"title":"Conference","room4":24}
//toJSON is used both for the direct call JSON.stringify(room) and when 
//room is nested in another encoded object.

//JSON.parse - To decode a JSON-string, we need another method named JSON.parse

//stringified array
let numbers = "[0,1,2,3]";
console.log(typeof(numbers));//string

numbers = JSON.parse(numbers);

console.log(typeof(numbers));//object
console.log(numbers[1]);//1

//For nested objects:

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user3 = JSON.parse(userData);
console.log(user3.friends[1]); //1

//Using reviver - Imagine, we got a stringified meetup object from the server.
// title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup5 = JSON.parse(str);
// console.log(meetup5.date.getDate());//TypeError: meetup5.date.getDate is not a function

//To resove the error, pass it to JSON.parse the reviving function as the second argument,
// that returns all values “as is”, but date will become a Date

let meetup5 = JSON.parse(str, function(key, value){
    if(key == 'date') return new Date(value);
    return value;
});
console.log(meetup5.date.getDate());//30

//It works for nested objects as well.

let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
  }`;
  schedule = JSON.parse(schedule, function(key, value){
    if(key == 'date') {
        return new Date(value);
    }
    return value;
  })
console.log(schedule.meetups[1].date.getDate());//18

