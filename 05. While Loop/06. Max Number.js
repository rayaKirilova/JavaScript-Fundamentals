function maxNumber(arg) {

    let index = 0;
    let max = Number(arg[index]);

    while (arg[index] !== "Stop") {

        if (max < Number(arg[index])) {
            max = Number(arg[index]);
        }
        index++;
    }
    console.log(max);
}

maxNumber(["-10",
"20",
"-30",
"Stop"])

