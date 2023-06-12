function godzillaVsKong(input) {

    let budget = Number(input[0]) ; 
    let artists = Number(input[1]) ; 
    let outfitPrice = Number(input[2]) ; 

    let decor = budget * 0.1 ; 
    let outfitCost = artists * outfitPrice ; 

    if (artists >= 150) {
        outfitCost = outfitCost - outfitCost * 0.1 ; 
    }

    let productionPrice = outfitCost + decor ; 

    if (productionPrice > budget) {
        console.log("Not enough money!") ; 
        console.log(`Wingard needs ${(productionPrice - budget).toFixed(2)} leva more.`) ; 
    } else {
        console.log("Action!") ; 
        console.log(`Wingard starts filming with ${(budget - productionPrice).toFixed(2)} leva left.`) ;
    }
}

godzillaVsKong(["20000",
"120",
"55.5"]) ; 
godzillaVsKong(["15437.62",
"186",
"57.99"]) ; 
godzillaVsKong(["9587.88",
"222",
"55.68"]) ;

