
function sumSeconds(input) {

    let firstRacer = Number(input[0]) ; 
    let secondRacer = Number(input[1]) ; 
    let thirdRacer = Number(input[2]) ; 

    let sumSeconds = firstRacer + secondRacer + thirdRacer ; 

    if (sumSeconds === 0){
        console.log("0:00") ; 
    } else if (sumSeconds > 0 && sumSeconds <= 9) {
        console.log(`0:0${sumSeconds}`) ; 
    } else if (sumSeconds > 9 && sumSeconds < 60) {
        console.log(`0:${sumSeconds}`) ; 
    } else if (sumSeconds >= 60) {
        let hours = Math.floor(sumSeconds / 60) ;
        let leftSeconds = sumSeconds - hours * 60 ; 
        
        if (leftSeconds === 0){
            console.log(`${hours}:00`) ;
        } else if (leftSeconds > 0 && leftSeconds <= 9) {
            console.log(`${hours}:0${leftSeconds}`) ;       
        } else {
            console.log(`${hours}:${leftSeconds}`) ; 
        }      
    }
}

sumSeconds(["50", "50", "50"]) ; 
sumSeconds(["25", "17", "18"]) ; 
sumSeconds(["0", "0", "0"]) ; 
