function fuelMoney(distance, passengerCount, fuelPrice) {
    
    let neededFuel = (distance / 100) * 7 ; 
    neededFuel += passengerCount * 0.100 ; 
    let neededMoney = neededFuel * fuelPrice ; 

    console.log(`Needed money for that trip is ${neededMoney}lv.`) ; 
}
fuelMoney(260, 9, 2.49) ; 