function shopping(input) {

    let budget = Number(input[0]) ; 
    let videoCardsCount = Number(input[1]) ; 
    let processorsCount = Number(input[2]) ; 
    let ramCount = Number(input[3]) ; 

    let videoCardsPrice = 250 * videoCardsCount ; 
    let processorPrice = 0.35 * videoCardsPrice * processorsCount ; 
    let ramPrice = 0.10 * videoCardsPrice * ramCount ; 

    let expenses = videoCardsPrice + processorPrice + ramPrice ; 

    if (videoCardsCount > processorsCount) {
        expenses = expenses - expenses * 0.15 ;  
    }

    if (expenses < budget) {
        console.log(`You have ${(budget - expenses).toFixed(2)} leva left!`) ;
    } else {
        console.log(`Not enough money! You need ${(expenses - budget).toFixed(2)} leva more!`) ;
    }
}

shopping(["900",
"2",
"1",
"3"]) ;
shopping(["920.45",
"3",
"1",
"1"]) ; 

