function sequence2kPlus1(num) {

    let number = Number(num);
    let counter = 1;

    while (counter <= number) {
        console.log(counter);
        counter = counter * 2 + 1;
    }
}

sequence2kPlus1("3")