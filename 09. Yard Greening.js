function garden(num){
    let squareMeters = Number(num) ; 

    let price = squareMeters * 7.61 ; 
    let priceWithDiscount = price - (price * 0.18);

    console.log(`The final price is: ${priceWithDiscount} lv`);
    console.log(`The discount is: ${price * 0.18} lv.`);
}

garden(550);