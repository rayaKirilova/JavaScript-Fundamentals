function cleverLily(arg, arg1, arg2) {
    let age = Number(arg);
    let washingMachinePrice = Number(arg1);
    let toyPrice = Number(arg2);

    let savedMoney = 0;
    let toyCount = 0;
    let birthdaySum = 0;

    for (let i = 1; i <= age; i++) {

        if (i % 2 === 0) {
            birthdaySum += 10;
            savedMoney += birthdaySum;
            savedMoney -= 1;
        } else {
            toyCount++;
        }
    }
    savedMoney += toyCount * toyPrice;

    if (washingMachinePrice <= savedMoney) {
        let diff = savedMoney - washingMachinePrice;
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        let diff = washingMachinePrice - savedMoney;
        console.log(`No! ${diff.toFixed(2)}`);
    }

}

cleverLily("10", "170", "6");
cleverLily("21", "1570.98", "3");

