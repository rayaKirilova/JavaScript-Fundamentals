function cinema(input) {

    let type = input[0] ; 
    let row = Number(input[1]) ; 
    let column = Number(input[2]) ;
    
    let hallArea = row * column ; 
    let revenue = 0 ;

    if (type === "Premiere") {
        revenue = hallArea * 12 ; 
        console.log(revenue.toFixed(2) + " leva") ; 
    } else if (type === "Normal") {
        revenue = hallArea * 7.5 ; 
        console.log(revenue.toFixed(2) + " leva") ; 
    } else if (type === "Discount") {
        revenue = hallArea * 5 ; 
        console.log(revenue.toFixed(2) + " leva") ; 
    }
}
cinema(["Premiere",
"10",
"12"])
cinema(["Normal",
"21",
"13"])
cinema(["Discount",
"12",
"30"])
