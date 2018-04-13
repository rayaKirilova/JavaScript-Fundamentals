function findingRoots (num1, num2, num3){

    let a = Number(num1) ;
    let b = Number(num2) ;
    let c = Number(num3) ;

    // a*x*x + bx + c = 0 ;
    let discriminant = b*b - 4*a*c ;

    if (discriminant > 0){
        // equation will have two roots - x1 & x2
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a) ;
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a) ;

        if (x1 < x2){
            console.log(x1) ;
            console.log(x2) ;
        } else {
            console.log(x2) ;
            console.log(x1) ;
        }
    } else if (discriminant == 0){
        // equation will have one root - x1
        let x1 = -b / (2 * a) ;
        console.log(x1) ;
    } else if (discriminant < 0){
        console.log("No") ;
    }
}

findingRoots(1, -12, 36)