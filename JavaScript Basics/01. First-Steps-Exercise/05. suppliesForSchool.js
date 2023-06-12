function suppliesForSchool(input) {

    let packagePens = Number(input[0]) ; 
    let packageMarkers = Number(input[1]) ; 
    let detergent = Number(input[2]) ; 
    let percentDiscount = Number(input[3]) ; 

    let sumForSupplies = packagePens * 5.80 + packageMarkers * 7.20 + detergent * 1.20 ; 
    let sumWithoutDiscount = sumForSupplies - (sumForSupplies * percentDiscount / 100) ; 

    console.log(sumWithoutDiscount) ; 

}

suppliesForSchool(["2 ","3 ","4 ","25 "]) ;

suppliesForSchool(["4 ","2 ","5 ","13 "]);