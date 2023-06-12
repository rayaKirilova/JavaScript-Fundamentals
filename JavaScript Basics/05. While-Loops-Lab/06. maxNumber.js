function maxNumber(input) {
    
    let index = 0 ; 
    let maxNumber = Number(input[index]);
    
    while (input[index] !== "Stop") {
        
        let currentNumber = Number(input[index]) ; 

        if (maxNumber < currentNumber){
            maxNumber = currentNumber ; 
        }
        index++ ; 
    }
    console.log(maxNumber) ; 
}

maxNumber(["100",
"99",
"80",
"70",
"Stop"])
