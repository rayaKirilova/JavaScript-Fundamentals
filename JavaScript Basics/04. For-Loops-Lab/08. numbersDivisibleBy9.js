function numbersDivisibleByNine(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    let sum = 0;

    for (let i = firstNumber; i <= secondNumber; i++) {
        if (i % 9 == 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);

    for (let z = firstNumber; z <= secondNumber; z++) {
        if (z % 9 == 0) {
            console.log(z);
        }
    }
}

numbersDivisibleByNine(["100", "200"]); 