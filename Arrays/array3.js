"use strict;"
console.log("ITERABLES");
//ITERABLES
//Iterable objects are a generalization of arrays. That'a concept that allows
//us to make any object usable in a for..of loop.

//Symbol.iterator - To make a range pbject iterable (and thus make for..of) work
//we need to add a method to the object named Symbol.iterator (a special built in 
// symbol for that)

let range = {
    from:1,
    to:5
};
//1.call to for..of initially calls this
range[Symbol.iterator] = function(){

    //... it returns the iterator object:
    //2.Onward, for..of works only with the iterator object below, asking it for next values
    
    return {
        current: this.from,
        last:this.to,
    
    //3.next is called on each iteration by the for..of loop
    next(){
  // 4. it should return the value as an object {done:.., value :...}

        if(this.current <= this.last){
            return {done:false, value: this.current++};
        }else{
            return {done: true};
        }
    }
};
};

    //not it works
    for(let num of range){
        console.log(num);//1,2,3,4,5
    }

    //String is iterable
    for (let char of "test"){
        console.log(char);
    }
    //It works fine with surrogate pairs
    let str = '𝒳😂';
    for (let char of str){
        console.log(char);//// 𝒳, and then 😂
    }

    //Calling an iterator explicitly
    let str2 = "Hello";

    //works same as for(let char of str) console.log(char);
    let iterator = str2[Symbol.iterator]();
    while(true){
        let result = iterator.next();
        // The next() method returns an object with two properties: done and value.
        if(result.done)break;
        console.log(result.value);// output characters one by one

    }

    //Iterables and array-likes
    //Iterables are objects that implement the Symbol.iterator method,as described above.
    //Array-likes are objects that have indexes and length, so they look like arrays.

    //Strungs are both iterable(for..of works for them) and array-like(they have
    // numeric indexes and length).
    //But an iterable may not be array-like. And vice versa an array-like may not be iterable.
    let arrayLike = {
        0:"Hello",
        1:"World",
        length:2
    };

    // for(let item of arrayLike){}// Error (no Symbol.iterator)

    //Array.from - A universal method that takes an iterable or array-like value and makes
    //a real Array from it.
    let arr = Array.from(arrayLike);
    console.log(arr.pop());//World

    let arr2 = Array.from(range);
    console.log(arr2);//(5) [1, 2, 3, 4, 5] - From top

    //The full syntax for Array.from also allows us to provide an optional "mapping" function.
    //square each number
    let arr3 = Array.from(range, num => num*num);
    console.log(arr3);//[1, 4, 9, 16, 25]

    //Here we use Array.from to turn a string into an array of characters
    let str3 = '𝒳😂';
    //split str into array of characters
    let chars = Array.from(str3);
    console.log(chars[0]);//𝒳
    console.log(chars[1]);//😂
    console.log(chars.length);//2

    //We can even build surrogate-aware slice on it:
    function slice(str, start, end){
        return Array.from(str).slice(start,end).join('');
    }
    let str4 = '𝒳😂𩷶';
    console.log(slice(str4, 1,3));//😂𩷶
    
    // the native method does not support surrogate pairs
    console.log(str4.slice(1,3));// garbage (two pieces from different surrogate pairs)





