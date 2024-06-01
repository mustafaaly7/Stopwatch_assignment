// JS IS SYNCHRONAS MEANS LINE BY LINE READ KREGA AND WAIT NH KRTA
// ASYNCHRONAS MEANS WAIT KRANA CODE KO WE CAN MAKE OUT JS AYNCHRONAS
// FOR THAT WE CAN USE setTimeout() function to make our code wait for some specific time


// setTimeout(function name without paranthesis i.e (), time in milliseconds means 1000 milliseconds = 1 sec )

// function foo() {
//     console.log("hello2");
// }


// console.log("hello1");
// setTimeout(foo, 2000) // means call foo function after 2 sec wait
//NOW JS IS SYNCHRONAS MEANS YE CODE READ KRTA RAHEGA AND WAIT KO IGNORE KRDEGA AND THE SETTIMEOUT CODE WILL RUN AFTER TIME BHALAY WOH BEECH MAI AIN PHLY AAIN
// WE CAN ALSO CREATE DIRECT FUNTION IN SET TIMEOUT USKA SYNTAX HOGA
// setTimeout(function(){
//     console.log("hello bois");
// } , 5000) // means 5 sec baad

// setTimeout(function () {
//     console.log("hello 2from direct fuction inside setTimeout");
// }, 2000)

// console.log("hello3");
// console.log("hello4");

// --------------------X---------------------X --------------------------------X --------------------------X ------------X


// -------------------> SetInterval() // METHOD
// What does it do??  it repeat the function after the given time u gave

//SYNTAX ?


// setInterval(function name without paranthesis  / or direct create function without function name , time in milliseconds if.e 1000milliseconds = 1 sec )


// --------------> Now try it with direct creating function inside it without function name
// And Inside a variable


// var interval = setInterval(function () {
//     console.log("Hello after every 1 sec");
// }, 1000)

// it will run without needing to print it or anything / cuz variable store huwa or ye run krna start krdega

// --------------> Now try it with direct creating function inside it without function name
// Without variable


// setInterval(function () {
//     console.log("Hello after every 1 sec");
// }, 1000)



// --------------> Now try it with function outside interval

// function print() {
//     console.log("Hello after every 1 sec");
// }


// setInterval(print, 1000)



// --------------------X-------------------X ------------------------------X -------------------X
// ------------> HOW TO STOP INTERVAL??
// we use clearInterval() Method for that
// -----------------> SYnTAX
// clearInterval(var name jisme set interval store kraya hai )

// Now lets try it


// var interval = setInterval(function () {
//     console.log("Hello after every 1 sec");
// }, 1000)


// clearInterval(interval) // it will stop that interval we can also make it stop on button 


var minHeading = document.getElementById("minHeading")
var secHeading = document.getElementById("secHeading")
var msecHeading = document.getElementById("msecHeading")

var min = 0
var sec = 0
var msec = 0
var interval;
var startbtn = document.getElementById("btn")

function startWatch() {
    msec++
    msecHeading.innerHTML = msec
    if (msec == 59) {
        sec++
        secHeading.innerHTML = sec
        msec = 0
        msecHeading.innerHTML = sec
    } else if (sec == 59) {
        min++
        minHeading.innerHTML = min
        sec = 0
        secHeading.innerHTML = sec
    }

    startbtn.setAttribute("disabled", "true")

}


function start() {
    interval = setInterval(startWatch, 10)
}



function stop() {
    clearInterval(interval)
    startbtn.removeAttribute("disabled")
}



function reset() {
    clearInterval(interval)


    minHeading.innerHTML = "00"
    secHeading.innerHTML = "00"
    msecHeading.innerHTML = "00"
    min = 0
    sec = 0
    msec = 0
    startbtn.removeAttribute("disabled")

}



























