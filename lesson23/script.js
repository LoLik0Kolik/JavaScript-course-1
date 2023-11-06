for (let i = 0; i < 3; i++){
    console.log(i);
    for(let j = 0; j<3; j++){
        console.log(j);
    }
};



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





    // function firstTask() {
    //     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    //     const arr = [3, 5, 8, 16, 20, 23, 50];
    //     const result = [];
    //     for(i=0; i< arr.length ; i++){
            
    //         result[i]=arr[i];
            
    //     }
    //     console.log(result);}

        function secondTask() {
            // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
            const data = [5, 10, 'Shopping', 20, 'Homework'];
        
            for(let i= 0; i<data.length; i++)
            {
                if (typeof(data[i]) === 'number'){
                    data[i] = data[i]*2;
                } else if (typeof(data[i]) === 'string'){
                    data[i] =`${data[i]} - done`
                }
                
            }
            console.log(data)
            
            // Не трогаем
            return data;}
            secondTask();
            // function secondTask() {
            //     const data = [5, 10, 'Shopping', 20, 'Homework'];
            
            //     for (let i = 0; i < data.length; i++) {
            //         if (typeof(data[i]) === 'number') {
            //             data[i] = data[i] * 2;
            //         } else if (typeof(data[i]) === 'string') {
            //             data[i] = `${data[i]} - done`;
            //         }
            //     }
            
            //     console.log(data);
            //     return data;
            // }
            
            // secondTask();

            // let result = '';
            // const length = 7;
            // for(let i = 1; i < length; i++){
            
            //     for(let j = 0; j < i; j++){
            //         result += "#"; 
            //     }
            //     result += '\n'
            // }
            
            // console.log(result);


            const lines = 5;
            let result = '';
            
            for (let i = 0; i <= lines; i++) {
                for (let j = 0; j < lines - i; j++) {
                    result += " ";
                }
                for (let j = 0; j < 2 * i + 1; j++) {
                    result += "*";
                }
                result += "\n";
            }
            
            console.log(result)


        //      *
        //     ***
        //    *****
        //   *******
        //  *********
        // ***********