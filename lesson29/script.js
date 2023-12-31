/* Задание на урок:

1) Первую часть задания повторить по уроку



P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

function start(){
 numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

 while(numberOfFilms == '' || numberOfFilms == null || isNan(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
 }
}
// start(); 

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: true
};

function rememberMyFilms(){
    for( let i = 0; i < 2; i++){
        const a = prompt('Какой фильм вы посмотрели последним?', ''),
                b = prompt ('На сколько вы его оцените?', '');
    
            if(a!=null && b!=null && a!='' && b!='' && a.length < 50){
            personalMovieDB.movies[a]=b;
            console.log('done');
                
            } else{
                console.log('Error');
                i--; 
                
            }
    };

}
// rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");

    } else if(personalMovieDB.count>= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >=30){
        console.log("Вы киноман");
    }else {
        console.log("Произошла ошибка");
    }

}
// detectPersonalLevel();

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы


function showMyDB(hidden){
    if (personalMovieDB.privat (!hidden)){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres


function writeYourGenres(){
    for(let i=1; i<=3; i++)
    {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`); 



    }
}
writeYourGenres();

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)){
        return 'При вычислении произошла ошибка ';
    } 


    let volume =0,
        area = 0; 
    
    volume = length * length * length;
    area = 6*(length*length);
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}
calculateVolumeAndArea(5);

function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    area = 6 * (length * length);
    console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`)
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(10);

// console.log(personalMovieDB);
// Код возьмите из предыдущего домашнего задания
function calculateVolumeAndArea(meaning){
    
    if(typeof(meaning)!== 'number' || meaning < 0 || !Number.isInteger(meaning)){
        return 'При вычислении произошла ошибка'
    }
    let V = 0;
    let S = 0;
    if (meaning >= 0){
        V = meaning * meaning * meaning;
        S = 6*(meaning * meaning);
        console.log(`Объем куба: ${V}, площадь всей поверхности: ${S}`);
        return `Объем куба: ${V}, площадь всей поверхности: ${S}`
        
    }
}
calculateVolumeAndArea(10);


function findMaxNumber(one, two, three, four) {
    if (typeof(one) !== 'number' ||
    typeof(two) !== 'number'     ||
    typeof(three) !== 'number'   ||
    typeof(four) !== 'number') {
    return 0;
}else{
    return Math.max(one, two, three, four);
}
}
findMaxNumber(3, 7, 9, 12);

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10');