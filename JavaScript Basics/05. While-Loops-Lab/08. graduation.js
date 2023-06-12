function graduation(input) {

    let studentName = input[0];
    let sum = 0;
    let isGraduated = true;

    for (let i = 1; i < input.length; i++) {

        let grade = Number(input[i]);

        if (grade >= 4.00) {
            sum += grade;
        } else if (grade < 4.00) {
            isGraduated = false;
            console.log(`${studentName} has been excluded at ${i} grade`);
            break;
        }
    }
    if (isGraduated) {
        let average = (sum / 12).toFixed(2);
        console.log(`${studentName} graduated. Average grade: ${average}`);
    }
}

graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "2",
    "6",
    "6",
    "2",
    "3"])

