function GodzillavsKong(num1, num2, num3){
    let budget = Number(num1);
    let statistCount = Number(num2);
    let costumePr = Number(num3) ; 

    let decor = budget * 0.1;
    let costumePriceForAll = statistCount * costumePr ; 

    if (statistCount > 150) {
        costumePriceForAll = costumePriceForAll - (costumePriceForAll * 0.1) ; 
    }
    let diff = 0 ; 

    if (budget < (decor + costumePriceForAll)){
        diff = ((decor + costumePriceForAll) - budget).toFixed(2);
        console.log("Not enough money!")
        console.log(`Wingard needs ${diff} leva more.`)
    } else {
        diff = (budget - (decor + costumePriceForAll)).toFixed(2);
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff} leva left.`);
    }
}

GodzillavsKong(20000, 120, 55.5);
GodzillavsKong(15437.62, 186, 57.99);
GodzillavsKong(9587.88, 222, 55.68);
