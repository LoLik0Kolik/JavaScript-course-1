for (let i = 0; i < 3; i++){
    console.log(i);
    for(let j = 0; j<3; j++){
        console.log(j);
    }
};

let result = '';
const length = 7;
for(let i = 1; i < length; i++){

    for(let j = 0; j < i; j++){
        result += "#"; 
    }
    result += '\n'
}

console.log(result)

first: for (let i = 0; i < 3; i++){
    console.log(`First level: ${i}`);
    for(let j = 0; j<3; j++){
        console.log(`Second level: ${j}`);
        for(let k = 0; j<3; k++){
            if ( k===2 ) break first;
            console.log(`Third level: ${k}`)
        };

    }
};


    // const leng = 11;

    // for(i=5; i<leng; i++){
    //     console.log(i);
    // }
    // const twoLength = 10;
    // for(i=20; i>=twoLength; i--){
    //     console.log(i)
    // }

    // const threeLength = 10; 
    // for(let i=2; i<=threeLength; i++){
    //     if(i%2===0){
    //         console.log(i)
    //     }
    // }

    for (let i = 2; i <= 16; i++) {
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }

    let num = 2;
    while(num <= 16){
        if ( num % 2 === 0){
            num++
            continue;
        } else{
            console.log(num);
        }
        num++
    }