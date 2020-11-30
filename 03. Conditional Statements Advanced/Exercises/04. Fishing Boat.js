function fishing(arg1, arg2, arg3){

    let budget = Number(arg1); 
    let season = arg2 ; 
    let count = Number(arg3) ; 

    let price = 0 ; 

    if (season === "Spring"){
        price = 3000 ; 
        if (count <= 6){
            price = price - (price * 0.1) ; 
        } else if (count > 7 && count <= 11){
            price = price - (price * 0.15) ; 
        } else if ( count > 12){
            price = price - (price * 0.25) ; 
        }

    } else if (season === "Summer" || season === "Autumn"){
        price = 4200 ; 
        if (count <= 6){
            price = price - (price * 0.1) ; 
        } else if (count > 7 && count <= 11){
            price = price - (price * 0.15) ; 
        } else if ( count > 12){
            price = price - (price * 0.25) ; 
        }
    } else if (season === "Winter"){
        price = 2600 ; 
        if (count <= 6){
            price = price - (price * 0.1) ; 
        } else if (count > 7 && count <= 11){
            price = price - (price * 0.15) ; 
        } else if ( count > 12){
            price = price - (price * 0.25) ; 
        }
    }

    if (count % 2 == 0 && season !== "Autumn"){
        price = price - (price * 0.05);
    }

    if (budget >= price){
        let diff = budget - price ; 
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        let diff = price - budget ; 
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`); 
    }
}

fishing("2000",
"Winter",
"13")


