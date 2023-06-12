function tennisRanklist(input) {

    let tournamentCount = Number(input[0]) ; 
    let startPoints = Number(input[1]) ; 

    let winsCounter = 0 ; 

    for (i = 2 ; i < tournamentCount + 2 ; i++){
        let tournamentStage = input[i] ; 

        if (tournamentStage === "W"){
            winsCounter ++ ; 
            startPoints += 2000 ; 
        } else if (tournamentStage === "SF") {
            startPoints += 720 ; 
        } else if (tournamentStage === "F") {
            startPoints += 1200 ; 
        }
    }

    let averagePoints = (startPoints - Number(input[1]))/ tournamentCount ;
    let percentWons = winsCounter / tournamentCount * 100 ; 

    console.log(`Final points: ${startPoints}`) ;  
    console.log(`Average points: ${Math.floor(averagePoints)}`) ; 
    console.log(`${percentWons.toFixed(2)}%`) ; 
}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])

tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])

