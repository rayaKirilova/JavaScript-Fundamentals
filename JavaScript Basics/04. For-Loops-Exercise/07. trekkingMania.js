function trekkingMania(input) {

    let groupCount = Number(input[0]) ; 

    let countOfAllParticipants = 0 ;
    let participantsInGroup = 0 ; 

    let musalaCounter = 0 ;
    let monblanCounter = 0 ;
    let kilimandzharoCounter = 0 ;
    let k2Counter = 0 ;
    let everestCounter = 0 ;

    for (i = 1 ; i <= groupCount ; i++) {
        participantsInGroup = Number(input[i]) ; 
        countOfAllParticipants += participantsInGroup ; 

        if (participantsInGroup <= 5) {
            musalaCounter += participantsInGroup ; 
        } else if (participantsInGroup >= 6 && participantsInGroup <= 12) {
            monblanCounter += participantsInGroup ;
        } else if (participantsInGroup >= 13 && participantsInGroup <= 25) {
            kilimandzharoCounter += participantsInGroup ;
        } else if (participantsInGroup >= 26 && participantsInGroup <= 40){
            k2Counter += participantsInGroup ;
        } else if (participantsInGroup >= 41){
            everestCounter += participantsInGroup ; 
        } 
    }
    // console.log(countOfAllParticipants) ; 
    console.log(`${(musalaCounter / countOfAllParticipants * 100).toFixed(2)}%`) ; 
    console.log(`${(monblanCounter / countOfAllParticipants * 100).toFixed(2)}%`) ; 
    console.log(`${(kilimandzharoCounter / countOfAllParticipants * 100).toFixed(2)}%`) ; 
    console.log(`${(k2Counter / countOfAllParticipants * 100).toFixed(2)}%`) ; 
    console.log(`${(everestCounter / countOfAllParticipants * 100).toFixed(2)}%`) ; 
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

