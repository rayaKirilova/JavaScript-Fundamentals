function smallShop(input) {

    let product = input[0] ; 
    let city = input[1] ;
    let quantity = Number(input[2]) ; 

    let cost = 0 ; 

    if (product === "coffee") {

        if (city === "Sofia") {
            cost = quantity * 0.50 ; 
        } else if (city === "Plovdiv") {
            cost = quantity * 0.40 ; 
        } else if (city === "Varna") {
            cost = quantity * 0.45 ; 
        }

    } else if (product === "water") {

        if (city === "Sofia") {
            cost = quantity * 0.80 ; 
        } else if (city === "Plovdiv" || city === "Varna") {
            cost = quantity * 0.70 ; 
        }

    } else if (product === "beer") {

        if (city === "Sofia") {
            cost = quantity * 1.20 ; 
        } else if (city === "Plovdiv") {
            cost = quantity * 1.15 ; 
        } else if (city === "Varna") {
            cost = quantity * 1.10 ; 
        }

    } else if (product === "sweets") {

        if (city === "Sofia") {
            cost = quantity * 1.45 ; 
        } else if (city === "Plovdiv") {
            cost = quantity * 1.30 ; 
        } else if (city === "Varna") {
            cost = quantity * 1.35 ; 
        }

    } else if (product === "peanuts") {

        if (city === "Sofia") {
            cost = quantity * 1.60 ; 
        } else if (city === "Plovdiv") {
            cost = quantity * 1.50 ; 
        } else if (city === "Varna") {
            cost = quantity * 1.55 ; 
        }

    } 
    console.log(cost) ;
}

smallShop(["peanuts",
"Plovdiv",
"1"]) ; 
smallShop(["beer",
"Sofia",
"2"])

