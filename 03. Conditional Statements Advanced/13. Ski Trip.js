function skiTrip(arg1, arg2, arg3){

    let days = Number(arg1) - 1 ; 
    let type = arg2 ; 
    let feedback = arg3 ; 

    let price = 0 ; 

    if (days < 10){

        if (type === "apartment"){
            let priceForAllPeriodOfStay = days * 25.00 ; 
            price = priceForAllPeriodOfStay - (priceForAllPeriodOfStay * 0.3);
        } else if (type === "president apartment"){
            let priceForAllPeriodOfStay = days * 35.00 ; 
            price = priceForAllPeriodOfStay - (priceForAllPeriodOfStay * 0.1);
        } else if (type === "room for one person"){
            let priceForAllPeriodOfStay = days * 18.00 ; 
            price = priceForAllPeriodOfStay ; 
        }
    } else if (days >= 10 && days <= 15){

        if (type === "apartment"){
            let priceForAllPeriodOfStay = days * 25.00 ; 
            price = priceForAllPeriodOfStay - (priceForAllPeriodOfStay * 0.35);
        } else if (type === "president apartment"){
            let priceForAllPeriodOfStay = days * 35.00 ; 
            price = priceForAllPeriodOfStay - (priceForAllPeriodOfStay * 0.15);
        } else if (type === "room for one person"){
            let priceForAllPeriodOfStay = days * 18.00 ; 
            price = priceForAllPeriodOfStay ; 
        }
    } else if (days > 15){

        if (type === "apartment"){
            let priceForAllPeriodOfStay = days * 25.00 ; 
            price = priceForAllPeriodOfStay - (priceForAllPeriodOfStay * 0.5);
        } else if (type === "president apartment"){
            let priceForAllPeriodOfStay = days * 35.00 ; 
            price = priceForAllPeriodOfStay - (priceForAllPeriodOfStay * 0.2);
        } else if (type === "room for one person"){
            let priceForAllPeriodOfStay = days * 18.00 ; 
            price = priceForAllPeriodOfStay ; 
        }
    }

    if (feedback === "positive"){
        price = price + (price * 0.25);
    } else if (feedback === "negative"){
        price = price - (price * 0.10);	
    }

    console.log(price.toFixed(2));
}

skiTrip("2",
"apartment",
"positive")


