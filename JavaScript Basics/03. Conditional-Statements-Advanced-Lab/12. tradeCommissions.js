function tradeCommissions(input) {

    let city = input[0] ;
    let sales = Number(input[1]) ; 

    let commission = 0 ;

    if (sales >= 0 && sales <= 500) {

        if (city === "Sofia") {
            commission = sales * 0.05 ; 
            console.log(commission.toFixed(2)) ; 
        } else if (city === "Varna") {
            commission = sales * 0.045 ; 
            console.log(commission.toFixed(2)) ;
        } else if (city === "Plovdiv") {
            commission = sales * 0.055 ; 
            console.log(commission.toFixed(2)) ;
        } else {
            console.log("error") ; 
        }

    } else if (sales > 500 && sales <= 1000) {

        if (city === "Sofia") {
            commission = sales * 0.07 ; 
            console.log(commission.toFixed(2)) ; 
        } else if (city === "Varna") {
            commission = sales * 0.075 ; 
            console.log(commission.toFixed(2)) ;
        } else if (city === "Plovdiv") {
            commission = sales * 0.08 ; 
            console.log(commission.toFixed(2)) ;
        } else {
            console.log("error") ; 
        }

    } else if (sales > 1000 && sales <= 10000) {

        if (city === "Sofia") {
            commission = sales * 0.08 ; 
            console.log(commission.toFixed(2)) ; 
        } else if (city === "Varna") {
            commission = sales * 0.1 ; 
            console.log(commission.toFixed(2)) ;
        } else if (city === "Plovdiv") {
            commission = sales * 0.12 ; 
            console.log(commission.toFixed(2)) ;
        } else {
            console.log("error") ; 
        }

    } else if (sales > 10000) {

        if (city === "Sofia") {
            commission = sales * 0.12 ; 
            console.log(commission.toFixed(2)) ; 
        } else if (city === "Varna") {
            commission = sales * 0.13 ; 
            console.log(commission.toFixed(2)) ;
        } else if (city === "Plovdiv") {
            commission = sales * 0.145 ; 
            console.log(commission.toFixed(2)) ;
        } else {
            console.log("error") ; 
        }

    } else {
        console.log("error") ; 
    }
}

tradeCommissions(["Plovdiv",
"499.99"])
tradeCommissions(["Varna",
"3874.50"])
tradeCommissions(["Sofia",
"1500"])
tradeCommissions(["Kaspichan",
"-50"])
