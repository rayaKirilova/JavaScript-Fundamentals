function fruitMarket(num1, num2, num3, num4, num5){
    let strawberriesPrice = Number(num1);
    let bananasKg = Number(num2);
    let orangesKg = Number(num3);
    let rasberriesKg = Number(num4);
    let strawberriesKg = Number(num5);

    let rasberriesPrice = strawberriesPrice / 2 ; 
    let orangesPrice = rasberriesPrice - rasberriesPrice * 0.4 ; 
    let bananasPrice = rasberriesPrice - rasberriesPrice * 0.8 ;

    let sum = strawberriesPrice * strawberriesKg + orangesKg * orangesPrice + rasberriesPrice * rasberriesKg + bananasKg * bananasPrice ;

    console.log(sum.toFixed(2));

}

fruitMarket(48, 10, 3.3, 6.5, 1.7) ; 