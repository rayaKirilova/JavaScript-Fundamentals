function vacation(input) {

    let index = 0;
    let neededMoney = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let spendCounter = 0;
    let dayCounter = 0;

    let isPossibleSaveMoney = true;

    while (neededMoney > money) {
        let type = input[index];
        index++;
        let tempMoney = Number(input[index]);
        index++;
        dayCounter++;

        if (type === "save") {
            money += tempMoney;
            spendCounter = 0;
        } else if (type === "spend") {
            money -= tempMoney;
            spendCounter++;

            if (money < 0) {
                money = 0;
            }
        }

        if (spendCounter === 5) {
            console.log(`You can't save the money.`);
            console.log(`${dayCounter}`);
            isPossibleSaveMoney = false;
            break;
        }
    }
    if (isPossibleSaveMoney) {
        console.log(`You saved the money for ${dayCounter} days.`);
    }
}

problemVacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"]);

problemVacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])
