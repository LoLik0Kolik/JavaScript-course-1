const arr = [1, 2, 3];

arr[10] = '3456';
console.log(arr);


const arrObj = {
    0: 1, 
    1: 2,
    2: 3,
    abc: {
        df: [{}, {}],

        def:{

        }
    }
};

// arrObj.b = '1234';
arrObj['b'] = '1234';

console.log(arrObj['b']);
console.log(arrObj.b);

// console.log(arr[1]);

// const obj = { a: 1, b:2 };

const obj = {
    'Anna' :500, 
    'Alice' : 800
};

