function possibleCombinations(input) {

    let number = Number(input[0]) ; 
    let counter = 0 ; 

    for (i = 0 ; i <= number ; i++){
        for (z = 0 ; z <= number ; z++){
            for (y = 0 ; y <= number ; y++){

                if (i + y + z === number){
                    counter ++ ; 
                }
            }
        }
    }
    console.log(counter) ; 
}
possibleCombinations(["25"]) ; 