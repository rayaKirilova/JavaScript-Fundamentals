function toyShop(num1, num2, num3, num4, num5, num6){
    let vacancyPrice = Number(num1) ; 

    let puzzles = Number(num2) ; let dolls = Number(num3) ; let bears = Number(num4) ; 
    let minions = Number(num5) ; let trucks = Number(num6) ; 

    let toysCount = puzzles + dolls + bears + minions + trucks ;
    let profitFromAllToys = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + trucks * 2 ; 
    
    let finalPrice = 0 ; 

    if (toysCount >= 50){
        finalPrice = profitFromAllToys - (profitFromAllToys * 0.25);
        finalPrice = finalPrice - (finalPrice * 0.1) ; 
    } else {
        finalPrice = profitFromAllToys - (profitFromAllToys * 0.1) ; 
    }

    let diff = 0 ; 
    if (finalPrice >= vacancyPrice) {
        diff = (finalPrice - vacancyPrice).toFixed(2);
        console.log(`Yes! ${diff} lv left.`);
    } else {
        diff = (vacancyPrice - finalPrice).toFixed(2);
        console.log(`Not enough money! ${diff} lv needed.`);
    }

}

/*toyShop(40.8, 20, 25, 30, 50, 10);*/
toyShop(320, 8, 2, 5, 5, 1);