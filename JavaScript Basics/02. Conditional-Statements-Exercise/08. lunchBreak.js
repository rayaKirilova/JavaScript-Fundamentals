function lunchBreak(input) {

    let filmName = input[0] ; 
    let episodeLength = Number(input[1]) ; 
    let breakLength = Number(input[2]) ; 

    let lunchLength = breakLength / 8 ; 
    let restLength = breakLength / 4 ; 

    let timeLeft = breakLength - lunchLength - restLength ; 

    if (timeLeft >= episodeLength) {
        console.log(`You have enough time to watch ${filmName} and left with ${Math.ceil(timeLeft - episodeLength)} minutes free time.`) ; 
    } else {
        console.log(`You don't have enough time to watch ${filmName}, you need ${Math.ceil(episodeLength - timeLeft)} more minutes.`) ;
    }
}

lunchBreak(["Game of Thrones",
"60",
"96"]) ; 
lunchBreak(["Teen Wolf",
"48",
"60"]) ; 

