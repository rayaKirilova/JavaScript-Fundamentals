function worldSwimmingRecord(input) {

    let record = Number(input[0]) ; 
    let distance = Number(input[1]) ; 
    let timeInSeconds = Number(input[2]) ; 

    let distanceInMetres = distance * timeInSeconds ; 
    let resistance = Math.floor(distance / 15) * 12.5 ; 

    let timeToCompare = distanceInMetres + resistance ; 

    if (timeToCompare >= record) {
        console.log(`No, he failed! He was ${(timeToCompare - record).toFixed(2)} seconds slower.`) ;
    } else {
        console.log(`Yes, he succeeded! The new world record is ${(timeToCompare).toFixed(2)} seconds.`) ;
    }
}

worldSwimmingRecord(["10464",
"1500",
"20"]) ; 
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])

