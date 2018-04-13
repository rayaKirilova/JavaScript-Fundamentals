function impUnits (number){

    let inches = Number(number) ;

    let feet = Math.floor(inches / 12) ;
    inches = Math.round(inches % 12) ;

    console.log(`${feet}'-${inches}"`) ;

}

impUnits(55);