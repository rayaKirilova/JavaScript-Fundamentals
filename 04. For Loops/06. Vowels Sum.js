function vowelSum(arg){

    let input = arg ; 
    let sum = 0 ; 

    for (let i = 0 ; i < input.length ; i++){

        switch(input[i]){
            case "a": 
            sum ++ ; 
            break ; 
            case "a": 
            sum ++ ; 
            break ; 
            case "e": 
            sum += 2 ; 
            break ; 
            case "i": 
            sum += 3 ; 
            break ; 
            case "o": 
            sum += 4 ; 
            break ; 
            case "u": 
            sum += 5 ; 
            break ; 
        } 
    }
    console.log(sum) ; 
}

vowelSum("bamboo")