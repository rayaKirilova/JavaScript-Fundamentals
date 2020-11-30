function smallShop(arg1, arg2, arg3){
    let product = arg1 ; 
    let town = arg2 ; 
    let quantity = Number(arg3) ; 

    let price = 0 ; 

    if (product === "coffee"){
        if (town === "Sofia"){
            price = quantity * 0.50 ; 
        } else if (town === "Plovdiv"){
            price = quantity * 0.40 ; 
        } else if (town === "Varna"){
            price = quantity * 0.45 ; 
        }
    } else if (product === "water"){
        if (town === "Sofia"){
            price = quantity * 0.80 ; 
        } else if (town === "Plovdiv" || town === "Varna"){
            price = quantity * 0.70 ; 
        } 
    } else if (product === "beer"){
        if (town === "Sofia"){
            price = quantity * 1.20 ; 
        } else if (town === "Plovdiv"){
            price = quantity * 1.15 ; 
        } else if (town === "Varna"){
            price = quantity * 1.10 ; 
        }
    } else if (product === "sweets"){
        if (town === "Sofia"){
            price = quantity * 1.45 ; 
        } else if (town === "Plovdiv"){
            price = quantity * 1.30 ; 
        } else if (town === "Varna"){
            price = quantity * 1.35 ; 
        }
    } else if (product === "peanuts"){
        if (town === "Sofia"){
            price = quantity * 1.60 ; 
        } else if (town === "Plovdiv"){
            price = quantity * 1.50 ; 
        } else if (town === "Varna"){
            price = quantity * 1.55 ; 
        }
    }

    console.log(price) ; 
}

smallShop("beer",
"Sofia",
"6")

