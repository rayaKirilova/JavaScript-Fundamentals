function minNumber(input) {
    
    let index = 0 ;
    let minNumber = Number(input[index]);
    
    while (input[index] !== "Stop"){

        let currentNumber = Number(input[index]) ; 

        if (minNumber > currentNumber) {
            minNumber = currentNumber ; 
        }
        index ++ ; 
    }
    console.log(minNumber) ; 
}

minNumber(["-1",
"-2",
"Stop"])
