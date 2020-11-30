function fruitShop(arg1, arg2, arg3){
    let fruit = arg1 ; 
    let day = arg2 ; 
    let quantity = Number(arg3);

    let price = 0 ;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
        
        if (fruit === "apple"){
            price = quantity * 1.20 ; 
            console.log(price.toFixed(2));
        } else if (fruit == "banana"){
            price = quantity * 2.50 ; 
            console.log(price.toFixed(2));
        } else if (fruit == "orange"){
            price = quantity * 0.85 ; 
            console.log(price.toFixed(2));
        } else if (fruit == "grapefruit"){
            price = quantity * 1.45 ; 
            console.log(price.toFixed(2));
        } else if (fruit == "kiwi") {
            price = quantity * 2.70 ; 
            console.log(price.toFixed(2));
        } else if (fruit == "pineapple"){
            price = quantity * 5.50 ; 
            console.log(price.toFixed(2));
        } else if (fruit == "grapes"){
            price = quantity * 3.85 ;   
            console.log(price.toFixed(2));
        } else {
            console.log("error") ; 
        }
    } else if (day === "Saturday" || day === "Sunday"){
        
        if (fruit === "apple"){
            price = quantity * 1.25 ; 
            console.log(price.toFixed(2));
        } else if (fruit == "banana"){
            price = quantity * 2.70 ; 
            console.log(price.toFixed(2));
        } else if (fruit == "orange"){
            price = quantity * 0.90 ; 
            console.log(price.toFixed(2));
        } else if (fruit == "grapefruit"){
            price = quantity * 1.60 ; 
            console.log(price.toFixed(2));
        } else if (fruit == "kiwi") {
            price = quantity * 3.00 ; 
            console.log(price.toFixed(2));
        } else if (fruit == "pineapple"){
            price = quantity * 5.60 ; 
            console.log(price.toFixed(2));
        } else if (fruit == "grapes"){
            price = quantity * 4.20 ;  
            console.log(price.toFixed(2)); 
        } else {
            console.log("error") ; 
        }         
    } else {
        console.log("error");
    }
}
      

fruitShop("tomato",
"Monday",
"0.5")

