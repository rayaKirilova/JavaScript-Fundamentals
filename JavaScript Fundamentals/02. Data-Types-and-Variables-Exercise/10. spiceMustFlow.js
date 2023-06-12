function spiceMustFlow(startingYield) {

    let leavingSpices = 0;
    let yieldLeft = startingYield;
    let dayCounter = 0;

    while (yieldLeft >= 100) {
        leavingSpices += yieldLeft - 26;
        yieldLeft -= 10;
        dayCounter++;
    }
    // console.log(leavingSpices) ; 
    // console.log(yieldLeft) ; 

    console.log(dayCounter);
    if (leavingSpices >= 26){
        console.log(leavingSpices - 26);
    } else {
        console.log(leavingSpices) ; 
    }
}
//spiceMustFlow(111)

spiceMustFlow(450) 
spiceMustFlow(200)