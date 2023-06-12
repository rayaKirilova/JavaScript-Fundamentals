function petShop(input) {

    let packagesForDogs = Number(input[0]); 
    let packagesForCats = Number(input[1]); 

    let sum = 2.50 * packagesForDogs + 4 * packagesForCats ; 

    console.log(`${sum} lv.`) ; 
}

petShop(["5", "4"]) ; 
petShop(["13", "9"]) ; 