function sumNumbers([array]) {

    let sum = 0 ; 

    for (let i = 0; i < array.length; i++) {
        let number = Number(array[i]) ; 
        sum += number ;
    }
    console.log(`The sum of the digits is:${sum}`) ; 
}

sumNumbers(["123456789"])