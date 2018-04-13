function triangleArea(sideA, sideB, sideC) {

    // s - semiperimeter
    // finding area with Heron's formula

    let s = (sideA + sideB + sideC) / 2 ;

    let area = Math.sqrt(s*(s - sideA)*(s - sideB)*(s - sideC)) ;

    console.log(area) ;

}

triangleArea(2 , 3.5 , 4) ;