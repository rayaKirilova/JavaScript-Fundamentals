function garden(input) {

    let squareMetres = Number(input[0]) ; 

    let price = squareMetres * 7.61 ; 
    let discount = price * 0.18 ; 

    console.log(`The final price is: ${price - discount} lv.`) ; 
    console.log(`The discount is: ${discount} lv.`) ; 

}

garden(["550"]) ; 
garden(["150"]) ; 