const usdCurr = 28; 
const discount = 0.9; 
function convert (amount, curr){
    return curr * amount;

}
function promotion(result){
    console.log(result*discount);
    
}

const res = convert(500, usdCurr);
promotion(res);


function test(){
    for (let i =0; i < 5; i++){
        console.log(i);
        if(i === 3) return; 
    }
    console.log('Done');
}
test();
 

function doNothing(){
    
};
console.log(doNothing() === undefined);




// function sayHello(Name) {
//     console.log('Привет,' + Name + '!')
// };
// sayHello('Антон');

// 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].
// function returnNeighboringNumbers(number) {

//     const Massive = [number-1, number, number+1];
//     console.log(Massive);
//     return Massive;
// }

// returnNeighboringNumbers(5);


function getMathResult(num, times) {

    if (typeof(times) !== 'number' || times <= 0) {

        return num;
    }
    
    let str = '';
    for(let i = 1; i<=times; i++){
        if(i === times){
            str += `${num*i}`
        } else{
            str += `${num*i}---`
        }
    }

console.log(str);
return str; 



}
 
getMathResult(5,3);