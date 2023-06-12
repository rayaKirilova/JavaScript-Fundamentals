function fruitShop(input) {

    let fruit = input[0] ; 
    let day = input[1] ; 
    let quantity = input[2] ; 

    let totalPrice = 0 ; 

    switch (fruit) {
        case "banana":
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday"
            || day === "Friday") {

                totalPrice = quantity * 2.50 ; 
                console.log(totalPrice.toFixed(2)) ; 
            } else if (day === "Saturday" || day === "Sunday") {
                totalPrice = quantity * 2.70 ; 
                console.log(totalPrice.toFixed(2)) ; 
            } else {
                console.log("error") ; 
            }
            break ;
        case "apple":
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday"
            || day === "Friday") {

                totalPrice = quantity * 1.20 ; 
                console.log(totalPrice.toFixed(2)) ; 
            } else if (day === "Saturday" || day === "Sunday") {
                totalPrice = quantity * 1.25 ; 
                console.log(totalPrice.toFixed(2)) ; 
            } else {
                console.log("error") ; 
            }
            break ;
        case "orange":
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday"
            || day === "Friday") {

                totalPrice = quantity * 0.85 ; 
                console.log(totalPrice.toFixed(2)) ; 
            } else if (day === "Saturday" || day === "Sunday") {
                totalPrice = quantity * 0.90 ; 
                console.log(totalPrice.toFixed(2)) ; 
            } else {
                console.log("error") ; 
            }
            break ;
        case "grapefruit":
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday"
            || day === "Friday") {

                totalPrice = quantity * 1.45 ; 
                console.log(totalPrice.toFixed(2)) ; 
            } else if (day === "Saturday" || day === "Sunday") {
                totalPrice = quantity * 1.60 ; 
                console.log(totalPrice.toFixed(2)) ; 
            } else {
                console.log("error") ; 
            }
            break ;
        case "kiwi":
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday"
            || day === "Friday") {

                totalPrice = quantity * 2.70 ;
                console.log(totalPrice.toFixed(2)) ;  
            } else if (day === "Saturday" || day === "Sunday") {
                totalPrice = quantity * 3 ; 
                console.log(totalPrice.toFixed(2)) ; 
            } else {
                console.log("error") ; 
            }
            break ; 
        case "pineapple":
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday"
            || day === "Friday") {

                totalPrice = quantity * 5.50 ; 
                console.log(totalPrice.toFixed(2)) ; 
            } else if (day === "Saturday" || day === "Sunday") {
                totalPrice = quantity * 5.60 ; 
                console.log(totalPrice.toFixed(2)) ; 
            } else {
                console.log("error") ; 
            }
            break ; 
        case "grapes":
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday"
            || day === "Friday") {

                totalPrice = quantity * 3.85 ; 
                console.log(totalPrice.toFixed(2)) ; 
            } else if (day === "Saturday" || day === "Sunday") {
                totalPrice = quantity * 4.20 ; 
                console.log(totalPrice.toFixed(2)) ; 
            } else {
                console.log("error") ; 
            }
            break ; 
        default:
            console.log("error") ; 
            break ;
    }
}
fruitShop(["apple",
"Workday",
"2"])

