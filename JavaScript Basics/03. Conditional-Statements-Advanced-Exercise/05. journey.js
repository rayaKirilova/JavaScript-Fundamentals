function journey(input) {

    let budget = Number(input[0]) ; 
    let season = input[1] ; 

    let vacationPrice = 0 ; 
    let destination = "" ; 
    let vacationType = "" ; 

    if (budget <= 100){
        destination = "Bulgaria" ; 
        if (season === "summer") {
            vacationPrice = budget * 0.3 ; 
            vacationType = "Camp" ; 
        } else if (season === "winter") {
            vacationPrice = budget * 0.7 ; 
            vacationType = "Hotel" ; 
        }
    } else if (budget > 100 && budget <= 1000){
        destination = "Balkans" ; 
        if (season === "summer") {
            vacationPrice = budget * 0.4 ; 
            vacationType = "Camp" ; 
        } else if (season === "winter") {
            vacationPrice = budget * 0.8 ; 
            vacationType = "Hotel" ; 
        }
    } else if (budget > 1000){
        destination = "Europe" ; 
        vacationPrice = budget * 0.9 ; 
        vacationType = "Hotel" ;  
    }

    console.log(`Somewhere in ${destination}`) ; 
    console.log(`${vacationType} - ${vacationPrice.toFixed(2)}`);
}

journey(["50", "summer"]) ; 
journey(["75", "winter"]) ; 
journey(["312", "summer"]) ; 
journey(["678.53", "winter"]) ; 
journey(["1500", "summer"]) ; 