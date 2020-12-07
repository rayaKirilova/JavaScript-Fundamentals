function factorial(arg) {
    let number = Number(arg);

    let factorial = 1;

    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }

    console.log(factorial);
}

factorial("4"); 