function bonusScore(arg1){

    let points = Number(arg1) ;
    let bonusPoints = 0 ; 

    if (points <= 100){
        bonusPoints = 5 ; 
    } else if (points > 100 && points < 1000) {
        bonusPoints = points * 0.2 ; 
    } else if (points > 1000){
        bonusPoints = points * 0.1 ;
    }

    if (points % 2 == 0){
        bonusPoints += 1 ; 
    } else if (points % 10 == 5){
        bonusPoints += 2 ; 
    }

    console.log(bonusPoints) ; 
    console.log(bonusPoints + points) ; 
}

bonusScore("20"); 
bonusScore("2703") ; 