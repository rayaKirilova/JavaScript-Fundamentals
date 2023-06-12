function cleverLilly(input) {

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let toyCounter = 0;
    let evenBirthdayCounter = 0;

    for (i = 1; i <= age; i++) {

        if (i % 2 == 0) {
            evenBirthdayCounter++;
        } else {
            toyCounter++;
        }
    }

    for (z = 1; z <= evenBirthdayCounter; z++) {
        money += z * 10;
    }

    let moneyTakenFromBrother = evenBirthdayCounter;
    let moneyFromToys = toyPrice * toyCounter;

    let savedMoney = money + moneyFromToys - moneyTakenFromBrother;

    if (savedMoney >= washingMachinePrice) {
        console.log(`Yes! ${(savedMoney - washingMachinePrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingMachinePrice - savedMoney).toFixed(2)}`)
    }
}

cleverLilly(["10", "170", "6"]); 
cleverLilly(["21",
"1570.98",
"3"])
