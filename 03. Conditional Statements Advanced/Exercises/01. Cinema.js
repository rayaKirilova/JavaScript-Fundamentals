function cinema(arg1, arg2, arg3){

    let type = arg1 ; 
    let rows = Number(arg2); 
    let columns = Number(arg3) ; 

    let hallArea = rows * columns ; 

    let profit = 0 ; 

    if (type === "Premiere"){
        profit = hallArea * 12.00 ; 
    } else if (type === "Normal"){
        profit = hallArea * 7.50 ; 
    } else if (type === "Discount"){
        profit = hallArea * 5.0 ; 
    }

    console.log(`${profit.toFixed(2)} leva`);
}

cinema("Discount",
"12",
"30")

