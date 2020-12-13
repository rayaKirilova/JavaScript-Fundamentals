function minNumber(arg) {

    let index = 0;
    let min = Number(arg[index]);

    while (arg[index] !== "Stop") {

        if (min > Number(arg[index])) {
            min = Number(arg[index]);
        }
        index++;
    }
    console.log(min);
}

minNumber(["-10",
    "20",
    "-30",
    "Stop"])

