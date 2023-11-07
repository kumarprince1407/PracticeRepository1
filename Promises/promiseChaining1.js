"use strict;"
console.log("PROMISE CHAINING documentation");

//Example of Promise chaining
new Promise(function(resolve,reject){
    setTimeout(()=>resolve(1),1000);

}).then(function(result){

    console.log(result);//1
    return result*2;

}).then(function(result){

    console.log(result);//2
    return result*2;

}).then(function(result){

    console.log(result);//4
    return result*2;
})

//returning promises - A handler, used in .then(handler) may create and return a promise.
//In that case further handlers wait until it settles, and then get its result

new Promise(function(resolve,reject){
    setTimeout(()=> resolve(1),1000);

}).then(function(result){//processes the result of the resolved promise, which is '1'

    console.log(result);//1 after 1 second

    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(result*2),1000);
    });

}).then(function(result){//processes the result of the resolved promise, which is '2'
    
    console.log(result);//2 after 1 second from prev. result

    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(result*2),1000);
    });
}).then(function(result){//processes the result of the resolved promise, which is '4'
    console.log(result);//after 1 second from prev. result

});
/*
//For understanding purposes onlly
loadScript("/article/promise-chaining/one.js")
  .then(function(script) {
    return loadScript("/article/promise-chaining/two.js");
  })
  .then(function(script) {
    return loadScript("/article/promise-chaining/three.js");
  })
  .then(function(script) {
    // use functions declared in scripts
    // to show that they indeed loaded
    one();
    two();
    three();
  });
  */

  //Thenables - A  handler may return not exactly a promise, but a so-called "thenable"
  //object - an arbitary object that has a method(.then). It will be treated the same 
  //way as a promise.
  
  //The code provided demonstrates a custom Thenable class and how it can be used
  // within a Promise chain
  class Thenable{
    constructor(num){
        this.num=num;
    }
    then(resolve,reject){
        console.log(resolve);// function() { native code }
        // resolve with this.num*2 after the 1 second
        setTimeout(()=>resolve(this.num*2),1000);
    }
  }
  new Promise(resolve => resolve(1))
//The first then method in the Promise chain processes the result from the previous Promise
    .then(result =>{
        return new Thenable(result);
    })
//The second then method in the Promise chain processes the result from the Thenable 
//instance created
    .then(alert);// shows 2 after 1000ms

//Fetch
//let promise = fetch(url);// This makes a network request the url and return a promise

//de below makes a request to the below url and loads its text from the server
fetch('https://api.github.com/users/akshaymarch7')
//.then below runs when the remote server responds
.then(function(response){
    return response.text();
})
.then(function(text){
    // ...and here's the content of the remote file
    console.log(text);
});

//Doing the same this using arrow function
fetch('https://api.github.com/users/akshaymarch7')
.then(response =>response.json())
.then(user => console.log(user.name));//Akshay Saini

//Let's make one more request to Github, load the user profile and show their avatar.
 /*
//Below code for understanding purpose(since we don't have the correct url)
fetch('https://javascript.info./article/promise-chaining/user.json')
//Load as json
.then(response => response.json())
//Make a request to Github
.then(user=>fetch(`https://api.github.com/users/${user.kumarprince1407}`))
//load the response as json
.then(response => response.json())
//Show the avatar image for 3 seconds
.then(githubUser => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    setTimeout(()=> 
        img.remove() ,3000);
});
*/