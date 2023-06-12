function vacation(input){

    let groupCount = Number(input[0]) ; 
    let groupType = input[1] ; 
    let dayOfWeek = input[2] ; 

    let totalPrice = 0 ; 

    if (groupType === "Students"){

        if (dayOfWeek === "Friday"){
            totalPrice = groupCount * 8.45 ; 
        } else if (dayOfWeek === "Saturday"){
            totalPrice = groupCount * 9.80 ; 
        } else if (dayOfWeek === "Sunday"){
            totalPrice = groupCount * 10.46 ; 
        }

        if (groupCount >= 30) {
            totalPrice = totalPrice - totalPrice * 0.15 ; 
        }

    } else if (groupType === "Business"){

        if (dayOfWeek === "Friday"){
            totalPrice = groupCount * 10.90 ; 
        } else if (dayOfWeek === "Saturday"){
            totalPrice = groupCount * 15.60 ; 
        } else if (dayOfWeek === "Sunday"){
            totalPrice = groupCount * 16 ; 
        }

        if (groupCount >= 100){
            totalPrice = totalPrice - 10 * 10.90 ; 
        }

    } else if (groupType === "Regular"){

        if (dayOfWeek === "Friday"){
            totalPrice = groupCount * 15 ; 
        } else if (dayOfWeek === "Saturday"){
            totalPrice = groupCount * 20 ; 
        } else if (dayOfWeek === "Sunday"){
            totalPrice = groupCount * 22.50 ; 
        }

        if (groupCount >= 10 && groupCount <= 20){
            totalPrice = totalPrice - totalPrice * 0.05 ; 
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`) ; 
}
vacation(["30",
    "Students",
    "Sunday"
    ])
vacation(["40",
        "Regular",
        "Saturday"
        ])