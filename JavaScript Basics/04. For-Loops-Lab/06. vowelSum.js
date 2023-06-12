function vowelSum([array]) {

    let vowelSum = 0 ;

    for (let i = 0; i < array.length; i++) {
        let letter = array[i] ; 

        switch (letter){
            case "a":
                vowelSum += 1 ; 
                break;
            case "e":
                vowelSum += 2 ; 
                break; 
            case "i":
                vowelSum += 3 ; 
                break;
            case "o":
                vowelSum += 4 ; 
                break;
            case "u":
                vowelSum += 5 ; 
                break;
        }
    }

    console.log(vowelSum) ; 
}

vowelSum(["hello"]) ; 
vowelSum(["bamboo"]) ; 
