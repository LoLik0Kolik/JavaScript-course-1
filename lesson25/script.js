"use strict"
let num = 20;
function showFirstMessage(text){

    console.log(text);
    let num = 10; 
    console.log(num); 


}
showFirstMessage("Hello World!");
console.log(num);


// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(10,6));


// function calc(a, b){
//     return (a+b);

// }




 function ret(){
    let num = 50; 
    return num; 
 }
 const anotherNum = ret();
 console.log(anotherNum);

 const logger = function(){
    console.log("Hello")
 }; //Function Expression
 logger();


const calc = (a,b) => { return a + b };