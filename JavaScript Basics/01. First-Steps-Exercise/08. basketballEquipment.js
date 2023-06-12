function basketballEquipment(input) {

    let tax = Number(input[0]) ; 

    let trainers = tax - tax * 0.40 ; 
    let outfit = trainers - 0.2 * trainers ; 
    let ball = outfit / 4 ; 
    let accessories = ball / 5 ; 

    let expenses = tax + trainers + outfit + ball + accessories ; 

    console.log(expenses) ; 

}

basketballEquipment(["365"]) ; 
basketballEquipment(["550"]) ; 