function evenAndOddSubtraction(array){

    let sumEven = 0 ; 
    let sumOdd = 0 ; 

    for (let i = 0 ; i < array.length ; i++){

        if (array[i] % 2 === 0){
            sumEven += array[i] ; 
        } else {
            sumOdd += array[i] ; 
        }
    }
    console.log(sumEven - sumOdd) ; 
}
evenAndOddSubtraction([3,5,7,9])