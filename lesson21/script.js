// const hamburger = 5; 
// const fries = null; 

// if(hamburger && fries){
//     console.log('Я сыт')

// }
// const hamburger = 3; 
// const fries = 13; 
// const cola = 1;


// console.log(hamburger === 3 && cola  && fries )


// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "afesaefsef");


// if(hamburger === 3 && cola === 1 && fries ){
//     console.log('Все сыты')

// } else{
//     console.log('Мы уходим');
// }

// const hamburger = 3; 
// const fries = 3; 
// const cola = 0;
// const nuggets = 2;

if(hamburger === 3 && cola === 2 || fries === 3 && nuggets){
    console.log('Все сыты')

} else{
    console.log('Мы уходим');
}
console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);
//true == 2

let johnReport, alexReport, samReport, mariaReport ='done'; 

console.log(johnReport || alexReport || samReport || mariaReport );


 console.log(!0); 

//  0 = false; ! - перевертыш => 0 true


console.log( NaN || 2 || undefined );
// выведется 2 

console.log( NaN && 2 && undefined );
// Nan
console.log( 1 && 2 && 3 );
// 3

console.log( !1 && 2 || !3 );
//false


console.log( 25 || null && !3 );
//25

console.log( NaN || null || !3 || undefined || 5);
          //false //false //false //false  //true 
          //5

console.log( NaN || null && !3 && undefined || 5);
        // false       //false                //true


console.log(  5 || 3 > 1 || 5);
            // 9     5    10   2
            //true   true      true 
//5 
console.log(9 || 6 || 2);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }
// Да, выведется 'Done 

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')}
   // Да, выведется 'Done 

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
} else {
    console.log('Error')
}
// Условия не выполнены, вернется Error

