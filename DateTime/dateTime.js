"use strict;"
console.log("DATE AND TIME");


let now = new Date();
console.log(now);//prints the current date and time

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);//Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)

//now if we want to add 24 hours to it
let Jan02_1970 = new Date(24*3600*1000);
console.log(Jan02_1970);//Fri Jan 02 1970 05:30:00 GMT+0530 (India Standard Time)

//dates before  01.01.1970 have negative timestamps, e.g.:
let Dec31_1969 = new Date(-24*3600*1000);
console.log(Dec31_1969);//Wed Dec 31 1969 05:30:00 GMT+0530 (India Standard Time)

//new Date(datestring)
let date = new Date("2023-10-27");
console.log(date);//Fri Oct 27 2023 05:30:00 GMT+0530 (India Standard Time)
// The time is not set, so it's assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in

//new Date(year, month, date, hours, minutes, seconds, ms)
let date1 = new Date(2023, 8, 15, 4, 40, 22, 0);
console.log(date1);//Fri Sep 15 2023 04:40:22 GMT+0530 (India Standard Time)
let date2 = new Date(2011, 0, 1, 0, 0, 0,0);
let date3 = new Date(2011, 0, 1);//both are same
console.log(date2);
console.log(date3);

//local and international time zones
let date4 = new Date();
console.log(date4.getHours());//10
console.log(date4.getUTCHours());//5

//getTimezoneOffset() - Returns the difference between UTC and the local time zone, in minutes:
let date6 = new Date().getTimezoneOffset();
console.log(date6);//-330

//Setting date components
let today = new Date();

today.setHours(0);//the hour is changed to 0
console.log(today);//Fri Oct 27 2023 00:01:29 GMT+0530 (India Standard Time)

today.setHours(0,0,0,0);//// still today, now 00:00:00 sharp.
console.log(today);//Fri Oct 27 2023 00:00:00 GMT+0530 (India Standard Time)

//If we need to increase the date by some days: e.g. “28 Feb 2016” by 2 days.
let date7 = new Date();
date7.setDate(date7.getDate()+2);
console.log(date7);

//We can also set zero or even negative values. For example:

let date8 = new Date(2016, 0, 2); // 2 Jan 2016;
date.setDate(1);
console.log(date8);//Sat Jan 02 2016 00:00:00 GMT+0530 (India Standard Time)

date8.setDate(0);// // min day is 1, so the last day of the previous month is assumed
console.log(date8);//Thu Dec 31 2015 00:00:00 GMT+0530 (India Standard Time)

//date to number, date diff - When a date is converted to number, it becomes the
//timestamp as date.getTime():
let date9 = new Date();
console.log(+date9);//1698385429945 - the number of milliseconds, same as date.getTime()

//dates can be subtracted, the result is their difference in ms
let start = new Date();
 for(let i=0; i< 100000; i++){
    let doSomething = i*i*i; 
 }
 let end = new Date();
 console.log(`The loop took ${end - start} ms`);

 //Date.now() - It is semantically equivalent to new Date().getTime(), but it 
 //doesn’t create an intermediate Date object.

//Benchmarking
//Let’s measure two functions that calculate the difference between two dates:
// which one is faster? Such performance measurements are often called “benchmarks”.

//EXECUTE CODE LATER ON

//Date.parse from a string - The method Date.parse(str) can read from a string
let ms = Date.parse("2016-01-26T13:51:50.417-07:00")
//the "T" between the date and time components is an ISO 8601 date and time separator.
// It's used to indicate the start of the time part of the date string.
console.log(ms);


//TASKS
//Create a date  object for the date: Feb 20, 2012, 3:12am. The time zone is local.
let date10 = new Date(2012,1,20,3,12 );
console.log(date10);

//Show a weekday - Write a function getWeekDay(date) to show the weekday in short format:
// ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

let date11 = new Date(2012, 0, 3);  // 3 Jan 2012

function getWeekDay(date){
    let days = ["SU", "MO","TU","WE","TH","FR","SA","SU"];
    return days[date.getDay()];
}
console.log(getWeekDay(date11));

//European weekday - Write a function getLocalDay(date) that returns the “European” day
// of week for date. The EU week starts from Monday
let date12 = new Date(2012, 0, 3);  

function getLocalDay(date){
    let day = date.getDay()
    if(day == 0){
        day = 7;
    }
    return day;
}
console.log(getLocalDay(date12));

//Create a function getDateAgo(date, days) to return the day of month days ago from the date.
let date13 = new Date(2015, 0, 2);

function getDateAgo(date,days){
    date.setDate(date.getDate()-days);
    return date.getDate();
}
console.log(getDateAgo(date13,2));//31
console.log(getDateAgo(date13, 364));//1

//DO REST 2 TASKS LATER ON
