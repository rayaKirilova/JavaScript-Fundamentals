function swimmingRecord(arg1, arg2, arg3){

    let recordInSec = Number(arg1) ; 
    let distance = Number(arg2) ; 
    let secondsFor1m = Number(arg3) ; 

    let neededTimeForDistance = distance * secondsFor1m ; 
    let timeToAdd = Math.floor(distance / 15) * 12.5 ; 

    let allSeconds = neededTimeForDistance + timeToAdd ; 

    if (allSeconds >= recordInSec){
        let diff = allSeconds - recordInSec ; 
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${allSeconds.toFixed(2)} seconds.`);
   }

}

swimmingRecord("55555.67",
"3017",
"5.03")
