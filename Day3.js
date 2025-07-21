//variable declare outside any function or block are in the global scope.
//there are accessiable anywhere in the script.
let x=10;
function sendMessage(){
    console.log("hai js");
    console.log(x);//within
}
sendMessage();
    console.log(x);//outside

//function scope
//only accessible in the function in which they are declare.
function sendMessage(){
    let x=10;
    console.log("hai js");
    console.log(x);//within
}
sendMessage();
    console.log(x);//outside

//block scope
//The block scope of the variable means that the variable
//is accessible within the block that is between the curly braces.
function check(){
    if(true){
        let name="webdevelopement";
        console.log(name);
    }
    console.log(name);
}
check()

//call back function:
//A callback function in js is a function that is passed an argument to another function,
//and it is executed after the completion of the function.

//it is commonly used for:
//handling asynchronous operations(like API calls,timeouts,or event handling)
//customizing behaviour inside function.
function first(){
    console.log("This is my first function")
}
first()
function second(callback){
    console.log("This is my second function")
//settimeout
    setTimeout(callback,2000);
}
second(first)
//setinterval
function second(callback){
    console.log("This is my second function")
    setInterval(callback,1000);
}
second(first)

//arrow function
let count=0;
let input=()=>{
    count++;
    console.log(count);
    if(count==5){
        clearInterval(input,1000)
    }
}
input();


