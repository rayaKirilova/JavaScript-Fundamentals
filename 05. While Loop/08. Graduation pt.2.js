function graduation(array) {
    let name = array.shift();
    let sumOfGrades = 0;

    let counter = 0;

    for (let i = 0; i < 12; i++) {
        let currentGrade = Number(array[i]);
        if (currentGrade < 4) {
            console.log(`${name} has been excluded at ${i + 1} grade`);
            break;
        }
        sumOfGrades += currentGrade;
        counter++;
    }
    let averageGrade = sumOfGrades / counter;
    if (counter == 12) {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }
}

graduation(["Gosho",
    "5",
    "5.5",
    "4.30",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])
