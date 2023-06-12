function foodDelivery(input) {

    let chickenMenu = Number(input[0]) ; 
    let fishMenu = Number(input[1]) ; 
    let veggyMenu = Number(input[2]) ; 

    let delivery = chickenMenu * 10.35 + fishMenu * 12.40 + veggyMenu * 8.15 ; 
    let dessert = 0.20 * delivery ; 

    let allExpenses = delivery + dessert + 2.50 ; 

    console.log(allExpenses) ; 

}

foodDelivery(["2", "4", "3"]) ; 

foodDelivery(["9", "2", "6"]) ; 