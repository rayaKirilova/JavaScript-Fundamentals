function walking(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] === "Going home") {
            sum = sum + Number(array[i + 1]);

            if (10000 > sum) {
                console.log(`${10000 - sum} more steps to reach goal.`);
            } else {
                console.log(`Goal reached! Good job! ${sum - 10000} steps over the goal!`)
            }
            break ;
        } else {
            let steps = Number(array[i]);
            sum += steps;
            if (sum >= 10000) {
                diff = sum - 10000;
                console.log(`Goal reached! Good job! ${diff} steps over the goal!`);
                break;
            }
        }
    }
}

/*walking(["1000",
    "1500",
    "2000",
    "6500"])
    */
walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])

walking(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"])




