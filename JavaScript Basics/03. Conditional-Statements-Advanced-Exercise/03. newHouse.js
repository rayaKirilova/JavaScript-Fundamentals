function newHouse(input) {

    let flowerType = input[0] ; 
    let flowerCount = input[1] ; 
    let budget = input[2] ; 

    let flowerPrice = 0 ; 

    if (flowerType === "Roses") {
        flowerPrice = flowerCount * 5 ;
        if (flowerCount > 80) {
            flowerPrice = flowerPrice - flowerPrice * 0.1 ; 
        }

    } else if (flowerType === "Dahlias") {
        flowerPrice = flowerCount * 3.8 ;
        if (flowerCount > 90) {
            flowerPrice = flowerPrice - flowerPrice * 0.15 ;  // 209.44
        }

    } else if (flowerType === "Tulips") {
        flowerPrice = flowerCount * 2.8 ;
        if (flowerCount > 80) {
            flowerPrice = flowerPrice - flowerPrice * 0.15 ; 
        }

    } else if (flowerType === "Narcissus") {
        flowerPrice = flowerCount * 3 ;
        if (flowerCount < 120) {
            flowerPrice = flowerPrice + flowerPrice * 0.15 ; 
        }

    } else if (flowerType === "Gladiolus") {
        flowerPrice = flowerCount * 2.5 ;
        if (flowerCount < 80) {
            flowerPrice = flowerPrice + flowerPrice * 0.2 ; 
        }
    }

    if (flowerPrice <= budget) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - flowerPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(flowerPrice - budget).toFixed(2)} leva more.`) ;
    }
}

newHouse(["Roses",
"55",
"250"])
newHouse(["Tulips",
"88",
"260"])
newHouse(["Narcissus",
"119",
"360"])
