function fishingBoat(input) {

    let budget = Number(input[0]) ; 
    let season = input[1] ; 
    let fishermans = Number(input[2]) ; 

    let boatPrice = 0 ;

    if (season === "Summer" || season === "Autumn") {
        boatPrice = 4200 ; 
        if (fishermans > 0 && fishermans <= 6) {
            boatPrice = boatPrice - boatPrice * 0.1 ; 
        } else if (fishermans > 7 && fishermans <= 11) {
            boatPrice = boatPrice - boatPrice * 0.15 ; 
        } else if (fishermans > 12) {
            boatPrice = boatPrice - boatPrice * 0.25 ;
        }

    } else if (season === "Winter") {
        boatPrice = 2600 ; 
        if (fishermans > 0 && fishermans <= 6) {
            boatPrice = boatPrice - boatPrice * 0.1 ; 
        } else if (fishermans > 7 && fishermans <= 11) {
            boatPrice = boatPrice - boatPrice * 0.15 ; 
        } else if (fishermans > 12) {
            boatPrice = boatPrice - boatPrice * 0.25 ;
        }

    } else if (season === "Spring") {
        boatPrice = 3000 ; 
        if (fishermans > 0 && fishermans <= 6) {
            boatPrice = boatPrice - boatPrice * 0.1 ; 
        } else if (fishermans > 7 && fishermans <= 11) {
            boatPrice = boatPrice - boatPrice * 0.15 ; 
        } else if (fishermans > 12) {
            boatPrice = boatPrice - boatPrice * 0.25 ;
        }
    }

    if (fishermans % 2 == 0 && season !== "Autumn") {
        boatPrice = boatPrice - boatPrice * 0.05 ; 
    }
    
    if (boatPrice <= budget) {
        console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`) ;
    } else {
        console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`) ;
    }
}

fishingBoat(["3000",
"Summer",
"11"])
fishingBoat(["3600",
"Autumn",
"6"])
fishingBoat(["2000",
"Winter",
"13"])
