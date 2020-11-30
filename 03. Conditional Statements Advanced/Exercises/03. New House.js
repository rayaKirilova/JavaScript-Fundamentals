function newHouse(arg1, arg2, arg3){

    let flowerType = arg1 ; 
    let flowerCount = Number(arg2) ; 
    let budget = Number(arg3) ; 

    let sumForFlowers = 0 ; 

    if (flowerType === "Roses"){
        if (flowerCount > 80) {
            sumForFlowers = flowerCount * 5 - (flowerCount * 5 * 0.1);
        } else {
            sumForFlowers = flowerCount * 5 ;
        }
    } else if (flowerType === "Dahlias"){
        if (flowerCount > 90) {
            sumForFlowers = flowerCount * 3.80 - (flowerCount * 3.80 * 0.15);
        } else {
            sumForFlowers = flowerCount * 3.80 ;
        }
    } else if (flowerType === "Tulips"){
        if (flowerCount > 80) {
            sumForFlowers = flowerCount * 2.80 - (flowerCount * 2.80 * 0.15);
        } else {
            sumForFlowers = flowerCount * 2.80 ;
        }
    } else if (flowerType === "Narcissus"){
        if (flowerCount < 120) {
            sumForFlowers = flowerCount * 3 + (flowerCount * 3 * 0.15);
        } else {
            sumForFlowers = flowerCount * 3 ;
        }
    } else if (flowerType === "Gladiolus"){
        if (flowerCount < 80) {
            sumForFlowers = flowerCount * 2.50 + (flowerCount * 2.50 * 0.20);
        } else {
            sumForFlowers = flowerCount * 2.50;
        }
    }

    if (budget >= sumForFlowers){
        let diff = budget - sumForFlowers ; 
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${diff.toFixed(2)} leva left.`) ;    
    } else {
        let diff = sumForFlowers - budget ; 
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`) ; 
    }
}

newHouse("Narcissus",
"119",
"360")

