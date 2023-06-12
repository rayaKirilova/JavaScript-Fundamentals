function bonusScore(input) {

    let number = Number(input[0]) ; 
    let bonusPoints = 0 ; 

    if (number <= 100) {
        bonusPoints = 5 ; 
    } else if (number > 100 && number < 1000) {
        bonusPoints = 0.2 * number ; 
    } else if (number > 1000) {
        bonusPoints = number * 0.1 ; 
    }

    if (number % 2 == 0) {
        bonusPoints ++ ; 
    }

    if (number % 10 == 5) {
        bonusPoints = bonusPoints + 2 ; 
    }

    console.log(`${bonusPoints}`) ; 
    console.log(`${number + bonusPoints}`) ; 
}

bonusScore(["2703"]) ; 
bonusScore(["15875"]) ; 
