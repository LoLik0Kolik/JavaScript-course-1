"use strict"

if (4 == 9) {
    console.log('Ok!');
} else{
    console.log('Error');
}


if (num < 49){
    console.log('Error');
} else if (num>100) {
    console.log('Много')
}else{ console.log('Мало')}

(num === 50) ? console.log('Ok!') : console.log('Error');


const num = 50; 
switch (num){
    case 49: 
        console.log('Неверно');
        break; 
    case 100: 
    console.log('Неверно');
    break; 
    case 51:
    console.log('Верно');
    break; 
    default:
        console.log('Не в этот раз');
        break;
    
}


