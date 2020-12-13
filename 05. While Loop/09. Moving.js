function moving(array) {
    let width = Number(array.shift());
    let length = Number(array.shift());
    let height = Number(array.shift());

    let allFreeSpace = width * length * height;
    let index = 0;
    let countOfBoxes = 0;

    while (array[index] !== "Done" && index < array.length) {
        countOfBoxes += Number(array[index]);
        index++;

        if (countOfBoxes >= allFreeSpace) {
            console.log(`No more free space! You need ${countOfBoxes - allFreeSpace} Cubic meters more.`);
            break;
        }
    }
    if (countOfBoxes < allFreeSpace) {
        console.log(`${allFreeSpace - countOfBoxes} Cubic meters left.`)
    }
}

moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"])

moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])
