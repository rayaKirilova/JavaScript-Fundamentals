function vacation(array) {
    let vacationPrice = Number(array.shift());
    let money = Number(array.shift());

    for (let i = 0; i < array.length; i += 2) {
        let action = array[i];
        let currentSum = Number(array[i + 1]);
        let diff = money - currentSum;

        if (action === "spend") {
            if (diff <= 0) {
                money = 0;
            } else {
                money -= currentSum;
            }
        } else if (action === "save") {
            money += currentSum;
        }
    }
    if (vacationPrice <= money) {
        console.log(`You saved the money for ${array.length / 2} days.`);
    } else if (vacationPrice > money) {
        console.log(`You can't save the money.`);
        console.log(array.length / 2);
    }
}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])

vacation(["110",
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
