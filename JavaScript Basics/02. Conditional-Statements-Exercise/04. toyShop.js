function toyShop(input) {

    let vacationprice = Number(input[0]) ; 
    let puzzlesCount = Number(input[1]) ; 
    let dollsCount = Number(input[2]) ; 
    let teddysCount = Number(input[3]) ; 
    let minionsCount = Number(input[4]) ; 
    let trucksCount = Number(input[5]) ; 

    let toysCount = puzzlesCount + dollsCount + teddysCount + minionsCount + trucksCount ; 
    
    let allToysCost = puzzlesCount * 2.60 + dollsCount * 3 + teddysCount * 4.10 
    + minionsCount * 8.20 + trucksCount * 2 ; 
    
    let actualCost = 0 ; 

    if (toysCount >= 50){
        actualCost = allToysCost - allToysCost * 0.25 ; 
    } else {
        actualCost = allToysCost ; 
    }

    let rent = actualCost * 0.10 ; 
    let moneyLeft = actualCost - rent ; 

    if (moneyLeft >= vacationprice) {
        console.log(`Yes! ${(moneyLeft - vacationprice).toFixed(2)} lv left.`) ; 
    } else {
        console.log(`Not enough money! ${(vacationprice - moneyLeft).toFixed(2)} lv needed.`) ; 
    }
}

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"]) ; 

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

