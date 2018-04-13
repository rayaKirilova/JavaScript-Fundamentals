function stringToNum (argument){

    let number = parseInt(argument) ;
    let result = '' ;

    for (let i = 1 ; i <= number ; i++){
        result += i ;
    }
    console.log(result) ;

}

stringToNum('10')