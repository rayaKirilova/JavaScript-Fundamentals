function walking(input){

    let index = 0 ; 
    let steps = 0 ; 
    let sumSteps = 0 ; 

    while (input[index] !== "Going home") {
         steps = Number(input[index]) ; 
         sumSteps += steps ; 

         if (sumSteps > 10000){
            console.log(`Goal reached! Good job!`) ; 
            console.log(`${sumSteps - 10000} steps over the goal!`) ; 
            break ; 
         }
         index ++ ; 
    }
    index++ ; 

    let sumStepsBeforeGoingHome = sumSteps + Number(input[index]) ; 

    if (sumStepsBeforeGoingHome < 10000) {
        console.log(`${10000 - sumStepsBeforeGoingHome} more steps to reach goal.`) ; 
    } else if (sumStepsBeforeGoingHome > 10000){
        console.log(`Goal reached! Good job!`) ; 
        console.log(`${sumStepsBeforeGoingHome - 10000} steps over the goal!`) ; 
    }
}
/*
walking(["1000",
"1500",
"2000",
"6500"])

walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])
*/

walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])


